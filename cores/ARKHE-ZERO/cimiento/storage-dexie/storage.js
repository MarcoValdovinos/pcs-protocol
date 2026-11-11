/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CIMIENTO · STORAGE DEXIE · INDEXEDDB · ARKHÉ ZERO ░▒▓
 *  ─────────────────────────────────────────────────────────────────────────
 *  Persistencia local-first. Sin servidor. Sin fuga de datos.
 *
 *  ┌─(kali㉿arkhe-zero)-[~/kronos/cimiento/storage-dexie]
 *  └─$ node -e "import('./storage.js').then(m => console.log(m.meta_))"
 *     { rol: 'storage-dexie', db: 'arkhe-zero-cimiento', ... }
 * ═══════════════════════════════════════════════════════════════════════════
 */

const DB_NAME = 'arkhe-zero-cimiento';
const STORE = 'documentos';
const VERSION = 1;
const SEAL = '◯_● · 51/49/100';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'hash' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/**
 * Guarda un documento firmado.
 */
export async function guardar({ hash, contenido, firma, meta }) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    const store = tx.objectStore(STORE);
    store.put({ hash, contenido, firma, meta, ts: Date.now() });
    tx.oncomplete = () => resolve({ ok: true, hash, sellado: SEAL });
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Obtiene un documento por hash.
 */
export async function obtener(hash) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).get(hash);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

/**
 * Lista todos los documentos.
 */
export async function listar() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const meta_ = {
  rol: 'storage-dexie',
  db: DB_NAME,
  store: STORE,
  seal: SEAL,
};