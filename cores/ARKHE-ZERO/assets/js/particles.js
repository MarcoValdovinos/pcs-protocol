/* ═══════════════════════════════════════════════════════════════
   ARKHÉ ZERO · CAMPO DE PARTÍCULAS
   Fondo animado compartido por todas las páginas
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const c = document.getElementById('field');
  if (!c) return;

  const ctx = c.getContext('2d');
  const DPR = window.devicePixelRatio || 1;
  let W, H, parts = [];
  const mouse = { x: -9999, y: -9999 };

  function size() {
    W = c.width  = window.innerWidth  * DPR;
    H = c.height = window.innerHeight * DPR;
    c.style.width  = window.innerWidth + 'px';
    c.style.height = window.innerHeight + 'px';
  }
  size();
  window.addEventListener('resize', size, { passive: true });

  // Lee colores del tema activo
  function getThemeColors() {
    const style = getComputedStyle(document.body);
    return {
      gold:   style.getPropertyValue('--gold').trim()   || '#c9a227',
      teal:   style.getPropertyValue('--teal').trim()   || '#4fd1c5',
      violet: style.getPropertyValue('--violet').trim() || '#7c5cff',
    };
  }

  function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return '201,162,39';
    return `${parseInt(m[1], 16)},${parseInt(m[2], 16)},${parseInt(m[3], 16)}`;
  }

  let themeRgb = { gold: '201,162,39', teal: '79,209,197', violet: '124,92,255' };

  function refreshTheme() {
    const c = getThemeColors();
    themeRgb = {
      gold:   hexToRgb(c.gold),
      teal:   hexToRgb(c.teal),
      violet: hexToRgb(c.violet),
    };
  }
  refreshTheme();

  // Observer para detectar cambio de tema
  const observer = new MutationObserver(() => { refreshTheme(); });
  observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });

  // ── Partícula ────────────────────────────────────────────────
  const COUNT = window.innerWidth < 760 ? 40 : 82;

  class Particle {
    constructor() { this.reset(true); }

    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 20 * DPR;
      this.vx = (Math.random() - 0.5) * 0.28 * DPR;
      this.vy = -(Math.random() * 0.32 + 0.08) * DPR;
      this.r  = (Math.random() * 1.5 + 0.5) * DPR;
      this.a  = Math.random() * 0.5 + 0.18;
      const rnd = Math.random();
      if (rnd > 0.82)      this.hue = 'violet';
      else if (rnd > 0.65) this.hue = 'teal';
      else                 this.hue = 'gold';
    }

    step() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -30 || this.x < -30 || this.x > W + 30) this.reset(false);
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${themeRgb[this.hue]},${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) parts.push(new Particle());

  const LINK = 128 * DPR;
  const MREACH = 190 * DPR;

  function loop() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      p.step();
      p.draw();

      for (let j = i + 1; j < parts.length; j++) {
        const q = parts[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${themeRgb.gold},${(1 - d / LINK) * 0.13})`;
          ctx.lineWidth = 0.6 * DPR;
          ctx.stroke();
        }
      }

      const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
      const md = Math.hypot(mdx, mdy);
      if (md < MREACH) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(${themeRgb.teal},${(1 - md / MREACH) * 0.2})`;
        ctx.lineWidth = 0.5 * DPR;
        ctx.stroke();
      }
    }
    requestAnimationFrame(loop);
  }

  loop();

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX * DPR;
    mouse.y = e.clientY * DPR;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = mouse.y = -9999;
  });
})();