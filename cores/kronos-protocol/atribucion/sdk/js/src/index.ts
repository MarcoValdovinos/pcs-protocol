/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

/**
 * Atribución SDK — Entry point.
 */

export { AtribucionClient } from './client.js';
export {
  canonicalJson,
  canonicalBytes,
  signPayload,
  verifySignature,
  signHybridPqcPlaceholder,
} from './crypto.js';

export type {
  ActionResponse,
  AgentInfo,
  AgentRegistrationResponse,
  AutonomyLevel,
  ClientOptions,
  HumanApproval,
  ProofResponse,
  ProveedorModelo,
  RecordActionInput,
  RegisterAgentInput,
} from './types.js';

export const VERSION = '0.1.0';
