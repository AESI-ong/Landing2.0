import React from 'react';
import './ContactoSection.css';

const SeccionContacto: React.FC = () => {
    return (
        <section className="seccion-contacto">
            <div className="seccion-contacto-container">
                <div className="seccion-contacto-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <g opacity="0.9">
                            <path d="M16 58.6668V10.6668C16 9.25234 16.5619 7.89579 17.5621 6.89559C18.5623 5.8954 19.9188 5.3335 21.3333 5.3335H42.6667C44.0812 5.3335 45.4377 5.8954 46.4379 6.89559C47.4381 7.89579 48 9.25234 48 10.6668V58.6668H16Z" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.9987 32H10.6654C9.25088 32 7.89432 32.5619 6.89413 33.5621C5.89393 34.5623 5.33203 35.9188 5.33203 37.3333V53.3333C5.33203 54.7478 5.89393 56.1044 6.89413 57.1046C7.89432 58.1048 9.25088 58.6667 10.6654 58.6667H15.9987" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M48 24H53.3333C54.7478 24 56.1044 24.5619 57.1046 25.5621C58.1048 26.5623 58.6667 27.9188 58.6667 29.3333V53.3333C58.6667 54.7478 58.1048 56.1044 57.1046 57.1046C56.1044 58.1048 54.7478 58.6667 53.3333 58.6667H48" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.668 16H37.3346" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.668 26.6665H37.3346" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.668 37.3335H37.3346" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.668 48H37.3346" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </div>

                <h2 className="seccion-contacto-titulo">
                    ¿Quieres conocer más sobre nosotros?
                </h2>

                <p className="seccion-contacto-descripcion">
                    Estamos siempre dispuestos a compartir nuestra experiencia y explorar nuevas
                    oportunidades de colaboración.
                </p>

                <button className="seccion-contacto-boton">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Contáctanos
                </button>
            </div>
        </section>
    );
};

export default SeccionContacto;