import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="alf-footer">
      <div className="alf-container">
        <div className="alf-footer__grid">
          {/* Col 1: Brand */}
          <div className="alf-footer__brand">
            <a href="#home" className="alf-footer__logo">
              Iklil<span className="text-blue">.Dev</span>
            </a>
            <p className="alf-footer__desc">
              Terima kasih telah mengunjungi portofolio saya. Mari berkolaborasi
              dan membangun aplikasi yang modern, cepat, serta bermanfaat.
            </p>
          </div>

          {/* Col 2: Navigasi */}
          <div className="alf-footer__nav">
            <h4 className="alf-footer__heading">NAVIGASI</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Terhubung */}
          <div className="alf-footer__connect">
            <h4 className="alf-footer__heading">TERHUBUNG</h4>
            <div className="alf-footer__socials">
              <a
                href="https://www.instagram.com/ikliladay/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/iklil-badar-4729a8422/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/adayy-iklil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://wa.me/6287782390705"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="uil uil-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="alf-footer__bottom">
          <span>&copy; 2026 Iklil Badar. All rights reserved.</span>
          <a href="#home" onClick={scrollToTop} className="alf-footer__top-btn">
            <span>Kembali ke Atas</span>
            <i className="uil uil-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
