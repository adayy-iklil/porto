import React, { useEffect } from 'react';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="services__modal active-modal"
      onClick={handleBackdropClick}
      style={{ zIndex: 1100 }}
    >
      <div
        className="services__modal-content"
        style={{
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--first-color-lighter)',
            paddingBottom: '0.75rem',
          }}
        >
          <h4
            className="services__modal-title"
            style={{ margin: 0, textAlign: 'left', color: 'var(--first-color)' }}
          >
            Curriculum Vitae — Iklil Badar
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/assets/cv.pdf"
              download="Iklil_Badar_CV.pdf"
              className="button button--small button--flex"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
            >
              <i className="uil uil-download-alt button__icon" style={{ marginLeft: 0, marginRight: '4px' }}></i>
              PDF
            </a>
            <i
              className="uil uil-times services__modal-close"
              style={{ position: 'static', fontSize: '1.5rem' }}
              onClick={onClose}
            ></i>
          </div>
        </div>

        <div style={{ lineHeight: 1.6, color: 'var(--text-color)' }}>
          {/* Header */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--title-color)' }}>
              Iklil Badar
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-color-light)' }}>
              Jakarta Selatan, Indonesia &bull; badariklil6@gmail.com &bull; +62 877-8239-0705 &bull; github.com/adayy-iklil
            </p>
          </div>

          {/* Profil */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3
              style={{
                fontSize: '1rem',
                color: 'var(--first-color)',
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}
            >
              RINGKASAN PROFIL
            </h3>
            <p style={{ fontSize: '0.875rem' }}>
              Siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jakarta dengan minat tinggi dalam pengembangan web dan aplikasi perangkat lunak. Terbiasa membangun antarmuka web yang responsif, aplikasi desktop C#, dan pengelolaan basis data relasional. Siap berkontribusi secara produktif dalam lingkungan profesional melalui program PKL / Magang.
            </p>
          </div>

          {/* Pendidikan */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3
              style={{
                fontSize: '1rem',
                color: 'var(--first-color)',
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}
            >
              PENDIDIKAN
            </h3>
            <div style={{ fontSize: '0.875rem' }}>
              <strong>SMK Negeri 6 Jakarta</strong> (2024 – Sekarang)
              <p style={{ color: 'var(--text-color-light)' }}>
                Jurusan: Rekayasa Perangkat Lunak (RPL)
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                <li>Mempelajari pemrograman web, algoritma & struktur data, dan basis data SQL.</li>
                <li>Membangun aplikasi berbasis web dan desktop terintegrasi database.</li>
              </ul>
            </div>
          </div>

          {/* Pengalaman Proyek */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3
              style={{
                fontSize: '1rem',
                color: 'var(--first-color)',
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}
            >
              PROYEK & PENGALAMAN
            </h3>
            <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <strong>Frontend Web Developer — PT. Ace Energy Service</strong> (2026)
                <p>Membangun UI responsif website panel surya menggunakan React.js dan Vanilla CSS.</p>
              </div>
              <div>
                <strong>Frontend Web Developer — ADOM SCORING</strong> (2026)
                <p>Membangun platform ticketing & rekapitulasi nilai perlombaan dengan React.js dan integrasi Laravel API.</p>
              </div>
              <div>
                <strong>Fullstack Developer — SIX-PRESENCE</strong> (2026)
                <p>Sistem presensi digital harian siswa & guru berbasis Laravel, MySQL, dan Bootstrap.</p>
              </div>
              <div>
                <strong>Frontend & System Design — KantinHub</strong> (2026)
                <p>Aplikasi kasir POS kantin dengan grafik penjualan 7 hari dan database Supabase.</p>
              </div>
            </div>
          </div>

          {/* Keahlian */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                color: 'var(--first-color)',
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}
            >
              KEAHLIAN UTAMA
            </h3>
            <p style={{ fontSize: '0.875rem' }}>
              <strong>Web:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap, PHP, Laravel<br />
              <strong>Desktop & Database:</strong> C# (WinForms), MySQL, SQL Server, Supabase<br />
              <strong>Tools:</strong> Git, GitHub, VS Code, Visual Studio, Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
