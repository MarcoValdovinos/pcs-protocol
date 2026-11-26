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

"""Servidor MCP — tools de verificacion PQC para agentes de IA."""
import base64
import json
from pathlib import Path

from mcp.server.fastmcp import FastMCP

from core.verifier.verifier import verify_receipt
from core.signer.signer import load_pk

ROOT = Path(__file__).parent.parent
EXAMPLES = ROOT / "examples"

mcp = FastMCP("arkhe-auth")


@mcp.tool()
def get_public_keys() -> dict:
    """Devuelve la clave publica ML-DSA-87 actual en base64.
    Un agente puede usarla para verificar recibos offline."""
    try:
        pk = load_pk()
        return {"ML-DSA-87": base64.b64encode(pk).decode()}
    except FileNotFoundError:
        return {"error": "clave publica no encontrada en ~/.arkhe/keys/root.pk"}


@mcp.tool()
def verify_example() -> dict:
    """Verifica el ejemplo publico en examples/ contra su recibo.
    Util para que un agente confirme que el sistema funciona."""
    try:
        data = (EXAMPLES / "test-artifact.txt").read_bytes()
        receipt = json.loads((EXAMPLES / "test-artifact.txt.receipt.json").read_text())
        return verify_receipt(data, receipt)
    except FileNotFoundError as e:
        return {"error": f"archivo no encontrado: {e}"}


@mcp.tool()
def verify_artifact(artifact_b64: str, receipt_json: str) -> dict:
    """Verifica un artefacto (base64) contra su recibo (JSON string).
    Retorna valid, errors, sha256, sig_valid.
    El agente NO necesita confiar en el servidor: la verificacion es offline."""
    try:
        artifact = base64.b64decode(artifact_b64)
        receipt = json.loads(receipt_json)
        return verify_receipt(artifact, receipt)
    except Exception as e:
        return {"valid": False, "errors": [f"error: {e}"], "sig_valid": False}


if __name__ == "__main__":
    mcp.run()
