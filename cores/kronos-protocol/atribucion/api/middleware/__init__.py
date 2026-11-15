"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""Middleware del API de Atribución."""

from api.middleware.auth import TenantContext, get_current_tenant, verify_api_key

__all__ = [
    "TenantContext",
    "get_current_tenant",
    "verify_api_key",
]
