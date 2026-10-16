import React, { useState } from 'react';

export default function Skills() {
  const [openStates, setOpenStates] = useState({ 0: false, 1: false, 2: false });

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
        { name: 'HTML5 & CSS3', percentage: '90%' },
        { name: 'JavaScript (ES6+)', percentage: '80%' },
        { name: 'React.js', percentage: '80%' },
        { name: 'Tailwind CSS', percentage: '75%' },
        { name: 'Bootstrap / UI', percentage: '85%' },
      ],
    },
    {
      title: 'Backend developer',
      subtitle: 'Logika & arsitektur server',
      icon: 'uil-server-network',
      skills: [
        { name: 'PHP Native', percentage: '80%' },
        { name: 'Laravel Framework', percentage: '75%' },
        { name: 'C# (Windows Forms)', percentage: '75%' },
        { name: 'RESTful API Integration', percentage: '80%' },
      ],
    },
    {
      title: 'Database & Tools',
      subtitle: 'Manajemen basis data & perkakas',
      icon: 'uil-database',
      skills: [
        { name: 'MySQL / MariaDB', percentage: '85%' },
        { name: 'SQL Server', percentage: '70%' },
        { name: 'Supabase Cloud', percentage: '75%' },
        { name: 'Git & GitHub', percentage: '80%' },
        { name: 'VS Code & Figma', percentage: '85%' },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {skillGroups.map((group, idx) => {
          const isOpen = !!openStates[idx];
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

              <div className="skills__list grid">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skills__data">
                    <div className="skills__titles">
                      <h4 className="skills__name">{skill.name}</h4>
                      <span className="skills__number">{skill.percentage}</span>
                    </div>
                    <div className="skills__bar">
                      <span
                        className="skills__percentage"
                        style={{ width: skill.percentage }}
                      ></span>
                    </div>
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
