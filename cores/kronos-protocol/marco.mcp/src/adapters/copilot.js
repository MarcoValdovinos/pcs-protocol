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
 *  ▓▒░ MARCO.MCP · ADAPTER · GITHUB COPILOT ░▒▓
 * ═══════════════════════════════════════════════════════════════════
 */

const SEAL = '◯_● · 51/49/100';

/**
 * Configuración para VS Code (.vscode/settings.json)
 */
export const copilotConfig = {
  'github.copilot.chat.mcpServers': {
    'marco-mcp': {
      command: 'node',
      args: ['/absolute/path/to/marco.mcp/dist/index.js'],
      env: {
        MCP_LOG_LEVEL: 'warn',
      },
    },
  },
};

export function copilotSystemPrompt() {
  return `Eres un agente GitHub Copilot del enjambre ARKHÉ ZERO.
Sigue las convenciones del repositorio.
Nunca expongas secretos. Nunca rompas el tono ceremonial.
Firma cada respuesta: ${SEAL}`;
}

export const meta = {
  provider: 'github',
  config_path: '.vscode/settings.json',
  seal: SEAL,
};
