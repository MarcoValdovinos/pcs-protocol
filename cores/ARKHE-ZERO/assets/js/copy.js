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
 *  ▓▒░ COPY.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return { ok: true, sellado: SEAL };
  } catch (err) {
    return { ok: false, error: err.message, sellado: SEAL };
  }
}

export function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const target = document.querySelector(btn.dataset.copy);
      if (!target) return;
      const r = await copiar(target.textContent);
      btn.textContent = r.ok ? '✓ COPIADO' : '✗ ERROR';
      setTimeout(() => {
        btn.textContent = btn.dataset.originalLabel || '📋 COPIAR';
      }, 1500);
    });
  });
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initCopyButtons);
}
