import React, { useState } from 'react';

export default function Skills() {
  const [openStates, setOpenStates] = useState({ 0: true, 1: true, 2: true });

  const toggleAccordion = (index) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const skillGroups = [
    {
      title: 'Frontend developer',
      subtitle: 'Pengembangan antarmuka web',
      icon: 'uil-brackets-curly',
      skills: [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'React.js',
        'Tailwind CSS',
        'Bootstrap / UI',
      ],
    },
    {
      title: 'Backend developer',
      subtitle: 'Logika & arsitektur server',
      icon: 'uil-server-network',
      skills: [
        'PHP & Laravel',
        'C# (Windows Forms)',
        'Python',
        'RESTful API',
        'Godot & Unity',
      ],
    },
    {
      title: 'Database & Tools',
      subtitle: 'Manajemen basis data & perkakas',
      icon: 'uil-database',
      skills: [
        'MySQL & SQL Server',
        'Supabase Cloud',
        'Git & GitHub',
        'VS Code & Antigravity IDE',
        'Figma & Canva',
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {skillGroups.map((group, idx) => {
          const isOpen = !!openStates[idx]
          return (
            <div
              key={idx}
              className={`skills__content ${isOpen ? 'skills__open' : 'skills__close'}`}
            >
              <div
                className="skills__header"
                onClick={() => toggleAccordion(idx)}
              >
                <i className={`uil ${group.icon} skills__icon`}></i>

                <div>
                  <h3 className="skills__title">{group.title}</h3>
                  <span className="skills__subtitle">{group.subtitle}</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list">
                {group.skills.map((skillName, sIdx) => (
                  <div key={sIdx} className="skills__item">
                    <i className="uil uil-check-circle skills__item-icon"></i>
                    <h4 className="skills__name">{skillName}</h4>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
