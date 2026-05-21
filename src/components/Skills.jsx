import React from 'react';
import { Code2, Server, Database, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Bootstrap / Tailwind', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'PHP & Laravel', level: 80 },
        { name: 'Python', level: 70 }
      ]
    },
    {
      title: 'API & Base de données',
      icon: <Database size={24} />,
      skills: [
        { name: 'API REST', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL / PostgreSQL', level: 85 }
      ]
    },
    {
      title: 'Outils & DevOps',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Git / GitHub', level: 92 },
        { name: 'Docker', level: 65 },
        { name: 'Agile / Scrum', level: 80 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Mes Compétences</h2>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
};

export default Skills;
