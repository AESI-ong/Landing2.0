import React from 'react'
import './LiderarSection.css'
import { Calendar, Target } from 'lucide-react'

interface TopicData {
  date: string
  category: string
  title: string
  description: string
  keyPoints: string[]
  statsLabel: string
  statsValue: string
  imageUrl: string
  imageAlt: string
}

const mockData: TopicData = {
  date: 'Enero 2024',
  category: 'Desarrollo Profesional',
  title: 'Marca Personal y Poder Digital en LinkedIn',
  description:
    'Descubre cómo los líderes sociales pueden amplificar su impacto a través de una presencia digital estratégica y auténtica en LinkedIn.',
  keyPoints: [
    'Construcción de narrativa personal auténtica',
    'Estrategias de networking para el sector social',
    'Creación de contenido con propósito',
    'Medición del impacto digital'
  ],
  statsLabel: 'Líderes Impactados',
  statsValue: '500+',
  imageUrl: '/assets/images/liderar-placeholder.jpg',
  imageAlt: 'Ilustración temática'
}

export function LiderarSection () {
  const data = mockData

  return (
    <section className='liderar-section'>
      <div className='liderar-container'>
        {/* Header */}
        <div className='liderar-header'>
          <h2>Liderar con Propósito</h2>
          <div className='liderar-divider' />
          <p>
            Tema central del mes para el desarrollo de liderazgo con impacto social
          </p>
        </div>

        {/* Card */}
        <div className='topic-card'>
          {/* Info */}
          <div className='topic-info'>
            {/* Tags */}
            <div className='tag-container'>
              <span className='tag-pill'>
                <Calendar size={16} />
                {data.date}
              </span>
              <span className='tag-pill'>
                <Target size={16} />
                {data.category}
              </span>
            </div>

            {/* Title */}
            <h3 className='topic-title'>{data.title}</h3>

            {/* Description */}
            <p className='topic-description'>{data.description}</p>

            {/* Key Points */}
            <h4>Puntos Clave</h4>
            <ul className='key-points'>
              {data.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className='cta-container'>
              <button className='cta-pill'>
                Explorar Contenido <span>→</span>
              </button>
              <button className='cta-pill'>
                Recursos Adicionales <span>↗</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className='topic-image'
            style={{ backgroundImage: `url(${data.imageUrl})` }}
            aria-label={data.imageAlt}
          />

          {/* Stat Pill */}
          <div className='stat-pill'>
            <span className='stat-icon'>
              <Target size={20} />
            </span>
            <div>
              <strong style={{ fontSize: '1.25rem' }}>{data.statsValue}</strong>
              <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                {data.statsLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiderarSection 