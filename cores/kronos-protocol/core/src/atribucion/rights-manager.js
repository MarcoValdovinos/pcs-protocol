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
 *  ▓▒░ CORE · ATRIBUCIÓN · RIGHTS MANAGER · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Gestiona derechos de autoría y licencias.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export const LICENCIAS = [
  {
    id: 'LGU',
    nombre: 'Licencia Global Única',
    uso: 'comercial',
    requiere_permiso: true,
  },
  { id: 'LGU-EDU', nombre: 'LGU Educativa', uso: 'educativo', requiere_permiso: false },
  { id: 'LGU-PERS', nombre: 'LGU Personal', uso: 'personal', requiere_permiso: false },
];

/**
 * Registra derechos sobre una obra.
 *
 * @param {object} opciones
 * @param {string} opciones.obra
 * @param {string} opciones.licencia
 * @param {string} opciones.titular
 * @returns {object}
 */
export function registrarDerechos({ obra, licencia, titular }) {
  const lic = LICENCIAS.find((l) => l.id === licencia);
  if (!lic) throw new Error(`[ XX ] Licencia desconocida: ${licencia}`);

  return {
    ok: true,
    obra,
    licencia: lic.id,
    titular,
    requiere_permiso: lic.requiere_permiso,
    sellado: SEAL,
    timestamp: new Date().toISOString(),
  };
}

export const meta = {
  rol: 'rights-manager',
  licencias: LICENCIAS,
  seal: SEAL,
};
