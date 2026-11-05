import React, { useState } from 'react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Ace Energy Service',
    shortDesc:
      'Solusi profil perusahaan energi surya (PV EPC) dengan katalog produk interaktif dan formulir layanan terintegrasi.',
    fullDesc:
      'Website profil perusahaan energi terbarukan (Solar PV EPC) untuk PT. Ace Service Energy. Dirancang dengan antarmuka pengguna modern menggunakan React.js, menampilkan layanan instalasi panel surya, portofolio proyek industri, kalkulator efisiensi energi, serta integrasi formulir konsultasi pelanggan secara responsif.',
    stack: ['React.js', 'Vanilla CSS', 'UI/UX', 'Responsive Web', 'Git'],
    features: [
      'Katalog layanan & produk panel surya interaktif',
      'Desain UI/UX modern & cepat di semua perangkat',
      'Integrasi formulir konsultasi layanan pelanggan',
    ],
    image: '/assets/ace.png',
    demo: 'https://aceenergyservice.com',
  },
  {
    id: 2,
    title: 'ADOM SCORING (E-Ticketing)',
    shortDesc:
      'Platform tiket elektronik dan kalkulasi skor kompetisi Paskibra berbasis web dengan integrasi RESTful API.',
    fullDesc:
      'Platform digital terpadu untuk manajemen e-ticketing pengunjung dan sistem rekapitulasi penilaian (scoring) kompetisi secara real-time. Bagian front-end dibangun menggunakan React.js dan terhubung langsung dengan backend RESTful API berbasis Laravel serta basis data MySQL.',
    stack: ['React.js', 'Laravel API', 'MySQL', 'RESTful API', 'Tailwind CSS'],
    features: [
      'Pemesanan & validasi e-ticket acara secara digital',
      'Kalkulasi skor juri real-time & akurat',
      'Arsitektur terpisah Frontend React & Backend Laravel API',
    ],
    image: '/assets/adomscoring.png',
    demo: 'https://adomscoring.my.id',
  },
  {
    id: 3,
    title: 'SIX-PRESENCE (Absensi Digital)',
    shortDesc:
      'Sistem presensi digital sekolah untuk siswa & guru dengan rekapitulasi data kehadiran otomatis real-time.',
    fullDesc:
      'Aplikasi web Sistem Informasi Presensi Digital yang dirancang khusus untuk lingkungan sekolah. Memudahkan pencatatan kehadiran harian siswa dan guru, manajemen izin/sakit, serta pembuatan laporan rekapitulasi absensi otomatis berbasis Laravel dan MySQL.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Fullstack'],
    features: [
      'Dashboard multi-role untuk Admin, Guru, dan Siswa',
      'Rekapitulasi kehadiran harian & bulanan otomatis',
      'Manajemen kelas, jadwal, dan laporan terpusat',
    ],
    image: '/assets/six-presence.png',
    demo: 'https://absenam.free.nf/login',
  },
  {
    id: 4,
    title: 'KantinHub (POS & Canteen)',
    shortDesc:
      'Aplikasi kasir kantin modern dengan grafik tren penjualan 7 hari, manajemen stok, dan database Supabase.',
    fullDesc:
      'Sistem Point of Sale (POS) dan manajemen kantin modern berbasis cloud. Dilengkapi fitur transaksi kasir cepat, pemantauan stok menu real-time, serta visualisasi grafik tren penjualan 7 hari terakhir menggunakan React.js, Tailwind CSS, dan database Supabase.',
    stack: ['React.js', 'Supabase', 'Tailwind CSS', 'PostgreSQL', 'Chart Analytics'],
    features: [
      'Antarmuka kasir (POS) cepat & ramah pengguna',
      'Analitik grafik pendapatan & tren penjualan 7 hari',
      'Sinkronisasi data menu & transaksi cloud via Supabase',
    ],
    image: '/assets/kantinhub.png',
    demo: 'https://kantinhub6.netlify.app',
  },
];

