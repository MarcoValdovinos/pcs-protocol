/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CIMIENTO · CRIPTO-CORE · FACADE UNIFICADA · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Punto único de acceso a las primitivas PQC + hash.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/cimiento/cripto-core]
 *  └─$ node -e "import('./core.js').then(m => console.log(Object.keys(m.core)))"
 *     [ 'sha3_512', 'verificarSha3_512', 'kem', 'dsa', 'slh', 'sign', 'verify', 'seal' ]
 * ═══════════════════════════════════════════════════════════════════════════
 */

import * as sha3 from '../../crypto/primitives/sha3-512.js';
import * as mldsa from '../../crypto/primitives/ml-dsa-87.js';
import * as mlkem from '../../crypto/primitives/ml-kem-1024.js';
import * as slhdsa from '../../crypto/primitives/slh-dsa-shake-256s.js';
import { sign as opSign } from '../../crypto/operations/sign.js';
import { verify as opVerify } from '../../crypto/operations/verify.js';

export const SEAL = '◯_● · 51/49/100';

export const core = {
  // ─── Hash ─────────────────────────────────────────────────
  sha3_512: sha3.sha3_512,
  verificarSha3_512: sha3.verificarSha3_512,

  // ─── KEM ──────────────────────────────────────────────────
  kem: {
    keygen: mlkem.keygen,
    encapsulate: mlkem.encapsulate,
    decapsulate: mlkem.decapsulate,
  },

  // ─── Firma PQC ────────────────────────────────────────────
  dsa: {
    keygen: mldsa.keygen,
    sign: mldsa.sign,
    verify: mldsa.verify,
  },

  // ─── Firma largo plazo ────────────────────────────────────
  slh: {
    keygen: slhdsa.keygen,
    sign: slhdsa.sign,
    verify: slhdsa.verify,
  },

  // ─── Operaciones de alto nivel ────────────────────────────
  sign: opSign,
  verify: opVerify,

  seal: SEAL,
};

export const meta = {
  rol: 'cripto-core',
  seal: SEAL,
};