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
 *  ▓▒░ CERTIFICACIÓN · VERIFICADOR PÚBLICO · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Cualquiera puede verificar sin permisos. Local-First.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { sha3_512 } from '../../crypto/primitives/sha3-512.js';

export const SEAL = '◯_● · 51/49/100';
export const INDEX_ZERO_SHA256 = 'f03f7e2d852617309457e0fe207f8f8bd2627d0b723de02f3b0ce05767219112';

/**
 * Verifica un hash y/o contenido.
 *
 * @param {object} opciones
 * @param {string} opciones.hash
 * @param {string} [opciones.contenido]
 * @returns {object}
 */
export function verificar({ hash, contenido }) {
  const hashValido = /^[0-9a-f]{64,128}$/i.test(hash);

  let contenidoOk = null;
  if (contenido) {
    contenidoOk = sha3_512(contenido) === hash.toLowerCase();
  }

  const esIndiceCero = hash.toLowerCase() === INDEX_ZERO_SHA256;

  const ok = hashValido && (contenidoOk !== false);

  return {
    ok,
    hash,
    hash_valido: hashValido,
    contenido_ok: contenidoOk,
    es_indice_cero: esIndiceCero,
    veredicto: esIndiceCero
      ? '✅ ANCLADO AL ÍNDICE CERO · VERIFICADO'
      : contenidoOk === true
        ? '✅ HASH ÍNTEGRO · CONTENIDO COINCIDE'
        : contenidoOk === false
          ? '❌ ALTERACIÓN DETECTADA · HALT'
          : '⚠️ HASH VÁLIDO · SIN ANCLAJE AL ÍNDICE CERO',
    verificable_por: 'CUALQUIERA · SIN PERMISO',
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'verificador-publico',
  access: 'public',
  seal: SEAL,
};
