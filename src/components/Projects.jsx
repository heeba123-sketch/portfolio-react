import React, { useState } from 'react';
import { ExternalLink, Code, Utensils, Plane, CloudSun, Brain, FileSearch } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Scanner de CV avec IA',
      category: 'ai',
      icon: <FileSearch size={32} />,
      description: "Application intelligente d'analyse et de scoring de CV en fonction d'offres d'emploi. Utilise des modèles d'intelligence artificielle pour extraire les compétences clés et suggérer des améliorations.",
      tags: ['React', 'Tailwind CSS', 'IA & LLM', 'APIs'],
      github: 'https://github.com/heeba123-sketch',
      demo: 'https://ai-resume-scanner-six.vercel.app/'
    },
    {
      id: 2,
      title: 'Système de Gestion de Restaurant',
      category: 'frontend',
      icon: <Utensils size={32} />,
      description: "Application web complète développée pour la gestion des réservations et inventaire d'un restaurant avec consultation du menu. Interface administrateur et client avec dashboard interactif.",
      tags: ['React', 'Node.js', 'Express', 'Tailwind'],
      github: 'https://github.com/heeba123-sketch/oumo-koura',
      demo: 'https://heeba123-sketch.github.io/oumo-koura/'
    },
    {
      id: 3,
      title: 'Site Web Agence de Voyage',
      category: 'frontend',
      icon: <Plane size={32} />,
      description: "Site vitrine responsive pour une agence de voyage. Design moderne avec carousel, cartes de destination et formulaire de contact interactif.",
      tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
      github: 'https://github.com/heeba123-sketch/travel__essafwa',
      demo: 'https://heeba123-sketch.github.io/travel__essafwa/'
    },
    {
      id: 4,
      title: 'Application Météo',
      category: 'fullstack',
      icon: <CloudSun size={32} />,
      description: "Application météo utilisant l'API OpenWeather. Géolocalisation, recherche par ville et affichage des prévisions sur 7 jours. Design minimaliste et moderne.",
      tags: ['React', 'API REST', 'GraphQL'],
      github: 'https://github.com/heeba123-sketch/app',
      demo: 'https://heeba123-sketch.github.io/app/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Mes Projets</h2>
        </div>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            IA
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Code size={18} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} /> Démo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
