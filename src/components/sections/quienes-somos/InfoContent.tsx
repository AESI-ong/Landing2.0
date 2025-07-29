import { Eye, Target } from "lucide-react";

import React from "react";
import info from "../../../assets/images/quienes-somos/info.png";

export const InfoContent: React.FC = () => {
  return (
    <div className="py-8 md:py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 leading-tight">
            Asociación Economía Sostenible E Interseccionalidad (AESI)
          </h2>
          <p className="text-lg text-gray-600 font-medium mb-16 relative">
            RUC N° 20612143642
            {/* Línea decorativa */}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-[var(--azul-aesi)] to-[var(--verde-aesi)] rounded-2xl"></span>
          </p>

          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Conoce nuestra historia, misión y los valores que nos impulsan a
            crear un mundo más justo y equitativo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-stretch">
          <div className="h-full flex flex-col justify-between gap-8">
            {/* ... Tarjetas Misión y Visión ... */}
            <div className="p-6 rounded-lg bg-white shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#4ba0ff] flex items-center justify-center text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 m-0">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed m-0">
                Calidad de vida y sostenibilidad para todos
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#4ba0ff] flex items-center justify-center text-white">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 m-0">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed m-0">
                Ser líderes globales en la integración de justicia social y
                sostenibilidad ecológica
              </p>
            </div>
          </div>

          {/* Sección derecha - Imagen y Botón */}
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* Contenedor de la imagen */}
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl w-full 
                 aspect-square lg:aspect-auto lg:h-full"
            >
              <img
                src={info}
                alt="Equipo AESI trabajando juntos"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h4 className="text-xl lg:text-2xl font-bold mb-1">
                  Trabajando juntos
                </h4>
                <p className="text-base font-light m-0 opacity-90">
                  Por un futuro mejor para todos
                </p>
              </div>
            </div>

            {/* Botón flotante */}
            <a
              href="#"
              className="bg-white text-[var(--azul-aesi)] px-6 py-4 rounded-2xl text-center font-semibold shadow-xl leading-tight transition-transform hover:scale-105
                 w-11/12 mt-[-20px] relative z-10
                 lg:absolute lg:w-auto lg:mt-0
                 lg:bottom-[-20px] lg:right-[-20px]"
            >
              Transformamos
              <br />
              Vidas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
