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
 *  ▓▒░ THEME-SWITCHER.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';
export const STORAGE_KEY = 'arkhe-theme';

export const TEMAS = [
  'terminal-amber',
  'terminal-gold',
  'terminal-green',
  'terminal-cyan',
  'terminal-red',
];

export function setTema(tema) {
  if (!TEMAS.includes(tema)) tema = 'terminal-amber';
  document.body.dataset.theme = tema;
  localStorage.setItem(STORAGE_KEY, tema);
  return { ok: true, tema, sellado: SEAL };
}

export function getTema() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado && TEMAS.includes(guardado)) return guardado;
  return document.body.dataset.theme || 'terminal-amber';
}

export function initThemeSwitcher() {
  const select = document.getElementById('theme-select');
  if (select) {
    select.value = getTema();
    select.addEventListener('change', (e) => setTema(e.target.value));
  }
  document.body.dataset.theme = getTema();
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initThemeSwitcher);
}
