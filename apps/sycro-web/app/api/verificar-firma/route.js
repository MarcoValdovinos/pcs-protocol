import { NextResponse } from 'next/server';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa';
import { XMLParser } from 'fast-xml-parser';
import { TRUSTED_KEYS } from './keys.js';

function base64ToBytes(base64) {
  return new Uint8Array(Buffer.from(base64, 'base64'));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { xml, signatureBase64 } = body;

    // 1. Chequeo estructural (Pre-Parsing DoS)
    if (!xml || !signatureBase64) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }
    if (xml.length > 100000) { // Límite de 100KB
      return NextResponse.json({ error: 'Payload demasiado grande' }, { status: 413 });
    }

    // 2. Obtener llave pública desde el Registro Confiable (Zero-Trust)
    // NO aceptamos llaves del usuario.
    const issuer = "did:web:marco.valdovinos.sycro.io"; // Podría extraerse del XML, pero aquí lo fijamos
    const trustedPublicKey = TRUSTED_KEYS[issuer];

    if (!trustedPublicKey) {
      return NextResponse.json({ error: 'Emisor no registrado' }, { status: 401 });
    }

    const publicKeyBytes = base64ToBytes(trustedPublicKey);
    const signatureBytes = base64ToBytes(signatureBase64);
    const messageBytes = new TextEncoder().encode(xml);

    // 3. Verificación Criptográfica (Argumentos en orden correcto v0.7.1+)
    let isValid = false;
    try {
      isValid = ml_dsa65.verify(signatureBytes, messageBytes, publicKeyBytes);
    } catch (err) {
      return NextResponse.json({ status: 'INVALID', error: 'Error criptográfico' }, { status: 400 });
    }

    if (!isValid) {
      return NextResponse.json({ status: 'INVALID', error: 'Firma no coincide' }, { status: 401 });
    }

    // 4. Parseo de metadatos (SOLO DESPUÉS de verificar la firma)
    const parser = new XMLParser({ ignoreAttributes: false });
    const jsonObj = parser.parse(xml);

    if (!jsonObj.metadata || !jsonObj.metadata['dc:title']) {
      return NextResponse.json({ error: 'XML inválido' }, { status: 400 });
    }

    return NextResponse.json({
      status: 'VALID',
      metadata: {
        title: jsonObj.metadata['dc:title'],
        creator: jsonObj.metadata['dc:creator'],
        folio: jsonObj.metadata['dcterms:identifier'] || jsonObj.metadata['kronos:folio_cliente']
      },
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
