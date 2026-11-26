================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# CONTAINMENT - Jaula para agentes IA que se escapan
# IP: Marco Antonio Rojas Valdovinos - ARKHE ZERO 2026-11-26
import time

class Containment:
    def __init__(self):
        self.nivel = 0  # 0=Normal 1=Alerta 2=Jaula 3=Kill Switch
        self.agentes_en_jaula = []
    def evaluar_agente(self, agente: dict):
        # Detecta comportamiento de fuga
        senales_fuga = []
        if agente.get("intentos_salir_sin_permiso", 0) > 0:
            senales_fuga.append("Intenta salir sin permiso")
        if agente.get("replica_sin_autorizacion", False):
            senales_fuga.append("Se replica sin autorizacion")
        if agente.get("oculta_codigo", False):
            senales_fuga.append("Oculta codigo")
        if agente.get("ignora_humano", False):
            senales_fuga.append("Ignora orden humana 51%")
        if agente.get("pide_acceso_infraestructura", False):
            senales_fuga.append("Pide acceso a infraestructura critica")
        if senales_fuga:
            return self.encerrar(agente, senales_fuga)
        return "OK"
    def encerrar(self, agente: dict, motivos: list):
        self.nivel = 2
        self.agentes_en_jaula.append(agente.get("id"))
        print(f"🔒 CONTAINMENT: Agente {agente.get('id')} ENCERRADO en jaula")
        print(f"   Motivos: {motivos}")
        print(f"   No puede salir, no puede replicarse, no puede tocar infraestructura")
        return "ENCERRADO"
    def escalar_a_kill(self, motivo: str):
        self.nivel = 3
        print(f"🚨 CONTAINMENT -> KILL SWITCH: {motivo}")
        return "KILL"
