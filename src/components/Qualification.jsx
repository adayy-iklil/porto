import React, { useState } from 'react';

export default function Qualification() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              activeTab === 'education' ? 'qualification__active' : ''
            }`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${
              activeTab === 'work' ? 'qualification__active' : ''
            }`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work & Projects
          </div>
        </div>

        <div className="qualification__sections">
          {/*==================== QUALIFICATION CONTENT 1 (EDUCATION) ====================*/}
          <div
            className={`qualification__content ${
              activeTab === 'education' ? 'qualification__active' : ''
            }`}
            data-content
            id="education"
          >
            {/* Qualification 1 (Left) */}
            <div className="qualification__data">
              <div className="qualification__item-data">
                <h3 className="qualification__title">Rekayasa Perangkat Lunak</h3>
                <span className="qualification__subtitle">SMKN 6 Jakarta</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - Sekarang
                </div>
              </div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            {/* Qualification 2 (Right) */}
            <div className="qualification__data">
              <div></div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__item-data">
                <h3 className="qualification__title">Pemrograman Web & Basis Data</h3>
                <span className="qualification__subtitle">Praktikum Mandiri & Sekolah</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2026
                </div>
              </div>
            </div>

            {/* Qualification 3 (Left - Last item, no line below) */}
            <div className="qualification__data">
              <div className="qualification__item-data">
                <h3 className="qualification__title">Sekolah Menengah Pertama</h3>
                <span className="qualification__subtitle">MTS Al-Islamiyah</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                </div>
              </div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
              </div>

              <div></div>
            </div>
          </div>

          {/*==================== QUALIFICATION CONTENT 2 (WORK) ====================*/}
          <div
            className={`qualification__content ${
              activeTab === 'work' ? 'qualification__active' : ''
            }`}
            data-content
            id="work"
          >
            {/* Work 1 (Left) */}
            <div className="qualification__data">
              <div className="qualification__item-data">
                <h3 className="qualification__title">Frontend Web Developer</h3>
                <span className="qualification__subtitle">PT. Ace Energy Service</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2026
                </div>
              </div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            {/* Work 2 (Right) */}
            <div className="qualification__data">
              <div></div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__item-data">
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">ADOM SCORING (E-Ticketing)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2026
                </div>
              </div>
            </div>

            {/* Work 3 (Left) */}
            <div className="qualification__data">
              <div className="qualification__item-data">
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">SIX-PRESENCE (Absensi Digital)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2026
                </div>
              </div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            {/* Work 4 (Right - Last item, no line below) */}
            <div className="qualification__data">
              <div></div>

              <div className="qualification__line-box">
                <span className="qualification__rounder"></span>
              </div>

              <div className="qualification__item-data">
                <h3 className="qualification__title">Frontend & System Design</h3>
                <span className="qualification__subtitle">KantinHub (Kasir POS)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
