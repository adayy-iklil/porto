import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Ace Energy Service',
      desc: 'PT. ACE ENERGY SERVICE menyediakan solusi PV surya kelas dunia — dari EPC hingga O&M — untuk masa depan yang berkelanjutan. Website profil perusahaan ini menampilkan keunggulan produk, estimasi penghematan listrik, layanan instalasi, serta portofolio proyek pengerjaan.',
      role: 'Frontend Web Developer',
      stack: ['React.js', 'Vanilla CSS', 'Responsive Design', 'UI/UX'],
      type: 'Company Profile',
      year: '2026',
      image: '/assets/ace.png',
      demo: 'https://aceenergyservice.com'
    },
    {
      id: 2,
      title: 'Sistem Pendaftaran Prodjost Academy',
      desc: 'Sistem informasi pendaftaran peserta kursus berbasis web yang dikembangkan menggunakan PHP Native dan basis data MySQL. Dilengkapi dengan pengelolaan CRUD (Create, Read, Update, Delete) data peserta secara dinamis.',
      role: 'Fullstack Developer',
      stack: ['PHP Native', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      type: 'Web Application',
      year: '2026',
      image: '/assets/prodjost.png',
      demo: 'https://prodjostlearning.xo.je/'
    },
    {
      id: 3,
      title: 'SIX-PRESENCE (Sistem Absensi Digital)',
      desc: 'SIX-PRESENCE adalah sistem informasi presensi digital siswa dan guru berbasis web untuk SMK Negeri 6 Jakarta. Dilengkapi fitur manajemen presensi digital, otentikasi akun guru/siswa, serta rekapitulasi data absensi real-time.',
      role: 'Fullstack Developer',
      stack: ['PHP / Laravel', 'MySQL', 'Bootstrap', 'Web Application'],
      type: 'Web Application',
      year: '2026',
      image: '/assets/six-presence.png',
      demo: 'https://absenam.free.nf/login'
    },
    {
      id: 4,
      title: 'KantinHub (Canteen & POS System)',
      desc: 'KantinHub adalah sistem informasi manajemen kantin dan Point of Sale (POS) berbasis web modern. Dilengkapi dengan terminal kasir cepat, manajemen stok & inventori produk, tren grafik penjualan 7 hari, dan sistem database Supabase.',
      role: 'Frontend & System Design',
      stack: ['React.js', 'Supabase', 'Tailwind CSS', 'POS Terminal'],
      type: 'Web Application',
      year: '2026',
      image: '/assets/kantinhub.png',
      demo: 'https://kantinhub6.netlify.app'
    },
    {
      id: 5,
      title: 'ADOM SCORING (E-Ticketing & Scoring System)',
      desc: 'ADOM SCORING adalah platform e-ticketing dan rekapitulasi nilai Paskibra berbasis web modern. Memungkinkan pemesanan tiket digital secara online.',
      role: 'Frontend Web Developer',
      stack: ['React.js', 'Laravel API', 'MySQL', 'RESTful API'],
      type: 'Web Application',
      year: '2025',
      image: '/assets/adomscoring.png',
      demo: 'https://adomscoring.my.id'
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

        <div className="projects-list">
          {projectsList.map((project, index) => (
            <article key={project.id} className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="project-info">
                <span className="project-number">PROJECT 0${index + 1}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-metadata">
                  <div className="meta-block">
                    <span className="meta-block-label">ROLE</span>
                    <span className="meta-block-val">{project.role}</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-block-label">TIPE & TAHUN</span>
                    <span className="meta-block-val">{project.type} · {project.year}</span>
                  </div>
                </div>

                <div className="project-tags">
                  {project.stack.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    Demo Live <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                  </a>
                </div>
              </div>

              <div className="project-media">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
