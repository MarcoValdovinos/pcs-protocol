/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ ADMIN.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export const adminState = {
  autenticado: false,
  rol: 'fundador',
  pesoHumano: 51,
  pesoIa: 49,
};

export function requireAdmin() {
  const isAdminPage = location.pathname.includes('admin');
  if (isAdminPage && !adminState.autenticado) {
    console.warn(`[arkhe] Acceso admin requiere firma humana · ${SEAL}`);
    return false;
  }
  return true;
}

export async function cargarEstado() {
  return {
    indice_cero: 'SELLADO',
    pacto: '51/49/100',
    enjambre: '12/12',
    bovedas: '4/4',
    anclajes: '3/3',
    seal: SEAL,
  };
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', async () => {
    const el = document.querySelector('.terminal-block');
    if (el && location.pathname.includes('admin')) {
      const estado = await cargarEstado();
      el.textContent = Object.entries(estado)
        .map(([k, v]) => `[ OK ] ${k.padEnd(20)} · ${v}`)
        .join('\n');
      el.textContent += `\n[ ✓✓ ] SISTEMA SALUDABLE · ${SEAL}`;
    }
  });
}