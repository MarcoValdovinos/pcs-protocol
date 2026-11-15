"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""
Atribución — Herramientas MCP.

Exporta las funciones individuales para uso programático.
"""

from ai_recognition.mcp.server import (
    get_decisions,
    get_log,
    get_pending,
    get_protocols,
    get_roadmap,
    get_state,
    search_context,
    whoami,
)

__all__ = [
    "whoami",
    "get_state",
    "get_roadmap",
    "get_decisions",
    "get_pending",
    "get_log",
    "get_protocols",
    "search_context",
]
