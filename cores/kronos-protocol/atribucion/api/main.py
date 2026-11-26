================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""
Atribución — Servidor FastAPI.
"""

from __future__ import annotations

from contextlib import asynccontextmanager
from typing import AsyncIterator

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from api import __version__
from api.middleware.audit import audit_middleware
from api.middleware.rate_limit import rate_limit_middleware
from api.middleware.security_headers import security_headers_middleware
from api.routes.actions import router as actions_router
from api.routes.agents import router as agents_router
from api.routes.proofs import router as proofs_router
from api.routes.reports import router as reports_router


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    print(f"🚀 Atribución API v{__version__} arrancando...")
    yield
    print("👋 Atribución API cerrando...")


app = FastAPI(
    title="Atribución",
    description="Compliance EU AI Act para agentes IA.",
    version=__version__,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.middleware("http")(security_headers_middleware)
app.middleware("http")(audit_middleware)
app.middleware("http")(rate_limit_middleware)


@app.exception_handler(ValueError)
async def value_error_handler(request: Request, exc: ValueError) -> JSONResponse:
    return JSONResponse(
        status_code=400,
        content={"error": "bad_request", "detail": str(exc)},
    )


app.include_router(actions_router)
app.include_router(agents_router)
app.include_router(proofs_router)
app.include_router(reports_router)


@app.get("/", tags=["system"])
async def root() -> dict:
    return {
        "service": "atribucion",
        "version": __version__,
        "docs": "/docs",
        "health": "/v1/health",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api.main:app", host="0.0.0.0", port=8000, reload=False)
