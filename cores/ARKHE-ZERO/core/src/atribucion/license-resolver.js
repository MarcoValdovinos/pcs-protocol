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
 *  ▓▒░ CORE · ATRIBUCIÓN · LICENSE RESOLVER · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Resuelve qué licencia aplica según contexto.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

/**
 * Resuelve la licencia aplicable.
 *
 * @param {object} contexto
 * @param {string} contexto.uso
 * @param {boolean} contexto.es_comercial
 * @param {boolean} contexto.es_educativo
 * @returns {object}
 */
export function resolverLicencia({ uso = 'personal', es_comercial = false, es_educativo = false }) {
  if (es_comercial)  return { licencia: 'LGU',      razon: 'Uso comercial requiere LGU' };
  if (es_educativo)  return { licencia: 'LGU-EDU',  razon: 'Uso educativo permitido' };
  return { licencia: 'LGU-PERS', razon: 'Uso personal permitido', sellado: SEAL };
}

export const meta = {
  rol: 'license-resolver',
  seal: SEAL,
};
