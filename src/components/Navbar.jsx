import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenCv, isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', icon: 'uil-estate', id: 'home' },
    { href: '#about', label: 'About', icon: 'uil-user', id: 'about' },
    { href: '#skills', label: 'Skills', icon: 'uil-file-alt', id: 'skills' },
    { href: '#qualification', label: 'Qualification', icon: 'uil-graduation-cap', id: 'qualification' },
    { href: '#services', label: 'Services', icon: 'uil-briefcase-alt', id: 'services' },
    { href: '#project', label: 'Project', icon: 'uil-scenery', id: 'project' },
    { href: '#contact', label: 'Contact', icon: 'uil-message', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY >= 50);

      const sections = ['home', 'about', 'skills', 'qualification', 'services', 'project', 'portfolio', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (scrollY >= sectionTop) {
            setActiveNav(sectionId === 'portfolio' ? 'project' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveNav(id);
    setIsMenuOpen(false);

    const target =
      document.getElementById(id) ||
      (id === 'project' ? document.getElementById('portfolio') : null) ||
      (id === 'portfolio' ? document.getElementById('project') : null);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={(e) => handleNavClick(e, 'home')}>
          Iklil Badar
        </a>

        {/* Mobile Backdrop Overlay */}
        {isMenuOpen && (
          <div
            className="nav__backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        {/* Mobile Dropdown / Slide Menu */}
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={item.href}
                  className={`nav__link ${activeNav === item.id ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  <span className="nav__name">{item.label}</span>
                </a>
              </li>
            ))}
            <li className="nav__item nav__item-mobile-cv">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenCv();
                }}
                className="nav__link nav__link-btn"
              >
                <i className="uil uil-file-alt nav__icon"></i>
                <span className="nav__name">CV</span>
              </button>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Tutup menu"
          ></i>
        </div>

        <div className="nav__btns">
          {/* Theme change button */}
          <i
            className={`uil ${isDark ? 'uil-sun' : 'uil-moon'} change-theme`}
            id="theme-button"
            onClick={onToggleTheme}
            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
            aria-label="Ganti tema warna"
          ></i>

          <button
            type="button"
            onClick={onOpenCv}
            className="button button--small button--flex nav__cv-btn"
          >
            CV <i className="uil uil-file-alt button__icon" style={{ marginLeft: '4px' }}></i>
          </button>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
            title={isMenuOpen ? 'Tutup' : 'Menu'}
          >
            <i className={`uil ${isMenuOpen ? 'uil-times' : 'uil-bars'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
