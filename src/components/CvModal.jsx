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
            <FileText className="w-5 h-5 inline mr-2" style={{ color: 'var(--accent-blue)', verticalAlign: 'middle' }} /> 
            Curriculum Vitae — Iklil Badar
          </h3>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button id="print-cv-btn" onClick={handlePrint} className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
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
              <p style={{ marginBottom: '4px' }}>RPL (Rekayasa Perangkat Lunak)</p>
              <ul>
                <li>Mempelajari pemrograman web dan basis data</li>
                <li>Mengembangkan aplikasi berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL.</li>
              </ul>
            </div>

            <div className="cv-paper-section">
              <h3>PENGALAMAN & PROJEK</h3>
              <div style={{ marginBottom: '10px' }}>
                <strong>Front-End Web Developer – PT. Ace Service Energy</strong> <span style={{ float: 'right' }}>Jun – Jul 2026</span>
                <ul>
                  <li>Membangun antarmuka pengguna (UI) responsif menggunakan React.js untuk website panel surya.</li>
                  <li>Berkolaborasi dalam tim menggunakan GitHub untuk mengembangkan fitur Front-End dan integrasi formulir layanan.</li>
                  <li>Mengoptimalkan performa dan pengalaman pengguna pada website.</li>
                </ul>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <strong>Laravel Workshop</strong> <span style={{ float: 'right' }}>Okt 2025</span>
                <ul>
                  <li>Mempelajari dasar framework Laravel.</li>
                  <li>Membuat aplikasi web sederhana menggunakan Laravel.</li>
                  <li>Memahami konsep MVC dan integrasi database MySQL.</li>
                </ul>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <strong>AI Workshop – Merkle</strong> <span style={{ float: 'right' }}>Jun 2026</span>
                <ul>
                  <li>Mengikuti pelatihan mengenai dasar-dasar Artificial Intelligence.</li>
                  <li>Mempelajari penerapan AI dalam pengembangan teknologi.</li>
                  <li>Berpartisipasi dalam praktik penggunaan tools berbasis AI.</li>
                </ul>
              </div>
            </div>

            <div className="cv-paper-section">
              <h3>SKILLS</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
