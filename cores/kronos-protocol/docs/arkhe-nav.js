================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

// ◯_● ARKHÉ ZERO · Barra de Navegación Universal v2 (Accesos Directos)
(function () {
  if (document.getElementById('arkhe-nav')) return;

  const style = document.createElement('style');
  style.textContent = `
    #arkhe-nav {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      background: rgba(5, 5, 8, 0.98);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(212, 175, 55, 0.4);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 6px 0;
      z-index: 9999;
      box-shadow: 0 -5px 20px rgba(0,0,0,0.9);
      font-family: 'Courier New', monospace;
    }
    #arkhe-nav a {
      background: transparent;
      border: none;
      color: #D4AF37;
      font-size: 10px;
      letter-spacing: 1px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding: 5px 8px;
      cursor: pointer;
      transition: all 0.3s;
      flex: 1;
    }
    #arkhe-nav a:hover, #arkhe-nav a:active {
      color: #FFF3A0;
      text-shadow: 0 0 10px #D4AF37;
      background: rgba(212,175,55,0.1);
    }
    #arkhe-nav .icon { font-size: 18px; line-height: 1; margin-bottom: 2px; }
    #arkhe-nav .label { font-size: 8px; color: #888; text-transform: uppercase; }
    #arkhe-nav a:hover .label { color: #D4AF37; }
    body { padding-bottom: 70px !important; }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.id = 'arkhe-nav';

  const links = [
    { href: '/kronos-protocol/index.html', icon: '◯_●', label: 'HUB', highlight: true },
    { href: '/kronos-protocol/certificado.html', icon: '📜', label: 'Certificar' },
    { href: '/kronos-protocol/verificar/index.html', icon: '🔐', label: 'Verificar' },
    { href: '/kronos-protocol/comprar/index.html', icon: '💠', label: 'Licencias' },
    { href: '/kronos-protocol/estado.html', icon: '📊', label: 'Nodo' },
  ];

  links.forEach((l) => {
    const a = document.createElement('a');
    a.href = l.href;
    a.innerHTML = `<span class="icon">${l.icon}</span><span class="label">${l.label}</span>`;
    // Detectar si estamos en esta página para resaltarla
    if (window.location.pathname.endsWith(l.href.split('/').pop())) {
      a.style.color = '#FFF3A0';
      a.style.background = 'rgba(212,175,55,0.15)';
    }
    nav.appendChild(a);
  });

  document.body.appendChild(nav);
})();
