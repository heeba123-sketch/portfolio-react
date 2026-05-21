import React, { useState } from 'react';
import { MapPin, Mail, Phone, GraduationCap, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation of form submission
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contactez-moi</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info glass-card">
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-details">
                <h3>Localisation</h3>
                <p>Casablanca, Maroc</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>hibazobid34@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-details">
                <h3>Téléphone</h3>
                <p>+212 777898313</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><GraduationCap size={24} /></div>
              <div className="contact-details">
                <h3>Formation</h3>
                <p>OFPPT - Développement Digital</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message" 
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} /> Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
