import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Ace Energy Service',
      desc: 'Solusi PV surya EPC hingga O&M. Website profil perusahaan dengan katalog produk & portofolio.',
      role: 'Frontend Developer',
      stack: ['React.js', 'Vanilla CSS', 'UI/UX'],
      type: 'Company Profile',
      year: '2026',
      image: '/assets/ace.png',
      demo: 'https://aceenergyservice.com'
    },
    {
      id: 2,
      title: 'ADOM SCORING (E-Ticketing System)',
      desc: 'Platform e-ticketing & rekapitulasi skor Paskibra berbasis web modern dengan integrasi RESTful API.',
      role: 'Frontend Developer',
      stack: ['React.js', 'Laravel API', 'MySQL'],
      type: 'Web Application',
      year: '2026',
      image: '/assets/adomscoring.png',
      demo: 'https://adomscoring.my.id'
    },
    {
      id: 3,
      title: 'SIX-PRESENCE (Absensi Digital)',
      desc: 'Sistem presensi digital siswa & guru SMKN 6 Jakarta dengan otentikasi akun serta rekapitulasi data absensi real-time.',
      role: 'Fullstack Developer',
      stack: ['Laravel', 'MySQL', 'Bootstrap'],
      type: 'Web Application',
      year: '2026',
      image: '/assets/six-presence.png',
      demo: 'https://absenam.free.nf/login'
    },
    {
      id: 4,
      title: 'KantinHub (Canteen & POS System)',
      desc: 'Sistem informasi kantin & kasir POS dengan grafik tren penjualan 7 hari, manajemen stok, dan basis data Supabase.',
      role: 'Frontend & System Design',
      stack: ['React.js', 'Supabase', 'Tailwind CSS'],
      type: 'Web Application',
      year: '2026',
      image: '/assets/kantinhub.png',
      demo: 'https://kantinhub6.netlify.app'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 / KARYA PILIHAN</span>
          <h2>Proyek yang Pernah Dikembangkan</h2>
          <p className="section-title-desc">
            Seleksi aplikasi web, platform, dan sistem perangkat lunak yang telah saya rancang dan kembangkan.
          </p>
        </div>

        <div className="projects-grid-compact">
          {projectsList.map((project, index) => (
            <article key={project.id} className="project-card-compact">
              <div className="project-card-top">
                <span className="project-number">PROJECT 0{index + 1}</span>
                <span className="project-year-badge">{project.year}</span>
              </div>

              <div className="project-media-compact">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-info-compact">
                <h3 className="project-title-compact">{project.title}</h3>
                <p className="project-desc-compact">{project.desc}</p>

                <div className="project-tags-compact">
                  {project.stack.map((tag, idx) => (
                    <span key={idx} className="project-tag-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions-compact">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm btn-block-sm">
                    Demo Live <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
