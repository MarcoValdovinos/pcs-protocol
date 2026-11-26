================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ============================================================
# ARKHE ZERO - PROPIEDAD INTELECTUAL
# Autor: Marco Antonio Rojas Valdovinos
# Founder: ARKHE ZERO
# Bautizo: 2026-11-26 - Lerma, Estado de México
# Repo: github.com/MarcoValdovinos/pcs-protocol - os/guardianes/
# © 2026 Marco Antonio Rojas Valdovinos. Todos los derechos reservados.
# ============================================================
# GUARDIANESBOT - Orquesta los 4 guardianes
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from guardian_integridad import GuardianIntegridad
from guardian_5149 import Guardian5149
from guardian_pqc import GuardianPQC
from guardian_atribucion import GuardianAtribucion

class GuardianesBot:
    def __init__(self):
        self.integridad = GuardianIntegridad()
        self.g5149 = Guardian5149()
        self.pqc = GuardianPQC()
        self.atrib = GuardianAtribucion()
    def check_all(self, evento: dict = None):
        ok, msg = self.integridad.verificar()
        print(f"[GUARDIAN INTEGRIDAD] {msg}")
        if evento:
            self.g5149.validar(evento.get("human_share",51), evento.get("ai_share",49), True)
            print("[GUARDIAN 51/49] OK - Humano 51%")
            self.pqc.validar_algoritmo(evento.get("algoritmo","ML-DSA-87"))
            print("[GUARDIAN PQC] OK - ML-KEM-1024 / ML-DSA-87")
            self.atrib.validar(evento)
            print(f"[GUARDIAN ATRIBUCION] OK - Actor: {evento.get('actor')}")
        return ok

if __name__ == "__main__":
    bot = GuardianesBot()
    if "--snapshot" in sys.argv:
        n = bot.integridad.snapshot()
        print(f"[GUARDIANESBOT] Snapshot creado: {n} archivos protegidos. Ya no se puede borrar sin que se note.")
    else:
        bot.check_all({"actor":"marco","ts":123,"human_share":51,"ai_share":49,"algoritmo":"ML-DSA-87"})
