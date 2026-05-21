import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge glass-card">
              <span className="dot"></span>
              Étudiante OFPPT - Développement Digital
            </div>
            
            <h1>
              Bonjour, je suis <br />
              <span className="highlight">Hiba Zobid</span>
            </h1>
            
            <h2>Développeuse Full Stack</h2>
            
            <p>
              Étudiante passionnée en développement digital à l'OFPPT, je me spécialise 
              dans la création d'applications web modernes et performantes. Je maîtrise 
              les technologies frontend et backend (React, Node.js, Express) pour offrir 
              des solutions digitales complètes et innovantes.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Voir mes projets <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Me contacter
              </a>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-shape glass-card">
              {/* Optional: Add a profile image here */}
              <div className="placeholder-image">
                <span>HZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
