# 🛡 SEGURIDAD · Política PQC

## Criptografía
- ML-KEM-1024 (FIPS 203)
- ML-DSA-87 (FIPS 204)
- SLH-DSA-SHAKE-256s (FIPS 205)

## Prohibidos
- RSA, ECDSA, EdDSA (retirados 2026-01-01)

## Capas de seguridad

┌─────────────────────────────────────────┐
│ CAPA 5 · SLH-DSA (LARGA DURACIÓN)       │
│ Firmas de archivo · 100+ años           │
├─────────────────────────────────────────┤
│ CAPA 4 · ML-DSA (FIRMAS)                │
│ Identidad · Transacciones               │
├─────────────────────────────────────────┤
│ CAPA 3 · ML-KEM (ENCAPSULAMIENTO)       │
│ Intercambio de claves · TLS 1.3         │
├─────────────────────────────────────────┤
│ CAPA 2 · AES-GCM (CIFRADO SIMÉTRICO)    │
│ Datos en reposo · Cápsulas              │
├─────────────────────────────────────────┤
│ CAPA 1 · SHA-3 (INTEGRIDAD)             │
│ Hashes · Verificación                   │
└─────────────────────────────────────────┘

## Divulgación
- seguridad@arkhe.zero
- PGP: 0xARKHE51·49ZERO4·9
- Respuesta: 24h a 14 días según severidad

## Recompensas
- Sello ARKHÉ nominal
- Firma ML-DSA-87
- Mención en CONTRIBUTORS.md

## Firma
◯_●  KINTSUGI · 51/49/100