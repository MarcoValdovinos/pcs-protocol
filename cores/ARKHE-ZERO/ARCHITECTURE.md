# 🏗 ARCHITECTURE · ARKHÉ ZERO

---

## Visión general

ARKHÉ ZERO es una arquitectura desacoplada de tres planos:

```

┌────────────────────────────────────────────┐
│ PLANO DE AGENTES                           │
│ Enjambre IA · MCP · Consenso 4/5           │
└────────────────┬───────────────────────────┘
│
┌────────────────▼───────────────────────────┐
│ PLANO DE SERVICIOS                         │
│ Microservicios · PQC · K8s · Kafka         │
└────────────────┬───────────────────────────┘
│
┌────────────────▼───────────────────────────┐
│ PLANO DE DATOS                             │
│ IFC · Hashes · Cápsulas · Blockchain       │
└────────────────────────────────────────────┘

```

---

## Componentes principales

### 1 · Núcleo criptográfico
- ML-KEM-1024 (encapsulamiento)
- ML-DSA-87 (firmas digitales)
- SLH-DSA-SHAKE-256s (larga duración)
- SHA-3-512 (integridad)

### 2 · Sistema de registro
- Génesis · marca temporal · doble firma
- Huella cognitiva · co-autoría híbrida
- Cápsulas multiplanares

### 3 · Enjambre de agentes
- 6 culturales (náhuatl)
- 6 oficios numerados (090-095)
- MCP server · consenso 4/5 · veto humano

### 4 · Provenance
- C2PA v2.1 · Content Credentials
- Watermarking invisible
- Fingerprinting perceptual

### 5 · Custodia
- Blockchain Ethereum
- Múltiples réplicas geográficas
- Redundancia multiplanar

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | HTML5 · CSS3 · JS vanilla |
| Backend | Node.js · Python · FastAPI |
| Criptografía | liboqs · WebCrypto |
| Blockchain | Ethereum · Hardhat |
| Infraestructura | K8s · Docker · Terraform |
| CI/CD | GitHub Actions |

---

## Flujos principales

### Registrar una obra
```

Usuario → Firma GPG
→ Hash SHA-256
→ Sello eIDAS
→ Anclaje Ethereum
→ Certificado PDF
→ Publicación en Índice

```

### Verificar una obra
```

Hash → Consulta Safe Creative
→ Verificación blockchain
→ Comparación triple hash
→ Resultado ✓ / ✗

```

---

## Seguridad

- TLS 1.3 obligatorio
- ML-KEM híbrido en handshake
- Rechazo de TLS 1.2
- Crypto-agility cada 24 meses
- HSM para claves privadas

---

*Bajo §0 del Repertorio · Capa 0 · Identidad*
```
---