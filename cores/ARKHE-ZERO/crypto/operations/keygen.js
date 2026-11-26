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
 *  ▓▒░ CRYPTO · OPERATIONS · KEYGEN · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Genera pares de claves para KEM y firma PQC.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import * as mlKem512  from '../primitives/ml-kem-512.js';
import * as mlKem768  from '../primitives/ml-kem-768.js';
import * as mlKem1024 from '../primitives/ml-kem-1024.js';
import * as mlDsa44   from '../primitives/ml-dsa-44.js';
import * as mlDsa65   from '../primitives/ml-dsa-65.js';
import * as mlDsa87   from '../primitives/ml-dsa-87.js';
import * as slhDsa    from '../primitives/slh-dsa-shake-256s.js';
import * as hybridEd  from '../hybrid/ed25519-mldsa87.js';
import * as hybridX   from '../hybrid/x25519-mlkem768.js';

export const ALGORITMOS = {
  KEM:    ['ML-KEM-512', 'ML-KEM-768', 'ML-KEM-1024', 'X25519+ML-KEM-768'],
  FIRMA:  ['ML-DSA-44', 'ML-DSA-65', 'ML-DSA-87', 'SLH-DSA-SHAKE-256s', 'Ed25519+ML-DSA-87'],
};
export const SEAL = '◯_● · 51/49/100';

export function keygen(alg) {
  switch (alg) {
    case 'ML-KEM-512':  return mlKem512.keygen();
    case 'ML-KEM-768':  return mlKem768.keygen();
    case 'ML-KEM-1024': return mlKem1024.keygen();
    case 'X25519+ML-KEM-768': return hybridX.keygen();
    case 'ML-DSA-44':   return mlDsa44.keygen();
    case 'ML-DSA-65':   return mlDsa65.keygen();
    case 'ML-DSA-87':   return mlDsa87.keygen();
    case 'SLH-DSA-SHAKE-256s': return slhDsa.keygen();
    case 'Ed25519+ML-DSA-87':  return hybridEd.keygen();
    default: throw new Error(`[ XX ] Algoritmo no soportado: ${alg}`);
  }
}

export const meta = { op: 'keygen', algos: ALGORITMOS, seal: SEAL };
