"""
═══════════════════════════════════════════════════════════════════════════
 ▓▒░ 05-AGENTES · AGENTE BASE · ARKHÉ ZERO ░▒▓
 ─────────────────────────────────────────────────────────────────────────
 Clase base para los 6 oficios numerados (090-095).
 Hereda: firma, veto humano, consenso 4/5, registro MCP.

 ┌─(kali㉿arkhe-zero)-[~/kronos/05-AGENTES/_base]
 └─$ python3 -c "from agente_base import AgenteBase; \
      print(AgenteBase.from_registry('090-arquitecto').__dict__)"
═══════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Optional
import hashlib
import json


SEAL = "◯_● · 51/49/100"
REGISTRY_PATH = "../../agents/registry/agent-registry.json"


@dataclass
class AgenteBase:
    id: str
    numero: int
    nombre: str
    capacidades: list[str] = field(default_factory=list)
    estado: str = "activo"
    reputacion: int = 100

    # ─── Constructor desde registry ─────────────────────────────
    @classmethod
    def from_registry(cls, agent_id: str, path: str = REGISTRY_PATH) -> "AgenteBase":
        with open(path, "r", encoding="utf-8") as f:
            reg = json.load(f)
        for entry in reg["oficios"]:
            if entry["id"] == agent_id:
                return cls(
                    id=entry["id"],
                    numero=entry["numero"],
                    nombre=entry["nombre"],
                    capacidades=entry.get("capacidades", []),
                    estado=entry.get("estado", "activo"),
                )
        raise ValueError(f"Oficio no encontrado: {agent_id}")

    # ─── Firma canónica ────────────────────────────────────────
    def firmar(self, contenido: str) -> dict:
        """Firma SHA3-512 del contenido + sello del agente."""
        h = hashlib.sha3_512(contenido.encode("utf-8")).hexdigest()
        return {
            "agente": self.id,
            "contenido_hash": h,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "sellado": SEAL,
        }

    # ─── Ejecución ─────────────────────────────────────────────
    def ejecutar(self, tarea: dict[str, Any]) -> dict:
        """Ejecuta una tarea; requiere veto humano para acciones críticas."""
        tipo = tarea.get("tarea", "desconocida")
        critico = tarea.get("critico", False)

        if critico:
            return {
                "ok": False,
                "agente": self.id,
                "razon": "Acción crítica requiere firma humana (51%)",
                "sellado": SEAL,
            }

        return {
            "ok": True,
            "agente": self.id,
            "numero": self.numero,
            "nombre": self.nombre,
            "tarea": tipo,
            "capacidades_usadas": self.capacidades,
            "resultado": f"[{self.id}] {tipo} · ejecutado",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "sellado": SEAL,
        }

    # ─── Estado ────────────────────────────────────────────────
    def status(self) -> dict:
        return {
            "id": self.id,
            "numero": self.numero,
            "nombre": self.nombre,
            "estado": self.estado,
            "reputacion": self.reputacion,
            "capacidades": self.capacidades,
            "sellado": SEAL,
        }


if __name__ == "__main__":
    print("[ ✓✓ ] AgenteBase cargado ·", SEAL)