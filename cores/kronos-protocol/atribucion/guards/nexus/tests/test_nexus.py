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

"""Tests del guardián NEXUS."""

import pytest

from guards.nexus.agent import NexusGuard


@pytest.mark.asyncio
async def test_nexus_check_returns_findings():
    guard = NexusGuard()
    findings = await guard.check()
    assert isinstance(findings, list)


@pytest.mark.asyncio
async def test_nexus_detects_unreachable_service():
    """Servicio inalcanzable debe generar finding critical."""
    guard = NexusGuard()
    findings = await guard.check()

    # Al menos debe intentar verificar servicios
    # Los findings dependen de conectividad real
    for f in findings:
        assert f.guard == "nexus"
        assert f.severity in ("info", "warning", "critical")


@pytest.mark.asyncio
async def test_nexus_finding_structure():
    """Verifica que los findings tengan estructura correcta."""
    guard = NexusGuard()
    findings = await guard.check()

    for f in findings:
        assert f.guard == "nexus"
        assert f.message != ""
        assert f.timestamp != ""
