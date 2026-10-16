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
      style={{ zIndex: 1100, padding: '1rem' }}
    >
      <div
        className="services__modal-content"
        style={{
          maxWidth: '780px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '1.25rem',
          backgroundColor: 'var(--container-color)',
        }}
      >
        {/* Modal Top Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            paddingBottom: '0.6rem',
            borderBottom: '1px solid var(--card-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="uil uil-file-alt" style={{ fontSize: '1.25rem', color: 'var(--first-color)' }}></i>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--title-color)' }}>
              Curriculum Vitae — Iklil Badar
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/assets/cv.pdf"
              download="Iklil_Badar_CV.pdf"
              className="button button--small button--flex"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
            >
              <i className="uil uil-download-alt button__icon" style={{ marginLeft: 0, marginRight: '4px' }}></i>
              Unduh PDF
            </a>
            <i
              className="uil uil-times services__modal-close"
              style={{ position: 'static', fontSize: '1.5rem', cursor: 'pointer' }}
              onClick={onClose}
              title="Tutup"
            ></i>
          </div>
        </div>

        {/* Paper CV Sheet (Matching Original Document Exact Layout & Color) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#111111',
            fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif",
            padding: '2.5rem 2.75rem',
            borderRadius: '4px',
            boxShadow: '0 2px 14px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb',
            lineHeight: 1.5,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h1
              style={{
                color: '#9e1c36',
                fontSize: '1.9rem',
                fontWeight: 700,
                margin: '0 0 0.35rem',
                letterSpacing: '-0.01em',
              }}
            >
              Iklil Badar
            </h1>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#222222',
                margin: 0,
              }}
            >
              Jakarta Selatan |{' '}
              <a
                href="mailto:badariklil6@gmail.com"
                style={{ color: '#0066cc', textDecoration: 'underline' }}
              >
                badariklil6@gmail.com
              </a>{' '}
              | +62 877-8239-0705
            </p>
          </div>

          {/* Section: RINGKASAN PROFIL */}
          <div style={{ marginBottom: '1.35rem' }}>
            <h2
              style={{
                color: '#9e1c36',
                fontSize: '0.925rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: '0 0 0.25rem',
              }}
            >
              RINGKASAN PROFIL
            </h2>
            <hr style={{ border: 'none', borderTop: '1px solid #222222', margin: '0 0 0.65rem' }} />
            <p
              style={{
                fontSize: '0.825rem',
                lineHeight: 1.55,
                margin: 0,
                color: '#111111',
                textAlign: 'justify',
              }}
            >
              Siswa RPL (Rekayasa Perangkat Lunak) yang memiliki minat di bidang Software Development dan Teknologi Informasi. Berpengalaman mengembangkan website, aplikasi desktop, dan sistem berbasis database melalui berbagai proyek. Memahami dasar software development, database.
            </p>
          </div>

          {/* Section: PENDIDIKAN */}
          <div style={{ marginBottom: '1.35rem' }}>
            <h2
              style={{
                color: '#9e1c36',
                fontSize: '0.925rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: '0 0 0.25rem',
              }}
            >
              PENDIDIKAN
            </h2>
            <hr style={{ border: 'none', borderTop: '1px solid #222222', margin: '0 0 0.65rem' }} />

            <div style={{ fontSize: '0.825rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>&#8226;</span>
                <span style={{ fontWeight: 700, color: '#111111' }}>
                  SMK Negeri 6 Jakarta ( 2024 – Sekarang )
                </span>
              </div>

              <div style={{ paddingLeft: '1.15rem' }}>
                <div style={{ marginBottom: '0.35rem', color: '#111111' }}>
                  RPL (Rekayasa Perangkat Lunak)
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: '#222222', fontSize: '0.75rem', lineHeight: '1.4' }}>&#10148;</span>
                  <span>Mempelajari pemrograman web dan basis data</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                  <span style={{ color: '#222222', fontSize: '0.75rem', lineHeight: '1.4' }}>&#10148;</span>
                  <span>
                    Mengembangkan aplikasi berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: PROJEK & PENGALAMAN */}
          <div style={{ marginBottom: '1.35rem' }}>
            <h2
              style={{
                color: '#9e1c36',
                fontSize: '0.925rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: '0 0 0.25rem',
              }}
            >
              PROJEK & PENGALAMAN
            </h2>
            <hr style={{ border: 'none', borderTop: '1px solid #222222', margin: '0 0 0.65rem' }} />

            {/* Item 1 */}
            <div style={{ marginBottom: '1rem', fontSize: '0.825rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.3rem',
                  flexWrap: 'wrap',
                  gap: '0.25rem',
                }}
              >
                <span style={{ fontWeight: 700, color: '#111111' }}>
                  Frontend Web Developer – PT. Ace Service Energy 
                </span>
                <span style={{ fontStyle: 'italic', color: '#222222' }}>Jun – Jul 2026</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.15rem', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '0.2rem' }}>
                  Membangun antarmuka pengguna (UI) responsif menggunakan React.js untuk website panel surya.
                </li>
                <li style={{ marginBottom: '0.2rem' }}>
                  Berkolaborasi dalam tim menggunakan GitHub untuk mengembangkan fitur Front-End dan integrasi formulir layanan.
                </li>
                <li>
                  Mengoptimalkan performa dan pengalaman pengguna pada website.
                </li>
              </ul>
            </div>

            {/* Item 2 */}
            <div style={{ marginBottom: '1rem', fontSize: '0.825rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.3rem',
                  flexWrap: 'wrap',
                  gap: '0.25rem',
                }}
              >
                <span style={{ fontWeight: 700, color: '#111111' }}>
                  Frontend Web Developer – Adom Scoring
                </span>
                <span style={{ fontStyle: 'italic', color: '#222222' }}>Aug 2025</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.15rem', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '0.2rem' }}>
                  Membangun UI responsif menggunakan React JS untuk sistem ticketing.
                </li>
                <li style={{ marginBottom: '0.2rem' }}>
                  Mengintegrasikan aplikasi dengan RESTful API berbasis Laravel & MySQL.
                </li>
                <li>
                  Memastikan performa aplikasi siap produksi (production-ready) hingga tahap deployment.
                </li>
              </ul>
            </div>

            {/* Item 3 */}
            <div style={{ fontSize: '0.825rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.3rem',
                  flexWrap: 'wrap',
                  gap: '0.25rem',
                }}
              >
                <span style={{ fontWeight: 700, color: '#111111' }}>
                  AI Workshop – Merkle
                </span>
                <span style={{ fontStyle: 'italic', color: '#222222' }}>Jun 2026</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.15rem', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '0.2rem' }}>
                  Mengikuti pelatihan mengenai dasar-dasar Artificial Intelligence.
                </li>
                <li style={{ marginBottom: '0.2rem' }}>
                  Mempelajari penerapan AI dalam pengembangan teknologi.
                </li>
                <li>
                  Berpartisipasi dalam praktik penggunaan tools berbasis AI.
                </li>
              </ul>
            </div>
          </div>

          {/* Section: SKILLS */}
          <div>
            <h2
              style={{
                color: '#9e1c36',
                fontSize: '0.925rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: '0 0 0.25rem',
              }}
            >
              SKILLS
            </h2>
            <hr style={{ border: 'none', borderTop: '1px solid #222222', margin: '0 0 0.65rem' }} />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                columnGap: '2rem',
                rowGap: '1.25rem',
                fontSize: '0.825rem',
              }}
            >
              {/* Kemampuan Teknis */}
              <div>
                <div style={{ fontWeight: 700, marginBottom: '0.4rem', color: '#111111', textTransform: 'uppercase' }}>
                  KEMAMPUAN TEKNIS
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.15rem', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 700 }}>Bahasa Pemrograman:</span> HTML, CSS, JS, PHP, Python, MySQL, C#
                  </li>
                  <li style={{ marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 700 }}>Editor code & IDE:</span> VS Code, Visual Studio, Antigravity IDE
                  </li>
                  <li style={{ marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 700 }}>Framework & Version Control:</span> Laravel, React, Git & GitHub
                  </li>
                  <li style={{ marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 700 }}>Game Engines:</span> Godot, Unity
                  </li>
                  <li>
                    <span style={{ fontWeight: 700 }}>Desain UI/UX & Visual:</span> Figma, Canva
                  </li>
                </ul>
              </div>

              {/* Kemampuan Personal */}
              <div>
                <div style={{ fontWeight: 700, marginBottom: '0.4rem', color: '#111111', textTransform: 'uppercase' }}>
                  KEMAMPUAN PERSONAL
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.15rem', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '0.35rem' }}>
                    Berpikir Analitis & Penyelesaian Masalah
                  </li>
                  <li style={{ marginBottom: '0.35rem' }}>
                    Kolaborasi Tim & Adaptabilitas
                  </li>
                  <li>
                    Adaptasi Teknologi & Tren Baru
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
