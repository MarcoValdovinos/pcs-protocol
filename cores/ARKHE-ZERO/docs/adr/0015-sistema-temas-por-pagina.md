================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ADR-0015 · Sistema Temas por Página

- **Estado**: Aceptado
- **Fecha**: 2026-06-15
- **Decisor**: Marco Antonio Rojas Valdovinos

## 🜂 Contexto

¿Cómo diferenciar visualmente las páginas sin perder consistencia?

## 🜃 Decisión

**Temas por página** con CSS custom properties:
- `terminal-amber` (default · hub)
- `terminal-gold` (KINTSUGI · manifiesto)
- `terminal-green` (verificar · éxito)
- `terminal-cyan` (firmar · nuevo)
- `terminal-red` (404 · HALT)

## 🜄 Implementación

```html
<body data-page="verificar" data-theme="terminal-green">
```

```css
[data-theme="terminal-green"] {
  --accent: #00ff9f;
  --accent-2: #00d4ff;
}
```

## 🜁 Alternativas

1. Un solo tema · Rechazada (monótono)
2. Temas aleatorios · Rechazada (confuso)
3. Temas por página · ✅ Aceptada

---

`◯_● · 51/49/100 · ADR-0015`