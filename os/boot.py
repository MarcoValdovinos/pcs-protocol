# BOOT - ARKHE ZERO OS
import os, sys
sys.path.insert(0, os.path.dirname(__file__))
from kernel.kronos import KronosKernel
from fs.vfs import VFS
from net.node import Node

print("="*50)
print("  ARKHE ZERO OS - KRONOS PROTOCOL")
print("  Post-Quantum: ML-KEM-1024 + ML-DSA-87")
print("  Governance: 51/49 Human-AI")
print("  Hash Chain: HMAC-SHA256")
print("="*50)

key = os.urandom(32)
kernel = KronosKernel(key)
vfs = VFS()

e1 = kernel.tick("marco", "boot", {"version": "1.0.0"})
print(f"[BOOT] Evento 1: {e1['hmac_sha256'][:16]}...")
print(f"[BOOT] Verificación cadena: {kernel.verify()}")

# Guardar en VFS
h = vfs.write("boot/log.json", str(e1).encode())
print(f"[VFS] Guardado, sha256: {h[:16]}...")

# Lanzar red
if "--net" in sys.argv:
    Node(port=2099).serve()
else:
    print("\n[OK] OS listo. Para lanzar a la red: python3 os/boot.py --net")
