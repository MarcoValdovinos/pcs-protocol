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
Atribución Payments — Modelos de datos compartidos.
"""

from __future__ import annotations

from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from enum import Enum
from typing import Any


class PaymentStatus(str, Enum):
    """Estados de pago."""

    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    REFUNDED = "refunded"
    CANCELLED = "cancelled"
    IN_PROCESS = "in_process"


class Currency(str, Enum):
    """Divisas soportadas."""

    EUR = "EUR"
    MXN = "MXN"
    USD = "USD"
    MXNB = "MXNB"


class PaymentMethod(str, Enum):
    """Métodos de pago."""

    CREDIT_CARD = "credit_card"
    DEBIT_CARD = "debit_card"
    BANK_TRANSFER = "bank_transfer"
    MXNB = "mxnb"
    CRYPTO = "crypto"


@dataclass
class PaymentRecord:
    """Registro de un pago."""

    id: str
    tenant_id: str
    amount: float
    currency: str
    status: str
    method: str
    external_id: str
    external_provider: str
    created_at: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )
    updated_at: str | None = None
    metadata: dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class SubscriptionRecord:
    """Registro de una suscripción."""

    id: str
    tenant_id: str
    plan_id: str
    amount: float
    currency: str
    frequency_months: int
    status: str
    external_id: str
    external_provider: str
    next_payment_date: str | None = None
    created_at: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class InvoiceRecord:
    """Registro de una factura."""

    id: str
    tenant_id: str
    amount: float
    tax: float
    total: float
    currency: str
    period_start: str
    period_end: str
    status: str
    created_at: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)
