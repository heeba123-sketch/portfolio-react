import React, { useState } from 'react';
import { Building2, MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Quote, X, Award } from 'lucide-react';
import './Experiences.css';

const Experiences = () => {
  const [showRecommendation, setShowRecommendation] = useState(false);

  const toggleModal = () => {
    setShowRecommendation(!showRecommendation);
  };

  return (
    <section className="experiences" id="experiences">
      <div className="container">
        <div className="section-title">
          <h2>MES EXPÉRIENCES PROFESSIONNELLES</h2>
        </div>
        
        <div className="experiences-carousel">
          <div className="experience-card glass-card">
            <div className="experience-header">
              <div className="experience-badge">
                <Building2 size={14} /> Stage
              </div>
              <button className="btn-recommendation-badge" onClick={toggleModal}>
                <Award size={14} /> Recommandation
              </button>
            </div>
            
            <h3 className="experience-role">Développeuse Full Stack</h3>
            
            <p className="experience-desc">
              Développement d'une preuve de concept (PoC) intégrant l'IA à HOPEX, permettant d'automatiser l'exploration de métadonnées jusqu'alors effectuée manuellement.
            </p>
            
            <div className="experience-meta">
              <span><Building2 size={16} /> Bizzdesign</span>
              <span><MapPin size={16} /> Casablanca, Maroc</span>
              <span><Calendar size={16} /> Janv – Févr 2026 (5 semaines)</span>
            </div>
            
            <div className="experience-content-layout">
              <div className="experience-missions">
                <h4 className="missions-title">Missions principales</h4>
                <ul className="missions-list">
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>Conception et développement d'un PoC IA intégrée à la plateforme HOPEX (Bizzdesign)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>Développement et test de requêtes GraphQL complexes pour l'accès aux métadonnées</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>Création d'interfaces utilisateur interactives et responsives avec React.js</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>Tests et validation des APIs avec Postman, garantissant la fiabilité des échanges</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>Obtention des certifications HOPEX Administration & Sécurité</span>
                  </li>
                </ul>
              </div>

              <div className="experience-testimonial glass-card">
                <div className="testimonial-header">
                  <Quote size={32} className="quote-icon" />
                  <h4>Recommandation de l'encadrant</h4>
                </div>
                <blockquote className="testimonial-quote">
                  "Hiba a démontré une excellente capacité d'apprentissage, une rigueur technique notable et un fort engagement... Elle a su intervenir sur des sujets techniques avancés... Je la recommande sans réserve."
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">Kaïs Larbi</span>
                    <span className="author-title">Director Services Factory, Bizzdesign</span>
                  </div>
                  <button className="btn btn-outline btn-sm btn-view-letter" onClick={toggleModal}>
                    Lire la lettre complète
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Recommendation Letter */}
      {showRecommendation && (
        <div className="recommendation-modal-overlay" onClick={toggleModal}>
          <div className="recommendation-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={toggleModal} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className="letter-header">
              <div className="letter-sender">
                <h3>Kaïs Larbi</h3>
                <p>Director Services Factory</p>
                <p className="company-name-highlight">Bizzdesign</p>
              </div>
              <div className="letter-title">
                <h2>LETTRE DE RECOMMANDATION</h2>
              </div>
            </div>
            
            <div className="letter-body">
              <p className="letter-salutation">À qui de droit,</p>
              
              <p>
                Je recommande vivement <strong>Hiba Zobid</strong>, qui a effectué son stage en tant que Développeuse Full Stack au sein de nos équipes chez <strong>Bizzdesign</strong>.
              </p>
              
              <p>
                Durant cette expérience, Hiba a démontré une excellente capacité d'apprentissage, une rigueur technique notable et un fort engagement dans les missions qui lui ont été confiées. Elle a notamment contribué à la conception et à la réalisation d'une preuve de concept innovante intégrant des capacités d’intelligence artificielle au sein de la plateforme HOPEX.
              </p>
              
              <p>
                Elle a su intervenir sur des sujets techniques avancés, aussi bien en développement backend (GraphQL, APIs) qu’en développement frontend (React.js), tout en appliquant des pratiques rigoureuses de test et de validation. Sa capacité à appréhender rapidement des problématiques complexes a été particulièrement appréciée.
              </p>
              
              <p>
                Au-delà de ses compétences techniques, Hiba se distingue par son professionnalisme, son sens de l’engagement et son excellent relationnel. Elle s’intègre facilement dans une équipe et fait preuve d’une volonté constante de progresser.
              </p>
              
              <p>
                Au regard de son potentiel et de son sérieux, je suis convaincu qu’elle saura apporter une contribution significative au sein de toute équipe de développement.
              </p>
              
              <p className="letter-conclusion">
                Je la recommande sans réserve pour toute opportunité en développement full stack.
              </p>
              
              <p>Je reste à votre disposition pour toute information complémentaire.</p>
              
              <div className="letter-signature">
                <p>Cordialement,</p>
                <p className="signature-name">Kaïs Larbi</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiences;
