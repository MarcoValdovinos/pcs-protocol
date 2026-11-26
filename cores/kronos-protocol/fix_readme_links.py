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

with open("README.md", "r", encoding="utf-8") as f:
    content = f.read()

# Reemplazar las rutas viejas por las nuevas carpetas
content = content.replace("./TESIS.md", "./academic_thesis/TESIS.md")
content = content.replace("./ECOSYSTEM.md", "./academic_thesis/ECOSYSTEM.md")
content = content.replace("./arkhe_server.py", "./core_system/arkhe_server.py")
content = content.replace("./global_server.py", "./core_system/global_server.py")
content = content.replace("./contracts/ArkheLicense.sol", "./core_system/contracts/ArkheLicense.sol")
content = content.replace("./PAGO.md", "./experiments_and_lore/web/PAGO.md")

with open("README.md", "w", encoding="utf-8") as f:
    f.write(content)

print("✅ Enlaces del README actualizados a la nueva estructura.")
