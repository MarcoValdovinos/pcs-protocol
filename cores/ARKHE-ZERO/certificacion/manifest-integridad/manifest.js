/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CERTIFICACIÓN · MANIFEST INTEGRIDAD · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Construye el manifest de integridad: hash SHA3-512 + firma híbrida
 *  Ed25519 + ML-DSA-87. Ancla el contenido a una identidad verificable.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/certificacion/manifest-integridad]
 *  └─$ node -e "import('./manifest.js').then(m => console.log(m.meta))"
 *     { rol: 'manifest-integridad', seal: '◯_● · 51/49/100' }
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { sha3_512 } from '../../crypto/primitives/sha3-512.js';
import * as hybrid from '../../crypto/hybrid/ed25519-mldsa87.js';

export const SEAL = '◯_● · 51/49/100';

/**
 * Construye un manifest de integridad.
 *
 * @param {object} opciones
 * @param {string|Uint8Array} opciones.contenido
 * @param {object} [opciones.secretKey] - claves híbridas (opcional)
 * @param {object} [opciones.meta] - metadatos adicionales
 * @returns {object}
 */
export function construirManifest({ contenido, secretKey, meta = {} }) {
  const hash = sha3_512(contenido);

  let firma = null;
  if (secretKey) {
    firma = hybrid.sign(secretKey, contenido);
  }

  return {
    ok: true,
    version: '1.0.0',
    hash_sha3_512: hash,
    firma_hibrida: firma,
    meta: {
      governance: { humano: 51, ia: 49, real: 100 },
      ...meta,
    },
    timestamp: new Date().toISOString(),
    sellado: SEAL,
  };
}

/**
 * Verifica la integridad de un manifest contra su contenido.
 */
export function verificarIntegridad(manifest, contenido, publicKey) {
  const hashActual = sha3_512(contenido);
  const hashOk = hashActual === manifest.hash_sha3_512;

  let firmaOk = true;
  if (manifest.firma_hibrida && publicKey) {
    firmaOk = hybrid.verify(publicKey, manifest.firma_hibrida.firma, contenido).valida;
  }

  const ok = hashOk && firmaOk;

  return {
    ok,
    hash_ok: hashOk,
    firma_ok: firmaOk,
    hash_actual: hashActual,
    hash_manifest: manifest.hash_sha3_512,
    veredicto: ok
      ? 'MANIFEST ÍNTEGRO · SIN ALTERACIÓN'
      : 'MANIFEST ALTERADO · HALT',
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'manifest-integridad',
  seal: SEAL,
};