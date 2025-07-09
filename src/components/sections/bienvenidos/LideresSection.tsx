import './LideresSection.css';
export function LideresSection() {
  const lideres = [
    {
      nombre: "María Elena Vásquez",
      cargo: "Directora Ejecutiva",
      descripcion: "Líder visionaria con 15+ años transformando comunidades a través del desarrollo social sostenible"
    },
    {
      nombre: "Carlos Mendoza",
      cargo: "Director de Programas",
      descripcion: "Especialista en educación innovadora, ha impactado la vida de más de 15,000 niños en zonas rurales"
    },
    {
      nombre: "Ana Rodríguez",
      cargo: "Directora de Alianzas",
      descripcion: "Experta en cooperación internacional, ha gestionado más de $5M en fondos para proyectos sociales"
    }
  ];

  return (
    <section className="lideres-section">
      <div className="lideres-container">
        {/* Header */}
        <div className="lideres-header">
          <h2 className="lideres-title">
            Líderes con Propósito
          </h2>
          <div className="lideres-divider"></div>
          <p className="lideres-subtitle">
            Conoce a los visionarios que guían nuestra misión de transformar comunidades
          </p>
        </div>

        {/* Grid de líderes */}
        <div className="lideres-grid">
          {lideres.map((lider, index) => (
            <div key={index} className="lider-card">
              {/* Espacio para imagen circular */}
              <div className="lider-image-placeholder">
                <svg className="lider-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>

              {/* Información del líder */}
              <h3 className="lider-name">
                {lider.nombre}
              </h3>
              
              <div className="lider-cargo-wrapper">
                <span className="lider-cargo">
                  {lider.cargo}
                </span>
              </div>
              
              <p className="lider-description">
                {lider.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LideresSection;



