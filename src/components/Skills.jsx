import React from 'react';
import { Code, Database, Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Keahlian Saya</span>
          <h2>Teknologi & Kemampuan</h2>
        </div>

        <div className="skills-grid">
          {/* Category 1 */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-icon-wrapper">
                <Code className="w-5 h-5" />
              </div>
              <h3>Frontend Development</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML & CSS / Responsive Design</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">React.js Framework</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">UI/UX Design Basics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-icon-wrapper">
                <Database className="w-5 h-5" />
              </div>
              <h3>Backend & Database</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">PHP / Laravel</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">MySQL / SQL Server</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">C# (Aplikasi Desktop)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-icon-wrapper">
                <Layers className="w-5 h-5" />
              </div>
              <h3>Tools & Workflows</h3>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Git & GitHub Version Control</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Problem Solving & Logika Pemrograman</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Database Design (ERD, Normalisasi)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
