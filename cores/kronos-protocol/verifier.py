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
 ▓▒░ VERIFIER · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
 ─────────────────────────────────────────────────────────────────────────
 Verificador maestro: ejecuta todos los checks del sistema.
═══════════════════════════════════════════════════════════════════════════
"""
from __future__ import annotations
import subprocess
import sys
from pathlib import Path

SEAL = "◯_● · 51/49/100"
SCRIPTS = [
    ("Índice Cero", "scripts/index-cero-verify.py"),
    ("Sello KINTSUGI", "scripts/verify-seal.py"),
    ("PQC audit", "scripts/pqc-audit.py"),
]

def run(cmd: list[str]) -> int:
    try:
        return subprocess.call([sys.executable, *cmd])
    except Exception as e:
        print(f"[ XX ] {cmd}: {e}")
        return 1

def main() -> int:
    print("╔═══════════════════════════════════════════════════════════╗")
    print(f"║  VERIFIER MAESTRO · {SEAL}                       ║")
    print("╚═══════════════════════════════════════════════════════════╝")
    print()

    failed = 0
    for name, script in SCRIPTS:
        print(f"[ >> ] {name}...")
        rc = run([script])
        status = "[ OK ]" if rc == 0 else "[ XX ]"
        print(f"{status} {name}\n")
        if rc != 0:
            failed += 1

    if failed == 0:
        print(f"[ ✓✓ ] SISTEMA VERIFICADO · {SEAL}")
        return 0
    print(f"[ XX ] {failed} verificaciones fallaron · HALT")
    return 1

if __name__ == "__main__":
    sys.exit(main())
