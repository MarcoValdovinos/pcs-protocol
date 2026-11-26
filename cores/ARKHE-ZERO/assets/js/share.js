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
 *  ▓▒░ SHARE.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export function compartir({ titulo, texto, url }) {
  if (navigator.share) {
    return navigator.share({ title: titulo, text: texto, url });
  }
  // Fallback: copiar al portapapeles
  return navigator.clipboard.writeText(`${titulo}\n${texto}\n${url}\n${SEAL}`);
}

export function initShareButtons() {
  document.querySelectorAll('[data-share]').forEach((btn) => {
    btn.addEventListener('click', () => {
      compartir({
        titulo: document.title,
        texto: btn.dataset.shareText || 'ARKHÉ ZERO · ◯_● KINTSUGI',
        url: window.location.href,
      });
    });
  });
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initShareButtons);
}
