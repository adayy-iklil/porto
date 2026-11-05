import React, { useState, useEffect } from 'react';
import StarBackground from './components/StarBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCvOpen, setIsCvOpen] = useState(false);

  const openCv = () => setIsCvOpen(true);
  const closeCv = () => setIsCvOpen(false);

  // Ensure dark-theme class is active and clean # hashes from URL
  useEffect(() => {
    document.body.classList.add('dark-theme');

    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      const initialTarget =
        document.getElementById(hashId) ||
        (hashId === 'project' ? document.getElementById('portfolio') : null) ||
        (hashId === 'portfolio' ? document.getElementById('project') : null);

      if (initialTarget) {
        setTimeout(() => initialTarget.scrollIntoView({ behavior: 'smooth' }), 150);
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

        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="alf-app">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <StarBackground />
      <Navbar onOpenCv={openCv} />

      <main className="alf-main">
        <Hero />
        <About onOpenCv={openCv} />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <CvModal isOpen={isCvOpen} onClose={closeCv} />
    </div>
  );
}
