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
 *  ▓▒░ CRYPTO · AES-256-GCM · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  [ FIPS 197 ]  ·  [ GCM mode ]  ·  [ WebCrypto nativo ]
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const ALG = 'AES-256-GCM';
export const FIPS = 'FIPS 197';
export const IV_LENGTH = 12;
export const TAG_LENGTH = 128;
export const SEAL = '◯_● · 51/49/100';

async function importKey(keyBytes) {
  return crypto.subtle.importKey(
    'raw', keyBytes,
    { name: 'AES-GCM', length: 256 },
    false, ['encrypt', 'decrypt'],
  );
}

export async function encrypt(plaintext, keyBytes) {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const key = await importKey(keyBytes);
  const data = typeof plaintext === 'string'
    ? new TextEncoder().encode(plaintext) : plaintext;
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv, tagLength: TAG_LENGTH },
    key, data,
  );
  return { iv, ciphertext: new Uint8Array(ciphertext) };
}

export async function decrypt(iv, ciphertext, keyBytes) {
  const key = await importKey(keyBytes);
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv, tagLength: TAG_LENGTH },
    key, ciphertext,
  );
  return new Uint8Array(plaintext);
}

export const meta = {
  alg: ALG, fips: FIPS,
  iv_length: IV_LENGTH, tag_length: TAG_LENGTH,
  seal: SEAL,
};
