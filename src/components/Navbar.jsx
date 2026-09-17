import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Beranda', id: 'hero' },
    { href: '#about', label: 'Tentang', id: 'about' },
    { href: '#skills', label: 'Keahlian', id: 'skills' },
    { href: '#projects', label: 'Proyek', id: 'projects' },
    { href: '#contact', label: 'Kontak', id: 'contact' },
  ];

  useEffect(() => {
    const calculateActiveSection = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop <= 100) return 'hero';
      if (scrollTop + clientHeight >= scrollHeight - 80) return 'contact';

      const offsetThreshold = clientHeight * 0.45;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetThreshold) return sections[i];
        }
      }
      return 'hero';
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
      const current = calculateActiveSection();
      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = (targetId) => {
    setActiveSection(targetId);
    setIsMobileMenuOpen(false);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId);
  };

  const handleCvClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(false);
    if (onOpenCv) {
      onOpenCv();
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <div className="nav-brand-group">
            <a 
              href="#hero" 
              className="nav-logo" 
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              Iklil Badar
            </a>
            
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Desktop Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div className="nav-actions">
            <button 
              type="button"
              onClick={handleCvClick} 
              className="btn btn-secondary btn-sm nav-cv-btn"
              aria-label="Lihat CV"
            >
              <FileText className="w-3.5 h-3.5 mr-1 inline" /> CV
            </button>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Top Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <div className="container">
            <ul className="mobile-dropdown-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-dropdown-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleCvClick}
                  className="mobile-dropdown-link mobile-cv-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  📄 Lihat Curriculum Vitae (CV)
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
