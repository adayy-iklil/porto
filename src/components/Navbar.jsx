import React, { useState, useEffect, useRef } from 'react';

export default function Navbar({ onOpenCv }) {
  const [activeNav, setActiveNav] = useState('#home');
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;
      const sections = ['home', 'about', 'portfolio', 'contact'];
      let currentSection = '#home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 220;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSection = `#${id}`;
          }
        }
      }

      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveNav(href);

    isClickScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 950);
  };

  return (
    <header className="alf-header">
      <nav className="alf-nav-pill" aria-label="Main Navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`alf-nav-pill__link ${activeNav === item.href ? 'is-active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          onClick={onOpenCv}
          className="alf-nav-pill__link alf-nav-pill__cv"
          title="Lihat Curriculum Vitae"
        >
          CV
        </button>
      </nav>
    </header>
  );
}
