# ============================================================
# ARKHE ZERO - PROPIEDAD INTELECTUAL
# Autor: Marco Antonio Rojas Valdovinos
# Founder: ARKHE ZERO
# Bautizo: 2026-11-26 - Lerma, Estado de México
# Repo: github.com/MarcoValdovinos/pcs-protocol - os/guardianes/
# © 2026 Marco Antonio Rojas Valdovinos. Todos los derechos reservados.
# ============================================================
# GUARDIAN 4: ATRIBUCION - Sin autor, no pasa
class GuardianAtribucion:
    def validar(self, evento: dict):
        if not evento.get("actor"):
            raise ValueError("ATRIBUCION: evento sin actor, no pasa")
        if not evento.get("ts"):
            raise ValueError("ATRIBUCION: evento sin timestamp, no pasa")
        return True
