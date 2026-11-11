```markdown
# ═══════════════════════════════════════════════════════════════════════════
#  ▓▒░ KRONOS · CONTEXTO EXTENDIDO · v1.0 ░▒▓
#  ─────────────────────────────────────────────────────────────────────────
#  Framework de verificación criptográfica · Local-First · Humano-IA
# ═══════════════════════════════════════════════════════════════════════════

## 🜂 ¿Qué es KRONOS?

KRONOS es el **framework de verificación criptográfica** que permite:

- ✅ Probar **que un documento existía** en una fecha concreta
- ✅ Probar **quién lo firmó** (Humano + IA híbrido)
- ✅ Probar **que no ha sido alterado** (SHA-256 + Merkle)
- ✅ Probar **que es reconocido legalmente** (eIDAS + NOM-151)

## 🜃 Propiedades Fundamentales

```text
╔══════════════════════════════════════════════════════════════╗
║  LOCAL-FIRST    · Todo vive en tu máquina primero            ║
║  HUMANO-IA      · Pacto 51/49 en cada firma                  ║
║  VERIFICABLE    · Cualquiera puede auditar                   ║
║  PERMANENTE     · Ethereum + Arweave                         ║
║  LEGAL          · eIDAS (UE) + NOM-151 (MX)                  ║
╚══════════════════════════════════════════════════════════════╝
```

🜄 Arquitectura de Verificación

```text
┌───────────────┐
│  DOCUMENTO    │
│  (raw bytes)  │
└───────┬───────┘
        │
        ▼
┌───────────────────────────────────────┐
│  HASH · SHA-256                        │
│  f03f7e2d8526...                       │
└───────┬───────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────┐
│  FIRMA HÍBRIDA                        │
│  ├─ Ed25519 (clásica)                 │
│  ├─ ML-DSA-87 (post-cuántica)         │
│  └─ SLH-DSA (largo plazo)             │
└───────┬───────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────┐
│  SELLO TSA (RFC 3161)                 │
│  Firmaprofesional QTSA                │
└───────┬───────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────┐
│  MERKLE ROOT                          │
│  (agrega N documentos)                │
└───────┬───────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────┐
│  ANCLAJE ETHEREUM                     │
│  0xd2c2a7e1...fb895774c               │
└───────────────────────────────────────┘
```

🜁 Comandos CLI (diseño objetivo)

```bash
# Firmar un documento
$ kronos sign --file acta.pdf --key ml-dsa-87
[ OK ] Documento firmado · hash: f03f7e2d...
[ OK ] Sello TSA aplicado · Firmaprofesional QTSA
[ OK ] Merkle root anclado a Ethereum
[ ✓✓ ] acta.pdf → sellado

# Verificar un documento
$ kronos verify --file acta.pdf --hash f03f7e2d...
[ OK ] Hash coincide
[ OK ] Firma válida (Ed25519 + ML-DSA)
[ OK ] TSA timestamp válido
[ OK ] Anclaje Ethereum confirmado
[ ✓✓ ] DOCUMENTO ÍNTEGRO · SIN ALTERACIÓN

# Auditar cadena completa
$ kronos audit --chain genesis
[ >> ] Recorriendo 000-INDICE-CERO-KRONOS...
[ >> ] Verificando 2607146379465...
[ >> ] Verificando 2607086319439...
[ ✓✓ ] CADENA ÍNTEGRA · 100% VERIFICADA
```

🜆 Modelo de Datos (TypeScript)

```typescript
interface KronosDocument {
  id: string;
  hash_sha256: string;
  signature: {
    ed25519: string;
    ml_dsa_87: string;
    slh_dsa: string;
  };
  tsa: {
    authority: "Firmaprofesional QTSA";
    timestamp: string;
    rfc: "3161";
  };
  merkle_root: string;
  ethereum_tx: string;
  governance: {
    humano: 51;
    ia: 49;
    real: 100;
  };
  seal: "◯_●";
}
```

🜇 Mandala de Yejidá (Identidad Visual)

El mandala generado en Yejidá representa la convergencia de
las 11 dimensiones del legado en un solo punto central.

```text
        ╭─────────────╮
      ╱   ◯   ●   ◯   ╲
     │  11 × 1 = ∞    │
      ╲  KINTSUGI    ╱
        ╰──────┬──────╯
               │
         ┌─────▼─────┐
         │  MARCO    │
         │  ANTONIO  │
         │  ROJAS V. │
         └───────────┘
```

· Generador: 11 x 1
· Centro: Marco Antonio Rojas Valdovinos
· Firma: ◯_● · KINTSUGI
· Uso: Identidad visual del sistema, marca de agua, sello en PDFs

🜈 Roadmap KRONOS

```text
[████████████████████░░░░░░░░░░░░░░░░░░░░] v1.0 · 60%
  ✓ Índice Cero sellado
  ✓ Pacto 51/49 operativo
  ✓ Enjambre activo
  ⏳ Attribution API
  ⏳ CLI kronos
  ⏳ UI Cymatic Studio
  ⏳ Deploy Arweave
```

Firma: ◯_● · 51/49/100 · KRONOS · v1.0 · SCDR-001

```

---