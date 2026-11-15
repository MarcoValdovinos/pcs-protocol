const fs = require('fs');
const path = require('path');

console.log("🛠️  Iniciando parche de seguridad para el Issue #5...");

// 1. Parchear core.js
const corePath = path.join('cimiento', 'cripto-core', 'core.js');
if (fs.existsSync(corePath)) {
  let core = fs.readFileSync(corePath, 'utf8');
  
  // Hacer las llaves no extraíbles (seguridad)
  core = core.replace(/crypto\.subtle\.generateKey\(([\s\S]*?), true,/g, 'crypto.subtle.generateKey($1, false,');
  
  // Inyectar los métodos de IndexedDB antes del último cierre de clase
  const lastBrace = core.lastIndexOf('}');
  const methods = `
  async _guardarLlaveAgente(agenteId, cryptoKey) {
    const db = await this._abrirDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('llaves_agente', 'readwrite');
      const store = tx.objectStore('llaves_agente');
      const req = store.put({ id: agenteId, key: cryptoKey });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async _cargarLlaveAgente(agenteId) {
    const db = await this._abrirDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('llaves_agente', 'readonly');
      const store = tx.objectStore('llaves_agente');
      const req = store.get(agenteId);
      req.onsuccess = () => resolve(req.result?.key || null);
      req.onerror = () => reject(req.error);
    });
  }
`;
  core = core.slice(0, lastBrace) + methods + core.slice(lastBrace);
  fs.writeFileSync(corePath, core);
  console.log('✅ core.js parcheado (llaves no extraíbles + IndexedDB).');
} else {
  console.error('❌ No se encontró core.js');
}

// 2. Parchear agente-base.js
const agentPath = path.join('agentes-js', 'agente-base.js');
if (fs.existsSync(agentPath)) {
  let agent = fs.readFileSync(agentPath, 'utf8');
  
  // Reemplazar el método firmar() completo
  const firmarRegex = /async firmar\([\s\S]*?\{[\s\S]*?return\s*\{[\s\S]*?\};[\s\S]*?\}/;
  const newFirmar = `async firmar(contenido) {
    if (!this.llavePrivada) {
      throw new Error('Agente no inicializado: falta llave privada');
    }
    const hash = sha3_512(contenido);
    const firma = await crypto.subtle.sign(
      'Ed25519',
      this.llavePrivada,
      new TextEncoder().encode(hash)
    );
    return {
      agente: this.id,
      contenido_hash: hash,
      firma: btoa(String.fromCharCode(...new Uint8Array(firma))),
      timestamp: new Date().toISOString(),
      sellado: SEAL,
    };
  }`;
  
  if (firmarRegex.test(agent)) {
    agent = agent.replace(firmarRegex, newFirmar);
    fs.writeFileSync(agentPath, agent);
    console.log('✅ agente-base.js parcheado (firmar usa llave persistida).');
  } else {
    console.warn('⚠️ No se encontró la función firmar() para reemplazar en agente-base.js.');
  }
} else {
  console.error('❌ No se encontró agente-base.js');
}

console.log("🏁 Parche finalizado.");
