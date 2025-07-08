import React from 'react';
import './Donaciones.css';
import { Banknote, Building2, FileText, Gift } from 'lucide-react';

export function Donaciones() {
  const metodosDonacion = [
    {
      icon: Banknote,
      title: 'Transferencia Bancaria',
      description: 'Transferencia directa a nuestras cuentas bancarias oficiales',
      bgColor: '#ce2828',
      detalles: [
        'Banco de Crédito del Perú (BCP)',
        'Cuenta Corriente Soles: 194-123456789-0-12',
        'Cuenta Corriente Dólares: 194-987654321-1-15',
        'CCI Soles: 002-194-1234567890-12-34',
        'CCI Dólares: 002-194-987654321115-67'
      ],
      badge: '⏱ 1-2 días hábiles'
    },
    {
      icon: Building2,
      title: 'Depósito en Ventanilla',
      description: 'Depósito directo en cualquier agencia bancaria del país',
      bgColor: '#facc15',
      detalles: [
        'Banco de Crédito del Perú (BCP)', 
        'Interbank', 
        'BBVA Continental', 
        'Scotiabank', 
        'Banco de la Nación'
      ],
      badge: '⏱ Inmediato'
    },
    {
      icon: FileText,
      title: 'Cheque',
      description: (<><span className='texto-oscuro'>Cheque a nombre de AESI</span> entregado en nuestras oficinas</>),
      bgColor: '#2f68bb',
      detalles: [
        'A nombre de: Asociación Educativa y Social Integral - AESI',
        'Entregar en oficina principal',
        'Horario: Lunes a Viernes 9:00 AM - 6:00 PM',
        'Dirección: Av. Los Héroes 123, Lima, Perú'
      ],
      badge: '⏱ 3-5 días hábiles'
    },
    {
      icon: Gift,
      title: 'Donación en Especie',
      description: 'Bienes, equipos, materiales o servicios que apoyen nuestros programas',
      bgColor: '#22c55e',
      detalles: [
        'Equipos médicos y educativos',
        'Materiales de construcción',
        'Alimentos no perecibles',
        'Servicios profesionales',
        'Vehículos y maquinaria'
      ],
      badge: '⏱ Evaluación previa requerida'
    }
  ];

  return (
    <section className="donaciones-section">
      <div className="donaciones-container">
        <div className="donaciones-header">
          <h2>Métodos de Donación</h2>
          <div className="donaciones-subrayado"></div>
          <p>
            Múltiples formas seguras y convenientes para realizar tu donación
          </p>
        </div>

        <div className="donaciones-grid">
          {metodosDonacion.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="donaciones-card">
                <div className="icon-box" style={{ backgroundColor: item.bgColor }}>
                  <Icon color="#fff" size={28} />
                </div>
                <h3 className="donaciones-title">{item.title}</h3>
                <p className="donaciones-texto">{item.description}</p>
                <ul className="donaciones-lista">
                  {item.detalles.map((detalle, i) => (
                    <li key={i}>{detalle}</li>
                  ))}
                </ul>
                <div className="donaciones-etiqueta">
                  <span>{item.badge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
