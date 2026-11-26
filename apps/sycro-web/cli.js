================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


#!/usr/bin/env node
import fs from 'fs';
import crypto from 'crypto';
import { execSync } from 'child_process';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa.js';

const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

console.log(`\n${CYAN}══════════════════════════════════════════════════${RESET}`);
console.log(`${MAGENTA}   SYCRO CLI // KRONOS DESK (NIST FIPS 204)       ${RESET}`);
console.log(`${CYAN}   Gobernanza 51% Humano / 49% IA                 ${RESET}`);
console.log(`${CYAN}══════════════════════════════════════════════════${RESET}\n`);

const args = process.argv.slice(2);
const command = args[0];

// Semilla fija (idéntica a la que usa Vercel)
const SEED_HEX = process.env.SEED_HEX || '';

async function obtenerSelloTiempoRFC3161(hashHex) {
    console.log(`⏱️  Solicitando sello de tiempo RFC 3161...`);
    try {
        fs.writeFileSync('temp_hash.txt', hashHex);
        execSync('openssl ts -query -data temp_hash.txt -no_nonce -sha256 -out req.tsq', { stdio: 'ignore' });
        execSync('curl -s -H "Content-Type: application/timestamp-query" --data-binary @req.tsq https://freetsa.org/tsr > resp.tsr', { stdio: 'ignore' });
        const tsrBase64 = fs.readFileSync('resp.tsr').toString('base64');
        fs.unlinkSync('temp_hash.txt');
        fs.unlinkSync('req.tsq');
        fs.unlinkSync('resp.tsr');
        console.log(`✅ Sello RFC 3161 obtenido.`);
        return tsrBase64;
    } catch (error) {
        console.warn(`⚠️  No se pudo obtener el sello RFC 3161. Continuando sin él.`);
        return null;
    }
}

if (command === 'notarize') {
    const filePath = args[1];
    if (!filePath || !fs.existsSync(filePath)) {
        console.error(`❌ Error: El archivo "${filePath}" no existe.`);
        process.exit(1);
    }

    console.log(`⏳ Leyendo archivo: ${filePath}...`);
    const fileBuffer = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
    console.log(`🔐 Huella SHA-256: ${hash}`);

    const timeStampToken = await obtenerSelloTiempoRFC3161(hash);

    console.log(`🔑 Usando llave fija (sincronizada con Vercel)...`);
    const seed = Buffer.from(SEED_HEX, 'hex');
    const keys = ml_dsa65.keygen(seed);

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
            "documentName": filePath,
            "documentHash": hash,
            "sovereignty": { "human": 51, "ai": 49, "standard": "SCDR-002" },
            "compliance": "NOM-151-SCFI-2016"
        }
    };

    console.log(`✍️  Firmando Credencial con ML-DSA-65...`);
    const messageBytes = new TextEncoder().encode(JSON.stringify(credential));
    const signatureBytes = ml_dsa65.sign(messageBytes, keys.secretKey);
    const signatureBase64 = Buffer.from(signatureBytes).toString('base64');

    credential.proof = {
        "type": "MlDsa65Signature2026",
        "created": new Date().toISOString(),
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:web:marco.valdovinos.sycro.io#key-1",
        "publicKeyBase64": Buffer.from(keys.publicKey).toString('base64'),
        "signatureValue": signatureBase64
    };

    if (timeStampToken) {
        credential.timeStampToken = {
            "type": "RFC3161",
            "tsa": "FreeTSA",
            "tsrBase64": timeStampToken
        };
    }

    const outputName = `${filePath}.sycro.json`;
    fs.writeFileSync(outputName, JSON.stringify(credential, null, 2));

    console.log(`\n${GREEN}✅ CREDENCIAL W3C GENERADA EXITOSAMENTE${RESET}`);
    console.log(`📄 Archivo: ${outputName}`);
    console.log(`🛡️  Incluye: ML-DSA-65 + NOM-151 ${timeStampToken ? '+ RFC 3161' : ''}`);
    console.log(`🔗 Listo para validación internacional.\n`);

} else {
    console.log(`Uso: node cli.js notarize <ruta_del_archivo>`);
}
