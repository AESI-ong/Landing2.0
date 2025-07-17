import type React from "react"
import { MessageCircle, Building2 } from "lucide-react"
import "./AboutSection.css"

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-banner">
          <div className="about-icon">
            <Building2 size={48} />
          </div>

          <h2 className="about-title">¿Quieres conocer más sobre nosotros?</h2>

          <p className="about-description">
            Estamos siempre dispuestos a compartir nuestra experiencia y explorar nuevas oportunidades de colaboración.
          </p>

          <button className="about-button">
            <MessageCircle size={16} />
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
