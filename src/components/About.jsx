import React from 'react';
import { BookOpen, GraduationCap, Award, MapPin } from 'lucide-react';

export default function About() {
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
            </div>
            
            <div className="about-meta">
              <div className="meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <GraduationCap size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span className="meta-label" style={{ margin: 0 }}>Pendidikan</span>
                </div>
                <span className="meta-val">SMKN 6 Jakarta</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Rekayasa Perangkat Lunak</p>
              </div>

              <div className="meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <BookOpen size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span className="meta-label" style={{ margin: 0 }}>Fokus Minat</span>
                </div>
                <span className="meta-val">Software Development</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Web, Desktop & Database</p>
              </div>

              <div className="meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span className="meta-label" style={{ margin: 0 }}>Lokasi</span>
                </div>
                <span className="meta-val">Jakarta, Indonesia</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>DKI Jakarta</p>
              </div>

              <div className="meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Award size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span className="meta-label" style={{ margin: 0 }}>Kesiapan</span>
                </div>
                <span className="meta-val">Internship Ready</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Siap untuk magang IT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
