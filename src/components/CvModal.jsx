import React from 'react';
import { FileText, Printer, X } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="cv-modal" className="cv-modal-overlay active" onClick={onClose}>
      <div className="cv-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h3>
            <FileText className="w-4 h-4 inline mr-2" style={{ color: 'var(--color-accent)', verticalAlign: 'middle' }} /> 
            Curriculum Vitae — Iklil Badar
          </h3>
          <div className="cv-modal-actions">
            <button id="print-cv-btn" onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer className="w-3.5 h-3.5 mr-1 inline" /> Cetak / PDF
            </button>
            <button id="close-cv-modal" onClick={onClose} className="cv-close-btn" aria-label="Close modal">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="cv-modal-body" id="printable-cv-content">
          <div className="cv-paper">
            {/* Header / Contact Line */}
            <div className="cv-paper-header">
              <h1 className="cv-name">Iklil Badar</h1>
              <p className="cv-contact-info">
                Jakarta Selatan | <a href="mailto:badariklil6@gmail.com">badariklil6@gmail.com</a> | +62 877-8239-0705
              </p>
            </div>

            {/* RINGKASAN PROFIL */}
            <div className="cv-paper-section">
              <h2 className="cv-section-title">RINGKASAN PROFIL</h2>
              <p className="cv-summary-text">
                Siswa RPL (Rekayasa Perangkat Lunak) yang memiliki minat di bidang Software Development dan Teknologi Informasi. Berpengalaman mengembangkan website, aplikasi desktop, dan sistem berbasis database melalui berbagai proyek. Memahami dasar software development, database.
              </p>
            </div>

            {/* PENDIDIKAN */}
            <div className="cv-paper-section">
              <h2 className="cv-section-title">PENDIDIKAN</h2>
              <div className="cv-edu-block">
                <ul className="cv-bullet-list">
                  <li>
                    <strong>SMK Negeri 6 Jakarta ( 2024 – Sekarang )</strong>
                    <div className="cv-sub-text">RPL (Rekayasa Perangkat Lunak)</div>
                    <ul className="cv-arrow-list">
                      <li>Mempelajari pemrograman web dan basis data</li>
                      <li>Mengembangkan aplikasi berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* PROJEK & PENGALAMAN */}
            <div className="cv-paper-section">
              <h2 className="cv-section-title">PROJEK & PENGALAMAN</h2>
              
              <div className="cv-item-block">
                <div className="cv-item-header-row">
                  <span className="cv-item-title">
                    <strong>Frontend Web Developer – PT. Ace Service Energy (aceenergyservice.com)</strong>
                  </span>
                  <span className="cv-item-date">Jun – Jul 2026</span>
                </div>
                <ul className="cv-bullet-list">
                  <li>Membangun antarmuka pengguna (UI) responsif menggunakan React.js untuk website panel surya.</li>
                  <li>Berkolaborasi dalam tim menggunakan GitHub untuk mengembangkan fitur Front-End dan integrasi formulir layanan.</li>
                  <li>Mengoptimalkan performa dan pengalaman pengguna pada website.</li>
                </ul>
              </div>

              <div className="cv-item-block">
                <div className="cv-item-header-row">
                  <span className="cv-item-title">
                    <strong>Frontend Web Developer – Adom Scoring (adomscoring.my.id)</strong>
                  </span>
                  <span className="cv-item-date">Aug 2025</span>
                </div>
                <ul className="cv-bullet-list">
                  <li>Membangun UI responsif menggunakan React JS untuk sistem ticketing.</li>
                  <li>Mengintegrasikan aplikasi dengan RESTful API berbasis Laravel & MySQL.</li>
                  <li>Memastikan performa aplikasi siap produksi (production-ready) hingga tahap deployment.</li>
                </ul>
              </div>

              <div className="cv-item-block">
                <div className="cv-item-header-row">
                  <span className="cv-item-title">
                    <strong>AI Workshop – Merkle</strong>
                  </span>
                  <span className="cv-item-date">Jun 2026</span>
                </div>
                <ul className="cv-bullet-list">
                  <li>Mengikuti pelatihan mengenai dasar-dasar Artificial Intelligence.</li>
                  <li>Mempelajari penerapan AI dalam pengembangan teknologi.</li>
                  <li>Berpartisipasi dalam praktik penggunaan tools berbasis AI.</li>
                </ul>
              </div>
            </div>

            {/* SKILLS */}
            <div className="cv-paper-section">
              <h2 className="cv-section-title">SKILLS</h2>
              <div className="cv-skills-grid">
                <div className="cv-skill-col">
                  <h3 className="cv-skill-col-title">KEMAMPUAN TEKNIS</h3>
                  <ul className="cv-bullet-list">
                    <li><strong>Bahasa Pemrograman:</strong> HTML, CSS, JS, PHP, Python, MySQL, C#</li>
                    <li><strong>Editor code & IDE:</strong> VS Code, Visual Studio, Antigravity IDE</li>
                    <li><strong>Framework & Version Control:</strong> Laravel, React, Git & GitHub</li>
                    <li><strong>Game Engines:</strong> Godot, Unity</li>
                    <li><strong>Desain UI/UX & Visual:</strong> Figma, Canva</li>
                  </ul>
                </div>

                <div className="cv-skill-col">
                  <h3 className="cv-skill-col-title">KEMAMPUAN PERSONAL</h3>
                  <ul className="cv-bullet-list">
                    <li>Berpikir Analitis & Penyelesaian Masalah</li>
                    <li>Kolaborasi Tim & Adaptabilitas</li>
                    <li>Adaptasi Teknologi & Tren Baru</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
