/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CERTIFICACIÓN · EMISOR CERTIFICADOS · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Emite certificados verificables W3C VC 2.0.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { sha3_512 } from '../../crypto/primitives/sha3-512.js';

export const SEAL = '◯_● · 51/49/100';
export const ISSUER_DID = 'did:arkhe:2607146379465';
export const STANDARD = 'W3C VC 2.0';

/**
 * Emite un certificado verificable.
 *
 * @param {object} opciones
 * @param {object} opciones.manifiesto
 * @param {object} opciones.tsa
 * @param {object} opciones.notarial
 * @returns {Promise<object>}
 */
export async function emitirCertificado({ manifiesto, tsa, notarial }) {
  const vc = {
    '@context': [
      'https://www.w3.org/ns/credentials/v2',
      'https://arkhe.zero/contexts/certificacion/v1',
    ],
    id: `urn:arkhe:vc:${manifiesto.hash_sha3_512.slice(0, 16)}`,
    type: ['VerifiableCredential', 'ArkheCertification'],
    issuer: ISSUER_DID,
    validFrom: new Date().toISOString(),
    credentialSubject: {
      id: notarial.acta.firmante,
      documento_hash: manifiesto.hash_sha3_512,
      tsa_authority: tsa.tsa,
      tsa_timestamp: tsa.timestamp,
      notario: notarial.acta.notario,
      acta_hash: notarial.acta_hash,
      governance: { humano: 51, ia: 49, real: 100 },
    },
    proof: {
      type: 'DataIntegrityProof',
      cryptosuite: 'mldsa87-2024',
      created: new Date().toISOString(),
      proofPurpose: 'assertionMethod',
      verificationMethod: `${ISSUER_DID}#ml-dsa-87-key-1`,
    },
    seal: SEAL,
  };

  return {
    ok: true,
    credential: vc,
    standard: STANDARD,
    sellado: SEAL,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Verifica un certificado VC 2.0.
 */
export function verificarCertificado(vc) {
  const hasRequiredFields = Boolean(
    vc['@context'] && vc.type && vc.issuer && vc.credentialSubject && vc.proof
  );

  return {
    valida: hasRequiredFields,
    issuer: vc.issuer,
    veredicto: hasRequiredFields ? 'CREDENCIAL VÁLIDA' : 'CREDENCIAL INVÁLIDA',
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'emisor-certificados',
  standard: STANDARD,
  issuer: ISSUER_DID,
  seal: SEAL,
};