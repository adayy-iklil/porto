import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenCv, isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: 'uil-estate', id: 'home' },
    { to: '/about', label: 'About', icon: 'uil-user', id: 'about' },
    { to: '/skills', label: 'Skills', icon: 'uil-file-alt', id: 'skills' },
    { to: '/qualification', label: 'Qualification', icon: 'uil-graduation-cap', id: 'qualification' },
    { to: '/services', label: 'Services', icon: 'uil-briefcase-alt', id: 'services' },
    { to: '/project', label: 'Project', icon: 'uil-scenery', id: 'project' },
    { to: '/contact', label: 'Contact', icon: 'uil-message', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset >= 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (item) => {
    if (item.to === '/') {
      return location.pathname === '/';
    }
    return (
      location.pathname === item.to ||
      (item.id === 'project' && location.pathname === '/portfolio')
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={closeMenu}>
          Iklil Badar
        </Link>

        {/* Mobile Backdrop Overlay */}
        {isMenuOpen && (
          <div
            className="nav__backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}

        {/* Mobile Dropdown / Slide Menu */}
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((item) => (
              <li key={item.id} className="nav__item">
                <Link
                  to={item.to}
                  className={`nav__link ${isActive(item) ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  <span className="nav__name">{item.label}</span>
                </Link>
              </li>
            ))}
            <li className="nav__item nav__item-mobile-cv">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
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
            onClick={closeMenu}
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
