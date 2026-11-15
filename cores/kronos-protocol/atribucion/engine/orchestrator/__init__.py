"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""MADRE — Orquestador multi-agente con memoria canónica."""

from engine.orchestrator.canonical_memory import CanonicalMemory, Message
from engine.orchestrator.handoff import Handoff, HandoffResult
from engine.orchestrator.madre import MADRE, MotoAgent

__all__ = [
    "CanonicalMemory",
    "Handoff",
    "HandoffResult",
    "MADRE",
    "Message",
    "MotoAgent",
]
