import React from 'react';
import './NivelesImpacto.css';

interface NivelImpacto {
  monto: string;
  titulo: string;
  descripcion: string;
  impacto: string;
}

const NivelesImpacto: React.FC = () => {
  const niveles: NivelImpacto[] = [
    {
      monto: "S/ 100",
      titulo: "Apoyo Básico",
      descripcion: "Alimentación para una familia durante una semana",
      impacto: "1 familia beneficiada"
    },
    {
      monto: "S/ 500",
      titulo: "Apoyo Educativo",
      descripcion: "Materiales escolares para 10 niños durante un año",
      impacto: "10 niños educados"
    },
    {
      monto: "S/ 1,000",
      titulo: "Apoyo Médico",
      descripcion: "Brigada médica completa para una comunidad",
      impacto: "200 personas atendidas"
    },
    {
      monto: "S/ 5,000",
      titulo: "Apoyo Estructural",
      descripcion: "Construcción de un aula en zona rural",
      impacto: "30 niños con educación permanente"
    },
    {
      monto: "S/ 10,000+",
      titulo: "Apoyo Transformacional",
      descripcion: "Programa integral para una comunidad completa",
      impacto: "500+ personas transformadas"
    }
  ];

  return (
    <div className="niveles-impacto-container">
      <div className="niveles-impacto-header">
        <h1>Niveles de Impacto</h1>
        <div className="niveles-impacto-underline"></div>
        <p>Conoce el impacto real que puede generar tu donación en nuestras comunidades</p>
      </div>

      <div className="niveles-impacto-grid">
        {niveles.map((nivel, index) => (
          <div key={index} className="niveles-impacto-card">
            <div className="niveles-impacto-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            
            <div className="niveles-impacto-content">
              <h3 className="niveles-impacto-monto">{nivel.monto}</h3>
              <h4 className="niveles-impacto-titulo">{nivel.titulo}</h4>
              <p className="niveles-impacto-descripcion">{nivel.descripcion}</p>
              
              <div className="niveles-impacto-badge">
                {nivel.impacto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NivelesImpacto;