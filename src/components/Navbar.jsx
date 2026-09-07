import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          Iklil Badar
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#hero" className="nav-link" onClick={closeMobileMenu}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMobileMenu}>
              Keahlian
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>
              Proyek
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
              Kontak
            </a>
          </li>
        </ul>

        <button className="nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
          {mobileMenuOpen ? (
            <X id="close-icon" className="w-6 h-6" />
          ) : (
            <Menu id="menu-icon" className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
