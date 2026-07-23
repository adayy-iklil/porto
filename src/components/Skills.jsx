import React from 'react';
import { Code, Database, Layers, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={20} />,
      skills: [
        { name: 'HTML & CSS / Responsive Design', level: 90 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'React.js Framework', level: 75 },
        { name: 'UI/UX Design Basics', level: 70 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database size={20} />,
      skills: [
        { name: 'PHP / Laravel', level: 80 },
        { name: 'MySQL / PostgreSQL / SQL Server', level: 85 },
        { name: 'C# / Java (Aplikasi Desktop)', level: 75 },
        { name: 'RESTful API Development', level: 70 },
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: <Layers size={20} />,
      skills: [
        { name: 'Git & GitHub Version Control', level: 85 },
        { name: 'Problem Solving & Logika Pemrograman', level: 80 },
        { name: 'Database Design (ERD, Normalisasi)', level: 85 },
        { name: 'SDLC (Software Development Life Cycle)', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Keahlian Saya</span>
          <h2>Teknologi & Kemampuan</h2>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <div className="skills-category-header">
                <div className="skills-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
