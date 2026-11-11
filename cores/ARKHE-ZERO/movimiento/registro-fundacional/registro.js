/* ═══════════════════════════════════════════════════════════════════════════ */
/*                                                                           */
/*   ██████╗ ███████╗ ██████╗ ██╗███████╗████████╗██████╗  ██████╗           */
/*   ██╔══██╗██╔════╝██╔════╝ ██║██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗          */
/*   ██████╔╝█████╗  ██║  ███╗██║███████╗   ██║   ██████╔╝██║   ██║          */
/*   ██╔══██╗██╔══╝  ██║   ██║██║╚════██║   ██║   ██╔══██╗██║   ██║          */
/*   ██║  ██║███████╗╚██████╔╝██║███████║   ██║   ██║  ██║╚██████╔╝          */
/*   ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝           */
/*                                                                           */
/*   ▓▒░ REGISTRO-FUNDACIONAL.JS · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓         */
/*                                                                           */
/*   NODO: YHDRYH-92CE · GENESIS: K28-M05-MN01-YHDRYH-92CE                  */
/*                                                                           */
/* ═══════════════════════════════════════════════════════════════════════════ */

/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ REGISTRO FUNDACIONAL · LÓGICA · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Maneja el registro de los primeros 100 fundadores.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';
export const NODO = 'YHDRYH-92CE';
export const GENESIS = 'K28-M05-MN01-YHDRYH-92CE';
export const PLAZAS_TOTALES = 100;
export const FIRMANTE_HUMANO = 'Marco Antonio Rojas Valdovinos';

// ─── Estado en memoria (persistir con IndexedDB en producción) ────
const FUNDADORES = [
  {
    numero: 1,
    nombre: FIRMANTE_HUMANO,
    fecha: '2026-01-01T00:00:00Z',
    ubicacion: 'Toluca, México',
    hash: 'f03f7e2d852617309457e0fe207f8f8bd2627d0b723de02f3b0ce05767219112',
  },
];

/**
 * Devuelve el estado actual del registro fundacional.
 */
export function estado() {
  return {
    plazasTotales: PLAZAS_TOTALES,
    ocupadas: FUNDADORES.length,
    disponibles: PLAZAS_TOTALES - FUNDADORES.length,
    fundadores: [...FUNDADORES],
    sellado: SEAL,
  };
}

/**
 * Registra un nuevo fundador.
 * @param {object} datos
 */
export function registrarFundador({ nombre, ubicacion, hash }) {
  if (FUNDADORES.length >= PLAZAS_TOTALES) {
    return { ok: false, razon: 'Plazas agotadas', sellado: SEAL };
  }

  const numero = FUNDADORES.length + 1;
  const fundador = {
    numero,
    nombre,
    ubicacion,
    fecha: new Date().toISOString(),
    hash,
    sellado: SEAL,
  };

  FUNDADORES.push(fundador);

  return {
    ok: true,
    fundador,
    veredicto: `FUNDADOR #${String(numero).padStart(3, '0')} REGISTRADO`,
    sellado: SEAL,
    nodo: NODO,
    genesis: GENESIS,
  };
}

/**
 * Obtiene un fundador por número.
 */
export function obtenerFundador(numero) {
  return FUNDADORES.find((f) => f.numero === numero) || null;
}

export const meta = {
  rol: 'registro-fundacional',
  plazas: PLAZAS_TOTALES,
  sellado: SEAL,
  nodo: NODO,
  genesis: GENESIS,
};