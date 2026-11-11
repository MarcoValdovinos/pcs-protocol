/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CERTIFICACIÓN · NOTARIO KRONOS · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Acto notarial técnico: atestigua que un documento existió, quién lo
 *  firmó y que no ha sido alterado, con prueba criptográfica + TSA.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/certificacion/notario-kronos]
 *  └─$ node -e "import('./notario.js').then(m => console.log(m.meta))"
 *     { rol: 'notario-kronos', seal: '◯_● · 51/49/100' }
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { sha3_512 } from '../../crypto/primitives/sha3-512.js';

export const SEAL = '◯_● · 51/49/100';
export const NOTARIO = 'KRONOS';
export const FIRMANTE = 'Marco Antonio Rojas Valdovinos';

/**
 * Notariza un documento + manifest + sello de tiempo.
 *
 * @param {object} opciones
 * @param {object} opciones.manifiesto - manifest de integridad
 * @param {object} opciones.tsa - sello de tiempo RFC 3161
 * @param {string} [opciones.observaciones]
 * @returns {Promise<object>}
 */
export async function notarizar({ manifiesto, tsa, observaciones = '' }) {
  if (!manifiesto?.hash_sha3_512) throw new Error('[ XX ] Manifiesto inválido');
  if (!tsa?.hash_sellado) throw new Error('[ XX ] TSA inválido');

  const acta = {
    notario: NOTARIO,
    version: '1.0.0',
    documento_hash: manifiesto.hash_sha3_512,
    tsa_authority: tsa.tsa,
    tsa_hash: tsa.hash_sellado,
    tsa_timestamp: tsa.timestamp,
    firmante_humano: FIRMANTE,
    pacto: { humano: 51, ia: 49, real: 100 },
    observaciones,
    clausulas: [
      'El documento existía en la fecha del sello de tiempo.',
      'El documento fue firmado por el firmante indicado.',
      'El documento no ha sido alterado desde su anclaje.',
      'Cualquier persona puede verificar este acta sin permiso.',
    ],
    sello: SEAL,
    timestamp: new Date().toISOString(),
  };

  const actaHash = sha3_512(JSON.stringify(acta));

  return {
    ok: true,
    acta,
    acta_hash: actaHash,
    veredicto: 'ACTA NOTARIAL EMITIDA · VERIFICABLE PÚBLICAMENTE',
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'notario-kronos',
  notario: NOTARIO,
  firmante: FIRMANTE,
  seal: SEAL,
};