import type React from 'react';
import { Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import './TalleresSection.css';

interface TallerData {
    id: string
    title: string
    description: string
    stats:{
        people: string
        schools: string
    }
    isActive: boolean
}

const tallersData: TallerData[] = [
    {
        id:'1',
        title: 'Taller - Prevención de Acoso laboral y Hostigamiento Sexual',
        description: 'Construimos y equipamos escuelas en comunidades rurales garantizando educación de calidad para todos los niños.',
        stats: {
            people: '1,200 niños',
            schools: '12 escuelas construidas',
        },
        isActive: true,
    },

    {
        id:'2',
        title: 'Taller - Prevención de Adicciones',
        description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
        stats: {
            people: '800 familias',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'3',
        title: 'Orientación Vocacional',
        description: 'Capacitación y  microcréditos para empoderar a las familias a través del emprendimiento sostenible.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },
]


const TalleresSection: React.FC = () => {
    return (
        <section className='taller-section'>
            <div className='taller-container'>
                <div className='taller-header'>
                    <h2 className='taller-title'>Talleres Corporativos</h2>
                    <div className='taller-underline'></div>
                </div>

                <div className="taller-grid">
                {tallersData.map((taller) => (
                    <div key={taller.id} className="taller-card">
                    <div className="taller-card-header">
                        <div className="taller-badges">
                        {taller.isActive && <span className="badge badge-active">Activo</span>}
                        <span className="badge badge-taller">
                            <GraduationCap size={16} />
                            Talleres
                        </span>
                        </div>

                        <div className="taller-image-placeholder">
                        <div className="placeholder-icon">
                            <Building2 size={24} />
                        </div>
                        </div>

                        <div className="taller-stats">
                        <div className="stat-item">
                            <Users size={16} />
                            <span>{taller.stats.people}</span>
                        </div>
                        <div className="stat-item">
                            <Building2 size={16} />
                            <span>{taller.stats.schools}</span>
                        </div>
                        </div>
                    </div>

                    <div className="taller-card-content">
                        <h3 className="taller-card-title">{taller.title}</h3>
                        <p className="taller-card-description">{taller.description}</p>

                        <button className="taller-button">
                        Ver Detalles
                        <ArrowRight size={16} />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default TalleresSection