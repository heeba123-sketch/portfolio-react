import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
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
    <header className={`navbar-container ${isScrolled ? 'scrolled glass-card' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <Code2 size={28} className="logo-icon" />
            Portfo<span>lio</span>
          </a>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'active glass-card' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>Accueil</a></li>
            <li><a href="#about" onClick={toggleMenu}>À propos</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Compétences</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projets</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
