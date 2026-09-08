import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero({ onOpenCv }) {
  const [typedText, setTypedText] = useState('');
  const words = ['Software Developer', 'Siswa RPL SMKN 6 Jakarta', 'IT Software'];

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timer = setTimeout(type, 2000);
        } else {
          timer = setTimeout(type, 100);
        }
      } else {
        setTypedText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(type, 500);
        } else {
          timer = setTimeout(type, 50);
        }
      }
    };

    timer = setTimeout(type, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-info-container">
            <span className="hero-tag">Halo, Selamat Datang</span>
            <h1 className="hero-title">
              Saya <span className="hero-name">Iklil Badar</span>
              <div className="hero-role">
                <span id="typing-text">{typedText}</span>
                <span className="typing-cursor">|</span>
              </div>
            </h1>
            <p className="hero-desc">
              Siswa RPL (Rekayasa Perangkat Lunak) di SMKN 6 Jakarta yang memiliki minat mendalam di bidang Software Development dan Teknologi Informasi. Berpengalaman mengembangkan website, aplikasi desktop, dan sistem berbasis database.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">
                Hubungi Saya <ArrowRight className="w-4 h-4 ml-1 inline" />
              </a>
              <button id="open-cv-btn" onClick={onOpenCv} className="btn btn-secondary">
                <FileText className="w-4 h-4 mr-1 inline" /> Lihat CV Saya
              </button>
              <a href="#projects" className="btn btn-outline">
                Lihat Proyek
              </a>
            </div>
          </div>

          <div className="hero-image-outer">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <div className="hero-image-container">
                <img src="/assets/avatar.jpg" alt="Iklil Badar" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
