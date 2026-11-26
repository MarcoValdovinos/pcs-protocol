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
from dotenv import load_dotenv
import mercadopago

load_dotenv()
sdk = mercadopago.SDK(os.getenv("MP_ACCESS_TOKEN"))

for nivel, precio, titulo in [(1, 10.00, "Sello KRONOS Nivel 1 - Prueba"), (2, 20.00, "Sello KRONOS Nivel 2 - Prueba")]:
    pref = sdk.preference().create({
        "items": [{"title": titulo, "quantity": 1, "unit_price": precio, "currency_id": "MXN"}],
        "external_reference": "5204160405358537",
        "back_urls": {"success": os.getenv("MP_SUCCESS_URL"), "failure": os.getenv("MP_FAILURE_URL"), "pending": os.getenv("MP_PENDING_URL")},
        "auto_return": "approved",
    })["response"]
    
    # Detecta la llave correcta (producción vs pruebas)
    init_point = pref.get("init_point") or pref.get("sandbox_init_point")
    
    print(f"Nivel {nivel} (${precio}): {init_point}")