const CERTIFICATES_DATA = [
  {
    id: 1,
    title: 'AI Workshop — Artificial Intelligence Fundamentals',
    issuer: 'Merkle Innovation',
    date: 'Juni 2026',
    badge: 'Artificial Intelligence',
    desc: 'Pelatihan intensif mengenai konsep dasar Artificial Intelligence serta implementasi AI tools dalam alur kerja rekayasa perangkat lunak.',
  },
  {
    id: 2,
    title: 'Frontend Web Developer — Production Project',
    issuer: 'PT. Ace Service Energy',
    date: 'Juli 2026',
    badge: 'React.js Engineering',
    desc: 'Sertifikasi kontribusi pengembangan dan peluncuran website perusahaan energi surya berbasis React.js.',
  },
  {
    id: 3,
    title: 'Kompetensi Rekayasa Perangkat Lunak (Web & Database)',
    issuer: 'SMK Negeri 6 Jakarta',
    date: '2025 - 2026',
    badge: 'Fullstack Development',
    desc: 'Penguasaan pengembangan aplikasi web menggunakan HTML, CSS, JavaScript, PHP, Laravel, serta perancangan database MySQL.',
  },
];

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: 'Production Deployment — ADOM Scoring & E-Ticketing',
    org: 'Adom Scoring Official Platform',
    year: 'Agustus 2025',
    highlight: 'Real-World System',
    desc: 'Berhasil membangun, mengintegrasikan RESTful API, dan men-deploy sistem e-ticketing serta penilaian kompetisi hingga digunakan langsung di tahap produksi.',
    image: '/assets/adomscoring.png',
  },
  {
    id: 2,
    title: 'Lead Frontend Developer — Ace Energy Service Website',
    org: 'PT. Ace Service Energy',
    year: 'Juli 2026',
    highlight: 'Industry Collaboration',
    desc: 'Dipercaya merancang dan mengimplementasikan antarmuka web profil perusahaan energi surya dengan performa tinggi dan desain responsif.',
    image: '/assets/ace.png',
  },
];

