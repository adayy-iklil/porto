import React, { useState } from 'react';

export default function Services() {
  const [modalActive, setModalActive] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: 'Web Application Development',
      icon: 'uil-web-grid',
      description:
        'Layanan pengembangan website modern, responsif, dan siap produksi untuk kebutuhan bisnis maupun sistem informasi.',
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
      icon: 'uil-arrow',
      description:
        'Pengembangan aplikasi desktop terstruktur dengan bahasa C# dan ekosistem .NET untuk operasional harian.',
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
      icon: 'uil-database',
      description:
        'Perancangan struktur data relasional yang rapi serta pembuatan endpoint API yang aman dan efisien.',
      tasks: [
        'Perancangan skema Entity Relationship Diagram (ERD).',
        'Normalisasi dan optimasi kueri MySQL & SQL Server.',
        'Pengembangan endpoint backend berbasis Laravel.',
        'Integrasi cloud database menggunakan Supabase.',
      ],
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div key={service.id} className="services__content">
            <div>
              <i className={`uil ${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(' ')[0]} <br />{' '}
                {service.title.split(' ').slice(1).join(' ')}
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setModalActive(service.id)}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div
              className={`services__modal ${
                modalActive === service.id ? 'active-modal' : ''
              }`}
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">{service.title}</h4>
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => setModalActive(null)}
                ></i>

                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-services grid">
                  {service.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>{task}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
