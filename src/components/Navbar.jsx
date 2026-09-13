import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FileText } from 'lucide-react';

export default function Navbar({ onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [desktopPillStyle, setDesktopPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [mobilePillStyle, setMobilePillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);
  const isManualScrolling = useRef(false);
  const scrollUnlockTimer = useRef(null);

  const navItems = [
    { href: '#hero', label: 'Beranda', id: 'hero' },
    { href: '#about', label: 'Tentang', id: 'about' },
    { href: '#skills', label: 'Keahlian', id: 'skills' },
    { href: '#projects', label: 'Proyek', id: 'projects' },
    { href: '#contact', label: 'Kontak', id: 'contact' },
  ];

  const currentDisplaySection = hoveredSection || activeSection;

  const updatePills = useCallback((targetSectionId) => {
    if (!targetSectionId) return;

    if (desktopNavRef.current) {
      const activeEl = desktopNavRef.current.querySelector(`[data-nav-id="${targetSectionId}"]`);
      if (activeEl) {
        const liEl = activeEl.closest('li') || activeEl;
        if (liEl && liEl.offsetWidth > 0) {
          setDesktopPillStyle({
            left: liEl.offsetLeft,
            width: liEl.offsetWidth,
            opacity: 1,
          });
        }
      }
    }

    if (mobileNavRef.current) {
      const activeEl = mobileNavRef.current.querySelector(`[data-nav-id="${targetSectionId}"]`);
      if (activeEl) {
        const liEl = activeEl.closest('li') || activeEl;
        if (liEl && liEl.offsetWidth > 0) {
          setMobilePillStyle({
            left: liEl.offsetLeft,
            width: liEl.offsetWidth,
            opacity: 1,
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    updatePills(currentDisplaySection);
  }, [currentDisplaySection, updatePills]);

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
      if (isManualScrolling.current) return;
      const current = calculateActiveSection();
      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    const handleResize = () => {
      updatePills(currentDisplaySection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    const timer = setTimeout(() => updatePills(currentDisplaySection), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      if (scrollUnlockTimer.current) clearTimeout(scrollUnlockTimer.current);
    };
  }, [currentDisplaySection, updatePills]);

  const scrollToTarget = (targetId) => {
    isManualScrolling.current = true;
    setActiveSection(targetId);
    setHoveredSection(targetId);
    updatePills(targetId);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = window.innerWidth <= 860 ? 20 : 76;
      const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (scrollUnlockTimer.current) clearTimeout(scrollUnlockTimer.current);
    scrollUnlockTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId);
  };

  return (
    <>
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
              <span className="nav-status-badge">
                <span className="status-dot"></span> Available for opportunities
              </span>
            </div>

            <nav className="desktop-nav" aria-label="Desktop Navigation">
              <ul className="nav-links" ref={desktopNavRef} onMouseLeave={() => setHoveredSection(null)}>
                <div
                  className="nav-sliding-glass-pill"
                  style={{
                    transform: `translate3d(${desktopPillStyle.left}px, 0, 0)`,
                    width: `${desktopPillStyle.width}px`,
                    opacity: desktopPillStyle.opacity,
                  }}
                  aria-hidden="true"
                />
                {navItems.map((item) => (
                  <li 
                    key={item.id} 
                    className="nav-item"
                    onMouseEnter={() => setHoveredSection(item.id)}
                  >
                    <a
                      href={item.href}
                      data-nav-id={item.id}
                      className={`nav-link ${currentDisplaySection === item.id ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="nav-actions">
              {onOpenCv && (
                <button 
                  onClick={onOpenCv} 
                  className="btn btn-secondary btn-sm nav-cv-btn"
                  aria-label="Lihat CV"
                >
                  <FileText className="w-3.5 h-3.5 mr-1 inline" /> CV
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        <ul className="mobile-bottom-nav-links" ref={mobileNavRef}>
          <div
            className="mobile-sliding-glass-pill"
            style={{
              transform: `translate3d(${mobilePillStyle.left}px, 0, 0)`,
              width: `${mobilePillStyle.width}px`,
              opacity: mobilePillStyle.opacity,
            }}
            aria-hidden="true"
          />
          {navItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <a
                href={item.href}
                data-nav-id={item.id}
                className={`mobile-bottom-nav-link ${currentDisplaySection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
