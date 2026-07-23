import React from 'react';
import { ExternalLink, Terminal, Globe, Cpu } from 'lucide-react';

const GithubIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const projectsList = [
    {
      title: 'Ace Energy Service',
      desc: 'PT. ACE ENERGY SERVICE menyediakan solusi PV surya kelas dunia — dari EPC hingga O&M — untuk masa depan yang berkelanjutan. Website profil perusahaan ini menampilkan keunggulan produk, estimasi penghematan listrik, layanan instalasi, serta portofolio proyek pengerjaan.',
      tech: ['React.js', 'Vanilla CSS', 'Responsive Design', 'UI/UX'],
      type: 'Company Profile',
      icon: <Globe size={40} style={{ color: 'var(--accent-blue)' }} />,
      image: '/ace.png',
      demo: 'https://aceenergyservice.com'
    },
    {
      title: 'Sistem Pendaftaran Prodjost Academy',
      desc: 'Sistem informasi pendaftaran peserta kursus berbasis web yang dikembangkan menggunakan PHP Native dan basis data MySQL. Dilengkapi dengan pengelolaan CRUD (Create, Read, Update, Delete) data peserta secara dinamis.',
      tech: ['PHP Native', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      type: 'Web Application',
      icon: <Cpu size={40} style={{ color: 'var(--accent-pink)' }} />,
      image: '/prodjost.png',
      demo: 'https://prodjostlearning.xo.je/'
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
          {projectsList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-media">
                <div className="project-glow-overlay"></div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      // Make the fallback icon visible again
                      const fallback = e.target.parentElement.querySelector('.project-fallback-icon');
                      if (fallback) fallback.style.opacity = '1';
                    }}
                  />
                )}
                <div className="project-fallback-icon" style={{ opacity: project.image ? 0 : 1, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 0 }}>
                  {project.icon}
                </div>
                <span style={{
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
                }}>
                  {project.type}
                </span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tech.map((t, tIndex) => (
                    <span key={tIndex} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo} className="project-link" onClick={(e) => project.demo === '#' && e.preventDefault()}>
                    <ExternalLink size={16} /> Demo Live
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
