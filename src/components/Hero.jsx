import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="hero" id="home">
      {/* Hero Background Elements */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>
      <div className="hero-bg-ring ring-1"></div>
      <div className="hero-bg-ring ring-2"></div>

      {/* Floating Tech Badges in Background */}
      <div className="hero-floating-badge badge-left-1">&lt; React.js /&gt;</div>
      <div className="hero-floating-badge badge-left-2">&#123; Node.js &#125;</div>
      <div className="hero-floating-badge badge-right-1">GraphQL</div>
      <div className="hero-floating-badge badge-right-2">Full Stack</div>

      <div className="container">
        <div className="hero-content-centered">
          <motion.div 
            className="hero-text-centered"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="hero-name">
              HIBA ZOBID
            </motion.h2>
            
            <motion.h1 variants={itemVariants} className="hero-title">
              DÉVELOPPEUSE FULL STACK JUNIOR
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-subtitle">
              — Développement Digital —
            </motion.p>
            
            <motion.p variants={itemVariants} className="hero-status">
              Actuellement à la recherche d'une alternance ou d'opportunité de travail
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-actions-centered">
              <a href="#projects" className="btn btn-primary">
                PROJETS
              </a>
              <a href="#contact" className="btn btn-primary">
                CONTACT
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-socials">
              <a href="#" className="social-icon">IN</a>
              <a href="#" className="social-icon">GH</a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
