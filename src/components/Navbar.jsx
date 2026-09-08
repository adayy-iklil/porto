import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [desktopPillStyle, setDesktopPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [mobilePillStyle, setMobilePillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);
  const isManualScrolling = useRef(false);
  const scrollUnlockTimer = useRef(null);
  const isDraggingRef = useRef(false);
  const lastActiveIdRef = useRef('hero');

  const navItems = [
    { href: '#hero', label: 'Beranda', id: 'hero' },
    { href: '#about', label: 'Tentang', id: 'about' },
    { href: '#skills', label: 'Keahlian', id: 'skills' },
    { href: '#projects', label: 'Proyek', id: 'projects' },
    { href: '#contact', label: 'Kontak', id: 'contact' },
  ];

  // Follow hover cursor if available; otherwise show current active section
  const currentDisplaySection = hoveredSection || activeSection;

  // Measure and position the liquid glass sliding capsules using exact element layout offsets
  const updatePills = useCallback((targetSectionId) => {
    if (!targetSectionId) return;

    requestAnimationFrame(() => {
      // Desktop Pill
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

      // Mobile Pill (Tracks cursor hover, tap, drag & active state)
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
    });
  }, []);

  // Update pills whenever active or hovered section changes
  useEffect(() => {
    updatePills(currentDisplaySection);
  }, [currentDisplaySection, updatePills]);

  // Robust Viewport Scroll-Spy and Scroll Event Handling
  useEffect(() => {
    const calculateActiveSection = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // 1. If at top of the page (within 100px), always hero
      if (scrollTop <= 100) {
        return 'hero';
      }

      // 2. If at bottom of the page (within 80px), always contact
      if (scrollTop + clientHeight >= scrollHeight - 80) {
        return 'contact';
      }

      // 3. Scan sections from bottom to top to identify the current visible section
      const offsetThreshold = clientHeight * 0.45;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetThreshold) {
            return sections[i];
          }
        }
      }

      return 'hero';
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);

      // If manual navigation or dragging is active, do not let scrollspy jitter
      if (isManualScrolling.current || isDraggingRef.current) return;

      const current = calculateActiveSection();
      setActiveSection((prev) => (prev !== current ? current : prev));
      lastActiveIdRef.current = current;
    };

    const handleResize = () => {
      updatePills(currentDisplaySection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial position measurements after DOM rendering & font load
    const initTimer = setTimeout(() => {
      updatePills(currentDisplaySection);
    }, 80);

    const initTimer2 = setTimeout(() => {
      updatePills(currentDisplaySection);
    }, 300);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        updatePills(currentDisplaySection);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(initTimer);
      clearTimeout(initTimer2);
      if (scrollUnlockTimer.current) clearTimeout(scrollUnlockTimer.current);
    };
  }, [currentDisplaySection, updatePills]);

  // Navigate to target section smoothly
  const scrollToTarget = (targetId) => {
    isManualScrolling.current = true;
    setActiveSection(targetId);
    setHoveredSection(targetId);
    lastActiveIdRef.current = targetId;
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
    }, 1400);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId);
  };

  const handleHoverItem = (id) => {
    setActiveSection(id);
    setHoveredSection(id);
    lastActiveIdRef.current = id;
    updatePills(id);
  };

  const handleLeaveNav = () => {
    setHoveredSection(null);
    updatePills(activeSection);
  };

  // Find nearest section tab from clientX pointer coordinates
  const getSectionFromPointerX = (clientX) => {
    if (!mobileNavRef.current) return null;
    const items = mobileNavRef.current.querySelectorAll('.mobile-nav-item');
    let closestId = null;
    let minDistance = Infinity;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(clientX - itemCenterX);
      const navLink = item.querySelector('[data-nav-id]');
      const navId = navLink?.getAttribute('data-nav-id');
      
      if (distance < minDistance && navId) {
        minDistance = distance;
        closestId = navId;
      }
    });

    return closestId;
  };

  // Touch / Pointer Drag Gesture (WhatsApp iOS 26 style drag-and-slide)
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);

    const targetId = getSectionFromPointerX(e.clientX);
    if (targetId) {
      handleHoverItem(targetId);
      if (navigator.vibrate) navigator.vibrate(10);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const targetId = getSectionFromPointerX(e.clientX);
    if (targetId && targetId !== lastActiveIdRef.current) {
      handleHoverItem(targetId);
      if (navigator.vibrate) navigator.vibrate(8);
    }
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const targetId = getSectionFromPointerX(e.clientX) || lastActiveIdRef.current;
    if (targetId) {
      scrollToTarget(targetId);
    }
  };

  return (
    <>
      {/* Top Header Bar for Desktop & Mobile Branding */}
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a 
              href="#hero" 
              className="nav-logo" 
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              Iklil Badar
            </a>

            {/* Desktop Center Pill Nav with Liquid Glass Cursor Tracker */}
            <nav 
              className="desktop-nav" 
              aria-label="Desktop Navigation"
              onMouseLeave={handleLeaveNav}
            >
              <ul 
                className="nav-links" 
                ref={desktopNavRef}
              >
                {/* iOS Liquid Glass Sliding Pill Indicator */}
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
                    onMouseEnter={() => handleHoverItem(item.id)}
                    onMouseMove={() => {
                      if (hoveredSection !== item.id) handleHoverItem(item.id);
                    }}
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

            {/* Right Action Buttons */}
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
              <a 
                href="#contact" 
                className="btn btn-primary btn-sm nav-contact-btn"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Hubungi <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 inline" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Bottom Nav for Mobile with Interactive Touch Drag Gesture (WhatsApp iOS 26 style) */}
      <nav 
        className={`mobile-bottom-nav ${isDragging ? 'is-dragging' : ''}`}
        aria-label="Mobile Navigation"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <ul 
          className="mobile-bottom-nav-links" 
          ref={mobileNavRef}
        >
          {/* iOS Liquid Glass Sliding Capsule Indicator for Mobile */}
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
            <li 
              key={item.id} 
              className="mobile-nav-item"
              onMouseEnter={() => handleHoverItem(item.id)}
              onMouseMove={() => {
                if (hoveredSection !== item.id) handleHoverItem(item.id);
              }}
              onTouchStart={() => handleHoverItem(item.id)}
            >
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


