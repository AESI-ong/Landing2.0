import React from 'react';
import './BeneficiosSection.css';

interface Beneficio {
    texto: string;
}

interface Ejemplo {
    descripcion: string;
}

interface TipoBeneficio {
    titulo: string;
    subtitulo: string;
    beneficios: Beneficio[];
    ejemplo: Ejemplo;
    tipo: 'naturales' | 'juridicas';
}

const BeneficiosTributarios: React.FC = () => {
    const tiposBeneficios: TipoBeneficio[] = [
        {
            titulo: "Personas Naturales",
            subtitulo: "Beneficios tributarios para ciudadanos",
            beneficios: [
                { texto: "Deducción del 10% de la renta neta" },
                { texto: "Límite máximo de 1.5 UIT anuales" },
                { texto: "Aplicable en declaración anual de impuestos" },
                { texto: "Requiere certificado de donación oficial" }
            ],
            ejemplo: {
                descripcion: "Si tu renta anual es S/ 50,000, puedes deducir hasta S/ 5,000 en donaciones"
            },
            tipo: 'naturales'
        },
        {
            titulo: "Personas Jurídicas",
            subtitulo: "Beneficios tributarios para empresas",
            beneficios: [
                { texto: "Deducción del 10% de la renta neta anual" },
                { texto: "Sin límite máximo establecido" },
                { texto: "Gasto deducible para efectos del Impuesto a la Renta" },
                { texto: "Mejora el perfil de responsabilidad social" }
            ],
            ejemplo: {
                descripcion: "Una empresa con renta de S/ 100,000 puede deducir hasta S/ 10,000 en donaciones"
            },
            tipo: 'juridicas'
        }
    ];

    return (
        <div className="beneficios-tributarios-container">
            <div className="header">
                <h1>Beneficios Tributarios</h1>
                <div className="underline"></div>
                <p>Tus donaciones a AESI son deducibles de impuestos según la legislación peruana vigente</p>
            </div>

            <div className="beneficios-grid">
                {tiposBeneficios.map((beneficio, index) => (
                    <div key={index} className={`beneficio-card ${beneficio.tipo}`}>
                        <div className="card-header">
                            <div className="icon">
                                {beneficio.tipo === 'naturales' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                        <path d="M24.6549 2.66663H8.65495C7.18219 2.66663 5.98828 3.86053 5.98828 5.33329V26.6666C5.98828 28.1394 7.18219 29.3333 8.65495 29.3333H24.6549C26.1277 29.3333 27.3216 28.1394 27.3216 26.6666V5.33329C27.3216 3.86053 26.1277 2.66663 24.6549 2.66663Z" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 8H21.9909" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.9883 18.6666V24" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.9883 13.3334H22.0016" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.6562 13.3334H16.6696" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 13.3334H11.3376" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.6562 18.6666H16.6696" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 18.6666H11.3376" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.6562 24H16.6696" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 24H11.3376" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                        <path d="M24.6549 2.66663H8.65495C7.18219 2.66663 5.98828 3.86053 5.98828 5.33329V26.6666C5.98828 28.1394 7.18219 29.3333 8.65495 29.3333H24.6549C26.1277 29.3333 27.3216 28.1394 27.3216 26.6666V5.33329C27.3216 3.86053 26.1277 2.66663 24.6549 2.66663Z" stroke="#F5F3F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 8H21.9909" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.9883 18.6666V24" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.9883 13.3334H22.0016" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.6562 13.3334H16.6696" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 13.3334H11.3376" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.6562 18.6666H16.6696" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 18.6666H11.3376" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.6562 24H16.6696" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3242 24H11.3376" stroke="#FFFFFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <div className="card-title">
                                <h2>{beneficio.titulo}</h2>
                                <p>{beneficio.subtitulo}</p>
                            </div>
                        </div>

                        <div className="card-content">
                            <ul className='beneficios-list'>
                                {beneficio.beneficios.map((beneficio, idx) => (
                                    <li key={idx} className="beneficio-item">
                                        <span className="beneficio-icon">
                                            {/* Ícono SVG personalizado */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_2389_6628)">
                                                    <path d="M14.535 6.66666C14.8395 8.16086 14.6225 9.71428 13.9203 11.0679C13.218 12.4214 12.073 13.4934 10.6761 14.1049C9.27913 14.7164 7.71479 14.8305 6.24391 14.4282C4.77302 14.026 3.4845 13.1316 2.59323 11.8943C1.70195 10.657 1.26179 9.15148 1.34615 7.62892C1.43051 6.10635 2.0343 4.65872 3.05681 3.52744C4.07932 2.39616 5.45876 1.64961 6.96509 1.4123C8.47141 1.17498 10.0136 1.46123 11.3344 2.22333" stroke="#4B5563" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 7.33341L8 9.33341L14.6667 2.66675" stroke="#4B5563" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2389_6628">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span>{beneficio.texto}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="ejemplo-container">
                                <div className="ejemplo-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.5013 18.3334C15.1037 18.3334 18.8346 14.6025 18.8346 10.0001C18.8346 5.39771 15.1037 1.66675 10.5013 1.66675C5.89893 1.66675 2.16797 5.39771 2.16797 10.0001C2.16797 14.6025 5.89893 18.3334 10.5013 18.3334Z" stroke="#1F2937" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.5 13.3333V10" stroke="#1F2937" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.5 6.66675H10.5083" stroke="#1F2937" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Ejemplo:</span>
                                </div>
                                <p>{beneficio.ejemplo.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeneficiosTributarios;