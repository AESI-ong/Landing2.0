import './Footer.css';
import { Logo } from '../Logo'
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      {/* Top colorful bar */}
      <div className="top-color-bar"></div>
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo y descripción */}
          <div className="footer-brand">
            <div className="logo-container">
              <Logo className='logo' />
            </div>
            <p className="copyright">© 2025 - Todos los derechos reservados AESI</p>
            <br />
            <p className="mission">
              Transformando comunidades y cambiando vidas a través del apoyo social y comunitario.
            </p>
            <div className="social-links">
              {/* Facebook line icon */}
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Twitter line icon */}
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              {/* Instagram line icon (Lucide style) */}
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

          </div>

          {/* Programas */}
          <div className="footer-section">
            <h3 className="section-title title-programas">Programas</h3>
            <ul className="section-links">
              <li><a href="#" className="footer-link">Educación</a></li>
              <li><a href="#" className="footer-link">Salud</a></li>
              <li><a href="#" className="footer-link">Desarrollo</a></li>
              <li><a href="#" className="footer-link">Emergencias</a></li>
            </ul>
          </div>

          {/* Organización */}
          <div className="footer-section">
            <h3 className="section-title title-organizacion">Organización</h3>
            <ul className="section-links">
              <li><a href="#" className="footer-link">Sobre Nosotros</a></li>
              <li><a href="#" className="footer-link">Equipo</a></li>
              <li><a href="#" className="footer-link">Transparencia</a></li>
              <li><a href="#" className="footer-link">Informes</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3 className="section-title title-contacto">Contacto</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="contact-text">info@aesi.org</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.91 19.91 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a1 1 0 0 1 1 .75l1.38 5.52a1 1 0 0 1-.29.94l-2.2 2.2a16 16 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .94-.29l5.52 1.38a1 1 0 0 1 .75 1z" />
                  </svg>
                </div>
                <span className="contact-text">+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon location-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="contact-text">123 Calle Principal, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Solo información legal */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2024 AESI. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Política de Privacidad</a>
              <a href="#" className="legal-link">Términos de Uso</a>
              <a href="#" className="legal-link">Cookies</a>
            </div>
          </div>
        </div>

        {/* CTA Button - Ahora está al final y centrado */}
        <div className="footer-cta-section">
          <button className="cta-button">
            <span>Únete a Nuestra Misión</span>
            <span><Heart size={16} strokeWidth={2} /></span>
          </button>
        </div>
      </div>
    </footer>
  );
}