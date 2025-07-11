import React from 'react';
import './Impacto.css'; 
import { Users, Home, GraduationCap, Handshake } from 'lucide-react';

export function ImpactoSection() {
  const impactData = [
    {
      icon: Users,
      number: '500+',
      description: 'Familias Beneficiadas',
      bgColor: '#CD2027'
    },
    {
      icon: Home,
      number: '12',
      description: 'Comunidades Activas',
      bgColor: '#F6D70E'
    },
    {
      icon: GraduationCap,
      number: '1,200',
      description: 'Niños Educados',
      bgColor: '#2C6DB6'
    },
    {
      icon: Handshake,
      number: '25',
      description: 'Aliados Estratégicos',
      bgColor: '#55B948'
    }
  ];

  return (
    <section className="impacto-section">
      <div className="impacto-container">
        {/* Título */}
        <div className="impacto-header">
          <h2>Nuestro Impacto</h2>
          <div className="impacto-subrayado"></div>
          <p>
            Cada número representa vidas transformadas, sueños cumplidos y comunidades fortalecidas
          </p>
        </div>

        {/* Tarjetas */}
        <div className="impacto-grid">
          {impactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="impacto-card"
              >
                <div className="icon-box" style={{ backgroundColor: item.bgColor }}>
                  <Icon color="#fff" size={28} />
                </div>
                <div className="impacto-numero" style={{ color: item.bgColor }}>
  				{item.number}
				</div>
                <p className="impacto-texto">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
