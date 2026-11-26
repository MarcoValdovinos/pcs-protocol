# ARKHVOXA-04 "La Voz-Archivo" - MOTOR ATRIBUCION
# IP: Marco Antonio Rojas Valdovinos - ARKHE ZERO 2026-11-26
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from guardian_atribucion import GuardianAtribucion
from engines.motor_base import MotorBase
class MotorArkhvoxa(MotorBase):
    def __init__(self, intervalo=5.0):
        super().__init__("ARKHVOXA-04", intervalo)
        self.guardian = GuardianAtribucion()
        self.registro = []
    def registrar(self, evento: dict):
        self.guardian.validar(evento)
        self.registro.append(evento)
        print(f"[ARKHVOXA-04] Registrado: {evento.get('actor')} -> {evento.get('action')}")
        return len(self.registro)
    def tick(self):
        print(f"[ARKHVOXA-04] Archivo: {len(self.registro)} eventos con autor")
