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
 *  ▓▒░ CORE · ATRIBUCIÓN · ROYALTY DISTRIBUTOR · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Distribuye regalías 51/49 automáticamente.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';
export const HUMANO_PCT = 51;
export const FLAILP_PCT = 49;

/**
 * Distribuye un monto entre humano y FLAILP.
 *
 * @param {number} monto
 * @param {string} [moneda='MXN']
 * @returns {object}
 */
export function distribuirRegalias(monto, moneda = 'MXN') {
  const paraHumano = +(monto * (HUMANO_PCT / 100)).toFixed(2);
  const paraFlailp = +(monto * (FLAILP_PCT / 100)).toFixed(2);

  return {
    ok: true,
    monto_total: monto,
    moneda,
    distribucion: [
      { destino: 'Marco Antonio Rojas Valdovinos', monto: paraHumano, peso: HUMANO_PCT },
      { destino: 'Fondo FLAILP',                    monto: paraFlailp, peso: FLAILP_PCT },
    ],
    veredicto: 'DISTRIBUCIÓN 51/49 APLICADA',
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'royalty-distributor',
  pacto: '51/49/100',
  seal: SEAL,
};
