import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>À PROPOS</h2>
        </div>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-bg">
              <img 
                src="/profile.jpeg" 
                onError={(e) => { e.target.onerror = null; e.target.src = "/profile.jpg"; }}
                alt="Hiba Zobid" 
                className="profile-img" 
              />
            </div>
          </div>

          <div className="about-text">
            <p>
              Développeuse Full Stack junior, diplômée en Développement Digital (2026).
              J'ai acquis des bases solides en frontend et backend, et je m'intéresse
              particulièrement à l'intégration de l'IA dans les applications web.
            </p>
            <p>
              Durant mon stage chez Bizzdesign, j'ai développé une preuve de concept intégrant
              l'intelligence artificielle à la plateforme HOPEX, avec conception d'APIs GraphQL et
              interfaces React.js. J'ai aussi obtenu les certifications HOPEX Administration & Sécurité.
            </p>
            <p>
              Aujourd'hui, je suis à la recherche d'un poste de développeuse full stack pour mettre
              en œuvre des solutions techniques robustes au sein d'une équipe agile. Mon objectif
              : contribuer concrètement à des projets ambitieux et continuer à progresser.
            </p>
            <p>
              Vous cherchez un profil curieux, opérationnel sur le développement web full stack,
              trilingue (Arabe, Français, Anglais) et prêt à s'investir dans votre équipe ?
            </p>
            <p className="highlight-text">
              <strong>Je suis votre prochaine développeuse !</strong>
            </p>

            <div className="about-contact">
              <div className="contact-item">
                <Mail size={16} /> hibazobid134@gmail.com
              </div>
              <div className="contact-item">
                <Phone size={16} /> 0777 898 313
              </div>
              <div className="contact-item">
                <MapPin size={16} /> Casablanca, Maroc
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
