"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""Canonicalizacion determinista de JSON segun RFC 8785 (JCS)."""

from __future__ import annotations

import rfc8785


def canonicalize(obj: dict) -> bytes:
    """Devuelve la representacion canonica de obj como bytes UTF-8."""
    return rfc8785.dumps(obj)
