'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const canvasRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const logMessages = [
      "Inicializando Protocolo ARKHÉ ZERO...",
      "Cargando KRONOS Protocol (Local-First)...",
      "Estableciendo Autoría: 51% Humano / 49% IA...",
      "Generando Firmas Post-Cuánticas (PQC)...",
      "Anclaje Criptográfico: [HASH: 0x8f2a...e9c]",
      "Estado: RESOLVIENDO EL VACÍO LEGAL DE LA CO-CREACIÓN."
    ];
    let currentLogIndex = 0;
    let currentCharIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentLogIndex < logMessages.length) {
        const currentMsg = logMessages[currentLogIndex];
        if (currentCharIndex < currentMsg.length) {
          setLogs(prev => {
            let newLogs = [...prev];
            if (!newLogs[currentLogIndex]) newLogs[currentLogIndex] = "";
            newLogs[currentLogIndex] = currentMsg.substring(0, currentCharIndex + 1);
            return newLogs;
          });
          currentCharIndex++;
        } else {
          currentLogIndex++;
          currentCharIndex = 0;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 25);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 30 : 70;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 0.5
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 4, 8, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 - dist/700})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize);
    resize();
    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main className="cyber-container">
      <div className="scanlines"></div>
      <canvas ref={canvasRef} className="bg-canvas" />
      
      <div className="terminal-card">
        <div className="corner top-left"></div><div className="corner top-right"></div>
        <div className="corner bottom-left"></div><div className="corner bottom-right"></div>

        <header className="term-header">
          <div className="dots"><span></span><span></span><span></span></div>
          <div className="sys-title">ARKHÉ ZERO // PROTOCOL NODE</div>
          <div className="status-light">ACTIVE</div>
        </header>

        <div className="term-body">
          <pre className="logo">
{`
   █████╗ ██████╗ ██╗  ██╗██╗  ██╗███████╗
  ██╔══██╗██╔══██╗██║ ██╔╝██║  ██║██╔════╝ 
  ███████║██████╔╝█████╔╝ ███████║█████╗   
  ██╔══██║██╔══██╗██╔═██╗ ██╔══██║██╔══╝   
  ██║  ██║██║  ██║██║  ██╗██║  ██║███████╗ 
`}
          </pre>

          <div className="logs-container">
            {logs.map((log, i) => (
              <div key={i} className="log-line">
                <span className="prompt-arrow">&gt;</span> 
                <span className={i === 2 ? "text-yellow" : (i === 3 ? "text-magenta" : (i === 5 ? "text-green" : "text-cyan"))}>
                  {log}
                </span>
              </div>
            ))}
            {logs.length === 6 && <div className="cursor">_</div>}
          </div>

          <div className="manifesto-grid">
            <div className="manifesto-box">
              <div className="hud-title">[ 01. ARKHÉ ZERO ]</div>
              <div className="pillar-title">Co-Creatividad Híbrida</div>
              <div className="pillar-desc">Estándar de autoría: 51% Humano / 49% IA.</div>
            </div>
            <div className="manifesto-box">
              <div className="hud-title">[ 02. KRONOS ]</div>
              <div className="pillar-title">Soberanía Digital</div>
              <div className="pillar-desc">Protocolo local-first. Reducción de dependencia.</div>
            </div>
            <div className="manifesto-box">
              <div className="hud-title">[ 03. PQC ]</div>
              <div className="pillar-title">Post-Quantum Crypto</div>
              <div className="pillar-desc">Firmas KYBER/DILITHIUM. Inmutables.</div>
            </div>
          </div>

          
          <div className="endpoints-box" style={{marginBottom: '15px', borderColor: 'rgba(0,255,102,0.3)'}}>
            <div className="hud-title">[ GLOBAL FIAT / CRYPTO ]</div>
            <div className="endpoint" style={{color: '#00ff66', fontSize: '16px', letterSpacing: '3px', textShadow: '0 0 10px rgba(0,255,102,0.5)'}}>
               $ USD · € EUR · £ GBP · ¥ JPY · ₩ KRW · ₿ BTC · Ξ ETH
            </div>
            <div className="hud-title" style={{marginTop: '10px', color: '#888'}}>
               ΔΨ = ∞ · PROTOCOLO SOBERANO ACTIVO
            </div>
          </div>

          <div className="endpoints-box">
            <div className="hud-title">[ SYSTEM ENDPOINTS ]</div>
            <div className="endpoint"><span className="method">GET</span> /api/licencia-madre</div>
            <div className="endpoint"><span className="method">POST</span> /api/pagar</div>
            <div className="endpoint"><span className="method">POST</span> /api/validar</div>
          </div>

          {/* EL BOTÓN DE COMPRA AQUÍ */}
          <div className="action-section">
            <button className="buy-btn" onClick={() => setShowModal(true)}>
              [ ADQUIRIR LICENCIA QV-KRONOS ]
            </button>
          </div>

        </div>
        
        <footer className="term-footer">
          <div>FOLIO: 2608276846490</div>
          <div>ΔΨ = ∞</div>
        </footer>
      </div>

      {/* EL MODAL DE VENTA AQUÍ */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-cyan">PROTOCOLO DE ADQUISICIÓN</h2>
            <p className="text-grey" style={{marginBottom: '20px'}}>Desconéctate de la Matrix financiera.</p>
            
            <div className="payment-details">
              <p><strong>1. Transferencia SPEI</strong></p>
              <p>Monto: <span className="text-yellow">$2,500.00 MXN</span></p>
              <p>Beneficiario: <span className="text-green">Marco Antonio Rojas Valdovinos</span></p>
              <p>CLABE (Citibanamex):</p>
              <p className="text-cyan" style={{fontSize: '18px', letterSpacing: '1px'}}>002438701524066473</p>
              <br/>
              <p><strong>2. Envía tu comprobante</strong></p>
              <p>Haz clic abajo para enviarme el ticket por WhatsApp. Recibirás tu Sello QV y tu Folio.</p>
              <p>O envía tu comprobante a: <br/><span className="text-magenta" style={{fontSize: '14px'}}>marco.a.rojas.v@hotmail.com</span></p>
            </div>

            <div className="modal-actions">
              <a href="https://wa.me/5217225862335?text=Hola%20Marco,%20acabo%20de%20transferir%20los%20$2500%20MXN%20por%20la%20Licencia%20QV-KRONOS" target="_blank" rel="noreferrer" className="wa-btn">
                ENVIAR COMPROBANTE POR WHATSAPP
              </a>
              <button className="close-btn" onClick={() => setShowModal(false)}>CERRAR</button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: #020408; color: #fff; font-family: 'Share Tech Mono', monospace; min-height: 100vh; display: flex; justify-content: center; align-items: center; }
        .cyber-container { position: relative; width: 100vw; min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4)); background-size: 100% 4px; pointer-events: none; z-index: 10; opacity: 0.6; }
        .bg-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
        .terminal-card { position: relative; z-index: 5; width: 100%; max-width: 750px; background: rgba(8, 12, 20, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(0, 240, 255, 0.3); box-shadow: 0 0 40px rgba(0, 240, 255, 0.1); border-radius: 8px; }
        .corner { position: absolute; width: 15px; height: 15px; border: 2px solid #00f0ff; box-shadow: 0 0 10px #00f0ff; z-index: 6; }
        .top-left { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .top-right { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .bottom-left { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .bottom-right { bottom: -2px; right: -2px; border-left: none; border-top: none; }
        .term-header { display: flex; justify-content: space-between; padding: 12px 20px; border-bottom: 1px solid rgba(0, 240, 255, 0.2); background: rgba(0,0,0,0.4); }
        .dots { display: flex; gap: 6px; }
        .dots span { width: 10px; height: 10px; border-radius: 50%; }
        .dots span:nth-child(1) { background: #ff5f56; } .dots span:nth-child(2) { background: #ffbd2e; } .dots span:nth-child(3) { background: #27c93f; }
        .sys-title { color: #888; font-size: 12px; } .status-light { color: #00ff66; font-size: 12px; }
        .term-body { padding: 30px 20px; }
        .logo { color: #fff; text-align: center; font-size: 10px; line-height: 1.1; margin-bottom: 30px; text-shadow: 0 0 15px rgba(0, 240, 255, 0.2); }
        .logs-container { min-height: 160px; font-size: 14px; line-height: 1.6; margin-bottom: 30px; padding-left: 10px; border-left: 2px solid rgba(0, 240, 255, 0.3); }
        .log-line { display: flex; gap: 10px; margin-bottom: 4px; }
        .text-cyan { color: #00f0ff; } .text-magenta { color: #ff00ff; } .text-yellow { color: #ffea00; } .text-green { color: #00ff66; } .text-grey { color: #888; }
        .cursor { color: #00f0ff; animation: blink 1s step-end infinite; } @keyframes blink { 50% { opacity: 0; } }
        .manifesto-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px; }
        .manifesto-box { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 15px; border-radius: 4px; }
        .hud-title { color: #555; font-size: 11px; margin-bottom: 8px; }
        .pillar-title { color: #fff; font-size: 14px; font-weight: bold; margin-bottom: 5px; }
        .pillar-desc { color: #888; font-size: 11px; line-height: 1.4; }
        .endpoints-box { background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .endpoint { font-size: 13px; color: #ccc; margin-bottom: 6px; display: flex; gap: 10px; }
        .method { color: #ffea00; background: rgba(255, 234, 0, 0.1); padding: 0 4px; border-radius: 2px; font-size: 11px; font-weight: bold; }
        
        .action-section { text-align: center; margin-top: 20px; }
        .buy-btn { background: transparent; color: #00f0ff; border: 1px solid #00f0ff; padding: 15px 30px; font-family: 'Share Tech Mono', monospace; font-size: 16px; cursor: pointer; transition: 0.3s; box-shadow: 0 0 10px rgba(0,240,255,0.2); }
        .buy-btn:hover { background: #00f0ff; color: #000; box-shadow: 0 0 30px rgba(0,240,255,0.8); }

        .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.9); z-index: 100; display: flex; justify-content: center; align-items: center; padding: 20px; }
        .modal-content { background: #0a0c10; border: 1px solid #00f0ff; padding: 30px; max-width: 500px; width: 100%; border-radius: 8px; box-shadow: 0 0 50px rgba(0,240,255,0.2); text-align: center; }
        .modal-content h2 { margin-bottom: 10px; font-size: 20px; }
        .payment-details { text-align: left; background: rgba(0,240,255,0.05); padding: 20px; border-radius: 4px; margin-bottom: 20px; font-size: 14px; line-height: 1.6; }
        .payment-details p { margin-bottom: 5px; }
        .modal-actions { display: flex; flex-direction: column; gap: 10px; }
        .wa-btn { background: #25D366; color: #000; text-decoration: none; padding: 15px; font-weight: bold; border-radius: 4px; }
        .close-btn { background: transparent; color: #ff00ff; border: 1px solid #ff00ff; padding: 10px; cursor: pointer; }
        .term-footer { display: flex; justify-content: space-between; padding: 10px 20px; background: rgba(0,0,0,0.5); border-top: 1px solid rgba(0, 240, 255, 0.2); font-size: 11px; color: #888; }
        @media (max-width: 768px) { .manifesto-grid { grid-template-columns: 1fr; } .logo { font-size: 8px; } .logs-container { font-size: 12px; } }
      `}} />
    </main>
  );
}
