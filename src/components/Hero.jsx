import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Terminal, Database } from 'lucide-react';
import avatar from '../assets/avatar.jpg';

export default function Hero() {
  const words = ['Software Developer', 'Siswa RPL SMKN 6 Jakarta', 'IT Enthusiast'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        if (currentText === activeWord) {
          // Stay on word for 2 seconds
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // short delay before next word
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-info-container">
            <span className="hero-tag">Halo, Selamat Datang</span>
            <h1 className="hero-title">
              Saya <span>Iklil Badar</span> <br />
              <span style={{ fontSize: '2.5rem', background: 'none', WebkitTextFillColor: 'initial', color: 'var(--text-secondary)' }}>
                {currentText}
                <span className="typing-cursor" style={{ color: 'var(--accent-blue)', animation: 'blink 0.7s infinite' }}>|</span>
              </span>
            </h1>
            <p className="hero-desc">
              Siswa RPL (Rekayasa Perangkat Lunak) di SMKN 6 Jakarta yang memiliki minat mendalam di bidang Software Development dan Teknologi Informasi. Berpengalaman mengembangkan website, aplikasi desktop, dan sistem berbasis database.
            </p>
            <div className="hero-ctas">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Hubungi Saya <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn btn-secondary">
                Lihat Proyek
              </button>
            </div>
          </div>
          
          <div className="hero-image-outer">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <div className="hero-image-container">
                <img src={avatar} alt="Iklil Badar" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
