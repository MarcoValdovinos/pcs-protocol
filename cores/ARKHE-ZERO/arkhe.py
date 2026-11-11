#!/usr/bin/env python3
import argparse
import hashlib
import hmac
import json
import os
import secrets
import time
from pathlib import Path

KEY = Path.home() / ".config" / "arkhe" / "hmac.key"
DEFAULT_LOG = Path("arkhe-manifest.jsonl")

def load_key():
    try:
        key = KEY.read_bytes()
    except FileNotFoundError:
        raise SystemExit("Falta la clave. Ejecuta primero: python arkhe.py init")
    if len(key) != 32:
        raise SystemExit("ERROR: clave de longitud incorrecta.")
    return key

def sha256_file(path):
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()

def canonical(obj):
    return json.dumps(obj, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode("utf-8")

def read_log(log):
    records = []
    if not log.exists():
        return records
    with log.open("rb") as f:
        for n, line in enumerate(f, 1):
            if not line.endswith(b"\n"):
                raise SystemExit(f"ERROR: línea incompleta {n}")
            try:
                records.append(json.loads(line))
            except Exception as e:
                raise SystemExit(f"ERROR: JSON inválido en línea {n}: {e}")
    return records

def verify_chain(log, key):
    previous = "0" * 64
    records = read_log(log)
    for n, record in enumerate(records, 1):
        mac = record.get("hmac_sha256")
        body = {k: v for k, v in record.items() if k != "hmac_sha256"}
        if body.get("prev_hmac") != previous:
            raise SystemExit(f"FALLO: enlace previo incorrecto en registro {n}.")
        expected = hmac.new(key, canonical(body), hashlib.sha256).hexdigest()
        if not isinstance(mac, str) or not hmac.compare_digest(expected, mac):
            raise SystemExit(f"FALLO: HMAC incorrecto en registro {n}.")
        previous = mac
    print(f"OK: cadena íntegra, {len(records)} registros.")
    return records

def init(_args):
    KEY.parent.mkdir(parents=True, exist_ok=True)
    if KEY.exists():
        raise SystemExit(f"La clave ya existe en {KEY}; no se sobrescribió.")
    fd = os.open(KEY, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
    with os.fdopen(fd, "wb") as f:
        f.write(secrets.token_bytes(32))
        f.flush()
        os.fsync(f.fileno())
    print(f"Clave creada: {KEY}")

def get_log(value):
    path = Path(value).expanduser()
    return path if path.is_absolute() else Path.cwd() / path

def record(args):
    root = Path(args.directory).expanduser().resolve(strict=True)
    if not root.is_dir():
        raise SystemExit("La ruta de evidencia no es un directorio.")
    log = get_log(args.log).resolve()
    key = load_key()
    records = verify_chain(log, key)
    previous = records[-1]["hmac_sha256"] if records else "0" * 64
    count = 0

    with log.open("ab") as out:
        for path in sorted(root.rglob("*"), key=lambda p: p.as_posix()):
            if path.is_symlink() or not path.is_file():
                continue
            body = {
                "version": 1,
                "recorded_at_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "root_name": root.name,
                "path": path.relative_to(root).as_posix(),
                "size_bytes": path.stat().st_size,
                "sha256": sha256_file(path),
                "prev_hmac": previous,
            }
            mac = hmac.new(key, canonical(body), hashlib.sha256).hexdigest()
            out.write(canonical({**body, "hmac_sha256": mac}) + b"\n")
            out.flush()
            os.fsync(out.fileno())
            previous = mac
            count += 1
    print(f"Registrados {count} archivos. Manifiesto: {log}")

def verify(args):
    root = Path(args.directory).expanduser().resolve(strict=True)
    records = verify_chain(get_log(args.log).resolve(), load_key())
    errors = 0
    for n, rec in enumerate(records, 1):
        if rec.get("root_name") != root.name:
            continue
        path = root / rec["path"]
        if not path.is_file() or path.is_symlink():
            print(f"FALTA/INVÁLIDO registro {n}: {rec.get('path')}")
            errors += 1
            continue
        if (path.stat().st_size != rec.get("size_bytes") or not hmac.compare_digest(sha256_file(path), rec.get("sha256", ""))):
            print(f"CAMBIÓ registro {n}: {rec['path']}")
            errors += 1
    if errors:
        raise SystemExit(f"VERIFICACIÓN FALLIDA: {errors} discrepancia(s).")
    print(f"OK: los archivos de '{root.name}' coinciden.")

def main():
    parser = argparse.ArgumentParser()
    commands = parser.add_subparsers(dest="command", required=True)
    p = commands.add_parser("init")
    p.set_defaults(func=init)
    for name, func in (("record", record), ("verify", verify)):
        p = commands.add_parser(name)
        p.add_argument("directory")
        p.add_argument("--log", default=str(DEFAULT_LOG))
        p.set_defaults(func=func)
    args = parser.parse_args()
    args.func(args)

if __name__ == "__main__":
    main()
