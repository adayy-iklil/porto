import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = current < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 5) + 2;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 420);
        }, 180);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`alf-loader ${fadingOut ? 'alf-loader--hide' : ''}`}>
      <div className="alf-loader__box">
        <div className="alf-loader__percent">{progress}%</div>
        <div className="alf-loader__bar-track">
          <div
            className="alf-loader__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="alf-loader__status">Memuat assets...</div>
      </div>
    </div>
  );
}
