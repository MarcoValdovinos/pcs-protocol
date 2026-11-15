"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""Dashboard y persistencia de Atribución."""

from atribucion.dashboard.repository import (
    AgentRepository,
    CertificateRepository,
    TenantRepository,
)

__all__ = ["AgentRepository", "CertificateRepository", "TenantRepository"]
