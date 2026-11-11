# KTP-001-TM: MODELO DE AMENAZA (THREAT MODEL)

**Proyecto:** ARKHE-ZERO / SYCRO Legacy Shield
**Versión:** 1.0
**Autor:** Marco Antonio Rojas Valdovinos

## 1. Alcance y Supuestos
Este sistema protege la integridad y autenticidad de documentos digitales (legado) mediante firmas post-cuánticas. Asumimos que:
1. El entorno del cliente (navegador/terminal) puede estar comprometido.
2. La red de transmisión es hostil (Zero Trust).
3. Las computadoras cuánticas llegarán en los próximos 5-15 años (HNDL).

## 2. Vectores de Amenaza (STRIDE)

### 2.1. Harvest Now, Decrypt Later (HNDL)
- **Descripción:** Un atacante intercepta datos cifrados hoy y los almacena hasta que tenga una computadora cuántica para descifrarlos.
- **Mitigación:** Uso de ML-KEM (Kyber) para el intercambio de claves, garantizando que el tráfico interceptado hoy sea indescifrable en el futuro.

### 2.2. Manipulación de Documentos (Tampering)
- **Descripción:** Alteración silenciosa del documento original después de ser firmado.
- **Mitigación:** Hash SHA-256 inmutable + Firma ML-DSA-87. Cualquier cambio (incluso 1 bit) invalida la firma criptográfica.

### 2.3. Suplantación de Identidad (Spoofing)
- **Descripción:** Un atacante intenta hacerse pasar por el dueño del legado.
- **Mitigación:** Uso de llaves privadas robustas. En producción, las llaves residirán en un HSM/KMS, nunca en el navegador.

### 2.4. Repudio
- **Descripción:** El autor niega haber firmado un documento.
- **Mitigación:** La firma digital no repudiable (ML-DSA) y el registro de auditoría (audit logs) con timestamps inmutables.

### 2.5. Ataques de Fuerza Bruta Cuántica
- **Descripción:** Uso del algoritmo de Shor para romper RSA/ECC.
- **Mitigación:** Migración total a retículos (Lattice-based) como ML-DSA y ML-KEM (NIST FIPS 203/204).

## 3. Amenazas Fuera de Alcance (Out of Scope)
- Robo físico del dispositivo del usuario final.
- Ingeniería social al usuario (Phishing).
- Ataques a la infraestructura física del proveedor de nube (AWS/Vercel/Supabase).
