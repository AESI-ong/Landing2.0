import './RealizarDonacion.css';
import bannerDonacion from '../../../assets/images/donaciones/banner-donacion.png';
import { ExternalLink, Heart } from 'lucide-react';

export function RealizarDonacionSection() {
  const handleDonacion = () => {
    // Aquí puedes agregar la lógica para redirigir a la página de donación
    console.log('Redirigiendo a donación...');
  };

  return (
    <section 
      className="hero-donacion"
      style={{ backgroundImage: `url(${bannerDonacion})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <button 
            className="donacion-button"
            onClick={handleDonacion}
          >
            <span className="donacion-icon">
              <Heart size={35} strokeWidth={2} />
            </span>

            <span className="donacion-text">Realizar Donación</span>
            <span className="donacion-arrow">
              <ExternalLink size={30} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}