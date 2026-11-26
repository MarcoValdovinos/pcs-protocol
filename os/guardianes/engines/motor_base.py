# MOTOR BASE - ARKHE ZERO - IP Marco Antonio Rojas Valdovinos 2026-11-26
import time, threading, json, os
class MotorBase:
    def __init__(self, nombre: str, intervalo: float = 5.0):
        self.nombre = nombre
        self.intervalo = intervalo
        self.activo = False
        self.hilo = None
        self.latidos = 0
    def tick(self):
        # Cada guardián sobreescribe esto con su trabajo
        pass
    def _loop(self):
        while self.activo:
            try:
                self.tick()
                self.latidos += 1
                print(f"[{self.nombre}] latido #{self.latidos} OK")
            except Exception as e:
                print(f"[{self.nombre}] ALERTA: {e}")
            time.sleep(self.intervalo)
    def arrancar(self):
        if self.activo: return
        self.activo = True
        self.hilo = threading.Thread(target=self._loop, daemon=True)
        self.hilo.start()
        print(f"[{self.nombre}] MOTOR ENCENDIDO - cada {self.intervalo}s")
    def detener(self):
        self.activo = False
        print(f"[{self.nombre}] MOTOR APAGADO")
