#!/usr/bin/env python3
# mayor.py · ALCALDE DE LA CIUDAD ARKHÉ · Firma la memoria de la ciudad (51%)
import os, glob, hashlib, json, subprocess
from datetime import datetime, timezone

HUMAN_KEY = os.path.expanduser("~/.human_key")
MANIFEST_DIR = "archives/manifests"
ACTA_FILE = "city_acta.json"

def calcular_merkle_ciudad():
    print("🜂 El Alcalde está recopilando la memoria de la ciudad...")
    manifiestos = sorted(glob.glob(f"{MANIFEST_DIR}/*.manifest_v5.json"))
    
    if not manifiestos:
        print("⚠ No hay manifiestos en archives/manifests/. La ciudad está vacía.")
        return None

    hashes = []
    for m in manifiestos:
        with open(m, "rb") as f:
            h = hashlib.sha256(f.read()).hexdigest()
            hashes.append(h)
    
    # Merkle Root simple (concatenación de hashes)
    merkle_root = hashlib.sha256("".join(hashes).encode()).hexdigest()
    return {
        "total_manifiestos": len(manifiestos),
        "archivos": [os.path.basename(m) for m in manifiestos],
        "merkle_root_ciudad": merkle_root,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

def firmar_acta(acta_data):
    if not acta_data:
        return

    with open(ACTA_FILE, "w") as f:
        json.dump(acta_data, f, indent=2)

    print(f"🜃 Firmando el Acta de la Ciudad con la llave del Alcalde (51%)...")
    result = subprocess.run(
        ["ssh-keygen", "-Y", "sign", "-f", HUMAN_KEY, "-n", "file", ACTA_FILE],
        capture_output=True, text=True
    )
    
    if result.returncode == 0:
        print(f"✓ Acta firmada: {ACTA_FILE}.sig")
        print(f"✓ Merkle Root de la Ciudad: {acta_data['merkle_root_ciudad'][:16]}...")
        print(f"\n◯_● Para anclar la memoria de la ciudad en Bitcoin, ejecuta:")
        print(f"   ots stamp {ACTA_FILE}")
    else:
        print(f"✗ Error al firmar: {result.stderr}")

if __name__ == "__main__":
    acta = calcular_merkle_ciudad()
    firmar_acta(acta)
