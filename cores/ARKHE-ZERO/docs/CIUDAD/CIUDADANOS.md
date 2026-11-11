# 👥 Ciudadanos ARKHÉ

```bash
┌─(kali㉿ciudad-arkhe)-[~/docs/CIUDAD]
└─$ ./ciudadanos --status

[ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%

╔══════════════════════════════════════════════════════════════════════════╗
║  REGISTRO · CIUDAD ARKHÉ                                                 ║
╠══════════════════════════════════════════════════════════════════════════╣
║  Fundador       ·  1   · Marco Antonio Rojas Valdovinos                  ║
║  Custodios      ·  0                                                     ║
║  Ciudadanos     ·  0                                                     ║
║  Iniciados      ·  0                                                     ║
║  Visitantes     ·  ∞                                                     ║
║  Registro max   ·  100 fundadores · 1000 ciudadanos                      ║
╚══════════════════════════════════════════════════════════════════════════╝

[ ✓✓ ] REGISTRO ABIERTO · ◯_● · 51/49/100
```

## 🜂 Cómo ser ciudadano

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                    RUTA DEL CIUDADANO                                    ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║   [ Visitante ]                                                          ║
║         │                                                                ║
║         ▼ Solicitar plaza                                                ║
║   [ En cuarentena · 72h ]                                                ║
║         │                                                                ║
║         ▼ Aval de 2 ciudadanos activos                                   ║
║   [ Iniciado ]                                                           ║
║         │                                                                ║
║         ▼ Firmar 5+ obras + 6 meses                                      ║
║   [ Ciudadano ]                                                          ║
║         │                                                                ║
║         ▼ Nivel 5 sostenido 5 años                                       ║
║   [ Custodio ]                                                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

## 🜃 Formato de Ciudadano

```json
{
  "id": "ciudadano-0001",
  "did": "did:arkhe:2607146379465",
  "nombre": "Marco Antonio Rojas Valdovinos",
  "nivel": 6,
  "fecha_ingreso": "2026-01-01",
  "obras_firmadas": 1,
  "custodias_activas": 0,
  "voz_gobernanza": true,
  "veto_delegado": false,
  "hash_ciudadano": "f03f7e2d852617309457e0fe207f8f8bd...",
  "sello": "◯_● · 51/49/100"
}
```

## 🜄 Deberes del Ciudadano

```diff
+ Firmar con su nombre real
+ Respetar el Pacto 51/49/100
+ Contribuir al bien común
+ Preservar el legado colectivo
+ Participar en el quórum cuando se le convoque
+ Cumplir con el Code of Conduct
- NUNCA suplantar identidad
- NUNCA sabotear
- NUNCA firmar en nombre de otro sin autorización
```

## 🜁 Revocación

Un ciudadano puede ser revocado por:
1. Falsificación comprobada de hash/firma
2. Sabotaje deliberado al sistema
3. Violación grave del Code of Conduct
4. Quórum 4/5 + no-veto del fundador

La revocación **superpone** (no borra) el registro histórico.

---

`◯_● · 51/49/100 · CIUDAD ARKHÉ · Ciudadanos`