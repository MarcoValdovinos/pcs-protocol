#!/usr/bin/env python3
"""arkhe-status.py — Estado mínimo del nodo."""
import socket
import sys

HOSTNAME = socket.gethostname()
SERVICIOS = [
    {"nombre": "servidor_web", "puerto": 8080},
    {"nombre": "api_scan", "puerto": 5001},
]

def puerto_abierto(puerto):
    try:
        with socket.create_connection(("127.0.0.1", puerto), timeout=0.5):
            return True
    except OSError:
        return False

def main():
    print(f"Nodo: {HOSTNAME}")
    print("=" * 40)
    for s in SERVICIOS:
        activo = puerto_abierto(s["puerto"])
        estado = "activo" if activo else "detenido"
        print(f"  {s['nombre']:<14} puerto {s['puerto']:<5} : {estado}")

if __name__ == "__main__":
    main()
