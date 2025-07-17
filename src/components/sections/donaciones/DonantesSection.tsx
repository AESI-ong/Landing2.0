import React from 'react';
import './DonantesSection.css';

interface Beneficio {
    texto: string;
}

interface Requisito {
    texto: string;
}

interface TipoDonante {
    titulo: string;
    descripcion: string;
    beneficios: Beneficio[];
    requisitos: Requisito[];
    tipo: 'natural' | 'juridica';
}

const TiposDonantes: React.FC = () => {
    const tiposDonantes: TipoDonante[] = [
        {
            titulo: "Persona Natural",
            descripcion: "Ciudadanos peruanos y extranjeros residentes que deseen apoyar nuestra causa",
            beneficios: [
                { texto: "Deducción del 10% de la renta neta hasta 1.5 UIT" },
                { texto: "Certificado de donación para declaración de impuestos" },
                { texto: "Reconocimiento público opcional" },
                { texto: "Informes de impacto trimestrales" },
                { texto: "Invitaciones a eventos especiales" }
            ],
            requisitos: [
                { texto: "Copia de DNI o documento de identidad" },
                { texto: "Comprobante de transferencia o depósito" },
                { texto: "Formulario de donación completado" }
            ],
            tipo: 'natural'
        },
        {
            titulo: "Persona Jurídica",
            descripcion: "Empresas y organizaciones que buscan generar impacto social y obtener beneficios tributarios",
            beneficios: [
                { texto: "Deducción del 10% de la renta neta anual" },
                { texto: "Certificado oficial para contabilidad" },
                { texto: "Oportunidades de responsabilidad social corporativa" },
                { texto: "Reportes detallados de uso de fondos" },
                { texto: "Posibilidad de alianzas estratégicas" },
                { texto: "Reconocimiento como empresa socialmente responsable" }
            ],
            requisitos: [
                { texto: "RUC de la empresa" },
                { texto: "Carta de intención firmada por representante legal" },
                { texto: "Comprobante de pago" },
                { texto: "Acuerdo de donación (montos mayores a S/10,000)" }
            ],
            tipo: 'juridica'
        }
    ];

    return (
        <div className="tipos-donantes-container">
            <div className="header">
                <h1>Tipos de Donantes</h1>
                <div className="header-subrayado"></div>
                <p>Tanto personas naturales como jurídicas pueden contribuir y obtener beneficios tributarios</p>
            </div>

            <div className="donantes-grid">
                {tiposDonantes.map((donante, index) => (
                    <div key={index} className={`donante-card ${donante.tipo}`}>
                        <div className="card-header">
                            <div className="icon">
                                {donante.tipo === 'natural' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                        <path d="M21.3815 28V25.3333C21.3815 23.9188 20.8196 22.5623 19.8194 21.5621C18.8192 20.5619 17.4627 20 16.0482 20H8.04818C6.63369 20 5.27714 20.5619 4.27694 21.5621C3.27675 22.5623 2.71484 23.9188 2.71484 25.3333V28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.0482 14.6667C14.9937 14.6667 17.3815 12.2789 17.3815 9.33333C17.3815 6.38781 14.9937 4 12.0482 4C9.10266 4 6.71484 6.38781 6.71484 9.33333C6.71484 12.2789 9.10266 14.6667 12.0482 14.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29.3789 28V25.3333C29.378 24.1516 28.9847 23.0037 28.2607 22.0698C27.5367 21.1358 26.5231 20.4688 25.3789 20.1733" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.3789 4.17334C22.5261 4.46707 23.543 5.13427 24.2691 6.06975C24.9952 7.00523 25.3894 8.15578 25.3894 9.34001C25.3894 10.5242 24.9952 11.6748 24.2691 12.6103C23.543 13.5457 22.5261 14.2129 21.3789 14.5067" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48" fill="none">
                                        <path d="M8 37.3334V13.3334C8 12.6262 8.28095 11.9479 8.78105 11.4478C9.28115 10.9477 9.95942 10.6667 10.6667 10.6667H21.3333C22.0406 10.6667 22.7189 10.9477 23.219 11.4478C23.719 11.9479 24 12.6262 24 13.3334V37.3334H8Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.0013 24H5.33464C4.62739 24 3.94911 24.281 3.44902 24.781C2.94892 25.2811 2.66797 25.9594 2.66797 26.6667V34.6667C2.66797 35.3739 2.94892 36.0522 3.44902 36.5523C3.94911 37.0524 4.62739 37.3333 5.33464 37.3333H8.0013" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M24 20H26.6667C27.3739 20 28.0522 20.281 28.5523 20.781C29.0524 21.2811 29.3333 21.9594 29.3333 22.6667V34.6667C29.3333 35.3739 29.0524 36.0522 28.5523 36.5523C28.0522 37.0524 27.3739 37.3333 26.6667 37.3333H24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.332 16H18.6654" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.332 21.3333H18.6654" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.332 26.6667H18.6654" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.332 32H18.6654" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <div className="card-title">
                                <h2>{donante.titulo}</h2>
                                <p>{donante.descripcion}</p>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="beneficios-section">
                                <h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6667 6.66675H3.33333C2.8731 6.66675 2.5 7.03984 2.5 7.50008V9.16675C2.5 9.62699 2.8731 10.0001 3.33333 10.0001H16.6667C17.1269 10.0001 17.5 9.62699 17.5 9.16675V7.50008C17.5 7.03984 17.1269 6.66675 16.6667 6.66675Z" stroke="#55B948" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 6.66675V17.5001" stroke="#55B948" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.8346 10V15.8333C15.8346 16.2754 15.659 16.6993 15.3465 17.0118C15.0339 17.3244 14.61 17.5 14.168 17.5H5.83464C5.39261 17.5 4.96868 17.3244 4.65612 17.0118C4.34356 16.6993 4.16797 16.2754 4.16797 15.8333V10" stroke="#55B948" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.2513 6.66679C5.69877 6.66679 5.16886 6.44729 4.77816 6.05659C4.38746 5.66589 4.16797 5.13599 4.16797 4.58345C4.16797 4.03092 4.38746 3.50102 4.77816 3.11031C5.16886 2.71961 5.69877 2.50012 6.2513 2.50012C7.05521 2.48611 7.84299 2.87617 8.51192 3.61942C9.18084 4.36267 9.69987 5.42462 10.0013 6.66679C10.3027 5.42462 10.8218 4.36267 11.4907 3.61942C12.1596 2.87617 12.9474 2.48611 13.7513 2.50012C14.3038 2.50012 14.8337 2.71961 15.2244 3.11031C15.6151 3.50102 15.8346 4.03092 15.8346 4.58345C15.8346 5.13599 15.6151 5.66589 15.2244 6.05659C14.8337 6.44729 14.3038 6.66679 13.7513 6.66679" stroke="#55B948" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Beneficios
                                </h3>
                                <ul>
                                    {donante.beneficios.map((beneficio, idx) => (
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

                            </div>

                            <div className="requisitos-section">
                                <h3>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#55B948" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14,2 14,8 20,8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10,9 9,9 8,9" />
                                    </svg>
                                    Requisitos
                                </h3>
                                <ul>
                                    {donante.requisitos.map((requisito, idx) => (
                                        <li key={idx}>{requisito.texto}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TiposDonantes;