import React, { useState, useEffect } from 'react';

export default function Services() {
  const [modalActive, setModalActive] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: 'Web Application Development',
      displayTitle: (
        <>
          Web Application <br /> Development
        </>
      ),
      icon: 'uil-web-grid',
      description:
        'Pengembangan antarmuka website modern, responsif, dan siap produksi untuk kebutuhan bisnis maupun sistem informasi.',
      tasks: [
        'Membangun antarmuka pengguna (UI) modern & responsif.',
        'Pengembangan website menggunakan React.js dan Tailwind CSS.',
        'Integrasi formulir interaktif dan RESTful API.',
        'Optimasi kecepatan dan keramahan perangkat seluler.',
      ],
    },
    {
      id: 2,
      title: 'Desktop Software Development',
      displayTitle: (
        <>
          Desktop Software <br /> Development
        </>
      ),
      icon: 'uil-window-grid',
      description:
        'Pengembangan aplikasi desktop terstruktur dengan bahasa C# dan ekosistem .NET untuk operasional dan manajemen data.',
      tasks: [
        'Aplikasi desktop berbasis C# Windows Forms.',
        'Sistem pencatatan transaksi kasir & inventaris.',
        'Otomatisasi input data dan rekapitulasi laporan.',
        'Penyimpanan lokal dan koneksi basis data SQL.',
      ],
    },
    {
      id: 3,
      title: 'Database Architecture & API',
      displayTitle: (
        <>
          Database Architecture <br /> & API
        </>
      ),
      icon: 'uil-database',
      description:
        'Perancangan struktur data relasional yang efisien serta pembuatan endpoint API yang aman dan terintegrasi.',
      tasks: [
        'Perancangan skema Entity Relationship Diagram (ERD).',
        'Normalisasi dan optimasi kueri MySQL & SQL Server.',
        'Pengembangan endpoint backend berbasis Laravel.',
        'Integrasi cloud database menggunakan Supabase.',
      ],
    },
  ];

  // Prevent background scroll and support Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalActive(null);
    };

    if (modalActive !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalActive]);

  const activeService = servicesData.find((s) => s.id === modalActive);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div key={service.id} className="services__content">
            <div className="services__card-top">
              <div className="services__icon-box">
                <i className={`uil ${service.icon} services__icon`}></i>
              </div>
              <h3 className="services__title">{service.displayTitle}</h3>
              <p className="services__description">{service.description}</p>
            </div>

            <button
              type="button"
              className="button button--flex button--small button--link services__button"
              onClick={() => setModalActive(service.id)}
            >
              Lihat Detail
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        ))}
      </div>

      {/* SINGLE ROOT-LEVEL MODAL (Outside card transforms to fix mobile jump/closing bug) */}
      {activeService && (
        <div
          className="services__modal active-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalActive(null);
          }}
        >
          <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="services__modal-close"
              onClick={(e) => {
                e.stopPropagation();
                setModalActive(null);
              }}
              aria-label="Tutup modal"
              title="Tutup"
            >
              <i className="uil uil-times"></i>
            </button>

            <h4 className="services__modal-title">{activeService.title}</h4>

            <p className="services__modal-description">
              {activeService.description}
            </p>

            <ul className="services__modal-services grid">
              {activeService.tasks.map((task, tIdx) => (
                <li key={tIdx} className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
