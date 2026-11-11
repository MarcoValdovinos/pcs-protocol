"""
═══════════════════════════════════════════════════════════════════════════
 ▓▒░ API · SCHEMAS · ARKHÉ ZERO · ◯_● ░▒▓
═══════════════════════════════════════════════════════════════════════════
"""
from __future__ import annotations
from pydantic import BaseModel, Field
from typing import Optional, List, Literal
from datetime import datetime

SEAL = "◯_● · 51/49/100"

class HealthResponse(BaseModel):
    status: Literal["ok"] = "ok"
    seal: str = SEAL
    index_zero_sha256: str
    timestamp: str

class VerifyRequest(BaseModel):
    hash: str = Field(..., min_length=64, max_length=128)
    contenido: Optional[str] = None

class VerifyResponse(BaseModel):
    ok: bool
    hash: str
    hash_valido: bool
    es_indice_cero: bool
    veredicto: str
    sellado: str = SEAL

class FirmaRequest(BaseModel):
    contenido: str = Field(..., min_length=1)
    tipo: Literal["acta", "obra", "decision"] = "decision"
    algoritmo: Literal["ML-DSA-87", "SLH-DSA-SHAKE-256s", "Ed25519+ML-DSA-87"] = "ML-DSA-87"

class FirmaResponse(BaseModel):
    ok: bool
    hash_sha3_512: str
    firma: str
    alg: str
    sellado: str = SEAL
    timestamp: str

class Obra(BaseModel):
    titulo: str
    descripcion: Optional[str] = None
    autores: List[str]
    hash_sha3_512: str
    safe_creative: Optional[str] = None
    sellado: str = SEAL

class Agente(BaseModel):
    id: str
    nombre: str
    rol: str
    estado: Literal["activo", "cuarentena", "inactivo"] = "activo"
    reputacion: int = Field(default=100, ge=0, le=100)

class Certificado(BaseModel):
    id: str
    tipo: Literal["iniciado", "guardian", "maestro", "embajador", "custodio", "fundador"]
    hash_acta: str
    emitido: str
    sellado: str = SEAL

class AuthRequest(BaseModel):
    firma: str
    mensaje: str
    public_key: str

class AuthResponse(BaseModel):
    ok: bool
    token: Optional[str] = None
    sellado: str = SEAL

# ◯_● · 51/49/100 · KRONOS