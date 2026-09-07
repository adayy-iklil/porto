import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Ace Energy Service',
      desc: 'PT. ACE ENERGY SERVICE menyediakan solusi PV surya kelas dunia — dari EPC hingga O&M — untuk masa depan yang berkelanjutan. Website profil perusahaan ini menampilkan keunggulan produk, estimasi penghematan listrik, layanan instalasi, serta portofolio proyek pengerjaan.',
      tech: ['React.js', 'Vanilla CSS', 'Responsive Design', 'UI/UX'],
      type: 'Company Profile',
      image: '/assets/ace.png',
      demo: 'https://aceenergyservice.com'
    },
    {
      id: 2,
      title: 'Sistem Pendaftaran Prodjost Academy',
      desc: 'Sistem informasi pendaftaran peserta kursus berbasis web yang dikembangkan menggunakan PHP Native dan basis data MySQL. Dilengkapi dengan pengelolaan CRUD (Create, Read, Update, Delete) data peserta secara dinamis.',
      tech: ['PHP Native', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      type: 'Web Application',
      image: '/assets/prodjost.png',
      demo: 'https://prodjostlearning.xo.je/'
    },
    {
      id: 3,
      title: 'SIX-PRESENCE (Sistem Absensi Digital)',
      desc: 'SIX-PRESENCE adalah sistem informasi presensi digital siswa dan guru berbasis web untuk SMK Negeri 6 Jakarta. Dilengkapi fitur manajemen presensi digital, otentikasi akun guru/siswa, serta rekapitulasi data absensi real-time.',
      tech: ['PHP / Laravel', 'MySQL', 'Bootstrap', 'Web Application'],
      type: 'Web Application',
      image: '/assets/six-presence.png',
      demo: 'https://absenam.free.nf/login'
    },
    {
      id: 4,
      title: 'KantinHub (Canteen & POS System)',
      desc: 'KantinHub adalah sistem informasi manajemen kantin dan Point of Sale (POS) berbasis web modern. Dilengkapi dengan terminal kasir cepat, manajemen stok & inventori produk, tren grafik penjualan 7 hari, dan sistem database Supabase.',
      tech: ['React.js', 'Supabase', 'Tailwind CSS', 'POS Terminal'],
      type: 'Web Application',
      image: '/assets/kantinhub.png',
      demo: 'https://kantinhub6.netlify.app'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Karya Saya</span>
          <h2>Proyek yang Pernah Dikembangkan</h2>
        </div>

        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-media">
                <div className="project-glow-overlay"></div>
                <img src={project.image} alt={project.title} className="project-img" />
                <span 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(4px)',
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontWeight: 600,
                    zIndex: 2
                  }}
                >
                  {project.type}
                </span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tech.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink className="w-4 h-4 inline mr-1" /> Demo Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
