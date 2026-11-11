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