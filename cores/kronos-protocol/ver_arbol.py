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

import os

def print_tree(startpath, max_depth=3):
    ignore = {'.git', 'node_modules', 'venv', '__pycache__', '.pytest_cache'}
    
    for root, dirs, files in os.walk(startpath):
        # Calcular profundidad
        level = root.replace(startpath, '').count(os.sep)
        if level >= max_depth:
            del dirs[:] # No seguir bajando
            continue
            
        dirs[:] = [d for d in dirs if d not in ignore and not d.startswith('.')]
        
        indent = '│   ' * level
        folder_name = os.path.basename(root)
        
        if level == 0:
            print(f"\033[1;36m{folder_name}/\033[0m") # Azul brillante para raíz
        else:
            print(f"{indent}\033[1;34m├── {folder_name}/\033[0m") # Azul para carpetas
            
        subindent = '│   ' * (level + 1)
        for f in sorted(files):
            if f.startswith('.'): continue
            # Colorear según extensión
            if f.endswith('.py'): color = '\033[1;32m' # Verde
            elif f.endswith('.md'): color = '\033[1;37m' # Blanco
            elif f.endswith('.html'): color = '\033[1;33m' # Amarillo
            elif f.endswith('.json'): color = '\033[1;35m' # Magenta
            else: color = '\033[0m' # Reset
            
            print(f"{subindent}├── {color}{f}\033[0m")

print("\n🌳 ÁRBOL DEL REPOSITORIO (Nivel 1 al 3):\n")
print_tree(".", max_depth=2)
print("\n💡 Tip: Para ver más profundo, edita el archivo ver_arbol.py y cambia max_depth=2 a 3 o 4.\n")
