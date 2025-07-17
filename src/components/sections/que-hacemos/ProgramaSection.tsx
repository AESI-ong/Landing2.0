import type React from 'react';
import { Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import './ProgramaSection.css';

interface ProgramData {
    id: string
    title: string
    description: string
    stats:{
        people: string
        schools: string
    }
    isActive: boolean
}

const programsData: ProgramData[] = [
    {
        id:'1',
        title: 'Empleabilidad Inclusiva',
        description: 'Construimos y equipamos escuelas en comunidades rurales, garantizando educacion de calidad para todos los niños.',
        stats: {
            people: '1,200 niños',
            schools: '12 escuelas construidas',
        },
        isActive: true,
    },

    {
        id:'2',
        title: 'Emprendimiento para todos',
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


const ProgramaSection: React.FC = () => {
    return (
        <section className='programa-section'>
            <div className='programa-container'>
                <div className='programa-header'>
                    <h2 className='programa-title'>Programas Gratuitos</h2>
                    <div className='programa-underline'></div>
                </div>

                <div className="programa-grid">
                {programsData.map((program) => (
                    <div key={program.id} className="programa-card">
                    <div className="programa-card-header">
                        <div className="programa-badges">
                        {program.isActive && <span className="badge badge-active">Activo</span>}
                        <span className="badge badge-programa">
                            <GraduationCap size={16} />
                            Programas
                        </span>
                        </div>

                        <div className="programa-image-placeholder">
                        <div className="placeholder-icon">
                            <Building2 size={24} />
                        </div>
                        </div>

                        <div className="programa-stats">
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

                    <div className="programa-card-content">
                        <h3 className="programa-card-title">{program.title}</h3>
                        <p className="programa-card-description">{program.description}</p>

                        <button className="programa-button">
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

export default ProgramaSection