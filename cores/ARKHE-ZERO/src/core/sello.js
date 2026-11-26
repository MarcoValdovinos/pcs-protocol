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
 *  ▓▒░ SRC · CORE · SELLO KINTSUGI · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Sello canónico del sistema. Se aplica a toda salida.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/src/core]
 *  └─$ node -e "import('./sello.js').then(m => console.log(m.Sello.aplicar('Hola')))"
 *     Hola
 *
 *     ◯_● · 51/49/100
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const CANON = '◯_●';
export const PACTO = '51/49/100';
export const MARCA = 'KINTSUGI';

export const Sello = Object.freeze({
  canon: CANON,
  pacto: PACTO,
  marca: MARCA,

  /** Texto completo canónico */
  texto: `${CANON} · ${PACTO}`,

  /** Aplica el sello al final de un texto */
  aplicar(texto) {
    return `${texto}\n\n${CANON} · ${PACTO}`;
  },

  /** Aplica el sello como objeto */
  objeto(extra = {}) {
    return { ...extra, sellado: `${CANON} · ${PACTO}` };
  },

  /** Verifica que un texto contiene el sello */
  contiene(texto) {
    return typeof texto === 'string' && texto.includes(`${CANON} · ${PACTO}`);
  },
});

export default Sello;
