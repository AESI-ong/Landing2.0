import React from 'react';
import './HeroSection.css';
import { Info } from 'lucide-react';
import infoDonacion from '../../../assets/images/donacionSection/infoDonaciones.jpg';

interface DonationInfoProps { }

const InfoDonacionSection: React.FC<DonationInfoProps> = () => {
  return (
    <div className="donation-info">
      {/* Sección con imagen de fondo */}
      <div className="donation-section" style={{ backgroundImage: `url(${infoDonacion})` }}>
        <div className="donation-content">
          <h1 className="donation-title">
            Información sobre <br />
            <span className="donation-highlight">Donaciones</span>
          </h1>
          <p className="donation-description">
            Conoce todo sobre cómo donar a AESI: beneficios tributarios,
            métodos de donación, requisitos y el impacto real de tu
            contribución.
          </p>
        </div>
      </div>

      {/* Sección de tarjetas de características (fuera del fondo) */}
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M24.6549 2.66663H8.65495C7.18219 2.66663 5.98828 3.86053 5.98828 5.33329V26.6666C5.98828 28.1394 7.18219 29.3333 8.65495 29.3333H24.6549C26.1277 29.3333 27.3216 28.1394 27.3216 26.6666V5.33329C27.3216 3.86053 26.1277 2.66663 24.6549 2.66663Z" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.3242 8H21.9909" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.9883 18.6666V24" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.9883 13.3334H22.0016" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.6562 13.3334H16.6696" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.3242 13.3334H11.3376" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.6562 18.6666H16.6696" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.3242 18.6666H11.3376" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.6562 24H16.6696" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.3242 24H11.3376" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 className="feature-title">Beneficios Tributarios</h3>
          <p className="feature-description">Hasta 10% de deducción</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
          <h3 className="feature-title">100% Transparente</h3>
          <p className="feature-description">Informes detallados</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="6"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
          <h3 className="feature-title">ONG Certificada</h3>
          <p className="feature-description">Reconocida oficialmente</p>
        </div>
      </div>
    </div>
  );
};

export default InfoDonacionSection;
