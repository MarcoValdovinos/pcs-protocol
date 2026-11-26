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
Atribución SDK para Python.

Uso:

    from atribucion_sdk import AtribucionClient

    client = AtribucionClient(api_key="ak_live_...")
    cert = client.record_action(
        agent_id="agt_...",
        action="trade_executed",
        input={"symbol": "AAPL"},
        output={"status": "filled"},
        reasoning="Señal alcista.",
        autonomy_level="semi-autonomo",
        private_key_pem=key_pem,
    )
    print(cert.certificate_id, cert.proof_url)
"""

from atribucion_sdk.client import AtribucionClient
from atribucion_sdk.crypto import (
    canonical_json,
    generate_keypair,
    sign_payload,
)
from atribucion_sdk.types import (
    ActionResponse,
    AgentInfo,
    AgentRegistrationResponse,
    ProofResponse,
)

__version__ = "0.1.0"

__all__ = [
    "AtribucionClient",
    "ActionResponse",
    "AgentInfo",
    "AgentRegistrationResponse",
    "ProofResponse",
    "canonical_json",
    "generate_keypair",
    "sign_payload",
]

"""
Atribución SDK para Python.

Uso:
    from atribucion_sdk import AtribucionClient

    client = AtribucionClient(api_key="ak_live_...")
    agent = client.register_agent(...)
    cert = client.record_action(...)
"""

from atribucion_sdk.client import AtribucionClient
from atribucion_sdk.crypto import (
    canonical_json,
    generate_keypair,
    sign_payload,
)
from atribucion_sdk.types import (
    ActionResponse,
    AgentInfo,
    AgentRegistrationResponse,
    ProofResponse,
)

__version__ = "0.1.0"

__all__ = [
    "AtribucionClient",
    "ActionResponse",
    "AgentInfo",
    "AgentRegistrationResponse",
    "ProofResponse",
    "canonical_json",
    "generate_keypair",
    "sign_payload",
]
