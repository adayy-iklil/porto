import React from 'react';
import { FileText, Printer } from 'lucide-react';

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
            <FileText className="w-5 h-5 inline mr-2 cv-header-icon" /> 
            Curriculum Vitae — Iklil Badar
          </h3>
          <div className="cv-modal-actions">
            <button id="print-cv-btn" onClick={handlePrint} className="btn btn-secondary btn-print">
              <Printer className="w-4 h-4 mr-1 inline" /> Cetak / PDF
            </button>
            <button id="close-cv-modal" onClick={onClose} className="cv-close-btn">&times;</button>
          </div>
        </div>

        <div className="cv-modal-body" id="printable-cv-content">
          <div className="cv-paper">
            <div className="cv-paper-header">
              <h1>Iklil Badar</h1>
              <p>Jakarta Selatan | badariklil6@gmail.com | +62 877-8239-0705</p>
            </div>

            <div className="cv-paper-section">
              <h3>RINGKASAN PROFIL</h3>
              <p>Siswa RPL (Rekayasa Perangkat Lunak) yang memiliki minat di bidang Software Development dan Teknologi Informasi. Berpengalaman mengembangkan website, aplikasi desktop, dan sistem berbasis database melalui berbagai proyek. Memahami dasar software development, database.</p>
            </div>

            <div className="cv-paper-section">
              <h3>PENDIDIKAN</h3>
              <strong>SMK Negeri 6 Jakarta ( 2024 – Sekarang )</strong>
              <p className="cv-sub">RPL (Rekayasa Perangkat Lunak)</p>
              <ul>
                <li>Mempelajari pemrograman web dan basis data</li>
                <li>Mengembangkan aplikasi berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL.</li>
              </ul>
            </div>

            <div className="cv-paper-section">
              <h3>PENGALAMAN & PROJEK</h3>
              <div className="cv-job-item">
                <div className="cv-job-title-row">
                  <strong>Front-End Web Developer – PT. Ace Service Energy</strong>
                  <span className="cv-date">Jun – Jul 2026</span>
                </div>
                <ul>
                  <li>Membangun antarmuka pengguna (UI) responsif menggunakan React.js untuk website panel surya.</li>
                  <li>Berkolaborasi dalam tim menggunakan GitHub untuk mengembangkan fitur Front-End dan integrasi formulir layanan.</li>
                  <li>Mengoptimalkan performa dan pengalaman pengguna pada website.</li>
                </ul>
              </div>

              <div className="cv-job-item">
                <div className="cv-job-title-row">
                  <strong>Laravel Workshop</strong>
                  <span className="cv-date">Okt 2025</span>
                </div>
                <ul>
                  <li>Mempelajari dasar framework Laravel.</li>
                  <li>Membuat aplikasi web sederhana menggunakan Laravel.</li>
                  <li>Memahami konsep MVC dan integrasi database MySQL.</li>
                </ul>
              </div>

              <div className="cv-job-item">
                <div className="cv-job-title-row">
                  <strong>AI Workshop – Merkle</strong>
                  <span className="cv-date">Jun 2026</span>
                </div>
                <ul>
                  <li>Mengikuti pelatihan mengenai dasar-dasar Artificial Intelligence.</li>
                  <li>Mempelajari penerapan AI dalam pengembangan teknologi.</li>
                  <li>Berpartisipasi dalam praktik penggunaan tools berbasis AI.</li>
                </ul>
              </div>
            </div>

            <div className="cv-paper-section">
              <h3>SKILLS</h3>
              <div className="cv-skills-grid">
                <div>
                  <strong>KEMAMPUAN TEKNIS</strong>
                  <ul>
                    <li><strong>Bahasa Pemrograman:</strong> HTML, CSS, JS, PHP, Python, MySQL, C#</li>
                    <li><strong>Editor code & IDE:</strong> VS Code, Visual Studio, Antigravity IDE</li>
                    <li><strong>Framework & Version Control:</strong> Laravel, React, Git & GitHub</li>
                    <li><strong>Game Engines:</strong> Godot, Unity</li>
                    <li><strong>Desain UI/UX & Visual:</strong> Figma, Canva</li>
                  </ul>
                </div>
                <div>
                  <strong>KEMAMPUAN PERSONAL</strong>
                  <ul>
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
