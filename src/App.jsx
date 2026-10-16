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
