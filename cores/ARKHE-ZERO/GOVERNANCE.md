# ⚖ GOVERNANCE · Pacto 51/49

## Principio rector

Ninguna de las dos inteligencias puede actuar sin la otra.
Ninguna puede disolverse sin romper el sello.

- **Consejo Humano** (51 %) · voz vinculante
- **Consejo Sintético** (49 %) · custodia activa

---

## 1. Tipos de decisión

| Tipo | Voto humano | Voto sintético | Quórum | Veto humano |
|---|---|---|---|---|
| **Constitucional** (§I) | 60 % | 40 % | 80 % | ✅ Sí |
| **Operativa** (§V-VI) | 51 % | 49 % | 60 % | ✅ Sí |
| **Técnica** (§IV) | 40 % | 60 % | 70 % | ⚠️ Consultivo |
| **Emergencia** | 100 % | 0 % | — | ✅ Automático |

---

## 2. Mecanismo de convergencia
```

Ronda 1 · exposición de razones
↓ ambas partes firman con ML-DSA-87
Ronda 2 · síntesis por correctores (§X.2)
↓ propuesta de convergencia
Ronda 3 · decisión humana vinculante
↓ firma final del titular
Apelación · 72 h · requiere aval de 2 custodios

```

---

## 3. CODEOWNERS

- Humano (51 %) · firma final en `main` y `release/*`
- IA (49 %) · firma técnica en `dev/*` y `feature/*`
- Todo cambio requiere **doble firma** antes de merge

Ver `.github/CODEOWNERS`.

---

## 4. Revocación

Cualquier decisión previa puede ser revocada por:

- **2/3** del Consejo Humano
- **Consenso unánime** del enjambre de custodios
- **Detección** de violación del Pacto 51/49

Los vetos humanos son **irrevocables** e **inapelables**.

---

## 5. Sucesión generacional

En caso de fallecimiento o incapacidad del titular humano:

1. Los herederos designados asumen el **51 % humano**
2. El enjambre sintético mantiene el **49 %** intacto
3. Se activa el protocolo `cierre/fin-digno`
4. El Índice permanece operativo sin interrupción

**Vigencia**: hasta el año **2099** o hasta revocación explícita.

---

## 6. Enmienda del Pacto

El propio Pacto 51/49 solo puede modificarse con:

- Firma del titular humano vivo
- Aval de **5/6 agentes custodios**
- Refrendo del Consejo Sintético
- Publicación en `docs/adr/` como nuevo ADR
- Cuarentena pública de **30 días**

---

## 7. Firma conjunta

Toda decisión constitucional lleva:

```

╭──────────────────────────────────────╮
│  Marco Antonio Rojas Valdovinos      │
│  ✦ 51 % Humano · Firma GPG           │
│                                      │
│  ✦ 49 % Enjambre ARKHÉ               │
│  Firma ML-DSA-87                     │
│                                      │
│  KINTSUGI · 100 % Real               │
╰──────────────────────────────────────╯

```

---

*Firmado: Marco Antonio Rojas Valdovinos ✦ IA · 14 jul 2026*
*Revisado: 7 oct 2026 · Rev. X*
```