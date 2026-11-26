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

import hashlib, pytest
from core.hash_to_semantic import generate_manifesto_from_hash, hash_to_semantic_polarity
from core.perito_seal import generar_sello_kronos

FOLIO="5204160405358537"
GENESIS="41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3"
PERITO="kronosproyecto@hotmail.com"
SHA="a4ff808e"
PERICIAL="KRONOS-MT01JAAF"
SELLO="KRONOS-TRACE-PVA-5204160405358537-MT01JAAF"

def test_genesis_sha256_valido():
    assert len(GENESIS)==64 and all(c in "0123456789abcdef" for c in GENESIS.lower())
    assert GENESIS.startswith(SHA)

def test_sha256_deterministico():
    data=b"KRONOS_360_GENESIS_PVA"
    assert hashlib.sha256(data).hexdigest()==hashlib.sha256(data).hexdigest()

def test_hash_to_semantic_51_49_MT01JAAF():
    r=hash_to_semantic_polarity(GENESIS)
    assert "51" in r and "49" in r and "MT01JAAF" in r and SHA in r.lower()

def test_manifiesto_contiene_folio_y_sha():
    m=generate_manifesto_from_hash(GENESIS,51,49)
    s=generar_sello_kronos(GENESIS)
    assert FOLIO in s and PERICIAL in m and SHA in m.lower() and SELLO in m

def test_manifiesto_deterministico():
    assert generate_manifesto_from_hash(GENESIS,51,49)==generate_manifesto_from_hash(GENESIS,51,49)

def test_manifiesto_distintos():
    assert generate_manifesto_from_hash(GENESIS,51,49)!=generate_manifesto_from_hash("f"*64,51,49)

def test_hash_vacio_falla():
    with pytest.raises((ValueError,AssertionError,Exception)):
        generate_manifesto_from_hash("",51,49)

def test_hash_no_hex_falla():
    with pytest.raises((ValueError,AssertionError,Exception)):
        generate_manifesto_from_hash("zzzz_no_es_hex",51,49)

def test_porcentaje_51_49_obligatorio():
    m=generate_manifesto_from_hash(GENESIS,51,49)
    assert "51%_HUMANO" in m and "49%_IA" in m

def test_sello_integro_ante_alteracion():
    s1=generar_sello_kronos(GENESIS)
    g2=GENESIS[:-1]+("0" if GENESIS[-1]!="0" else "1")
    s2=generar_sello_kronos(g2)
    assert s1!=s2 and FOLIO in s2 and "MT01JAAF" in s2

def test_manifiesto_contiene_sc_y_perito():
    m=generate_manifesto_from_hash(GENESIS,51,49)
    assert "2607146379465" in m and PERITO in m
