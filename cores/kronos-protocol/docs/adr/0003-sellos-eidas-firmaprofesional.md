================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ADR-0003 · Sellos eIDAS Firmaprofesional

- **Estado**: Aceptado
- **Fecha**: 2026-01-20
- **Decisor**: Marco Antonio Rojas Valdovinos

## 🜂 Contexto

Se necesita TSA (Time Stamping Authority) cualificada para sellar documentos con validez legal en la UE.

## 🜃 Decisión

Usar **Firmaprofesional QTSA** bajo el marco **eIDAS**.

Razones:

- QTSA acreditada en la EU Trust List
- RFC 3161 estándar
- Reconocimiento en los 27 países UE
- Disponible vía API HTTP

## 🜄 Consecuencias

**Positivas**:

- Sellos con validez legal internacional
- Reconocimiento ante tribunales UE
- Cumplimiento de estándar europeo

**Negativas**:

- Costo por sello
- Dependencia de proveedor UE
- Requiere conectividad

## 🜁 Alternativas

1. DigiCert TSA · Rechazada (menos reconocida)
2. Autoridad mexicana · Rechazada (no eIDAS)
3. TSA propia · Rechazada (no cualificada)

---

`◯_● · 51/49/100 · ADR-0003`
