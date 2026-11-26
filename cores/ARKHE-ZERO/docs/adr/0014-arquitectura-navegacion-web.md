================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ADR-0014 · Arquitectura Navegación Web

- **Estado**: Aceptado
- **Fecha**: 2026-06-01
- **Decisor**: Marco Antonio Rojas Valdovinos

## 🜂 Contexto

¿Cómo estructurar la navegación web de +130 páginas?

## 🜃 Decisión

**Nav system auto-inyectable** por JavaScript:
- Un solo `nav-system.js`
- Detecta página activa
- Inyecta HTML consistente
- Rutas relativas automáticas

## 🜄 Ventajas

- DRY (no repetir código)
- Mantenimiento centralizado
- Sin framework (vanilla JS)
- Funciona en cualquier página

## 🜁 Alternativas

1. HTML repetido · Rechazada (mantenimiento)
2. React/Vue · Rechazada (overkill)
3. Nav auto-inyectable · ✅ Aceptada

---

`◯_● · 51/49/100 · ADR-0014`