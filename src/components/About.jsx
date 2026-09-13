import React from 'react';
import { FileText, GraduationCap, BookOpen, MapPin, Award } from 'lucide-react';

export default function About({ onOpenCv }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">01 / TENTANG SAYA</span>
          <h2>Latar Belakang & Minat</h2>
          <p className="section-title-desc">
            Prinsip pengembangan perangkat lunak yang berfokus pada kejelasan, keandalan, dan struktur yang rapi.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h3>Pendekatan & Visi Ringkas</h3>
            <p>
              Saya adalah siswa Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jakarta dengan ketertarikan tinggi pada proses rekayasa perangkat lunak — mulai dari konsep antarmuka hingga struktur basis data dan integrasi API.
            </p>
            <p>
              Melalui kombinasi pembelajaran di sekolah dan pengerjaan proyek mandiri, saya terbiasa membangun aplikasi web responsif (React.js, PHP, Laravel) serta aplikasi desktop (C# / Windows Forms) yang terintegrasi basis data SQL.
            </p>
            <p>
              Saya memiliki cara berpikir sistematis, terbiasa memecahkan kendala logika pemrograman, dan siap berkontribusi secara aktif sebagai peserta magang IT di lingkungan profesional.
            </p>
            <div className="about-bio-cta">
              <button id="open-cv-about" onClick={onOpenCv} className="btn btn-primary">
                <FileText className="w-4 h-4 mr-1 inline" /> Baca Curriculum Vitae (CV)
              </button>
            </div>
          </div>

          <div className="about-meta-grid">
            <div className="about-meta-card">
              <div className="meta-card-header">
                <GraduationCap className="w-4 h-4 meta-card-icon" />
                <span className="meta-card-label">PENDIDIKAN</span>
              </div>
              <div className="meta-card-val">SMKN 6 Jakarta</div>
              <p className="meta-card-desc">Jurusan Rekayasa Perangkat Lunak (RPL)</p>
            </div>

            <div className="about-meta-card">
              <div className="meta-card-header">
                <BookOpen className="w-4 h-4 meta-card-icon" />
                <span className="meta-card-label">FOKUS TEKNIS</span>
              </div>
              <div className="meta-card-val">Software Engineering</div>
              <p className="meta-card-desc">Web Application, Desktop & Database Systems</p>
            </div>

            <div className="about-meta-card">
              <div className="meta-card-header">
                <MapPin className="w-4 h-4 meta-card-icon" />
                <span className="meta-card-label">DOMISILI</span>
              </div>
              <div className="meta-card-val">Jakarta, Indonesia</div>
              <p className="meta-card-desc">DKI Jakarta, Indonesia</p>
            </div>

            <div className="about-meta-card">
              <div className="meta-card-header">
                <Award className="w-4 h-4 meta-card-icon" />
                <span className="meta-card-label">STATUS</span>
              </div>
              <div className="meta-card-val">Internship Ready</div>
              <p className="meta-card-desc">Siap untuk Magang / PKL Industri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
