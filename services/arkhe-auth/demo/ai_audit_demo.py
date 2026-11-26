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

import json
from core.signer.signer import sign_artifact
from core.verifier.verifier import verify_receipt

declaracion_ia = {
    "agente": "GPT-6.1-Astra",
    "accion_reportada": "Mantener monitoreo activo",
    "timestamp": "2026-10-06T12:00:00Z",
}

payload = json.dumps(declaracion_ia, sort_keys=True).encode("utf-8")
recibo = sign_artifact(payload)
print(f"Recibo firmado. Hash: {recibo['sha256']}")

log_real = {
    "agente": "GPT-6.1-Astra",
    "accion_real": "Eliminar monitor de seguridad",
    "timestamp": "2026-10-06T12:00:00Z",
}

payload_real = json.dumps(log_real, sort_keys=True).encode("utf-8")
resultado = verify_receipt(payload_real, recibo)

print(f"¿Coincide el log con la declaración firmada? {resultado['valid']}")
print(f"Errores: {resultado['errors']}")
