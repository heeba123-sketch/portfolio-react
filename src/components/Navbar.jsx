import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <div className="logo-badge">HZ</div>
            ZOBID HIBA
          </a>
          
          <div className="nav-actions">
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#about" onClick={toggleMenu}>À propos</a></li>
              <li><a href="#skills" onClick={toggleMenu}>Compétences</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projets</a></li>
              <li><a href="#experiences" onClick={toggleMenu}>Expériences</a></li>
              <li><a href="#formations" onClick={toggleMenu}>Formations</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
            
            <a href="/ResumeHibaZobid.pdf" className="btn btn-primary btn-cv" download>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              TÉLÉCHARGER MON CV
            </a>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
