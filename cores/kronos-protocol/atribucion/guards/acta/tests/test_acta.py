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

"""Tests del guardián ACTA."""

import json
from datetime import datetime, timezone
from pathlib import Path

import pytest

from guards.acta.agent import ACTAGuard


@pytest.mark.asyncio
async def test_acta_check_returns_findings():
    guard = ACTAGuard()
    findings = await guard.check()
    assert isinstance(findings, list)


@pytest.mark.asyncio
async def test_acta_detects_high_request_ip(tmp_path):
    """Verifica detección de IP con muchas requests."""
    logs_dir = tmp_path / "logs"
    logs_dir.mkdir()
    log_file = logs_dir / "access.log"

    entries = []
    for i in range(150):
        entries.append(json.dumps({
            "ip": "1.2.3.4",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "path": "/v1/agents",
            "method": "GET",
        }))
    log_file.write_text("\n".join(entries))

    guard = ACTAGuard(logs_dir=logs_dir)
    findings = await guard.check()

    high_ip = [f for f in findings if "1.2.3.4" in f.message]
    assert len(high_ip) >= 1
    assert high_ip[0].severity in ("warning", "critical")


@pytest.mark.asyncio
async def test_acta_no_findings_empty_logs(tmp_path):
    guard = ACTAGuard(logs_dir=tmp_path)
    findings = await guard.check()
    assert findings == []
