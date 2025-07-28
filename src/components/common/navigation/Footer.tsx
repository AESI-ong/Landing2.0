import './Footer.css';

import { Heart } from 'lucide-react';
import { Logo } from '../Logo'

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
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                    <path d="M18.3351 13.8504V16.3504C18.3361 16.5825 18.2886 16.8122 18.1956 17.0249C18.1026 17.2375 17.9662 17.4284 17.7952 17.5853C17.6242 17.7422 17.4223 17.8616 17.2024 17.936C16.9826 18.0103 16.7496 18.038 16.5185 18.0171C13.9542 17.7384 11.491 16.8622 9.32682 15.4587C7.31334 14.1793 5.60626 12.4722 4.32682 10.4587C2.91846 8.28474 2.04202 5.80957 1.76848 3.23374C1.74766 3.0033 1.77505 2.77104 1.8489 2.55176C1.92275 2.33248 2.04146 2.13098 2.19745 1.96009C2.35345 1.7892 2.54332 1.65266 2.75498 1.55917C2.96663 1.46569 3.19543 1.41729 3.42682 1.41707H5.92682C6.33124 1.41309 6.72331 1.55631 7.02995 1.82002C7.33659 2.08373 7.53688 2.44995 7.59348 2.85041C7.699 3.65046 7.89469 4.43601 8.17682 5.19207C8.28894 5.49034 8.3132 5.8145 8.24674 6.12614C8.18028 6.43778 8.02587 6.72383 7.80182 6.95041L6.74348 8.00874C7.92978 10.095 9.65719 11.8224 11.7435 13.0087L12.8018 11.9504C13.0284 11.7264 13.3144 11.5719 13.6261 11.5055C13.9377 11.439 14.2619 11.4633 14.5601 11.5754C15.3162 11.8575 16.1018 12.0532 16.9018 12.1587C17.3066 12.2158 17.6763 12.4197 17.9406 12.7317C18.2049 13.0436 18.3453 13.4417 18.3351 13.8504Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> */}
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