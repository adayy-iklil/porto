import React from 'react';
import { FileText, GraduationCap, BookOpen, MapPin, Award } from 'lucide-react';

export default function About({ onOpenCv }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Tentang Saya</span>
          <h2>Latar Belakang & Minat</h2>
        </div>

        <div className="about-card">
          <div className="about-grid">
            <div className="about-bio">
              <h3>Siapa saya?</h3>
              <p>
                Saya adalah siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jakarta yang memiliki hasrat tinggi dalam membangun aplikasi perangkat lunak dan menjelajahi teknologi informasi modern.
              </p>
              <p>
                Melalui kegiatan pembelajaran di sekolah maupun proyek mandiri, saya telah mendalami dasar-dasar pengembangan perangkat lunak, pemrograman berorientasi objek, perancangan basis data, serta desain antarmuka pengguna (UI/UX).
              </p>
              <p>
                Saya memiliki kemampuan pemecahan masalah (problem solving) yang baik, terbiasa berpikir logis, dan sangat bersemangat untuk terus belajar hal baru. Saat ini, saya siap berkontribusi secara aktif sebagai peserta magang di bidang IT.
              </p>
              <div className="about-bio-cta">
                <button id="open-cv-about" onClick={onOpenCv} className="btn btn-primary">
                  <FileText className="w-4 h-4 mr-1 inline" /> Baca Curriculum Vitae (CV)
                </button>
              </div>
            </div>

            <div className="about-meta">
              <div className="meta-item">
                <div className="meta-item-header">
                  <GraduationCap className="w-5 h-5 meta-icon" />
                  <span className="meta-label">Pendidikan</span>
                </div>
                <span className="meta-val">SMKN 6 Jakarta</span>
                <p className="meta-desc">Rekayasa Perangkat Lunak</p>
              </div>

              <div className="meta-item">
                <div className="meta-item-header">
                  <BookOpen className="w-5 h-5 meta-icon" />
                  <span className="meta-label">Fokus Minat</span>
                </div>
                <span className="meta-val">Software Development</span>
                <p className="meta-desc">Web, Desktop & Database</p>
              </div>

              <div className="meta-item">
                <div className="meta-item-header">
                  <MapPin className="w-5 h-5 meta-icon" />
                  <span className="meta-label">Lokasi</span>
                </div>
                <span className="meta-val">Jakarta, Indonesia</span>
                <p className="meta-desc">DKI Jakarta</p>
              </div>

              <div className="meta-item">
                <div className="meta-item-header">
                  <Award className="w-5 h-5 meta-icon" />
                  <span className="meta-label">Kesiapan</span>
                </div>
                <span className="meta-val">Internship Ready</span>
                <p className="meta-desc">Siap untuk magang IT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
