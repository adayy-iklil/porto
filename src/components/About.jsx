import React from 'react';

export default function About({ onOpenCv }) {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <div className="about__img-wrapper">
          <img src="/assets/avatar.jpg" alt="Iklil Badar" className="about__img" />
        </div>

        <div className="about__data">
          <p className="about__description">
            Siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jakarta dengan fokus pada rekayasa web, desktop, dan sistem basis data. Berpengalaman membangun aplikasi fungsional yang siap pakai mulai dari presensi sekolah, platform kasir POS, hingga e-ticketing berbasis API.
          </p>

          <div className="about__info">
            <div className="about__info-box">
              <span className="about__info-title">02+</span>
              <span className="about__info-name">Tahun <br /> Pembelajaran</span>
            </div>

            <div className="about__info-box">
              <span className="about__info-title">04+</span>
              <span className="about__info-name">Proyek <br /> Selesai</span>
            </div>

            <div className="about__info-box">
              <span className="about__info-title">01</span>
              <span className="about__info-name">Kesiapan <br /> PKL / Magang</span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              download="Iklil_Badar_CV.pdf"
              href="/assets/cv.pdf"
              className="button button--flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>

            <button
              type="button"
              onClick={onOpenCv}
              className="button button--white button--flex"
              style={{ border: '1px solid var(--first-color)' }}
            >
              Lihat CV <i className="uil uil-file-alt button__icon"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
