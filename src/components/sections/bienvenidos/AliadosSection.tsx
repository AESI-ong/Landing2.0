import { ChevronLeft, ChevronRight } from "lucide-react";

import React from "react";
import ally1 from "../../../assets/images/welcome/our-allies/ally1.png";
import ally2 from "../../../assets/images/welcome/our-allies/ally2.jpg";
import ally3 from "../../../assets/images/welcome/our-allies/ally3.jpg";
import useEmblaCarousel from "embla-carousel-react";

interface AliadoItem {
  id: number;
  nombre: string;
  logo: string;
  descripcion?: string;
}

export function AliadosSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
  });

  const aliados: AliadoItem[] = [
    { id: 1, nombre: "Aliado 1", logo: ally1 },
    { id: 2, nombre: "Aliado 2", logo: ally2 },
    { id: 3, nombre: "Aliado 3", logo: ally3 },
  ];

  const handleVerTodos = () => {
    console.log("Ver todos los aliados");
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestras Colaboraciones & Aliados
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos junto a organizaciones líderes para maximizar nuestro
            impacto
          </p>
        </div>

        {/* Grid de aliados centrado para desktop y carrusel para móvil */}
        <div className="mb-12 lg:mb-16">
          {/* Desktop: Grid centrado */}
          <div className="hidden lg:flex justify-center">
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {aliados.map((aliado) => (
                <div
                  key={aliado.id}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden flex items-center justify-center">
                      <img
                        src={aliado.logo}
                        alt={`Logo de ${aliado.nombre}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Carrusel */}
          <div className="lg:hidden relative">
            {/* Botones de navegación */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Carrusel */}
            <div className="overflow-hidden mx-8" ref={emblaRef}>
              <div className="flex">
                {aliados.map((aliado) => (
                  <div
                    key={aliado.id}
                    className="flex-[0_0_50%] min-w-0 px-2 sm:px-3"
                  >
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex items-center justify-center">
                          <img
                            src={aliado.logo}
                            alt={`Logo de ${aliado.nombre}`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botón "Ver Todos" */}
        <div className="text-center">
          <button
            onClick={handleVerTodos}
            className="inline-flex items-center gap-2 bg-azul-aesi hover:bg-[#1e40af] text-white font-semibold px-8 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Ver Todos Nuestros Aliados
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AliadosSection;
