"""
═══════════════════════════════════════════════════════════════════════════
 ▓▒░ API · MAIN · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
 ─────────────────────────────────────────────────────────────────────────
 Attribution API · FastAPI + Pydantic + PQC.
═══════════════════════════════════════════════════════════════════════════
"""
from __future__ import annotations
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from datetime import datetime, timezone

from .schemas import HealthResponse, VerifyRequest, VerifyResponse
from .routes import obras, agentes, certificados, auth

SEAL = "◯_● · 51/49/100"
INDEX_ZERO_SHA256 = "f03f7e2d852617309457e0fe207f8f8bd2627d0b723de02f3b0ce05767219112"

app = FastAPI(
    title="ARKHÉ ZERO · Attribution API",
    description="Protocolo de verificación criptográfica · Local-First · Humano-IA",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://arkhe.zero"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# ─── Routers ──────────────────────────────────────────────────────
app.include_router(auth.router,         prefix="/v1/auth",         tags=["auth"])
app.include_router(obras.router,        prefix="/v1/obras",        tags=["obras"])
app.include_router(agentes.router,      prefix="/v1/agentes",      tags=["agentes"])
app.include_router(certificados.router, prefix="/v1/certificados", tags=["certificados"])

@app.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        seal=SEAL,
        index_zero_sha256=INDEX_ZERO_SHA256,
        timestamp=datetime.now(timezone.utc).isoformat(),
    )

@app.get("/")
async def root():
    return {
        "message": "ARKHÉ ZERO · Attribution API",
        "version": "1.0.0",
        "seal": SEAL,
        "docs": "/docs",
    }

# ◯_● · 51/49/100 · KRONOS