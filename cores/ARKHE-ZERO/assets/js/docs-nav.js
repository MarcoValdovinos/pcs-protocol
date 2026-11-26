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
 *  ▓▒░ DOCS-NAV.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export function initTocHighlight() {
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  if (!tocLinks.length) return;

  const sections = Array.from(tocLinks).map((link) =>
    document.querySelector(link.getAttribute('href'))
  ).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tocLinks.forEach((l) => l.classList.remove('active'));
        const active = Array.from(tocLinks).find(
          (l) => l.getAttribute('href') === `#${entry.target.id}`
        );
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px' });

  sections.forEach((s) => observer.observe(s));
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initTocHighlight);
}
