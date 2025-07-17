import type React from 'react';
import { Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import './AcademiaSection.css';

interface AcademyData {
    id: string
    title: string
    description: string
    stats:{
        people: string
        schools: string
    }
    isActive: boolean
}

const AcademiesData: AcademyData[] = [
    {
        id:'1',
        title: 'ZetaBoomers',
        description: 'Construimos y equipamos escuelas en comunidades rurales, garantizando educación de calidad para todos los niños.',
        stats: {
            people: '1,200 niños',
            schools: '12 escuelas construidas',
        },
        isActive: true,
    },

    {
        id:'2',
        title: 'Empleodinamo',
        description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
        stats: {
            people: '800 familias',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'3',
        title: 'Emplealquimia',
        description: 'Capacitación y microcréditos para empoderar a las familias a través del emprendimiento sostenible.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },
]


const AcademySection: React.FC = () => {
    return (
        <section className='academy-section'>
            <div className='academy-container'>
                <div className='academy-header'>
                    <h2 className='academy-title'>Academia “Empoderamiento Económico”</h2>
                    <div className='academy-underline'></div>
                </div>

                <div className="academy-grid">
                {AcademiesData.map((program) => (
                    <div key={program.id} className="academy-card">
                    <div className="academy-card-header">
                        <div className="academy-badges">
                        {program.isActive && <span className="badge badge-active">Activo</span>}
                        <span className="badge badge-academy">
                            <GraduationCap size={16} />
                            Programas
                        </span>
                        </div>

                        <div className="academy-image-placeholder">
                        <div className="placeholder-icon">
                            <Building2 size={24} />
                        </div>
                        </div>

                        <div className="academy-stats">
                        <div className="stat-item">
                            <Users size={16} />
                            <span>{program.stats.people}</span>
                        </div>
                        <div className="stat-item">
                            <Building2 size={16} />
                            <span>{program.stats.schools}</span>
                        </div>
                        </div>
                    </div>

                    <div className="academy-card-content">
                        <h3 className="academy-card-title">{program.title}</h3>
                        <p className="academy-card-description">{program.description}</p>

                        <button className="academy-button">
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

export default AcademySection