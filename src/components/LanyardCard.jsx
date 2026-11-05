import React, { useState, useRef, useEffect } from 'react';

export default function LanyardCard() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, vx: 0, vy: 0, rotZ: 0, rotX: 0, rotY: 0 });

  const dragStartRef = useRef({ x: 0, y: 0, startX: 0, startY: 0, moved: false, lastX: 0, lastY: 0 });
  const physicsRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    Dragging: false,
  });

  useEffect(() => {
    let rafId;
    const stiffness = 0.085;
    const damping = 0.86;

    const updatePhysics = () => {
      const p = physicsRef.current;
      if (!p.Dragging) {
        // Spring force toward origin (0, 0) + gentle idle swing
        const time = performance.now() * 0.0018;
        const targetX = Math.sin(time) * 4;
        const targetY = Math.cos(time * 1.3) * 2.5;

        const ax = (targetX - p.x) * stiffness;
        const ay = (targetY - p.y) * stiffness;

        p.vx = (p.vx + ax) * damping;
        p.vy = (p.vy + ay) * damping;
        p.x += p.vx;
        p.y += p.vy;

        const rotZ = -p.x * 0.11 + p.vx * 0.35;
        const rotX = Math.max(-22, Math.min(22, -p.y * 0.12));
        const rotY = Math.max(-28, Math.min(28, p.x * 0.16));

        setPos({
          x: p.x,
          y: p.y,
          vx: p.vx,
          vy: p.vy,
          rotZ,
          rotX,
          rotY,
        });
      }
      rafId = requestAnimationFrame(updatePhysics);
    };

    rafId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    physicsRef.current.Dragging = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startX: physicsRef.current.x,
      startY: physicsRef.current.y,
      lastX: e.clientX,
      lastY: e.clientY,
      moved: false,
    };
  };

  const handlePointerMove = (e) => {
    if (!physicsRef.current.Dragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (Math.hypot(dx, dy) > 6) {
      dragStartRef.current.moved = true;
    }

    // Constrain stretch with elastic resistance
    const rawX = dragStartRef.current.startX + dx * 0.78;
    const rawY = Math.max(-50, dragStartRef.current.startY + dy * 0.78);
    const maxRadius = 155;
    const dist = Math.hypot(rawX, rawY);
    const scale = dist > maxRadius ? maxRadius / dist : 1;

    const nextX = rawX * scale;
    const nextY = rawY * scale;

    const vx = e.clientX - dragStartRef.current.lastX;
    const vy = e.clientY - dragStartRef.current.lastY;
    dragStartRef.current.lastX = e.clientX;
    dragStartRef.current.lastY = e.clientY;

    physicsRef.current.x = nextX;
    physicsRef.current.y = nextY;
    physicsRef.current.vx = vx * 0.65;
    physicsRef.current.vy = vy * 0.65;

    const rotZ = -nextX * 0.11 + vx * 0.3;
    const rotX = Math.max(-25, Math.min(25, -nextY * 0.14));
    const rotY = Math.max(-32, Math.min(32, nextX * 0.18));

    setPos({
      x: nextX,
      y: nextY,
      vx,
      vy,
      rotZ,
      rotX,
      rotY,
    });
  };

  const handlePointerUp = (e) => {
    if (!physicsRef.current.Dragging) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
    physicsRef.current.Dragging = false;

    // If user clicked without dragging, flip the card 180 deg!
    if (!dragStartRef.current.moved) {
      setIsFlipped((prev) => !prev);
    }
  };

  // Calculate SVG strap coordinates from top ceiling anchor (200, 0) to card clip (200 + pos.x, 128 + pos.y)
  const anchorX = 200;
  const anchorY = 0;
  const clipX = 200 + pos.x;
  const clipY = 122 + pos.y;
  const ctrlX = anchorX + pos.x * 0.38;
  const ctrlY = (anchorY + clipY) * 0.52 + Math.max(0, 18 - pos.y * 0.15);

  const flipDeg = isFlipped ? 180 : 0;

  return (
    <div className="lanyard-stage" ref={containerRef}>
      {/* SVG Dynamic Hanging Lanyard Strap */}
      <svg
        className="lanyard-svg"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#080d1a" />
            <stop offset="50%" stopColor="#111c38" />
            <stop offset="100%" stopColor="#0a1224" />
          </linearGradient>
          <linearGradient id="strapEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#1e293b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Left & Right loop of lanyard ribbon converging into the clip */}
        <path
          d={`M ${anchorX - 18} ${anchorY} Q ${ctrlX - 11} ${ctrlY} ${clipX - 5} ${clipY}`}
          fill="none"
          stroke="url(#strapGrad)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d={`M ${anchorX - 18} ${anchorY} Q ${ctrlX - 11} ${ctrlY} ${clipX - 5} ${clipY}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          strokeOpacity="0.45"
        />

        <path
          d={`M ${anchorX + 18} ${anchorY} Q ${ctrlX + 11} ${ctrlY} ${clipX + 5} ${clipY}`}
          fill="none"
          stroke="url(#strapGrad)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d={`M ${anchorX + 18} ${anchorY} Q ${ctrlX + 11} ${ctrlY} ${clipX + 5} ${clipY}`}
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Interactive 3D ID Card Wrapper */}
      <div
        className={`lanyard-card-wrapper ${isDragging ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotateZ(${pos.rotZ}deg) rotateX(${pos.rotX}deg) rotateY(${pos.rotY + flipDeg}deg)`,
        }}
        title="Tahan & tarik kartu ID, atau klik untuk membalik (Front / Back)"
      >
        {/* Lanyard Metallic Clasp & Clamp at Top */}
        <div className="lanyard-clasp">
          <div className="lanyard-clasp__ring" />
          <div className="lanyard-clasp__body" />
        </div>

        {/* FRONT FACE */}
        <div className="lanyard-face lanyard-face--front">
          <div className="lanyard-card__slot" />

          <div className="lanyard-card__header">
            <span className="lanyard-card__role">DEVELOPER</span>
            <span className="lanyard-card__dept">REKAYASA PERANGKAT LUNAK</span>
          </div>

          <div className="lanyard-card__photo-frame">
            <img
              src="/assets/avatar.jpg"
              alt="Iklil Badar"
              className="lanyard-card__photo"
              draggable="false"
            />
          </div>

          <div className="lanyard-card__name-wrap">
            <h3 className="lanyard-card__name">IKLIL BADAR</h3>
          </div>

          <div className="lanyard-card__footer">
            <div className="lanyard-card__footer-wave" />
            <span>PORTFOLIO</span>
          </div>
        </div>

        {/* BACK FACE (QR Code Connect) */}
        <div className="lanyard-face lanyard-face--back">
          <div className="lanyard-card__slot" />

          <div className="lanyard-card__header">
            <span className="lanyard-card__role">SCAN HERE</span>
            <span className="lanyard-card__dept">CONNECT WITH ME</span>
          </div>

          <div className="lanyard-card__qr-box">
            {/* Crisp Vector QR Code */}
            <svg
              viewBox="0 0 29 29"
              className="lanyard-card__qr-svg"
              shapeRendering="crispEdges"
            >
              <rect width="29" height="29" fill="#ffffff" />
              {/* Top-left finder */}
              <path
                fill="#0f172a"
                d="M2,2 h7 v7 h-7 z M3,3 v5 h5 v-5 z M4,4 h3 v3 h-3 z
                   M20,2 h7 v7 h-7 z M21,3 v5 h5 v-5 z M22,4 h3 v3 h-3 z
                   M2,20 h7 v7 h-7 z M3,21 v5 h5 v-5 z M4,22 h3 v3 h-3 z
                   M11,2 h2 v1 h-2 z M14,2 h1 v2 h-1 z M16,2 h2 v1 h-2 z
                   M10,4 h2 v2 h-2 z M13,5 h3 v1 h-3 z M17,4 h2 v2 h-2 z
                   M10,7 h1 v2 h-1 z M12,8 h2 v1 h-2 z M15,7 h3 v2 h-3 z
                   M2,10 h2 v2 h-2 z M5,11 h3 v1 h-3 z M9,10 h2 v3 h-2 z
                   M12,11 h2 v2 h-2 z M15,10 h1 v3 h-1 z M17,11 h2 v2 h-2 z
                   M20,10 h2 v2 h-2 z M23,11 h3 v1 h-3 z M26,10 h1 v3 h-1 z
                   M3,14 h2 v2 h-2 z M6,13 h2 v2 h-2 z M10,14 h3 v2 h-3 z
                   M14,14 h2 v1 h-2 z M17,14 h3 v2 h-3 z M21,13 h2 v3 h-2 z
                   M24,14 h3 v2 h-3 z M2,17 h3 v2 h-3 z M7,16 h2 v3 h-2 z
                   M11,17 h2 v2 h-2 z M15,16 h2 v3 h-2 z M19,17 h2 v2 h-2 z
                   M22,17 h2 v2 h-2 z M25,17 h2 v2 h-2 z
                   M10,20 h2 v2 h-2 z M13,21 h3 v1 h-3 z M17,20 h3 v2 h-3 z
                   M20,20 h5 v5 h-5 z M21,21 v3 h3 v-3 z M22,22 h1 v1 h-1 z
                   M11,23 h2 v3 h-2 z M14,24 h2 v3 h-2 z M17,23 h2 v2 h-2 z
                   M19,26 h3 v1 h-3 z M24,25 h3 v2 h-3 z"
              />
            </svg>
          </div>

          <div className="lanyard-card__name-wrap">
            <span className="lanyard-card__scan-sub">@ikliladay • github.com/adayy-iklil</span>
          </div>

          <div className="lanyard-card__footer">
            <div className="lanyard-card__footer-wave" />
            <span>PORTFOLIO</span>
          </div>
        </div>
      </div>

      {/* Flip / Drag helper pill */}
      <div className="lanyard-controls">
        <button
          type="button"
          className="lanyard-flip-btn"
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <i className="uil uil-sync"></i> {isFlipped ? 'Lihat Depan' : 'Balik Kartu (QR)'}
        </button>
        <span className="lanyard-hint">Tarik kartu untuk ayunan fisika</span>
      </div>
    </div>
  );
}

