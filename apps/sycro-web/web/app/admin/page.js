'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [licencias, setLicencias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Estados para el formulario de emisión
  const [nuevoSolicitante, setNuevoSolicitante] = useState('');
  const [nuevaMaquina, setNuevaMaquina] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');
  const [emitiendo, setEmitiendo] = useState(false);
  const [licenciaEmitida, setLicenciaEmitida] = useState(null);

  const fetchLicencias = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/licencias', { headers: { 'x-admin-key': adminKey } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al conectar');
      setLicencias(data.licencias);
      setLoggedIn(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const emitirLicencia = async (e) => {
    e.preventDefault();
    setEmitiendo(true);
    setLicenciaEmitida(null);
    try {
      const res = await fetch('/api/pagar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify({ solicitante: nuevoSolicitante, maquina_id: nuevaMaquina, email: nuevoEmail })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al emitir');
      setLicenciaEmitida(data);
      setNuevoSolicitante(''); setNuevaMaquina(''); setNuevoEmail('');
      fetchLicencias(); // Recargar la tabla
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setEmitiendo(false);
    }
  };

  const revocarLicencia = async (folio) => {
    if (!confirm(`¿Seguro que querés revocar la licencia ${folio}?`)) return;
    try {
      const res = await fetch('/api/revocar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify({ folio_cliente: folio, motivo: 'Revocado desde Panel Admin' })
      });
      if (res.ok) setLicencias(licencias.map(l => l.folio_cliente === folio ? { ...l, estado: 'revocada' } : l));
    } catch (e) { alert('Error de red'); }
  };

  if (!loggedIn) {
    return (
      <div className="admin-login">
        <div className="login-box">
          <h1 className="text-cyan">[ SYCRO ADMIN ACCESS ]</h1>
          <p className="text-grey">Ingresa tu llave maestra.</p>
          <input type="password" placeholder="ADMIN_SECRET..." value={adminKey} onChange={(e) => setAdminKey(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && fetchLicencias()} />
          <button onClick={fetchLicencias} disabled={loading}>{loading ? 'DESCIFRANDO...' : 'ACCEDER AL NÚCLEO'}</button>
          {error && <p className="text-magenta mt-2">{error}</p>}
        </div>
        <style dangerouslySetInnerHTML={{__html: `.admin-login { height: 100vh; display: flex; justify-content: center; align-items: center; background: #020408; font-family: monospace; } .login-box { background: rgba(8,12,20,0.9); border: 1px solid #00f0ff; padding: 40px; border-radius: 8px; text-align: center; width: 100%; max-width: 400px; box-shadow: 0 0 30px rgba(0,240,255,0.2); } input { width: 100%; padding: 15px; margin: 20px 0; background: #000; border: 1px solid #333; color: #00f0ff; font-family: monospace; } button { width: 100%; padding: 15px; background: #00f0ff; color: #000; font-weight: bold; border: none; cursor: pointer; } .text-cyan{color:#00f0ff} .text-grey{color:#888} .text-magenta{color:#ff00ff} .mt-2{margin-top:10px}`}} />
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>NÚCLEO DE LICENCIAS QV</h1>
        <Link href="/" className="back-link">← Volver a la Matrix</Link>
      </header>

      {/* FORMULARIO DE EMISIÓN */}
      <div className="emision-panel">
        <h2>⚡ EMITIR NUEVA LICENCIA</h2>
        <form onSubmit={emitirLicencia} className="emision-form">
          <input type="text" placeholder="Solicitante (Ej: Juan Perez)" value={nuevoSolicitante} onChange={e => setNuevoSolicitante(e.target.value)} required />
          <input type="text" placeholder="ID Máquina (Ej: PC-DISEÑO-01)" value={nuevaMaquina} onChange={e => setNuevaMaquina(e.target.value)} required />
          <input type="email" placeholder="Email del cliente" value={nuevoEmail} onChange={e => setNuevoEmail(e.target.value)} required />
          <button type="submit" disabled={emitiendo}>{emitiendo ? 'GENERANDO SELLO...' : 'CREAR LICENCIA'}</button>
        </form>

        {licenciaEmitida && (
          <div className="licencia-success">
            <p>¡LICENCIA GENERADA! Envía este JSON al cliente:</p>
            <pre>{JSON.stringify(licenciaEmitida, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr><th>FOLIO</th><th>CLIENTE</th><th>MÁQUINA</th><th>FECHA</th><th>ESTADO</th><th>ACCIÓN</th></tr>
          </thead>
          <tbody>
            {licencias.length === 0 ? (
              <tr><td colSpan="6" style={{textAlign: 'center', padding: '30px'}}>No hay licencias.</td></tr>
            ) : (
              licencias.map((lic) => (
                <tr key={lic.folio_cliente} className={lic.estado === 'revocada' ? 'revocada' : ''}>
                  <td className="text-cyan">{lic.folio_cliente}</td>
                  <td>{lic.solicitante}</td>
                  <td className="text-grey">{lic.maquina_id}</td>
                  <td>{new Date(lic.fecha_emision).toLocaleDateString()}</td>
                  <td><span className={`status ${lic.estado}`}>{lic.estado.toUpperCase()}</span></td>
                  <td>{lic.estado === 'activa' && <button className="btn-revoke" onClick={() => revocarLicencia(lic.folio_cliente)}>REVOCAR</button>}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        body { margin: 0; background: #020408; color: #fff; font-family: monospace; }
        .admin-dashboard { padding: 20px; max-width: 1200px; margin: 0 auto; }
        .admin-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #00f0ff; padding-bottom: 20px; margin-bottom: 30px; }
        .admin-header h1 { color: #00f0ff; margin: 0; font-size: 24px; text-shadow: 0 0 10px rgba(0,240,255,0.5); }
        .back-link { color: #ff00ff; text-decoration: none; font-weight: bold; }
        
        .emision-panel { background: rgba(0, 240, 255, 0.05); border: 1px solid #00f0ff; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .emision-panel h2 { color: #00f0ff; font-size: 18px; margin-top: 0; border-bottom: 1px dashed #00f0ff; padding-bottom: 10px; margin-bottom: 20px; }
        .emision-form { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 10px; }
        .emision-form input { padding: 10px; background: #000; border: 1px solid #333; color: #fff; font-family: inherit; }
        .emision-form button { padding: 10px 20px; background: #00f0ff; color: #000; font-weight: bold; border: none; cursor: pointer; }
        .licencia-success { margin-top: 20px; padding: 15px; background: rgba(0, 255, 102, 0.1); border: 1px solid #00ff66; color: #00ff66; }
        .licencia-success pre { background: #000; padding: 10px; overflow-x: auto; }

        .table-container { background: rgba(8,12,20,0.9); border: 1px solid #333; border-radius: 8px; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: rgba(0,240,255,0.1); color: #00f0ff; padding: 15px; font-size: 12px; }
        td { padding: 15px; border-bottom: 1px solid #222; font-size: 14px; }
        .status { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .status.activa { background: rgba(0,255,102,0.1); color: #00ff66; border: 1px solid #00ff66; }
        .status.revocada { background: rgba(255,0,0,0.1); color: #ff3333; border: 1px solid #ff3333; }
        .btn-revoke { background: transparent; color: #ff3333; border: 1px solid #ff3333; padding: 5px 10px; cursor: pointer; }
        .text-cyan { color: #00f0ff; } .text-grey { color: #888; } .text-magenta { color: #ff00ff; }
        
        @media (max-width: 768px) {
          .emision-form { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
}
