import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          Iklil Badar
        </a>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><span className="nav-link" onClick={() => scrollToSection('hero')}>Beranda</span></li>
          <li><span className="nav-link" onClick={() => scrollToSection('about')}>Tentang</span></li>
          <li><span className="nav-link" onClick={() => scrollToSection('skills')}>Keahlian</span></li>
          <li><span className="nav-link" onClick={() => scrollToSection('projects')}>Proyek</span></li>
          <li><span className="nav-link" onClick={() => scrollToSection('contact')}>Kontak</span></li>
        </ul>

        <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
