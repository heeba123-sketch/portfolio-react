import React from 'react';
import { Globe, Code, Database, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe size={32} strokeWidth={1.5} />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      icon: <Code size={32} strokeWidth={1.5} />,
      skills: ['Node.js', 'PHP', 'Laravel', 'REST API', 'GraphQL']
    },
    {
      title: 'Bases de données',
      icon: <Database size={32} strokeWidth={1.5} />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Outils',
      icon: <Wrench size={32} strokeWidth={1.5} />,
      skills: ['Git & GitHub', 'Docker', 'Postman', 'SonarQube']
    },
    {
      title: 'Architecture',
      icon: <Layers size={32} strokeWidth={1.5} />,
      skills: ['HOPEX (méta-modélisation)', 'Architecture logicielle']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>COMPÉTENCES</h2>
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
                  <span key={idx} className="skill-tag">{skill}</span>
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
