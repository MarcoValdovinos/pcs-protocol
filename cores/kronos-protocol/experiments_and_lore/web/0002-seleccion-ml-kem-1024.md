================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ADR-0002 · Selección de ML-KEM-1024

- **Estado**: Aceptado
- **Fecha**: 2026-01-15
- **Decisor**: Marco Antonio Rojas Valdovinos

## 🜂 Contexto

Se necesita un KEM (Key Encapsulation Mechanism) post-cuántico
para proteger claves compartidas en el sistema.

## 🜃 Decisión

Usar **ML-KEM-1024** (antes Kyber1024) según FIPS 203.

Razones:

- NIST lo estandarizó en 2024 (FIPS 203)
- Nivel 5 de seguridad post-cuántica
- ~256 bits clásicos, ~192 bits PQC
- Implementación disponible en @noble/post-quantum

## 🜄 Consecuencias

**Positivas**:

- Resistente a Shor
- Estándar NIST
- Librería mantenida

**Negativas**:

- Claves grandes (1568 bytes públicas)
- Latencia mayor que X25519
- Nuevo (poco auditado aún)

## 🜁 Alternativas consideradas

1. ML-KEM-512 · Rechazada (nivel 1, insuficiente)
2. ML-KEM-768 · Rechazada (nivel 3, preferimos 5)
3. RSA-4096 · Rechazada (vulnerable a Shor)

---

`◯_● · 51/49/100 · ADR-0002`
