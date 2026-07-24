import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import './Formations.css';

const Formations = () => {
  return (
    <section className="formations" id="formations">
      <div className="container">
        <div className="section-title">
          <h2>MES FORMATIONS</h2>
        </div>
        
        <div className="formations-list">
          
          <div className="formation-card glass-card">
            <div className="formation-badges">
              <span className="badge badge-blue">Diplôme</span>
              <span className="badge badge-green">
                <CheckCircle2 size={12} /> Obtenu
              </span>
            </div>
            
            <h3 className="formation-title">Technicienne Spécialisée en Développement Digital</h3>
            
            <div className="formation-meta">
              <span><GraduationCap size={16} /> OFPPT - Institut Spécialisé de Gestion et d'Informatique</span>
              <span><MapPin size={16} /> Casablanca, Maroc</span>
              <span><Calendar size={16} /> 2024 – 2026</span>
            </div>
            
            <div className="formation-skills">
              <h4 className="skills-title">Compétences acquises</h4>
              <ul className="skills-grid-list">
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Développement Web (HTML, CSS, JS, React.js)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Développement Backend (PHP, Laravel, Node.js)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Bases de données (MySQL, MongoDB)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Sécurité informatique & GDPR</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Gestion de projet Agile</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Architecture logicielle & méta-modélisation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="formation-card glass-card">
            <div className="formation-badges">
              <span className="badge badge-blue">Baccalauréat</span>
              <span className="badge badge-green">
                <CheckCircle2 size={12} /> Obtenu
              </span>
            </div>
            
            <h3 className="formation-title">Baccalauréat en Science Physique</h3>
            
            <div className="formation-meta">
              <span><GraduationCap size={16} /> Lycée Taha Hussein</span>
              <span><MapPin size={16} /> Casablanca, Maroc</span>
              <span><Calendar size={16} /> 2023 – 2024</span>
            </div>
            
            <div className="formation-skills">
              <h4 className="skills-title">Compétences acquises</h4>
              <ul className="skills-grid-list">
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Physique & Chimie appliquées</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Mathématiques avancées</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Méthode de travail rigoureuse et analytique</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Résolution de problèmes complexes</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formations;
