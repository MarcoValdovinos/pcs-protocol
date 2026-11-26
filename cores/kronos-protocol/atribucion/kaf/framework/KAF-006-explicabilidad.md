================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# KAF-006 — Explicabilidad

**Dominio 6 de 13.**

## Objetivo

Garantizar el derecho a explicación de decisiones automatizadas
(EU AI Act Art. 22).

## Controles

| ID      | Nombre                          | Severidad | Auto |
| ------- | ------------------------------- | --------- | ---- |
| KAF-5.1 | Reasoning documentado           | Critical  | ✅   |
| KAF-5.2 | Razonamiento hasheado y anclado | High      | ✅   |
| KAF-5.3 | Endpoint público de explicación | Medium    | ✅   |

## Requisitos

### Reasoning obligatorio

Para agentes en nivel `autonomo`, cada acción requiere `reasoning`
con la justificación de la decisión.

### Hash + anclaje

El reasoning se hashea (SHA-256 + SHA-3) y se ancla a Ethereum
en el mismo lote de la acción.

### Explicación pública

Endpoint `GET /v1/agents/{id}/actions/{action_id}/explanation`
devuelve el reasoning original (si el usuario lo autoriza).

## Formato del reasoning

- Mínimo: 20 caracteres
- Máximo: 4.000 caracteres
- Idioma: libre, especificado en metadata

## Ejemplo

```json
{
  "reasoning": "Señal alcista confirmada por 3 indicadores: RSI < 30, MACD crossover, volumen +25%. Operación dentro de límites de riesgo."
}
```
