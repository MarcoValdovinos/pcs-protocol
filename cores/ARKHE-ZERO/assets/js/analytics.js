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
 *  ▓▒░ ANALYTICS.JS · PRIVACY-FIRST · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';
export const ANALYTICS_ENABLED = false; // privacy-first · desactivado por defecto

export function track(evento) {
  if (!ANALYTICS_ENABLED) {
    console.debug(`[arkhe/analytics · disabled] ${evento}`);
    return;
  }
  // En producción: enviar a endpoint propio, sin cookies, sin IPs
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ evento, seal: SEAL, ts: Date.now() }),
  }).catch(() => {});
}

export function trackPageView() {
  track(`page-view: ${location.pathname}`);
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', trackPageView);
}
