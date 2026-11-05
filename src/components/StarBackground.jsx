import React, { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create twinkling stars
    const starCount = Math.min(130, Math.floor((width * height) / 11000));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.7 + 0.15,
      speed: (Math.random() * 0.012 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      driftY: Math.random() * 0.08 + 0.02,
      hue: Math.random() > 0.75 ? 215 : 225,
    }));

    // Shooting stars / meteors
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length >= 2) return;
      const startX = Math.random() * width * 0.85 + width * 0.1;
      const startY = Math.random() * height * 0.45;
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 deg diagonal
      const speed = Math.random() * 7 + 8;
      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 90 + 70,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 45 + 40,
      });
    };

    const meteorInterval = setInterval(() => {
      if (Math.random() < 0.75) {
        spawnMeteor();
      }
    }, 2400);

    // Spawn one shortly after load
    const initialMeteorTimeout = setTimeout(spawnMeteor, 900);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.speed;
        if (s.alpha > 0.9 || s.alpha < 0.12) {
          s.speed = -s.speed;
        }
        s.y -= s.driftY;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 90%, 88%, ${Math.max(0.1, Math.min(1, s.alpha))})`;
        ctx.fill();
      }

      // Draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life += 1;
        m.alpha = Math.max(0, 1 - m.life / m.maxLife);

        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.length;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.length;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(147, 197, 253, ${m.alpha})`);
        grad.addColorStop(0.3, `rgba(59, 130, 246, ${m.alpha * 0.6})`);
        grad.addColorStop(1, 'rgba(59, 130, 246, 0)');

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing head
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${m.alpha})`;
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        if (m.life >= m.maxLife || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(meteorInterval);
      clearTimeout(initialMeteorTimeout);
    };
  }, []);

  return (
    <div className="space-bg-wrapper" aria-hidden="true">
      <div className="space-bg-glow space-bg-glow--top"></div>
      <div className="space-bg-glow space-bg-glow--mid"></div>
      <div className="space-bg-glow space-bg-glow--bottom"></div>
      <canvas ref={canvasRef} className="space-bg-canvas" />
    </div>
  );
}

