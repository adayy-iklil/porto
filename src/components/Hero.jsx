import React, { useState, useEffect } from 'react';
import LanyardCard from './LanyardCard';

const ROLES = [
  'Fullstack Web Developer',
  'React & Laravel Enthusiast',
  'Siswa RPL SMKN 6 Jakarta',
  'Software & Database Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 38 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="alf-hero" id="home">
      <div className="alf-container alf-hero__grid">
        {/* Left Column */}
        <div className="alf-hero__content">
          <h1 className="alf-hero__title">
            <span className="alf-hero__title-blue">Welcome to</span>
            <br />
            <span className="alf-hero__title-white">My Portfolio</span>
          </h1>

          <div className="alf-hero__typewriter" aria-live="polite">
            <span className="alf-hero__typewriter-text">{displayText}</span>
            <span className="alf-hero__cursor">|</span>
          </div>

          <p className="alf-hero__desc">
            Membangun aplikasi web yang modern, responsif, dan terstruktur dengan
            mengutamakan performa, kemudahan pemeliharaan kode, serta pengalaman
            pengguna yang optimal.
          </p>

          <div className="alf-hero__actions">
            <a href="#portfolio" className="alf-btn alf-btn--primary">
              <span>Lihat Projek</span>
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#contact" className="alf-btn alf-btn--outline">
              <i className="uil uil-user"></i>
              <span>Hubungi Saya</span>
            </a>
          </div>

          <div className="alf-hero__findme">
            <span className="alf-hero__findme-label">FIND ME</span>
            <div className="alf-hero__socials">
              <a
                href="https://www.instagram.com/ikliladay/"
                target="_blank"
                rel="noopener noreferrer"
                className="alf-social-box"
                aria-label="Instagram"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/iklil-badar-4729a8422/"
                target="_blank"
                rel="noopener noreferrer"
                className="alf-social-box"
                aria-label="LinkedIn"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/adayy-iklil"
                target="_blank"
                rel="noopener noreferrer"
                className="alf-social-box"
                aria-label="GitHub"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Hanging Lanyard ID Card */}
        <div className="alf-hero__lanyard-col">
          <LanyardCard />
        </div>
      </div>
    </section>
  );
}
