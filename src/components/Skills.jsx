import React from 'react';
import { Code, Database, Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">03 / KEAHLIAN & TEKNOLOGI</span>
          <h2>Stack & Alat Pengembangan</h2>
          <p className="section-title-desc">
            Teknologi dan perkakas yang biasa saya gunakan dalam membangun aplikasi web dan perangkat lunak.
          </p>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skills-category-card">
            <div className="skills-category-header">
              <Code className="w-5 h-5 skills-category-icon" />
              <h3 className="skills-category-title">Frontend Development</h3>
            </div>
            <div className="skills-tag-list">
              <span className="skill-tag">HTML5 & CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Responsive Layouts</span>
              <span className="skill-tag">Tailwind CSS / Vanilla CSS</span>
              <span className="skill-tag">UI/UX Principles</span>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="skills-category-card">
            <div className="skills-category-header">
              <Database className="w-5 h-5 skills-category-icon" />
              <h3 className="skills-category-title">Backend & Database</h3>
            </div>
            <div className="skills-tag-list">
              <span className="skill-tag">PHP Native</span>
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">C# (Windows Forms)</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">REST API Integration</span>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="skills-category-card">
            <div className="skills-category-header">
              <Layers className="w-5 h-5 skills-category-icon" />
              <h3 className="skills-category-title">Alat & Workflow</h3>
            </div>
            <div className="skills-tag-list">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Visual Studio</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">ERD & Normalisasi</span>
              <span className="skill-tag">Vite & Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
