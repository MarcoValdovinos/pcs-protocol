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

#!/usr/bin/env python3
import subprocess
import base64
from zcap_py import encode_did_key, resolve_did_key

def get_agent_did():
    print("🜂 Extrayendo llave pública del agente...")
    # Lee la llave OpenSSH del agente
    raw_pub = subprocess.check_output(["ssh-keygen", "-y", "-f", ".agent/agent_identity"]).decode().strip()
    
    # El formato es "ssh-ed25519 AAAA... comentario"
    b64_key = raw_pub.split()[1]
    
    # Decodifica y toma los últimos 32 bytes (la llave pura Ed25519)
    key_bytes = base64.b64decode(b64_key)[-32:]
    
    # Genera el DID
    did = encode_did_key(key_bytes)
    print(f"✓ DID del agente: {did}")
    
    # Verifica que se puede resolver
    print("🜃 Resolviendo el DID para verificar...")
    vm = resolve_did_key(did)
    print(f"✓ Clave pública (multibase): {vm.public_key_multibase}")
    
    return did

if __name__ == "__main__":
    get_agent_did()
