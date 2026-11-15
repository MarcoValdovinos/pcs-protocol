"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

#!/usr/bin/env python3
"""Orquestador del enjambre · ejecuta todos los agentes"""
import subprocess, os
base = os.path.dirname(os.path.abspath(__file__))
agentes = [
    ("TLACHIXQUI", "tlachixqui.py"),
    ("TLAPOHUALLI", "tlapohualli.py"),
    ("TLAMATINI", "tlamatini.py"),
]
print("\n◯_● ACTIVANDO ENJAMBRE ARKHÉ\n")
for nombre, script in agentes:
    print(f"═══ {nombre} ═══")
    subprocess.run(["python3", os.path.join(base, script)])
    print()
print("◯_● ENJAMBRE COMPLETO · 51/49/100\n")
