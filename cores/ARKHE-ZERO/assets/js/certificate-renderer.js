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
 *  ▓▒░ CERTIFICATE-RENDERER.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export function renderCertificado({ id, tipo, hash, emitido, sellado }) {
  return `
╔════════════════════════════════════════════════════════════════╗
║                     ◯_●  ·  CERTIFICADO                        ║
╠════════════════════════════════════════════════════════════════╣
║  ID        : ${id.padEnd(48)}║
║  Tipo      : ${tipo.padEnd(48)}║
║  Hash      : ${hash.slice(0, 32).padEnd(48)}║
║  Emitido   : ${emitido.padEnd(48)}║
║  Sello     : ${sellado.padEnd(48)}║
╚════════════════════════════════════════════════════════════════╝
`;
}

export function renderCertificadoHTML(data) {
  return `
    <div class="certificado" data-hash="${data.hash}">
      <pre>${renderCertificado(data)}</pre>
    </div>
  `;
}
