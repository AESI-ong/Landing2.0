import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Heart,
  Target,
  Zap,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

export const OurValues: React.FC = () => {
  const iconStyles: Record<string, string> = {
    solidaridad: "bg-rojo-aesi",
    responsabilidad: "bg-amarillo-aesi",
    compromiso: "bg-azul-aesi",
    adaptabilidad: "bg-verde-aesi",
  };

  const values = [
    {
      icon: Heart,
      title: "Solidaridad",
      subtitle: "Transformadora",
      description:
        "Creemos en la colaboración y el apoyo mutuo como pilares para construir un futuro más justo y sostenible para todos",
      styleKey: "solidaridad",
    },
    {
      icon: Brain,
      title: "Responsabilidad",
      subtitle: "Emocional",
      description:
        "Nos caracteriza la madurez e inteligencia emocional de quienes elegimos estar aquí por decisión propia",
      styleKey: "responsabilidad",
    },
    {
      icon: Target,
      title: "Compromiso",
      subtitle: "con los objetivos",
      description:
        "Cumplir nuestros objetivos nos permite que más sean vivos los beneficios de nuestras acciones",
      styleKey: "compromiso",
    },
    {
      icon: Zap,
      title: "Adaptabilidad",
      subtitle: "& Evolución",
      description:
        "Somos capaces de adaptarnos, aprender rápido y enfrentar nuevos desafíos con apertura e inteligencia",
      styleKey: "adaptabilidad",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  // Estados para habilitar/deshabilitar los botones de navegación
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Funciones para navegar
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Efecto para actualizar el estado de los botones cuando el slide cambia
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect(); // Llama una vez al inicio
  }, [emblaApi]);

  return (
    <div className="py-8 md:py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Valores
          </h2>
        </div>

        {/* Contenedor del Carrusel/Grid */}
        <div className="xl:hidden">
          {/* Contenedor solo para móvil/tablet que incluye botones */}
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {values.map((value, index) => {
                const iconBgClass = iconStyles[value.styleKey] || "bg-gray-200";

                return (
                  <div className="embla__slide p-3" key={index}>
                    {/* Reutilizamos el diseño de la tarjeta, pero ajustamos la sombra y el padding */}
                    <div className="bg-white rounded-xl shadow-md h-full p-8 flex flex-col text-center">
                      <div
                        className={`w-16 h-16 ${iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}
                      >
                        <value.icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-xl font-bold text-gray-800 opacity-90 mb-4">
                        {value.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Botones de Navegación del Carrusel */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 disabled:opacity-50 transition-opacity"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 disabled:opacity-50 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Grid de valores */}
        <div className="hidden xl:grid grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const iconBgClass = iconStyles[value.styleKey];
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Header con icono y color */}
                <div className={`px-6 py-8 text-center relative`}>
                  {/* Icono */}
                  <div
                    className={`w-16 h-16 ${iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <IconComponent size={28} className="text-white" />
                  </div>

                  {/* Título y subtítulo */}
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-800 opacity-90">
                    {value.subtitle}
                  </p>
                </div>

                {/* Contenido */}
                <div className="px-6 py-6">
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
