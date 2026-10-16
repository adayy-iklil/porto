import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Ace Energy Service',
      desc: 'Solusi profil perusahaan energi surya (PV EPC) dengan katalog produk interaktif dan formulir layanan terintegrasi.',
      stack: ['React.js', 'Vanilla CSS', 'UI/UX'],
      image: '/assets/ace.png',
      demo: 'https://aceenergyservice.com',
    },
    {
      id: 2,
      title: 'ADOM SCORING (E-Ticketing)',
      desc: 'Platform tiket elektronik dan kalkulasi skor kompetisi Paskibra berbasis web dengan integrasi RESTful API.',
      stack: ['React.js', 'Laravel API', 'MySQL'],
      image: '/assets/adomscoring.png',
      demo: 'https://adomscoring.my.id',
    },
    {
      id: 3,
      title: 'SIX-PRESENCE (Absensi Digital)',
      desc: 'Sistem presensi digital sekolah untuk siswa & guru dengan rekapitulasi data kehadiran otomatis real-time.',
      stack: ['Laravel', 'MySQL', 'Bootstrap'],
      image: '/assets/six-presence.png',
      demo: 'https://absenam.free.nf/login',
    },
    {
      id: 4,
      title: 'KantinHub (POS & Canteen)',
      desc: 'Aplikasi kasir kantin modern dengan grafik tren penjualan 7 hari, manajemen stok, dan database Supabase.',
      stack: ['React.js', 'Supabase', 'Tailwind CSS'],
      image: '/assets/kantinhub.png',
      demo: 'https://kantinhub6.netlify.app',
    },
  ];

  return (
    <>
      {/*==================== PORTFOLIO / PROJECT ====================*/}
      <section className="portfolio section" id="project">
        <span id="portfolio" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}></span>
        <h2 className="section__title">Project</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container container">
          <div className="portfolio__grid">
            {projectsList.map((project) => (
              <div key={project.id} className="portfolio__content">
                <div className="portfolio__img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio__img"
                    loading="lazy"
                  />
                </div>

                <div className="portfolio__data">
                  <h3 className="portfolio__title">{project.title}</h3>
                  <p className="portfolio__description">{project.desc}</p>

                  <div className="portfolio__tags">
                    {project.stack.map((tag, idx) => (
                      <span key={idx} className="portfolio__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo Live
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*==================== PROJECT IN MIND ====================*/}
      <section className="project section">
        <div className="container">
          <div className="project__bg">
            <div className="project__container">
              <div className="project__data">
                <h2 className="project__title">
                  Punya tawaran magang atau proyek aplikasi?
                </h2>
                <p className="project__description">
                  Hubungi saya sekarang dan mari diskusikan bagaimana saya dapat membantu membangun sistem website, desktop, atau database Anda.
                </p>
                <Link to="/contact" className="button button--flex button--white">
                  Contact Me
                  <i className="uil uil-message project__icon button__icon"></i>
                </Link>
              </div>

              <img
                src="/assets/avatar.jpg"
                alt="Iklil Badar"
                className="project__img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
