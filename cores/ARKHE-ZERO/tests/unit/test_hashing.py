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
═══════════════════════════════════════════════════════════════════════════
 ▓▒░ TEST · HASHING · ARKHÉ ZERO · ◯_● ░▒▓
═══════════════════════════════════════════════════════════════════════════
"""
import pytest
from tests.conftest import SEAL

@pytest.mark.unit
def test_sha3_512_no_collision_known(sha3_512_helper):
    a = sha3_512_helper("ARKHÉ ZERO")
    b = sha3_512_helper("ARKHE ZERO")  # sin acento
    assert a != b

@pytest.mark.unit
def test_sha3_512_unicode(sha3_512_helper):
    h = sha3_512_helper("◯_● · 51/49/100")
    assert len(h) == 128

@pytest.mark.unit
def test_sha3_512_empty(sha3_512_helper):
    h = sha3_512_helper("")
    assert len(h) == 128
    # hash canónico de string vacío con SHA3-512
    assert h == "a69f73cca23a9ac5c8b567dc185a756e97c982164fe25859e0d1dcc1475c80a615b2123af1f5f94c11e3e9402c3ac558f500199d95b6d3e301758586281dcd26"

# ◯_● · 51/49/100 · KRONOS
