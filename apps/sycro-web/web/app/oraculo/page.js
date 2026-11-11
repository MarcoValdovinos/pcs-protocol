'use client';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

export default function OraculoPage() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  
  const [input, setInput] = useState('');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'monospace', color: '#fff', background: '#020408', minHeight: '100vh' }}>
      <h1 style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>ORÁCULO CUÁNTICO</h1>
      <p style={{ color: '#888' }}>La sabiduría hermética aplicada a la IA.</p>
      
      <div style={{ border: '1px solid #00f0ff', padding: '20px', borderRadius: '8px', marginTop: '20px', background: 'rgba(0, 240, 255, 0.05)', minHeight: '200px' }}>
        {messages.map(message => (
          <div key={message.id} style={{ marginBottom: '15px' }}>
            <strong style={{ color: message.role === 'user' ? '#ff00ff' : '#00ff66' }}>
              {message.role === 'user' ? 'TÚ: ' : 'ORÁCULO: '}
            </strong>
            {message.parts.map((part, index) =>
              part.type === 'text' ? <span key={index}>{part.text}</span> : null,
            )}
          </div>
        ))}
        
        {/* Mostrar el error real de forma clara */}
        {error && (
          <div style={{ color: '#ff0000', marginTop: '10px', border: '1px dashed #ff0000', padding: '10px', backgroundColor: 'rgba(255,0,0,0.1)' }}>
            <strong>Falla del Sistema:</strong> {error.message}
          </div>
        )}
      </div>

      <form 
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput('');
          }
        }}
        style={{ marginTop: '20px', display: 'flex', gap: '10px' }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={status !== 'ready'}
          placeholder="Escribe tu consulta..."
          style={{ flex: 1, padding: '15px', background: '#000', border: '1px solid #00f0ff', color: '#fff', fontFamily: 'monospace' }}
        />
        <button 
          type="submit" 
          disabled={status !== 'ready'}
          style={{ padding: '15px 30px', background: status === 'ready' ? '#00f0ff' : '#555', color: '#000', border: 'none', fontWeight: 'bold', cursor: status === 'ready' ? 'pointer' : 'not-allowed' }}
        >
          {status === 'streaming' || status === 'submitted' ? 'INVOCANDO...' : 'ENVIAR'}
        </button>
      </form>
    </div>
  );
}
