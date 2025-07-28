import "./InfoContent.css";

import { Eye, Users } from "lucide-react";

import React from "react";
import info from "../../../assets/images/quienes-somos/info.png";

export const InfoContent: React.FC = () => {
  return (
    <section className="info-content">
      <div className="info-container">
        {/* Título principal */}
        <div className="info-header">
          <h2 className="info-main-title">
            Asociación Economía Sostenible E Interseccionalidad (AESI)
          </h2>
          <p className="info-ruc">RUC N° 20612143642</p>

          <p className="info-subtitle">
            Conoce nuestra historia, misión y los valores que nos impulsan a
            crear un mundo más justo y equitativo
          </p>
        </div>

        {/* Contenido principal */}
        <div className="info-main-content">
          {/* Sección izquierda - Misión y Visión */}
          <div className="info-text-section">
            <div className="mission-vision-cards">
              {/* Tarjeta Misión */}
              <div className="info-card mission-card">
                <div className="card-header">
                  <div className="card-icon mission-icon">
                    <Users size={20} />
                  </div>
                  <h3 className="card-title">Nuestra Misión</h3>
                </div>
                <p className="card-description">
                  Calidad de vida y sostenibilidad para todos
                </p>
              </div>

              {/* Tarjeta Visión */}
              <div className="info-card vision-card">
                <div className="card-header">
                  <div className="card-icon vision-icon">
                    <Eye size={20} />
                  </div>
                  <h3 className="card-title">Nuestra Visión</h3>
                </div>
                <p className="card-description">
                  Ser líderes globales en la integración de justicia social y
                  sostenibilidad ecológica
                </p>
              </div>
            </div>
          </div>

          {/* Sección derecha - Imagen */}
          <div className="info-image-section">
            <div className="image-container">
              <img
                src={info}
                alt="Equipo AESI trabajando juntos"
                className="info-image"
              />

              {/* Overlay con texto */}
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4 className="overlay-title">Trabajando juntos</h4>
                  <p className="overlay-subtitle">
                    Por un futuro mejor para todos
                  </p>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="floating-badge">
                <span className="badge-text">Transformamos Vidas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
