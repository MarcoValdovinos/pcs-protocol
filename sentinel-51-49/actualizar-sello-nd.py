import os, re

NUEVO_SELLO = """╔══════════════════════════════════════════════════════════════╗
║  ▓▓▓▓▓  ▓▓▓▓▓        ▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓                     ║
║  ▓▓      ▓▓              ▓▓      ▓▓    ▓▓                    ║
║  ▓▓▓▓▓  ▓▓              ▓▓      ▓▓▓▓▓▓▓                     ║
║      ▓▓  ▓▓              ▓▓      ▓▓    ▓▓                    ║
║  ▓▓▓▓▓  ▓▓▓▓▓           ▓▓      ▓▓    ▓▓                    ║
╠══════════════════════════════════════════════════════════════╣
║  ✦ KRONOS - ARKHE-ZERO ✦                                    ║
║  AUTOR: Marco Antonio Rojas Valdovinos                      ║
║  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online  ║
║  FOLIOS MAESTROS SafeCreative: ...39 / ...65                ║
║  LICENCIA: CC BY-NC-ND 4.0                                  ║
║  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA                 ║
║  (c) 2026 - Prohibido usar para entrenar IA                  ║
║  Prohibido reproducir, modificar o crear obras derivadas.   ║
╠══════════════════════════════════════════════════════════════╣
║        5 1                          4 9                     ║
║         \\  /                         \\  /                  ║
║          \\/    ◈ SIGILO 51-49 ◈       \\/                   ║
║          /\\                           /\\                   ║
║         /  \\                         /  \\                  ║
╚══════════════════════════════════════════════════════════════╝

"""

# Patron del sello viejo
PATRON_VIEJO = re.compile(r"={10,}.*?5 1.*?4 9.*?={10,}\n*", re.DOTALL)

count = 0
for root, dirs, files in os.walk("."):
    dirs[:] = [d for d in dirs if d not in [".git", "node_modules", "__pycache__", ".venv"]]
    if "sentinel-51-49" in root and "MANIFIESTO" in root:
        continue
    for f in files:
        if not f.endswith((".md", ".html", ".py", ".txt", ".json")):
            continue
        if f in ["MANIFIESTO-51-49.json"]:
            continue
        p = os.path.join(root, f)
        try:
            with open(p, encoding="utf-8", errors="ignore") as fh: c = fh.read()
        except: continue
        if "CANARIO-KRONOS-51-49-39-65" in c:
            # Si ya tiene el sigilo nuevo, saltar
            if "SIGILO 51-49" in c:
                continue
            # Reemplaza el sello viejo por el nuevo
            c2, n = PATRON_VIEJO.subn(NUEVO_SELLO, c, count=1)
            if n == 0:
                c2 = NUEVO_SELLO + c
            with open(p, "w", encoding="utf-8") as fh: fh.write(c2)
            count += 1
        elif ".github" in root or p.startswith("./cores") or p.startswith("./apps") or p.startswith("./services"):
            # Si no tiene sello, se lo pone
            with open(p, "w", encoding="utf-8") as fh: fh.write(NUEVO_SELLO + c)
            count += 1

print(f"Total actualizados a sigilo ND: {count}")
