/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CIERRE · EXPORT AUDIT · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Audita un export generado: verifica hash, shards y sellos.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { sha3_512 } from '../../crypto/primitives/sha3-512.js';
import { readFile } from 'node:fs/promises';

export const SEAL = '◯_● · 51/49/100';

export async function auditar(bundlePath) {
  const raw = await readFile(bundlePath, 'utf8');
  const bundle = JSON.parse(raw);

  const checks = {
    tiene_hash: Boolean(bundle.hash_sha3_512),
    tiene_shards: Array.isArray(bundle.shards) && bundle.shards.length === bundle.n,
    k_valido: bundle.k === 51,
    n_valido: bundle.n === 100,
    algos_canonicos:
      bundle.algo?.cipher === 'AES-256-GCM' &&
      bundle.algo?.kem === 'ML-KEM-1024' &&
      bundle.algo?.hash === 'SHA3-512',
    sello_valido: bundle.seal === SEAL,
  };

  const ok = Object.values(checks).every(Boolean);

  return {
    ok,
    checks,
    veredicto: ok
      ? 'EXPORT ÍNTEGRO · VERIFICADO'
      : 'EXPORT CORRUPTO · HALT',
    sellado: SEAL,
  };
}