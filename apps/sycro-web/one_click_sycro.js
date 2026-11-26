import fs from 'fs';
import crypto from 'crypto';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa.js';

// 1. La semilla secreta fija (sincronizada con Vercel)
const SEED_HEX = 'a1b2c3d4e5f60718293a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90';
const seed = Buffer.from(SEED_HEX, 'hex');
const keys = ml_dsa65.keygen(seed);

// 2. Crear el documento y calcular su hash
const fileContent = "Este es un contrato firmado por Marco Valdovinos el 15 de Noviembre de 2026. Propiedad Intelectual de SYCRO.";
const hash = crypto.createHash('sha256').update(fileContent).digest('hex');

// 3. Construir la Credencial Verificable W3C
const credential = {
    "@context": ["https://www.w3.org/2018/credentials/v1", "https://sycro.io/context/v1"],
    "id": `urn:uuid:${crypto.randomUUID()}`,
    "type": ["VerifiableCredential", "SycroDocumentNotarizationCredential"],
    "issuer": {
        "id": "did:web:marco.valdovinos.sycro.io",
        "name": "Marco Antonio Rojas Valdovinos"
    },
    "issuanceDate": new Date().toISOString(),
    "credentialSubject": {
        "id": `urn:sha256:${hash}`,
        "documentName": "MI_CONTRATO.txt",
        "documentHash": hash,
        "sovereignty": { "human": 51, "ai": 49, "standard": "SCDR-002" },
        "compliance": "NOM-151-SCFI-2016"
    }
};

// 4. Firmar con ML-DSA-65 (Orden correcto v0.7.1)
const messageBytes = new TextEncoder().encode(JSON.stringify(credential));
const signatureBytes = ml_dsa65.sign(messageBytes, keys.secretKey);
const signatureBase64 = Buffer.from(signatureBytes).toString('base64');

// 5. Añadir la prueba criptográfica
credential.proof = {
    "type": "MlDsa65Signature2026",
    "created": new Date().toISOString(),
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:web:marco.valdovinos.sycro.io#key-1",
    "publicKeyBase64": Buffer.from(keys.publicKey).toString('base64'),
    "signatureValue": signatureBase64
};

// 6. Guardar el archivo final
fs.writeFileSync('CONTRATO_VALIDO.json', JSON.stringify(credential, null, 2));

console.log("✅ PRODUCTO FINAL GENERADO EXITOSAMENTE");
console.log("📄 Archivo creado: CONTRATO_VALIDO.json");
console.log("🔗 Listo para subir a: https://sycro-valdovinos.vercel.app");
console.log("Public Key (primeros 30 chars): " + credential.proof.publicKeyBase64.substring(0, 30) + "...");
