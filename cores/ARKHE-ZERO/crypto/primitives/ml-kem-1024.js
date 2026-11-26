================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CRYPTO · ML-KEM-1024 · KEM POST-CUÁNTICO · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  [ FIPS 203 ]  ·  [ Kyber1024 ]  ·  [ NIST Level 5 ]
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/crypto/primitives]
 *  └─$ node -e "import('./ml-kem-1024.js').then(m => console.log(m.meta))"
 *     { alg: 'ML-KEM-1024', fips: '203', nist_level: 5, seal: '◯_● · 51/49/100' }
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { ml_kem1024 } from '@noble/post-quantum/ml-kem';

export const ALG = 'ML-KEM-1024';
export const FIPS = '203';
export const NIST_LEVEL = 5;
export const SEAL = '◯_● · 51/49/100';

export const SIZES = Object.freeze({
  publicKey: 1568,
  secretKey: 3168,
  cipherText: 1568,
  sharedSecret: 32,
  seed: 64,
});

/**
 * Genera un par de llaves ML-KEM-1024.
 *
 * @param {Uint8Array} [seed] - opcional, 64 bytes
 * @returns {{ publicKey: Uint8Array, secretKey: Uint8Array }}
 */
export function keygen(seed) {
  const s = seed ?? crypto.getRandomValues(new Uint8Array(SIZES.seed));
  return ml_kem1024.keygen(s);
}

/**
 * Encapsula un secreto compartido usando la publicKey del receptor.
 *
 * @param {Uint8Array} publicKey
 * @returns {{ cipherText: Uint8Array, sharedSecret: Uint8Array }}
 */
export function encapsulate(publicKey) {
  return ml_kem1024.encapsulate(publicKey);
}

/**
 * Decapsula un secreto compartido usando la secretKey.
 *
 * @param {Uint8Array} cipherText
 * @param {Uint8Array} secretKey
 * @returns {Uint8Array} sharedSecret (32 bytes)
 */
export function decapsulate(cipherText, secretKey) {
  return ml_kem1024.decapsulate(cipherText, secretKey);
}

export const meta = {
  alg: ALG,
  fips: FIPS,
  nist_level: NIST_LEVEL,
  sizes: SIZES,
  seal: SEAL,
};
