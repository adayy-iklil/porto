import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const openCv = () => setIsCvOpen(true);
  const closeCv = () => setIsCvOpen(false);

  return (
    <div>
      {/* Ambient Glow Effects */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <Navbar />

      <main>
        <Hero onOpenCv={openCv} />
        <About onOpenCv={openCv} />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <CvModal isOpen={isCvOpen} onClose={closeCv} />
    </div>
  );
}
