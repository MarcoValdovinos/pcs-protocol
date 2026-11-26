================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# KROVOXA-03 "El Sello Eterno" - MOTOR PQC
# IP: Marco Antonio Rojas Valdovinos - ARKHE ZERO 2026-11-26
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from guardian_pqc import GuardianPQC
from engines.motor_base import MotorBase
class MotorKrovoxa(MotorBase):
    def __init__(self, intervalo=7.0):
        super().__init__("KROVOXA-03", intervalo)
        self.guardian = GuardianPQC()
        self.algoritmos_usados = ["ML-KEM-1024", "ML-DSA-87"]
    def tick(self):
        for algo in self.algoritmos_usados:
            self.guardian.validar_algoritmo(algo)
        print(f"[KROVOXA-03] PQC OK: {self.algoritmos_usados}")
    def rechazar(self, algoritmo: str):
        return self.guardian.validar_algoritmo(algoritmo)
