/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ GOBERNANZA · QUÓRUM · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Valida si una propuesta alcanzó el quórum 4/5 y no fue vetada.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/gobernanza/quorum-mayorias]
 *  └─$ node -e "import('./quorum.js').then(m => console.log(m.REGLAS))"
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { obtener } from '../propuestas-votacion/proponer.js';

export const SEAL = '◯_● · 51/49/100';
export const QUORUM_REQUERIDO = 4;
export const MAX_VOTANTES = 5;

export const REGLAS = Object.freeze([
  'Quórum mínimo: 4 de 5 votantes.',
  'Veto humano: siempre activo.',
  'Firma final: requiere consenso + no-veto.',
  'Irrevocable una vez firmado.',
]);

/**
 * Valida el quórum de una propuesta.
 *
 * @param {string} propuestaId
 * @returns {object}
 */
export function validarQuorum(propuestaId) {
  const prop = obtener(propuestaId);
  if (!prop) throw new Error(`[ XX ] Propuesta no encontrada: ${propuestaId}`);

  if (prop.vetada) {
    return {
      ok: false,
      propuesta_id: propuestaId,
      razon: 'Veto humano aplicado',
      veredicto: 'VETO · HALT',
      sellado: SEAL,
    };
  }

  const votos = prop.votos.length;
  const aprobado = votos >= QUORUM_REQUERIDO;
  const margen = votos - QUORUM_REQUERIDO;

  return {
    ok: aprobado,
    propuesta_id: propuestaId,
    votos,
    requerido: QUORUM_REQUERIDO,
    margen,
    veredicto: aprobado
      ? `QUÓRUM VÁLIDO · ${votos}/${MAX_VOTANTES} · +${margen}`
      : `QUÓRUM INSUFICIENTE · ${votos}/${MAX_VOTANTES} · faltan ${-margen}`,
    puede_ejecutar: aprobado && !prop.vetada && !prop.ejecutada,
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'quorum',
  reglas: REGLAS,
  seal: SEAL,
};