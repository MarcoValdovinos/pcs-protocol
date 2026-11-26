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

"""Los 9 guardianes de Atribución."""

from guards.acta.agent import ACTAGuard
from guards.base import Finding, GuardAgent
from guards.mrr.agent import MRRGuard
from guards.nexus.agent import NexusGuard
from guards.oracle.agent import OracleGuard
from guards.phoenix.agent import PhoenixGuard
from guards.sentinel.agent import SentinelGuard
from guards.sha.agent import SHAGuard
from guards.tsa.agent import TSAGuard
from guards.vault.agent import VaultGuard

ALL_GUARDS = [
    SHAGuard,
    ACTAGuard,
    TSAGuard,
    PhoenixGuard,
    NexusGuard,
    VaultGuard,
    MRRGuard,
    OracleGuard,
    SentinelGuard,
]

__all__ = [
    "Finding",
    "GuardAgent",
    "ALL_GUARDS",
    "ACTAGuard",
    "MRRGuard",
    "NexusGuard",
    "OracleGuard",
    "PhoenixGuard",
    "SentinelGuard",
    "SHAGuard",
    "TSAGuard",
    "VaultGuard",
]
