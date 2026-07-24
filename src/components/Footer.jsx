import React from 'react';
import { Code, User, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <Code2 size={24} className="logo-icon" />
              Portfo<span>lio</span>
            </div>
            <p>
              Portfolio d'une développeuse full stack, passionnée par le développement web et les nouvelles technologies.
            </p>
            <div className="social-links">
              <a href="https://github.com/heeba123-sketch" target="_blank" rel="noopener noreferrer" className="social-link">
                <Code size={20} />
              </a>
              <a href="https://linkedin.com/in/zobid-hiba-ba4764321" target="_blank" rel="noopener noreferrer" className="social-link">
                <User size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Liens rapides</h3>
            <ul className="footer-links">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Technologies favorites</h3>
            <ul className="footer-links">
              <li><a href="#">React & Vite</a></li>
              <li><a href="#">Node.js & Express</a></li>
              <li><a href="#">GraphQL</a></li>
              <li><a href="#">API REST</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright border-top">
          <p>&copy; {new Date().getFullYear()} Hiba Zobid. Tous droits réservés. | Développeuse Full Stack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