const TECH_STACK_DATA = [
  {
    name: 'HTML',
    color: '#E34F26',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    color: '#1572B6',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Tailwind CSS',
    color: '#38BDF8',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'ReactJS',
    color: '#61DAFB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Laravel',
    color: '#FF2D20',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'PHP',
    color: '#777BB4',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'MySQL',
    color: '#4479A1',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'C#',
    color: '#9B4F96',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: 'Supabase',
    color: '#3ECF8E',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  },
  {
    name: 'Git',
    color: '#F05032',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="alf-portfolio" id="portfolio">
      <span id="project" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />

      <div className="alf-container">
        {/* If a project is clicked, show the video's Project Detail View (00:38 - 00:42) */}
        {selectedProject ? (
          <div className="alf-proj-detail">
            {/* Top Back & Breadcrumb Bar */}
            <div className="alf-proj-detail__topbar">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="alf-proj-detail__back"
              >
                <i className="uil uil-arrow-left"></i>
                <span>Back</span>
              </button>

              <div className="alf-proj-detail__crumb">
                <span>Projects</span>
                <i className="uil uil-angle-right"></i>
                <strong>{selectedProject.title}</strong>
              </div>
            </div>

            {/* 2-Column Project Detail Content */}
            <div className="alf-proj-detail__grid">
              {/* Left Column */}
              <div className="alf-proj-detail__left">
                <h2 className="alf-proj-detail__title">{selectedProject.title}</h2>
                <div className="alf-proj-detail__bar" />

                <p className="alf-proj-detail__desc">{selectedProject.fullDesc}</p>

                <div className="alf-proj-detail__stats">
                  <div className="alf-proj-detail__stat-box">
                    <i className="uil uil-brackets-curly"></i>
                    <div>
                      <strong>{selectedProject.stack.length}</strong>
                      <span>Total Teknologi</span>
                    </div>
                  </div>

                  <div className="alf-proj-detail__stat-box">
                    <i className="uil uil-check-circle"></i>
                    <div>
                      <strong>3</strong>
                      <span>Fitur Utama</span>
                    </div>
                  </div>
                </div>

                <div className="alf-proj-detail__actions">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alf-btn alf-btn--primary"
                  >
                    <i className="uil uil-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                </div>

                <div className="alf-proj-detail__tech-sec">
                  <h4 className="alf-proj-detail__subhead">
                    <i className="uil uil-brackets-curly"></i> Technologies Used
                  </h4>
                  <div className="alf-proj-detail__pills">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="alf-proj-detail__pill">
                        <i className="uil uil-cube"></i> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Large Screenshot + Key Features */}
              <div className="alf-proj-detail__right">
                <div className="alf-proj-detail__img-box">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="alf-proj-detail__img"
                  />
                </div>

                <div className="alf-proj-detail__features">
                  <h4>
                    <i className="uil uil-star"></i> Key Features
                  </h4>
                  <ul>
                    {selectedProject.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Section Title */}
            <div className="alf-section-head">
              <h2 className="alf-section-head__title">Portfolio</h2>
              <p className="alf-section-head__sub">
                Menampilkan proyek pilihan, sertifikasi, pencapaian, serta tech
                stack yang saya kuasai.
              </p>
            </div>

            {/* 4 Switchable Tabs Bar (Projects, Certificates, Achievements, Tech Stack) */}
            <div className="alf-tabs-bar" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'projects'}
                onClick={() => setActiveTab('projects')}
                className={`alf-tab-btn ${activeTab === 'projects' ? 'is-active' : ''}`}
              >
                <i className="uil uil-brackets-curly"></i>
                <span>Projects</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'certificates'}
                onClick={() => setActiveTab('certificates')}
                className={`alf-tab-btn ${activeTab === 'certificates' ? 'is-active' : ''}`}
              >
                <i className="uil uil-award"></i>
                <span>Certificates</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'achievements'}
                onClick={() => setActiveTab('achievements')}
                className={`alf-tab-btn ${activeTab === 'achievements' ? 'is-active' : ''}`}
              >
                <i className="uil uil-trophy"></i>
                <span>Achievements</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'techstack'}
                onClick={() => setActiveTab('techstack')}
                className={`alf-tab-btn ${activeTab === 'techstack' ? 'is-active' : ''}`}
              >
                <i className="uil uil-layer-group"></i>
                <span>Tech Stack</span>
              </button>
            </div>

            {/* TAB 1: PROJECTS */}
            {activeTab === 'projects' && (
              <div className="alf-projects-grid">
                {PROJECTS_DATA.map((project) => (
                  <article key={project.id} className="alf-project-card">
                    <div className="alf-project-card__img-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="alf-project-card__img"
                        loading="lazy"
                      />
                    </div>

                    <div className="alf-project-card__body">
                      <h3 className="alf-project-card__title">{project.title}</h3>
                      <p className="alf-project-card__desc">{project.shortDesc}</p>

                      <div className="alf-project-card__tags">
                        {project.stack.slice(0, 3).map((tag, i) => (
                          <span key={i} className="alf-project-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="alf-project-card__footer">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="alf-project-card__demo"
                        >
                          <span>Live Demo</span>
                          <i className="uil uil-external-link-alt"></i>
                        </a>

                        <button
                          type="button"
                          onClick={() => handleOpenDetail(project)}
                          className="alf-project-card__details-btn"
                        >
                          <span>Details</span>
                          <i className="uil uil-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* TAB 2: CERTIFICATES */}
            {activeTab === 'certificates' && (
              <div className="alf-certs-grid">
                {CERTIFICATES_DATA.map((cert) => (
                  <div key={cert.id} className="alf-cert-card">
                    <div className="alf-cert-card__preview">
                      <div className="alf-cert-card__sheet">
                        <div className="alf-cert-card__seal">
                          <i className="uil uil-award"></i>
                        </div>
                        <span className="alf-cert-card__sheet-top">
                          CERTIFICATE OF COMPLETION
                        </span>
                        <h4>{cert.title}</h4>
                        <p>Presented to Iklil Badar</p>
                        <div className="alf-cert-card__sheet-foot">
                          <span>{cert.issuer}</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="alf-cert-card__body">
                      <span className="alf-cert-card__badge">{cert.badge}</span>
                      <h3 className="alf-cert-card__title">{cert.title}</h3>
                      <p className="alf-cert-card__desc">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: ACHIEVEMENTS */}
            {activeTab === 'achievements' && (
              <div className="alf-certs-grid">
                {ACHIEVEMENTS_DATA.map((item) => (
                  <div key={item.id} className="alf-cert-card">
                    <div className="alf-project-card__img-wrap">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="alf-project-card__img"
                      />
                    </div>
                    <div className="alf-cert-card__body">
                      <span className="alf-cert-card__badge">
                        {item.highlight} • {item.year}
                      </span>
                      <h3 className="alf-cert-card__title">{item.title}</h3>
                      <p className="alf-cert-card__desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: TECH STACK */}
            {activeTab === 'techstack' && (
              <div className="alf-tech-grid">
                {TECH_STACK_DATA.map((tech) => (
                  <div key={tech.name} className="alf-tech-card">
                    <div className="alf-tech-card__icon-wrap">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="alf-tech-card__icon"
                        loading="lazy"
                      />
                    </div>
                    <span className="alf-tech-card__name">{tech.name}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
