/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

// @ts-nocheck
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ SRC · VIRAL · SHARE ENGINE · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Genera enlaces y contenido para compartir en redes sociales.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { sha3_512 } from '../../crypto/primitives/sha3-512.js';

export const SEAL = '◯_● · 51/49/100';

/**
 * Genera un paquete de compartir.
 *
 * @param {object} opciones
 * @param {string} opciones.titulo
 * @param {string} opciones.texto
 * @param {string} [opciones.url]
 * @returns {object}
 */
export function generarShare({ titulo, texto, url = 'https://arkhe.zero' }) {
  const share = {
    titulo,
    texto,
    url,
    hash: sha3_512(`${titulo}|${texto}|${url}`),
    sellado: SEAL,
    timestamp: new Date().toISOString(),
  };

  return {
    ok: true,
    share,
    enlaces: {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(texto + ' ' + url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`,
    },
    sellado: SEAL,
  };
}

export const meta = {
  rol: 'viral-share',
  seal: SEAL,
};
