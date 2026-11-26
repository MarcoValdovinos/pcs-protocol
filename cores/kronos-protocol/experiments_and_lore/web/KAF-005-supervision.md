================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# KAF-005 — Supervisión humana

**Dominio 5 de 13.**

## Objetivo

Garantizar supervisión humana efectiva (EU AI Act Art. 14).

## Controles

| ID      | Nombre                        | Severidad | Auto |
| ------- | ----------------------------- | --------- | ---- |
| KAF-4.1 | Aprobación humana documentada | Critical  | ✅   |
| KAF-4.2 | Alertas automáticas           | High      | ✅   |
| KAF-4.3 | Kill switch                   | High      | ❌   |

## Requisitos

### Aprobación humana

Para agentes en nivel `supervisado`, cada acción requiere
`human_approval` con:

- DID del humano aprobador
- Timestamp
- Firma ECDSA

### Alertas automáticas

El sistema notifica al operador humano cuando:

- El agente intenta acción fuera de límites
- Se detecta anomalía en logs
- El colateral cae por debajo del mínimo

### Kill switch

Mecanismo de interrupción inmediata:

- Endpoint `POST /v1/agents/{id}/pause`
- Panel de control en dashboard
- Contacto directo con operador humano

## Evidencia

- Log de aprobaciones humanas
- Configuración de alertas
- Prueba de kill switch trimestral
