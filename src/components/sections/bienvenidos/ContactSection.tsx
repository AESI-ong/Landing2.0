import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">Contáctanos</h1>
        <div className="contact-subrayado"></div>
        <p className="contact-subtitle">
          ¿Tienes preguntas o quieres ser parte del cambio? Estamos<br />
          aquí para ayudarte
        </p>
      </div>

      {/* Contact Information Grid */}
      <div className="contact-grid">
        {/* Email */}
        <div className="contact-card">
          <div className="contact-item">
            <div className="icon-container email-icon">
              <Mail className="icon" />
            </div>
            <div className="contact-info">
              <h3 className="contact-label">Email</h3>
              <p className="contact-detail">info@aesi.org</p>
              <p className="contact-detail">voluntarios@aesi.org</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <div className="contact-item">
            <div className="icon-container phone-icon">
              <Phone className="icon" />
            </div>
            <div className="contact-info">
              <h3 className="contact-label">Teléfono</h3>
              <p className="contact-detail">+51 1 254-5678</p>
              <p className="contact-detail">+51 9 8765-4321</p>
            </div>
          </div>
        </div>

        {/* Main Office */}
        <div className="contact-card">
          <div className="contact-item">
            <div className="icon-container office-icon">
              <MapPin className="icon" />
            </div>
            <div className="contact-info">
              <h3 className="contact-label">Oficina Principal</h3>
              <p className="contact-detail">Av. Los Héroes 123</p>
              <p className="contact-detail">Lima, Perú</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="contact-card">
          <div className="contact-item">
            <div className="icon-container hours-icon">
              <Clock className="icon" />
            </div>
            <div className="contact-info">
              <h3 className="contact-label">Horarios</h3>
              <p className="contact-detail">Lun - Vie: 9:00 - 18:00</p>
              <p className="contact-detail">Sáb: 9:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="emergency-section">
        <h2 className="emergency-title">¿Necesitas ayuda inmediata?</h2>
        <p className="emergency-subtitle">
          Para emergencias o consultas urgentes, contáctanos directamente
        </p>
        <div className="emergency-buttons">
          <button className="emergency-btn">
            <Phone className="btn-icon" />
            <span>Llamar ahora</span>
          </button>
          <button className="emergency-btn">
            <MessageCircle className="btn-icon" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;