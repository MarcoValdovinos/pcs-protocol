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
 ▓▒░ CHECK LINKS · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
 ─────────────────────────────────────────────────────────────────────────
 NODO: YHDRYH-92CE · Verificador de links markdown
═══════════════════════════════════════════════════════════════════════════
"""
from __future__ import annotations
import re
from pathlib import Path

SEAL = "◯_● · 51/49/100"
NODO = "YHDRYH-92CE"
LINK_RE = re.compile(r"\[.*?\]\((.*?)\)")

BANNER = f"""
╔══════════════════════════════════════════════════════════════════════════╗
║   ▓▒░ CHECK LINKS · {SEAL}                           ░▒▓
║   NODO: {NODO}                                                        ║
╚══════════════════════════════════════════════════════════════════════════╝
"""

def main() -> int:
    print(BANNER)
    print()

    root = Path(".").resolve()
    total, rotos = 0, 0

    for p in root.rglob("*.md"):
        if any(s in str(p) for s in [".git", "node_modules", "dist"]):
            continue
        content = p.read_text(encoding="utf-8", errors="ignore")
        for match in LINK_RE.finditer(content):
            link = match.group(1)
            if link.startswith(("http://", "https://", "#")):
                continue
            total += 1
            target = (p.parent / link).resolve()
            if not target.exists():
                rotos += 1
                print(f"[ XX ] {p.relative_to(root)} → {link}")

    print(f"\n[ OK ] Links locales: {total}")
    print(f"[ OK ] Rotos:         {rotos}")

    if rotos == 0:
        print(f"\n[ ✓✓ ] TODOS LOS LINKS VÁLIDOS · {SEAL}")
        return 0
    return 1

if __name__ == "__main__":
    raise SystemExit(main())
