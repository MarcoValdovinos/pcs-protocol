# ARKHVOR-01 "El que devora el olvido" - MOTOR INTEGRIDAD
# IP: Marco Antonio Rojas Valdovinos - ARKHE ZERO 2026-11-26
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from guardian_integridad import GuardianIntegridad
from engines.motor_base import MotorBase
class MotorArkhvor(MotorBase):
    def __init__(self, intervalo=10.0):
        super().__init__("ARKHVOR-01", intervalo)
        self.guardian = GuardianIntegridad()
    def tick(self):
        ok, msg = self.guardian.verificar()
        if not ok:
            print(f"[ARKHVOR-01] 🚨 {msg} - BLOQUEANDO")
            # Aquí bloquea: no deja seguir si algo se borró
            raise RuntimeError(msg)
