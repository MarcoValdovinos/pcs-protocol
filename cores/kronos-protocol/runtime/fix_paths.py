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
import os
import pathlib

# La ruta base del nuevo repo
BASE_DIR = pathlib.Path(__file__).resolve().parent.parent

# Archivos y carpetas que NO queremos tocar
EXCLUDE_DIRS = {'.git', 'venv', 'node_modules', 'modelos', '.arkhe-private', '07-LLAVES/FUNDADOR-V2'}
# Extensiones de texto que vamos a escanear
EXTENSIONS = {'.md', '.py', '.sh', '.html', '.json', '.txt'}

# Reemplazos: (Viejo, Nuevo)
REPLACEMENTS = [
    ("/root/kronos-protocol", str(BASE_DIR)),
    ("/root/kronos-protocol", str(BASE_DIR)),
    ("fundador-v3.key", "fundador-v3.key"),
    ("fundador-v3.pub", "fundador-v3.pub"),
]

modificados = 0

for root, dirs, files in os.walk(BASE_DIR):
    # Filtrar directorios excluidos
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not any(ex in os.path.join(root, d) for ex in EXCLUDE_DIRS)]
    
    for file in files:
        ext = os.path.splitext(file)[1]
        if ext in EXTENSIONS:
            filepath = pathlib.Path(root) / file
            try:
                content = filepath.read_text(encoding='utf-8')
                original = content
                
                for old, new in REPLACEMENTS:
                    content = content.replace(old, new)
                
                if content != original:
                    filepath.write_text(content, encoding='utf-8')
                    print(f"🔧 Reparado: {filepath.relative_to(BASE_DIR)}")
                    modificados += 1
            except Exception as e:
                pass # Ignorar errores de codificación en archivos binarios

print(f"\n✅ Auditoría Kintsugi completada. {modificados} archivos reparados.")
