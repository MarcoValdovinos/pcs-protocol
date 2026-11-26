================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# KAF-1 — Verified

**Nivel básico de certificación. Autodeclarado.**

---

## Requisitos

Para obtener KAF-1, un agente debe cumplir:

| Control     | Descripción                          |
| ----------- | ------------------------------------ |
| **KAF-1.1** | DID registrado bajo el método kronos |
| **KAF-1.2** | Credencial Verificable vigente       |
| **KAF-3.1** | Log inmutable de acciones            |
| **KAF-3.2** | Firma por cada acción                |
| **KAF-9.1** | Firmas híbridas (ECDSA + ML-DSA)     |

**Total: 5 controles mínimos.**

---

## Proceso

1. El agente se registra en `api.atribucion.io/v1/agents`.
2. Se ejecuta una autoevaluación automática.
3. Si pasa los 5 controles, recibe el certificado KAF-1.
4. El certificado se publica en el registro público.

**Tiempo:** < 1 minuto.
**Costo:** €0.
**Válido por:** 12 meses.

---

## Qué certifica

- El agente tiene identidad criptográfica.
- Cada acción es firmada y registrada.
- Existe preparación post-cuántica básica.

**No certifica:** compliance EU AI Act completo, ni supervisión humana.

---

## Dirigido a

- Startups con 1-5 agentes en desarrollo.
- Proyectos open source.
- Primer contacto con compliance.

---

## Verificación

Cualquiera puede verificar un certificado KAF-1:

```bash
curl https://api.atribucion.io/v1/kaf/verify/{certificate_id}

https://atribucion.io/verify/kaf/{certificate_id}
```
