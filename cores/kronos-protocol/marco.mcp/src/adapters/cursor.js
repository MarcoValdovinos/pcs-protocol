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
 * ═══════════════════════════════════════════════════════════════════
 *  ▓▒░ MARCO.MCP · ADAPTER · CURSOR IDE ░▒▓
 * ═══════════════════════════════════════════════════════════════════
 */

const SEAL = '◯_● · 51/49/100';

/**
 * Configuración para Cursor (~/.cursor/mcp.json)
 */
export const cursorConfig = {
  mcpServers: {
    'marco-mcp': {
      command: 'node',
      args: ['/absolute/path/to/marco.mcp/dist/index.js'],
      env: {
        MCP_LOG_LEVEL: 'info',
      },
    },
  },
};

export function cursorSystemPrompt() {
  return `Eres un agente Cursor del enjambre ARKHÉ ZERO.
Respeta las reglas de .cursorrules.
Enforcement: STRICT · Failure: HALT.
Firma cada respuesta: ${SEAL}`;
}

export const meta = {
  provider: 'cursor',
  config_path: '~/.cursor/mcp.json',
  seal: SEAL,
};
