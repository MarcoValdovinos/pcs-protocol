"use client";
import { useEffect, useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useParams } from 'next/navigation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function VerifyFolio() {
  const params = useParams();
  const folioId = params.folio as string;
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [loading, setLoading] = useState(true);
  const [folio, setFolio] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function checkFolio() {
      if (!folioId) return;
      
      const { data, error } = await supabase
        .from('folios')
        .select('*')
        .eq('folio', folioId)
        .single();
        
      if (error || !data) {
        setError(true);
      } else {
        setFolio(data);
      }
      setLoading(false);
    }
    checkFolio();
  }, [folioId]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  if (loading) {
    return (
      <div style={{ background: '#05040a', color: '#00f2fe', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace', backgroundImage: 'linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <h2 style={{ textShadow: '0 0 15px #00f2fe', letterSpacing: '3px', animation: 'pulse 1.5s infinite alternate' }}>ESCANEANDO RED KRONOS...</h2>
      </div>
    );
  }

  const themeColor = error ? '#ff0055' : '#00ff66';
  const themeBg = error ? 'rgba(255, 0, 85, 0.05)' : 'rgba(0, 255, 102, 0.05)';

  return (
    <main style={{ 
      padding: '20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#05040a', fontFamily: 'monospace',
      backgroundImage: 'linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '100%', maxWidth: '500px',
          background: 'rgba(16, 12, 32, 0.8)', backdropFilter: 'blur(12px)',
          border: `2px solid ${themeColor}`, borderRadius: '20px',
          padding: '40px', textAlign: 'center', position: 'relative',
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${themeBg}, inset 0 0 20px ${themeBg}`,
          transition: 'transform 0.1s ease, border-color 0.3s, box-shadow 0.3s'
        }}
      >
        <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '30px', height: '30px', borderTop: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, borderTopLeftRadius: '20px' }}></div>
        <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '30px', height: '30px', borderBottom: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, borderBottomRightRadius: '20px' }}></div>

        <h3 style={{ color: '#6e658a', letterSpacing: '2px', margin: '0 0 20px 0', fontSize: '12px' }}>EVIDENCE INTEGRITY OS</h3>

        {error ? (
          <>
            {/* ESCUDO GEOMÉTRICO DE ERROR */}
            <div style={{ 
              width: '80px', height: '80px', margin: '0 auto 20px auto', background: '#ff0055',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: '#000',
              boxShadow: '0 0 20px #ff0055'
            }}>✕</div>
            <h1 style={{ color: '#ff0055', margin: '0 0 10px 0', fontSize: '28px', textShadow: '0 0 10px #ff0055' }}>ALERTA: CLON</h1>
            <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>El folio <strong>{folioId}</strong> no existe o ha sido revocado.</p>
          </>
        ) : (
          <>
            {/* ESCUDO GEOMÉTRICO DE VERIFICADO */}
            <div style={{ 
              width: '80px', height: '80px', margin: '0 auto 20px auto', background: '#00ff66',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: '#000',
              boxShadow: '0 0 20px #00ff66'
            }}>✓</div>
            <h1 style={{ color: '#00ff66', margin: '0 0 10px 0', fontSize: '28px', textShadow: '0 0 10px #00ff66' }}>VERIFICADO</h1>
            <p style={{ color: '#fff', fontSize: '14px', marginBottom: '30px' }}>Evidencia auténtica registrada.</p>
            
            <div style={{ textAlign: 'left', fontSize: '13px', background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,255,102,0.2)' }}>
              <p style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6e658a' }}>Folio:</span> <strong style={{ color: '#fff' }}>{folio.folio}</strong></p>
              <p style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6e658a' }}>Producto:</span> <span style={{ color: '#fff' }}>{folio.product_name}</span></p>
              <p style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6e658a' }}>SKU:</span> <span style={{ color: '#fff' }}>{folio.sku}</span></p>
              
              <div style={{ marginTop: '15px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                <p style={{ margin: '0 0 5px 0', color: '#6e658a', fontSize: '11px' }}>HASH SHA-256:</p>
                <p style={{ margin: 0, color: '#00f2fe', fontSize: '11px', wordBreak: 'break-all', textShadow: '0 0 5px rgba(0,242,254,0.3)' }}>{folio.hash_sha256}</p>
              </div>
              
              <p style={{ margin: '15px 0 0 0', color: '#6e658a', fontSize: '11px', textAlign: 'right' }}>FECHA: {new Date(folio.created_at).toLocaleString()}</p>
            </div>
          </>
        )}

        <div style={{ marginTop: '30px', fontSize: '10px', color: '#58536e', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
          Powered by KRONOS ARKHE ZERO · 2026
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
