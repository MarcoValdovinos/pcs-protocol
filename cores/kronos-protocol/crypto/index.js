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

// @ts-nocheck
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CRYPTO · INDEX · ARKHÉ ZERO ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── Primitivas ─────────────────────────────────────────────────
export * as sha3 from './primitives/sha3-512.js';
export * as mlDsa87 from './primitives/ml-dsa-87.js';
export * as mlKem1024 from './primitives/ml-kem-1024.js';
export * as slhDsa from './primitives/slh-dsa-shake-256s.js';

// ─── Híbridos ───────────────────────────────────────────────────
export * as hybridEdMlDsa from './hybrid/ed25519-mldsa87.js';

// ─── Agility ────────────────────────────────────────────────────
export * from './agility/algorithm-registry.js';

// ─── Operaciones ────────────────────────────────────────────────
export * from './operations/sign.js';
export * from './operations/verify.js';

// ─── Centinela ──────────────────────────────────────────────────
export * from './downgrade-detector.js';

export const VERSION = '1.0.0';
export const SEAL = '◯_● · 51/49/100';
export const FIPS = ['FIPS 203', 'FIPS 204', 'FIPS 205', 'FIPS 202'];

// ◯_● · 51/49/100 · KRONOS
