import React from 'react';

export default function Hero() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/iklil-badar-4729a8422/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://github.com/adayy-iklil"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>

            <a
              href="https://www.instagram.com/ikliladay/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="Instagram"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://wa.me/6287782390705"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="WhatsApp"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
          </div>

          <div className="home__img-wrapper">
            <div className="home__profile-frame">
              <img
                src="/assets/avatar.jpg"
                alt="Iklil Badar"
                className="home__profile-img"
              />
            </div>
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Iklil Badar</h1>
            <h3 className="home__subtitle">Siswa Rekayasa Perangkat Lunak (RPL)</h3>
            <p className="home__description">
              Siswa SMKN 6 Jakarta yang membangun sistem informasi sekolah, platform e-ticketing, dan aplikasi kasir yang benar-benar digunakan—dari database sampai tampilan.
            </p>
            <div className="home__buttons">
              <a href="#contact" className="button button--flex">
                Contact Me <i className="uil uil-message button__icon"></i>
              </a>
              <a href="#portfolio" className="button button--white button--flex home__button-secondary">
                View Projects <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
