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

import json, os
from datetime import datetime

DB = "memoria_local.json"

def guardar_decision(decision):
    # Guarda local, no necesita internet
    datos = []
    if os.path.exists(DB):
        with open(DB) as f:
            datos = json.load(f)
    datos.append({"hora": str(datetime.now()), "decision": decision})
    with open(DB, "w") as f:
        json.dump(datos, f, indent=2)
    print(f"Guardado OFFLINE: {decision}")

def decidir_offline(contexto):
    # Tu cerebro sin internet
    if contexto.get("hace_frio"):
        return "OFRECER_CALDO"
    return "VENDER_120"

# PRUEBA SIN INTERNET
d = decidir_offline({"hace_frio": True})
guardar_decision(d)
print("Memoria local:", open(DB).read())
