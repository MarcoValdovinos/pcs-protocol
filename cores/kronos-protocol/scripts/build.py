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
"""
═══════════════════════════════════════════════════════════════════════════
 ▓▒░ BUILD · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
 ─────────────────────────────────────────────────────────────────────────
 NODO: YHDRYH-92CE · GENESIS: K28-M05-MN01-YHDRYH-92CE
═══════════════════════════════════════════════════════════════════════════
"""
from __future__ import annotations
import subprocess
import sys
from pathlib import Path

SEAL = "◯_● · 51/49/100"
NODO = "YHDRYH-92CE"
GENESIS = "K28-M05-MN01-YHDRYH-92CE"

BANNER = f"""
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ▓▒░ BUILD · ARKHÉ ZERO · {SEAL}                    ░▒▓
║   ──────────────────────────────────────────────────────────────         ║
║   NODO: {NODO}                                                        ║
║   GENESIS: {GENESIS}                         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
"""

def run(cmd: list[str]) -> int:
    print(f"[ >> ] {' '.join(cmd)}")
    return subprocess.call(cmd)

def main() -> int:
    print(BANNER)

    steps = [
        (["npm", "ci"], "Instalar Node"),
        (["npm", "run", "build:crypto"], "Compilar crypto"),
        (["bash", "-c", "cd marco.mcp && npm ci && npm run build"], "Compilar MCP"),
        (["python", "scripts/verify-seal.py"], "Verificar sello"),
    ]

    for cmd, label in steps:
        print(f"\n[ {label} ]")
        rc = run(cmd)
        if rc != 0:
            print(f"[ XX ] {label} falló con código {rc}")
            return rc

    print(f"\n[ ✓✓ ] BUILD COMPLETO · {SEAL}")
    print(f"       Nodo {NODO}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
