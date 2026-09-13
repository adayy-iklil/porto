import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero({ onOpenCv }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-info-container">
            <div className="hero-eyebrow">WEB DEVELOPER / SOFTWARE ENGINEERING</div>
            <h1 className="hero-title">
              Designing and engineering digital products that work.
            </h1>
            <p className="hero-desc">
              Saya <strong className="hero-name">Iklil Badar</strong>, siswa RPL (Rekayasa Perangkat Lunak) di SMKN 6 Jakarta dengan fokus pada pembangunan antarmuka web terstruktur, aplikasi desktop yang andal, dan sistem berbasis basis data.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                Lihat Karya Pilihan <ArrowRight className="w-4 h-4 ml-1 inline" />
              </a>
              <button id="open-cv-btn" onClick={onOpenCv} className="btn btn-secondary">
                <FileText className="w-4 h-4 mr-1 inline" /> Lihat CV Saya
              </button>
              <a href="#contact" className="btn btn-outline">
                Hubungi Saya
              </a>
            </div>

            {/* Currently Block */}
            <div className="currently-block">
              <div className="currently-header">CURRENTLY</div>
              <ul className="currently-list">
                <li className="currently-item">Mengembangkan aplikasi berbasis React, Laravel, & C#</li>
                <li className="currently-item">Mempelajari arsitektur sistem & optimasi basis data</li>
                <li className="currently-item">Terbuka untuk peluang magang IT & kolaborasi proyek</li>
              </ul>
            </div>
          </div>

          <div className="hero-right-col">
            <div className="hero-image-card">
              <div className="hero-image-wrapper">
                <img src="/assets/avatar.jpg" alt="Iklil Badar" className="hero-image" />
              </div>
            </div>

            <div className="hero-meta-card">
              <div className="meta-row">
                <span className="meta-label">LOKASI</span>
                <span className="meta-value">Jakarta, Indonesia</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">PENDIDIKAN</span>
                <span className="meta-value">SMKN 6 Jakarta (RPL)</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">FOKUS UTAMA</span>
                <span className="meta-value">React · Laravel · PHP · C# · MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
