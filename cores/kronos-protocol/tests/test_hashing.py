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

"""Tests de hashing.py — SHA3-512."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

from kronos360.crypto.hashing import sha3_512_hex


def test_sha3_512_hola_mundo():
    """Vector que ya verificamos a mano en el celular."""
    h = sha3_512_hex(b"hola mundo")
    assert h == (
        "32fd3c4c220b24991aa9930164c37a3d12496984f3add3c5"
        "1faf931d8ebc2c7780a13e5e8cfb0a20243ed0703dacd5a1"
        "210c3c12faa6b7d5d1c70088df60430c"
    )


def test_sha3_512_length():
    """Siempre 128 caracteres hex."""
    for payload in (b"", b"a", b"x" * 10000):
        assert len(sha3_512_hex(payload)) == 128


def test_sha3_512_deterministic():
    """El mismo input produce el mismo hash."""
    a = sha3_512_hex(b"mismo contenido")
    b = sha3_512_hex(b"mismo contenido")
    assert a == b
