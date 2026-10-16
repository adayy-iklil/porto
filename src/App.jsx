import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import CvModal from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const openCv = () => setIsCvOpen(true);
  const closeCv = () => setIsCvOpen(false);

  // Apply dark-theme class to body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('selected-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('selected-theme', 'light');
    }
  }, [isDark]);

  // Remove # (hash) from URL domain bar and support smooth scroll cleanly
  useEffect(() => {
    // If user loaded with a hash in the URL, scroll to section and remove hash from address bar
    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      const initialTarget =
        document.getElementById(hashId) ||
        (hashId === 'project' ? document.getElementById('portfolio') : null) ||
        (hashId === 'portfolio' ? document.getElementById('project') : null);

      if (initialTarget) {
        setTimeout(() => initialTarget.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref || rawHref === '#') return;

      const targetId = rawHref.slice(1);
      const targetElement =
        document.getElementById(targetId) ||
        (targetId === 'project' ? document.getElementById('portfolio') : null) ||
        (targetId === 'portfolio' ? document.getElementById('project') : null);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Ensure hash never appears or remains in the browser address bar
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="portfolio-app">
      <Navbar
        onOpenCv={openCv}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="main">
        <Hero />
        <About onOpenCv={openCv} />
        <Skills />
        <Qualification />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
      <CvModal isOpen={isCvOpen} onClose={closeCv} />
    </div>
  );
}
