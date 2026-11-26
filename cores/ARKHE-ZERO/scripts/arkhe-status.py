================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

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
