"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Dashboard() {
  const [folios, setFolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [isEmitting, setIsEmitting] = useState(false);

  async function fetchFolios() {
    const { data } = await supabase.from('folios').select('*').order('created_at', { ascending: false });
    if (data) setFolios(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchFolios();
  }, []);

  async function handleEmit(e: React.FormEvent) {
    e.preventDefault();
    setIsEmitting(true);
    
    try {
      const res = await fetch('/api/emit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName, sku })
      });
      const data = await res.json();
      
      if (data.success) {
        setProductName('');
        setSku('');
        fetchFolios();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Error de conexión");
    }
    setIsEmitting(false);
  }

  return (
    <main style={{ padding: '40px 20px', fontFamily: 'monospace', backgroundColor: '#05040a', minHeight: '100vh', color: '#fff' }}>
      
      <style jsx global>{`
        .btn-3d-neon {
          padding: 14px;
          background: #00f2fe;
          color: #000;
          border: none;
          border-radius: 8px;
          font-weight: 900;
          font-family: monospace;
          letter-spacing: 1px;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow: 4px 4px 0px #ff9f1c, 8px 8px 20px rgba(0, 242, 254, 0.4);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .btn-3d-neon:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #ff9f1c, 10px 10px 25px rgba(0, 242, 254, 0.6);
        }
        .btn-3d-neon:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #ff9f1c, 2px 2px 10px rgba(0, 242, 254, 0.2);
        }
        .btn-3d-neon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #ff9f1c;
        }
      `}</style>

      <header style={{ 
        maxWidth: '1200px', margin: '0 auto 40px auto', 
        background: 'rgba(16, 12, 32, 0.6)', border: '1px solid rgba(0, 242, 254, 0.2)', 
        backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'
      }}>
        <div>
          <h1 style={{ color: '#00f2fe', margin: 0, textShadow: '0 0 10px rgba(0,242,254,0.4)' }}>🛡️ EVIDENCE INTEGRITY OS</h1>
          <p style={{ color: '#6e658a', marginTop: '5px', margin: 0 }}>Panel de Control SaaS</p>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '30px' }}>
        
        {/* FORMULARIO ESTILO TARJETA */}
        <div style={{ 
          background: 'rgba(16, 12, 32, 0.6)', border: '1px solid rgba(255, 159, 28, 0.3)', 
          backdropFilter: 'blur(10px)', padding: '25px', borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)', height: 'fit-content'
        }}>
          <h3 style={{ color: '#ff9f1c', marginTop: 0 }}>Emitir Nuevo Folio</h3>
          <form onSubmit={handleEmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="text" placeholder="Nombre del producto" value={productName} onChange={e => setProductName(e.target.value)} required
              style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid #333', color: '#fff', borderRadius: '8px', outline: 'none' }}
            />
            <input 
              type="text" placeholder="SKU (opcional)" value={sku} onChange={e => setSku(e.target.value)}
              style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid #333', color: '#fff', borderRadius: '8px', outline: 'none' }}
            />
            <button type="submit" disabled={isEmitting} className="btn-3d-neon">
              {isEmitting ? 'Emitiendo...' : 'Emitir Folio'}
            </button>
          </form>
        </div>

        {/* LISTA DE FOLIOS COMO TARJETAS */}
        <div>
          <h3 style={{ color: '#00f2fe', marginTop: 0 }}>Últimos Folios Emitidos</h3>
          {loading ? <p>Cargando...</p> : folios.length === 0 ? <p style={{ color: '#6e658a' }}>No hay folios. Emite el primero.</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {folios.map((f, i) => (
                <div key={i} style={{ 
                  background: 'rgba(16, 12, 32, 0.4)', border: '1px solid rgba(0, 242, 254, 0.1)', 
                  borderRadius: '12px', padding: '20px', position: 'relative', overflow: 'hidden',
                  backdropFilter: 'blur(8px)', transition: 'transform 0.2s, boxShadow 0.2s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,242,254,0.1)' }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                    <strong style={{ color: '#00f2fe', fontSize: '16px' }}>{f.folio}</strong>
                    <span style={{ background: 'rgba(0,255,102,0.1)', color: '#00ff66', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', border: '1px solid #00ff66' }}>VERDE</span>
                  </div>
                  <p style={{ margin: '5px 0', fontSize: '14px', color: '#fff' }}><strong>Prod:</strong> {f.product_name}</p>
                  <p style={{ margin: '5px 0', fontSize: '12px', color: '#6e658a' }}><strong>SKU:</strong> {f.sku}</p>
                  <div style={{ marginTop: '15px', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px', border: '1px solid #222' }}>
                    <p style={{ margin: 0, fontSize: '10px', color: '#58536e', wordBreak: 'break-all' }}>
                      <strong style={{ color: '#ff9f1c' }}>SHA-256:</strong><br/>{f.hash_sha256}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
