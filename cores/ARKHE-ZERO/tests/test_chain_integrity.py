#!/usr/bin/env python3
"""Test de integridad del chain.log según ARKHE-chain-v1."""
import hashlib, json, sys
from pathlib import Path

CHAIN = Path(__file__).parent.parent / "chain.log"
GENESIS = "0" * 64

def sha256_hex(t): return hashlib.sha256(t.encode()).hexdigest()

def load_chain(path):
    return [json.loads(l) for l in path.read_text().splitlines() if l.strip()]

def verify(entries):
    prev = GENESIS
    for i, e in enumerate(entries, 1):
        if e.get("v") != 1: return False, f"seq {i}: v != 1"
        if e.get("seq") != i: return False, f"seq {i}: seq incorrecto"
        if len(e.get("sha256", "")) != 64: return False, f"seq {i}: sha256 inválido"
        if len(e.get("prev_hash", "")) != 64: return False, f"seq {i}: prev_hash inválido"
        if e["prev_hash"] != prev: return False, f"seq {i}: prev_hash no encadena"
        recalc = sha256_hex(e["prev_hash"] + e["sha256"])
        if recalc != e["chain_hash"]: return False, f"seq {i}: chain_hash roto"
        prev = e["chain_hash"]
    return True, f"{len(entries)} entradas OK"

def main():
    print("=== ARKHE-chain-v1 integrity tests ===")

    # Test 1: chain real
    entries = load_chain(CHAIN)
    ok, msg = verify(entries)
    print(f"[{'PASS' if ok else 'FAIL'}] chain.log real: {msg}")
    if not ok: sys.exit(1)

    # Test 2: chain corrupto — rompemos el sha256 de la entrada 1
    bad = [dict(e) for e in entries]
    bad[0]["sha256"] = "0" * 64
    ok, msg = verify(bad)
    print(f"[{'PASS' if not ok else 'FAIL'}] chain corrupto detectado: {msg}")
    if ok: sys.exit(1)

    # Test 3: chain con prev_hash roto
    bad2 = [dict(e) for e in entries]
    if len(bad2) > 1: bad2[1]["prev_hash"] = "f" * 64
    ok, msg = verify(bad2)
    print(f"[{'PASS' if not ok else 'FAIL'}] prev_hash roto detectado: {msg}")
    if ok: sys.exit(1)

    print("\n✅ Todos los tests pasaron")
    return 0

if __name__ == "__main__":
    sys.exit(main())
