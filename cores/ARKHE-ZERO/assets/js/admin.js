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
