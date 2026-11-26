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

from core.signer.signer import generate_keypair, sign_artifact
from core.verifier.verifier import verify_receipt


def test_roundtrip(tmp_path, monkeypatch):
    monkeypatch.setattr("core.signer.signer.KEY_DIR", str(tmp_path))
    generate_keypair("test")
    payload = b"contenido de prueba anti-falsificacion"
    receipt = sign_artifact(payload, "test")
    result = verify_receipt(payload, receipt)
    assert result["valid"], result["errors"]


def test_tampered_fails(tmp_path, monkeypatch):
    monkeypatch.setattr("core.signer.signer.KEY_DIR", str(tmp_path))
    generate_keypair("test")
    payload = b"contenido original"
    receipt = sign_artifact(payload, "test")
    tampered = b"contenido alterado"
    result = verify_receipt(tampered, receipt)
    assert not result["valid"]
