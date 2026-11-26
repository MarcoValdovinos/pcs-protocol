================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


'use client';
import { useState } from 'react';

export default function KronosDesk() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setResult(null);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target.result);
        const response = await fetch('/api/verificar-firma', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(json)
        });
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setResult({ status: 'INVALID', error: 'Archivo no válido' });
      }
      setLoading(false);
    };
    reader.readAsText(file);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#05050A', color: '#00FFFF', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', textShadow: '0 0 10px #00FFFF' }}>SYCRO // VALIDADOR</h1>
        <p style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>Verifica la autenticidad de tus documentos en segundos.</p>
      </header>

      <div style={{ backgroundColor: '#0D1117', border: '2px dashed #00FFFF', padding: '40px', borderRadius: '10px', textAlign: 'center', width: '100%', maxWidth: '500px' }}>
        <h2 style={{ color: '#FF00FF', marginBottom: '20px' }}>PASO 1: Sube tu archivo</h2>
        <label style={{ color: '#00FFFF', cursor: 'pointer', fontSize: '1.2rem', border: '1px solid #00FFFF', padding: '10px 20px', borderRadius: '5px', display: 'inline-block' }}>
          📂 Seleccionar archivo .sycro.json
          <input type="file" accept=".json" onChange={handleFileUpload} style={{ display: 'none' }} />
        </label>
        <p style={{ color: '#8B949E', marginTop: '20px', fontSize: '0.9rem' }}>El documento no se sube a ningún servidor. La validación es 100% local.</p>
      </div>

      {loading && <p style={{ marginTop: '20px', color: '#FF00FF' }}>⏳ Verificando criptografía...</p>}

      {result && (
        <div style={{ marginTop: '30px', padding: '20px', borderRadius: '10px', backgroundColor: result.status === 'VALID' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)', border: result.status === 'VALID' ? '2px solid #00FF00' : '2px solid #FF0000', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
          <h3 style={{ color: result.status === 'VALID' ? '#00FF00' : '#FF0000', fontSize: '1.5rem' }}>
            {result.status === 'VALID' ? '✅ DOCUMENTO AUTÉNTICO' : '❌ DOCUMENTO ALTERADO'}
          </h3>
          {result.status === 'VALID' && (
            <div style={{ color: '#FFFFFF', marginTop: '15px' }}>
              <p><strong>Autor:</strong> {result.metadata.creator}</p>
              <p><strong>Documento:</strong> {result.metadata.title}</p>
              <p><strong>Folio:</strong> {result.metadata.folio}</p>
            </div>
          )}
          {result.status === 'INVALID' && <p style={{ color: '#FF5555', marginTop: '10px' }}>{result.error}</p>}
        </div>
      )}
    </main>
  );
}
