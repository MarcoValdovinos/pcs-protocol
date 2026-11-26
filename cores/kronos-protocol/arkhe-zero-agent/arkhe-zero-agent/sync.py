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

import json, os, socket

def hay_internet():
    try:
        socket.create_connection(("8.8.8.8", 53), timeout=2)
        return True
    except:
        return False

DB = "memoria_local.json"
if not os.path.exists(DB):
    print("Nada que subir")
    exit()

if hay_internet():
    print("SI hay internet - SUBIENDO...")
    with open(DB) as f:
        data = json.load(f)
    # Aqui subirias a tu servidor / Firebase / tu .agent
    print(f"Subiendo {len(data)} decisiones a la nube ARKHE")
    # Simula subida
    # requests.post("https://tu-server.com/agent", json=data)
    # Si sube bien, borra local o marca como subido
    print("SYNC OK - 11:22")
else:
    print("NO hay internet - sigue vivo offline, guardando local")
