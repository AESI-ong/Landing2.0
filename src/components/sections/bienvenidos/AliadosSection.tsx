import React, { useState } from 'react';
import './AliadosSection.css';

interface AliadoItem {
  id: number;
  nombre: string;
  logo: string;
  descripcion?: string;
}

export function AliadosSection() {
  const aliadosEjemplo: AliadoItem[] = [
    { id: 1, nombre: 'Aliado 1', logo: '/images/aliados/logo.png' },
    { id: 2, nombre: 'Aliado 2', logo: '/placeholder-logo-2.png' },
    { id: 3, nombre: 'Aliado 3', logo: '/placeholder-logo-3.png' },
    { id: 4, nombre: 'Aliado 4', logo: '/placeholder-logo-4.png' },
    { id: 5, nombre: 'Aliado 5', logo: '/placeholder-logo-5.png' },
    { id: 6, nombre: 'Aliado 6', logo: '/placeholder-logo-6.png' },
    { id: 7, nombre: 'Aliado 7', logo: '/placeholder-logo-7.png' }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, aliadosEjemplo.length - itemsPerPage)
    );
  };

  const handleVerTodos = () => {
    console.log('Ver todos los aliados');
  };

  const visibleAliados = aliadosEjemplo.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="page">
      <div className="container">
        <h2 className="aliados-title">Nuestros Aliados</h2>
        <p className="aliados-subtitle">
          Trabajamos junto a organizaciones líderes para maximizar nuestro impacto
        </p>

        <div className="aliados-carousel">
          <button 
            className="carousel-btn carousel-btn-prev"
            onClick={handlePrevious}
            aria-label="Anterior"
            disabled={startIndex === 0}
          >
            &#8249;
          </button>

          <div className="aliados-grid">
            {visibleAliados.map((aliado) => (
              <div key={aliado.id} className="aliado-card">
                <img 
                  src={aliado.logo} 
                  alt={`Logo de ${aliado.nombre}`}
                  className="aliado-logo"
                />
                <p className="aliado-nombre">{aliado.nombre}</p>
              </div>
            ))}
          </div>

          <button 
            className="carousel-btn carousel-btn-next"
            onClick={handleNext}
            aria-label="Siguiente"
            disabled={startIndex + itemsPerPage >= aliadosEjemplo.length}
          >
            &#8250;
          </button>
        </div>

        <button className="ver-todos-btn" onClick={handleVerTodos}>
          Ver Todos Nuestros Aliados
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </main>
  );
}

export default AliadosSection;
