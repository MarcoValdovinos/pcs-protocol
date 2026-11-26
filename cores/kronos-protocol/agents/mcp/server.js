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

// @ts-nocheck
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ AGENTS · MCP SERVER EMBEBIDO · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Servidor MCP interno del enjambre. Expone a los 12 agentes como
 *  herramientas consultables desde cualquier cliente MCP compatible.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/agents/mcp]
 *  └─$ node server.js
 *     [ OK ] Enjambre cargado · 12/12 agentes
 *     [ ✓✓ ] Enjambre MCP LISTO · esperando cliente...
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import registry from '../registry/agent-registry.json' with { type: 'json' };
import { Enjambre } from '../consensus/quorum-4-5.js';
import { vetar } from '../consensus/veto-humano.js';

const SEAL = '◯_● · 51/49/100';

const TOOLS = [
  {
    name: 'enjambre.listar',
    description: 'Lista todos los agentes del enjambre ARKHÉ (12 activos)',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'enjambre.deliberar',
    description: 'Inicia una deliberación con quórum 4/5',
    inputSchema: {
      type: 'object',
      properties: {
        propuesta: { type: 'string' },
        votos_ia: { type: 'array', items: { type: 'string' } },
      },
      required: ['propuesta'],
    },
  },
  {
    name: 'enjambre.vetar',
    description: 'Aplica veto humano (51% soberano)',
    inputSchema: {
      type: 'object',
      properties: {
        propuesta: { type: 'string' },
        razon: { type: 'string' },
      },
      required: ['propuesta', 'razon'],
    },
  },
];

export class EnjambreMCPServer {
  constructor() {
    this.server = new Server(
      { name: 'enjambre-arkhe', version: '1.0.0', seal: SEAL },
      { capabilities: { tools: {} } },
    );
    this.enjambre = new Enjambre({ humanos: 1, ia: 12 });
    this.#wire();
  }

  #wire() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: TOOLS,
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (req) => {
      const { name, arguments: args } = req.params;
      let result;

      switch (name) {
        case 'enjambre.listar':
          result = {
            culturales: registry.culturales,
            oficios: registry.oficios,
            total: registry.culturales.length + registry.oficios.length,
            sellado: SEAL,
          };
          break;
        case 'enjambre.deliberar':
          result = await this.enjambre.deliberar(args);
          break;
        case 'enjambre.vetar':
          result = vetar(args);
          break;
        default:
          throw new Error(`Tool desconocida: ${name}`);
      }

      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    });
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  new EnjambreMCPServer().start();
}
