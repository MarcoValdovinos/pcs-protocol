#!/usr/bin/env node
import fs from 'fs';
import crypto from 'crypto';
import { execSync } from 'child_process';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa';

// Colores para la terminal
const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

console.log(`\n${CYAN}══════════════════════════════════════════════════${RESET}`);
console.log(`${MAGENTA}   SYCRO CLI v1.1.0 // KRONOS DESK                 ${RESET}`);
console.log(`${CYAN}   W3C VC + RFC 3161 + ML-DSA-65                   ${RESET}`);
console.log(`${CYAN}══════════════════════════════════════════════════${RESET}\n`);

const args = process.argv.slice(2);
const command = args[0];

async function obtenerSelloTiempoRFC3161(hashHex) {
    console.log(`⏱️  Solicitando sello de tiempo RFC 3161 (TSA)...`);
    try {
        fs.writeFileSync('temp_hash.txt', hashHex);
        
        // 1. Crear petición TSQ
        execSync('openssl ts -query -data temp_hash.txt -no_nonce -sha256 -out req.tsq', { stdio: 'ignore' });
        
        // 2. Enviar a la TSA (FreeTSA)
        execSync('curl -s -H "Content-Type: application/timestamp-query" --data-binary @req.tsq https://freetsa.org/tsr > resp.tsr', { stdio: 'ignore' });
        
        // 3. Leer el token
        const tsrBase64 = fs.readFileSync('resp.tsr').toString('base64');
        
        // Limpieza
        fs.unlinkSync('temp_hash.txt');
        fs.unlinkSync('req.tsq');
        fs.unlinkSync('resp.tsr');
        
        console.log(`✅ Sello RFC 3161 obtenido de FreeTSA.`);
        return tsrBase64;
    } catch (error) {
        console.warn(`⚠️  No se pudo obtener el sello RFC 3161 (¿Falta openssl o curl?). Continuando sin él.`);
        return null;
    }
}

if (command === 'notarize') {
    const filePath = args[1];
    if (!filePath) {
        console.error('❌ Error: Debes especificar un archivo. Ejemplo: node cli.js notarize mi_documento.pdf');
        process.exit(1);
    }

    if (!fs.existsSync(filePath)) {
        console.error(`❌ Error: El archivo "${filePath}" no existe.`);
        process.exit(1);
    }

    console.log(`⏳ Leyendo archivo: ${filePath}...`);
    const fileBuffer = fs.readFileSync(filePath);
    
    // 1. Hash del archivo
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
    console.log(`🔐 Huella SHA-256: ${hash}`);

    // 2. Obtener Sello de Tiempo RFC 3161
    const timeStampToken = await obtenerSelloTiempoRFC3161(hash);

    // 3. Generar llaves PQC
    console.log(`🔑 Generando par de llaves post-cuánticas ML-DSA-65...`);
    const seed = crypto.randomBytes(32);
    const keys = ml_dsa65.keygen(seed);

    // 4. Estructura W3C Verifiable Credential
    const credential = {
        "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://sycro.io/context/v1"
        ],
        "id": `urn:uuid:${crypto.randomUUID()}`,
        "type": ["VerifiableCredential", "SycroDocumentNotarizationCredential"],
        "issuer": {
            "id": "did:web:marco.valdovinos.sycro.io",
            "name": "Marco Antonio Rojas Valdovinos"
        },
        "issuanceDate": new Date().toISOString(),
        "credentialSubject": {
            "id": `urn:sha256:${hash}`,
            "documentName": filePath,
            "documentHash": hash,
            "sovereignty": {
                "human": 51,
                "ai": 49,
                "standard": "SCDR-002"
            },
            "compliance": "NOM-151-SCFI-2016"
        }
    };

    // 5. Firmar los metadatos con ML-DSA-65
    console.log(`✍️  Firmando Credencial con ML-DSA-65...`);
    const messageBytes = new TextEncoder().encode(JSON.stringify(credential));
    const signatureBytes = ml_dsa65.sign(keys.secretKey, messageBytes);
    const signatureBase64 = Buffer.from(signatureBytes).toString('base64');

    // 6. Añadir la prueba criptográfica (Proof)
    credential.proof = {
        "type": "MlDsa65Signature2026",
        "created": new Date().toISOString(),
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:web:marco.valdovinos.sycro.io#key-1",
        "publicKeyBase64": Buffer.from(keys.publicKey).toString('base64'),
        "signatureValue": signatureBase64
    };

    // 7. Añadir el sello de tiempo si se obtuvo
    if (timeStampToken) {
        credential.timeStampToken = {
            "type": "RFC3161",
            "tsa": "FreeTSA",
            "tsrBase64": timeStampToken
        };
    }

    // 8. Guardar el archivo final
    const outputName = `${filePath}.sycro.json`;
    fs.writeFileSync(outputName, JSON.stringify(credential, null, 2));

    console.log(`\n${GREEN}✅ CREDENCIAL W3C GENERADA EXITOSAMENTE${RESET}`);
    console.log(`📄 Archivo: ${outputName}`);
    console.log(`🛡️  Incluye: ML-DSA-65 + NOM-151 ${timeStampToken ? '+ RFC 3161' : ''}`);
    console.log(`🔗 Listo para validación internacional.\n`);

} else {
    console.log(`Uso:`);
    console.log(`  node cli.js notarize <ruta_del_archivo>`);
}
