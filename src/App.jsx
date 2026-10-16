import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

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

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Handle legacy hash URLs (e.g. #about -> /about)
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const validRoutes = ['about', 'skills', 'qualification', 'services', 'project', 'contact'];
      if (validRoutes.includes(hash)) {
        navigate(`/${hash}`, { replace: true });
      } else if (hash === 'portfolio') {
        navigate('/project', { replace: true });
      } else if (hash === 'home') {
        navigate('/', { replace: true });
      }
    }
  }, [navigate]);

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

      <main className="main page-content">
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About onOpenCv={openCv} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/portfolio" element={<Navigate to="/project" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <Footer />
      <ScrollUp />
      <CvModal isOpen={isCvOpen} onClose={closeCv} />
    </div>
  );
}
