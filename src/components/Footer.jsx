import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Iklil Badar</h1>
            <span className="footer__subtitle">
              Siswa Rekayasa Perangkat Lunak, SMKN 6 Jakarta
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to="/services" className="footer__link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/project" className="footer__link">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://github.com/adayy-iklil"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/iklil-badar-4729a8422/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://www.instagram.com/ikliladay/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="Instagram"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://wa.me/6287782390705"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="WhatsApp"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169; {new Date().getFullYear()} Iklil Badar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
