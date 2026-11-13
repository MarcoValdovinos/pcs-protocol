'use client';
import { useState } from 'react';

export default function KronosDesk() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJsonUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setResult(null);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target.result);
        
        // Enviar el JSON completo a la API
        const response = await fetch('/api/verificar-firma', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(json)
        });
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setResult({ status: 'INVALID', error: 'Archivo corrupto', details: 'No es un JSON válido.' });
      }
      setLoading(false);
    };
    reader.readAsText(file);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#05050A', color: '#00FFFF', fontFamily: '"Courier New", Courier, monospace', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <header style={{ width: '100%', maxWidth: '900px', textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #FF00FF', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem', color: '#00FFFF', textShadow: '0 0 10px #00FFFF', margin: '0 0 10px 0' }}>
          KRONOS DESK <span style={{ color: '#FF00FF' }}>//</span> W3C VALIDATOR
        </h1>
        <p style={{ color: '#FFFFFF', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 15px auto', lineHeight: '1.5' }}>
          Sube tu Credencial Verificable (<strong>.sycro.json</strong>) para auditar la firma ML-DSA-65 y el sello RFC 3161.
        </p>
      </header>

      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ backgroundColor: '#0D1117', border: '1px solid #333', padding: '25px', borderRadius: '8px' }}>
          
          <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: 'rgba(255, 0, 255, 0.05)', border: '1px dashed #FF00FF', borderRadius: '8px', textAlign: 'center' }}>
            <label style={{ color: '#FF00FF', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
              {loading ? '⏳ AUDITANDO...' : '📁 [ SELECCIONAR CREDENCIAL .SYCRO.JSON ]'}
              <input type="file" accept=".json" onChange={handleJsonUpload} disabled={loading} style={{ display: 'none' }} />
            </label>
          </div>

        </div>

        {result && (
          <div style={{ backgroundColor: result.status === 'VALID' ? 'rgba(0, 255, 0, 0.05)' : 'rgba(255, 0, 0, 0.05)', border: result.status === 'VALID' ? '2px solid #00FF00' : '2px solid #FF0000', padding: '25px', borderRadius: '8px' }}>
            <h2 style={{ margin: 0, color: result.status === 'VALID' ? '#00FF00' : '#FF0000', textAlign: 'center', fontSize: '1.5rem' }}>
              {result.status === 'VALID' ? '✅ CREDENCIAL W3C AUTÉNTICA' : '❌ ALERTA: FIRMA INVÁLIDA'}
            </h2>
            
            {result.status === 'VALID' ? (
              <div style={{ marginTop: '20px', color: '#FFFFFF', textAlign: 'center' }}>
                <p>📜 <strong>Documento:</strong> {result.metadata.title}</p>
                <p>👤 <strong>Emisor:</strong> {result.metadata.creator}</p>
                <p>🆔 <strong>ID (UUID):</strong> {result.metadata.folio}</p>
                <p>🔐 <strong>Hash SHA-256:</strong> {result.metadata.hash}</p>
                <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(0, 255, 255, 0.1)', borderLeft: '4px solid #00FFFF', textAlign: 'left' }}>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#00FFFF' }}>
                    <strong>Sello de Tiempo (RFC 3161):</strong> {result.metadata.hasTSA ? '✅ Verificado y Anclado por FreeTSA' : '⚠️ No incluido'}
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ marginTop: '20px', color: '#FF5555', textAlign: 'center', fontSize: '0.9rem' }}>
                <p><strong>Error:</strong> {result.error}</p>
                <p><strong>Detalles:</strong> {result.details}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
