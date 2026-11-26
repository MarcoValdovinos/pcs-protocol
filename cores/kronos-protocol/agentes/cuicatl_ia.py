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
"""CUICATL con IA local · genera contenido usando ■_□"""
import sys, subprocess
from pathlib import Path

WRAPPER = Path.home() / "arkhe-zero" / "ia" / "■_□.py"

def cuicatl_ia(tema):
    prompt = f"Genera un post corto y poético sobre ARKHÉ ZERO. Tema: {tema}"
    r = subprocess.run(["python3", str(WRAPPER), prompt],
                      capture_output=True, text=True, timeout=600)
    return r.stdout

if __name__ == "__main__":
    tema = " ".join(sys.argv[1:]) or "KINTSUGI"
    print(f"\n◯_● CUICATL · Generando post sobre: {tema}\n")
    print(cuicatl_ia(tema))
    print("◯_● · ■_□ · 51/49/100\n")
