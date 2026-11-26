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

"""
═══════════════════════════════════════════════════════════════════════════
 ▓▒░ SDK · PYTHON · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
═══════════════════════════════════════════════════════════════════════════
"""
from .arkhe_client import ArkheClient
from .attribution import firmar_atribucion, verificar_atribucion
from .pqc import sha3_512, sha256, suite_canonica, auditar_suite
from .agents import listar_agentes, info_agente, verificar_quorum
from .provenance import crear_manifest, sello_tiempo

__version__ = "1.0.0"
__all__ = [
    "ArkheClient",
    "firmar_atribucion",
    "verificar_atribucion",
    "sha3_512",
    "sha256",
    "suite_canonica",
    "auditar_suite",
    "listar_agentes",
    "info_agente",
    "verificar_quorum",
    "crear_manifest",
    "sello_tiempo",
]
SEAL = "◯_● · 51/49/100"
