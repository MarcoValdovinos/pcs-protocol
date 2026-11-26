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
Tests de anclaje a Ethereum.

Verifica:
- Modo mock (sin wallet)
- Determinismo
- IPFS stub
"""

import asyncio

from atribucion import anchor, merkle


# ─────────────────────────────────────────────────────────────
# ANCHOR MOCK
# ─────────────────────────────────────────────────────────────

def test_submit_modo_mock() -> None:
    async def _run() -> None:
        root = merkle.root_of([{"id": 1}])
        result = await anchor.submit(root, {"tenant": "test"})
        assert result.mode == "mock"
        assert result.tx_hash.startswith("0x")
        assert result.network == "mock"
        assert result.block == 0

    asyncio.run(_run())


def test_submit_deterministico() -> None:
    async def _run() -> None:
        root = "0x" + "a" * 64
        r1 = await anchor.submit(root, {"x": 1})
        r2 = await anchor.submit(root, {"x": 1})
        # El tx_hash cambia porque incluye timestamp
        assert r1.merkle_root == r2.merkle_root

    asyncio.run(_run())


def test_submit_distintos_roots() -> None:
    async def _run() -> None:
        r1 = await anchor.submit("0x" + "a" * 64, {})
        r2 = await anchor.submit("0x" + "b" * 64, {})
        assert r1.merkle_root != r2.merkle_root

    asyncio.run(_run())


# ─────────────────────────────────────────────────────────────
# IPFS
# ─────────────────────────────────────────────────────────────

def test_pin_to_ipfs_devuelve_cid() -> None:
    async def _run() -> None:
        cid = await anchor.pin_to_ipfs({"hello": "world"})
        assert cid.startswith("bafy")
        assert len(cid) > 20

    asyncio.run(_run())


def test_pin_to_ipfs_deterministico() -> None:
    async def _run() -> None:
        cid1 = await anchor.pin_to_ipfs({"hello": "world"})
        cid2 = await anchor.pin_to_ipfs({"hello": "world"})
        assert cid1 == cid2

    asyncio.run(_run())
