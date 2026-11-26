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
Tests de sellado de tiempo RFC 3161.

Verifica:
- Sellado en modo mock
- Determinismo
- Verificación
- Detección de payload alterado
"""

import asyncio

from atribucion import tsa


# ─────────────────────────────────────────────────────────────
# SELLADO
# ─────────────────────────────────────────────────────────────

def test_seal_modo_mock() -> None:
    async def _run() -> None:
        result = await tsa.seal(b"test payload")
        assert result.mode == "mock"
        assert result.authority == "mock-tsa"
        assert result.token.startswith("0x")
        assert len(result.token) == 66  # 0x + 64 hex

    asyncio.run(_run())


def test_seal_sha256_por_defecto() -> None:
    async def _run() -> None:
        result = await tsa.seal(b"test")
        assert result.hash_algorithm == "sha256"

    asyncio.run(_run())


def test_seal_algoritmo_personalizado() -> None:
    async def _run() -> None:
        result = await tsa.seal(b"test", hash_algorithm="sha3_256")
        assert result.hash_algorithm == "sha3_256"

    asyncio.run(_run())


# ─────────────────────────────────────────────────────────────
# VERIFICACIÓN
# ─────────────────────────────────────────────────────────────

def test_verify_seal_ok() -> None:
    async def _run() -> None:
        payload = b"test payload"
        result = await tsa.seal(payload)
        assert tsa.verify_seal(payload, result) is True

    asyncio.run(_run())


def test_verify_seal_payload_alterado() -> None:
    async def _run() -> None:
        payload = b"test payload"
        result = await tsa.seal(payload)
        assert tsa.verify_seal(b"otro payload", result) is False

    asyncio.run(_run())


def test_verify_seal_token_alterado() -> None:
    async def _run() -> None:
        payload = b"test"
        result = await tsa.seal(payload)
        result.token = "0x" + "0" * 64
        assert tsa.verify_seal(payload, result) is False

    asyncio.run(_run())
