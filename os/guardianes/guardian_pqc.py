# ============================================================
# ARKHE ZERO - PROPIEDAD INTELECTUAL
# Autor: Marco Antonio Rojas Valdovinos
# Founder: ARKHE ZERO
# Bautizo: 2026-11-26 - Lerma, Estado de México
# Repo: github.com/MarcoValdovinos/pcs-protocol - os/guardianes/
# © 2026 Marco Antonio Rojas Valdovinos. Todos los derechos reservados.
# ============================================================
# GUARDIAN 3: PQC - Prohíbe criptografía vieja
PROHIBIDO = ["RSA", "ECDSA-secp256k1-solo", "MD5", "SHA1"]
class GuardianPQC:
    def validar_algoritmo(self, algoritmo: str):
        for p in PROHIBIDO:
            if p.lower() in algoritmo.lower():
                raise ValueError(f"PQC: {algoritmo} está prohibido, usa ML-KEM-1024 / ML-DSA-87")
        return True
