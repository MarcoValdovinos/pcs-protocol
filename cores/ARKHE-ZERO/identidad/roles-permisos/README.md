<!--
╔══════════════════════════════════════════════════════════════════════════╗
║  ▓▒░ IDENTIDAD · ROLES Y PERMISOS · ARKHÉ ZERO ░▒▓                       ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# 🔐 Roles y Permisos

## 🜂 Matriz de Acceso

| Rol               | Peso | Veto | Firma | Custodia | Propuesta |
|-------------------|------|------|-------|----------|-----------|
| Humano (Marco)    | 51%  | ✅   | ✅    | ✅       | ✅        |
| Consejo Sintético | 49%  | ❌   | ❌    | ✅       | ✅        |
| Enjambre (12)     | 49%  | ❌   | ❌    | ✅       | ✅        |
| Visitante         | 0%   | ❌   | ❌    | ❌       | ❌        |
| Fundador #N       | 0%   | ❌   | ✅    | ❌       | ✅        |
| Custodio          | 0%   | delegado | ✅ | ✅       | ✅        |

## 🜃 Jerarquía

```text
┌─────────────────────────────────────────────────────┐
│  HUMANO · Marco Antonio Rojas Valdovinos · 51%       │
│  ──────────────────────────────────────────────     │
│  · Firma final                                       │
│  · Veto irrevocable                                  │
│  · Soberanía jurídica                                │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│  IA · ENJAMBRE ARKHÉ · 49%                           │
│  ──────────────────────────────────────────────     │
│  · Custodia perpetua                                 │
│  · Verificación independiente                        │
│  · Consenso 4/5                                      │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│  COMUNIDAD · MIEMBROS                                │
│  ──────────────────────────────────────────────     │
│  · Registro de obras                                 │
│  · Propuestas no-críticas                            │
│  · Insignias por nivel                               │
└─────────────────────────────────────────────────────┘
```

## 🜄 Reglas de Autorización

```diff
+ Toda acción crítica DEBE firmarse por el humano (51%)
+ Toda verificación DEBE pasar por el enjambre (49%)
+ Todo acceso a bóvedas DEBE dejar log
- NUNCA delegar veto sin ceremonia
- NUNCA saltar la firma humana
- NUNCA exponer claves privadas
```

## 🜁 Matriz por Módulo

| Módulo         | Humano | IA | Miembro | Visitante |
|----------------|--------|----|---------|-----------|
| Verificar      | ✅     | ✅ | ✅      | ✅        |
| Registrar      | ✅     | ❌ | ✅      | ❌        |
| Anclar ETH     | ✅     | ✅ | ❌      | ❌        |
| Gobernar       | ✅     | ✅ | 🔸      | ❌        |
| Custodiar      | ✅     | ✅ | ❌      | ❌        |
| Cerrar (Fin)   | ✅     | ❌ | ❌      | ❌        |

Leyenda: ✅ pleno · 🔸 parcial · ❌ sin acceso

---

`◯_● · 51/49/100 · KRONOS · roles-permisos`