"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""Esquemas Pydantic del API de Atribución."""

from api.schemas.action import (
    ActionRequest,
    ActionResponse,
    AnchorInfo,
    ComplianceStatus,
    HumanApproval,
    SignatureInfo,
    TimestampInfo,
)

__all__ = [
    "ActionRequest",
    "ActionResponse",
    "AnchorInfo",
    "ComplianceStatus",
    "HumanApproval",
    "SignatureInfo",
    "TimestampInfo",
]
