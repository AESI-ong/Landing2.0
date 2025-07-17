import type React from 'react';
import { Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import './ProyectosSection.css';

interface ProjectData {
    id: string
    title: string
    description: string
    stats:{
        people: string
        schools: string
    }
    isActive: boolean
}

const projectsData: ProjectData[] = [
    {
        id:'1',
        title: 'Empoderamiento Económico Empleabilidad para Poblaciones Vulnerables',
        description: 'Construimos y equipamos escuelas en comunidades rurales, garantizando educación de calidad para todos los niños.',
        stats: {
            people: '1,200 niños',
            schools: '12 escuelas construidas',
        },
        isActive: true,
    },

    {
        id:'2',
        title: 'Empoderamiento Económico Emprendimiento para Poblaciones Vulnerables',
        description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
        stats: {
            people: '800 familias',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'3',
        title: 'Escuelas Seguras Alianza Empresarial contra el Ciberacoso y Bullying ',
        description: 'Capacitación y microcréditos para empoderar a las familias a través del emprendimiento sostenible.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'4',
        title: 'Escuelas Seguras Prevención de Violencia con SISEVE',
        description: 'Construimos y equipamos escuelas en comunidades rurales, garantizando educación de calidad para todos los niños.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'5',
        title: 'Programa Integral contra Drogas',
        description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'6',
        title: 'Prevención de Ciberadicciones y Dependencia al celular  ',
        description: 'Capacitación y  microcréditos para empoderar a las familias a través del emprendimiento sostenible.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'7',
        title: 'Promoción de Lectura y Fortalecimiento de Habilidades para el Aprendizaje en Comunidades',
        description: 'Construimos y equipamos escuelas en comunidades rurales, garantizando educación de calidad para todos los niños.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'8',
        title: 'Prevención de Embarazo Adolecente y Violencia',
        description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'9',
        title: 'Fortalecimiento de Habilidades para el Aprendizaje y Prevención de la Deserción Escolar en Niños, Niñas y Adolecentes',
        description: 'Capacitación y microcréditos para empoderar a las familias a través del emprendimiento sostenible.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'10',
        title: 'Cultura de Paz y Fortalecimiento de Liderazgos Democráticos en Comunidades ',
        description: 'Construimos y equipamos escuelas en comunidades rurales, garantizando educación de calidad para todos los niños.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },

    {
        id:'11',
        title: 'Habilidades para el Aprendizaje y Autonomía en Niños y Niñas con Discapacidad y/o Neurodivergencia ',
        description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
        stats: {
            people: '300 emprendedores',
            schools: '12 escuelas construidas'
        },
        isActive: true,
    },
]


const ProjectSection: React.FC = () => {
    return (
        <section className='projects-section'>
            <div className='projects-container'>
                <div className='projects-header'>
                    <h2 className='projects-title'>Proyectos Corporativos</h2>
                    <div className='projects-underline'></div>
                </div>

                <div className="programa-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="projects-card">
                    <div className="projects-card-header">
                        <div className="projects-badges">
                        {project.isActive && <span className="badge badge-active">Activo</span>}
                        <span className="badge badge-projects">
                            <GraduationCap size={16} />
                            Proyectos
                        </span>
                        </div>

                        <div className="projects-image-placeholder">
                        <div className="placeholder-icon">
                            <Building2 size={24} />
                        </div>
                        </div>

                        <div className="projects-stats">
                        <div className="stat-item">
                            <Users size={16} />
                            <span>{project.stats.people}</span>
                        </div>
                        <div className="stat-item">
                            <Building2 size={16} />
                            <span>{project.stats.schools}</span>
                        </div>
                        </div>
                    </div>

                    <div className="projects-card-content">
                        <h3 className="projects-card-title">{project.title}</h3>
                        <p className="projects-card-description">{project.description}</p>

                        <button className="projects-button">
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

export default ProjectSection