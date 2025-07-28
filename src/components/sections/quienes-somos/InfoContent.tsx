import { Eye, Users } from "lucide-react";

import React from "react";
import info from "../../../assets/images/quienes-somos/info.png";

export const InfoContent: React.FC = () => {
  return (
    <div className="py-16 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-8">
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

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Sección izquierda - Misión y Visión */}
          <div className="lg:pr-8">
            <div className="flex flex-col gap-8">
              {/* Tarjeta Misión */}
              <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg shadow-lg border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--azul-aesi)] to-blue-700 flex items-center justify-center text-white">
                    <Users size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 m-0">
                    Nuestra Misión
                  </h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed m-0">
                  Calidad de vida y sostenibilidad para todos
                </p>
              </div>

              {/* Tarjeta Visión */}
              <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg shadow-lg border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--azul-aesi)] to-blue-700 flex items-center justify-center text-white">
                    <Eye size={20} />
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
          </div>

          {/* Sección derecha - Imagen */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={info}
                alt="Equipo AESI trabajando juntos"
                className="w-full h-auto block transition-transform duration-300 hover:scale-105"
              />

              {/* Overlay con texto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white">
                <div className="max-w-[70%]">
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Trabajando juntos
                  </h4>
                  <p className="text-base opacity-90 m-0 font-medium">
                    Por un futuro mejor para todos
                  </p>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute top-6 right-6 bg-gradient-to-br from-[var(--azul-aesi)] to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 animate-bounce">
                <span className="flex items-center gap-2">
                  Transformamos Vidas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
