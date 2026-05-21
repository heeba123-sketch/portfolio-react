import React from 'react';
import { Award, Briefcase, Code } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>À propos de moi</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <h3>Étudiante en développement digital à l'OFPPT</h3>
            <p>
              Je suis une développeuse full stack passionnée par la création d'applications web innovantes. 
              Actuellement en formation à l'OFPPT, je me spécialise dans le développement digital avec une 
              approche pratique et orientée projet.
            </p>
            <p>
              Mon parcours m'a permis d'acquérir des compétences solides en développement web (React, Node.js), 
              en gestion de bases de données et en conception d'interfaces utilisateur interactives. 
              J'aime relever des défis techniques et créer des solutions qui allient esthétique et fonctionnalité.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon"><Briefcase size={24} /></div>
                <div>
                  <div className="stat-number">12+</div>
                  <div className="stat-text">Projets réalisés</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Award size={24} /></div>
                <div>
                  <div className="stat-number">100%</div>
                  <div className="stat-text">Satisfaction</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Code size={24} /></div>
                <div>
                  <div className="stat-number">15+</div>
                  <div className="stat-text">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
