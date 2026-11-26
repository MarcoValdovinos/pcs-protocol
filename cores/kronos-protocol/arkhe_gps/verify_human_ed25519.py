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
# verify_human_ed25519.py · Verifica firma humana
import subprocess, sys, os

ALLOWED_SIGNERS = os.path.expanduser("~/.human_allowed_signers")
IDENTITY = "humano-51@YHDRYH-92CE"

def verificar(manifest_path):
    print(f"Verificando firma de: {manifest_path}")
    sig_path = f"{manifest_path}.sig"
    if not os.path.exists(sig_path):
        sys.exit("No existe archivo .sig")

    with open(manifest_path, "rb") as f_in:
        result = subprocess.run(
            ["ssh-keygen", "-Y", "verify",
             "-f", ALLOWED_SIGNERS,
             "-I", IDENTITY,
             "-n", "file",
             "-s", sig_path],
            stdin=f_in, capture_output=True, text=True
        )
    if result.returncode == 0:
        print("✓ FIRMA HUMANA VALIDA. Manifiesto autentico.")
        # Opcional: marcar el manifiesto como validado (pero esto rompería la firma)
        # Mejor dejarlo así y usar el .sig como prueba.
    else:
        print(f"✗ FIRMA INVALIDA: {result.stderr.strip()}")
        sys.exit(1)

if __name__ == "__main__":
    verificar(sys.argv[1])
