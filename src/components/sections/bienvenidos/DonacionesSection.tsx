import {
  Building,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  Package,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

export function DonacionesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  const metodosDonacion = [
    {
      icon: CreditCard,
      title: "Donación Monetaria",
      description:
        "Tu donación monetaria apoya nuestros programas y genera un impacto positivo",
      bgColor: "bg-rojo-aesi",
      textColor: "text-rojo-aesi",
    },
    {
      icon: Package,
      title: "Donación en Especie",
      description:
        "Dona bienes, materiales, equipos o servicios que sean útiles para nuestros programas",
      bgColor: "bg-amarillo-aesi",
      textColor: "text-amarillo-aesi",
    },
    {
      icon: FileText,
      title: "Donación Corporativa",
      description:
        "Tu empresa puede colaborar con voluntariado para que tus colaboradores participen activamente",
      bgColor: "bg-azul-aesi",
      textColor: "text-azul-aesi",
    },
    {
      icon: Building,
      title: "Apadrinamiento de Proyectos",
      description:
        "Tu empresa puede apadrinar un programa específico de manera integral",
      bgColor: "bg-verde-aesi",
      textColor: "text-verde-aesi",
    },
  ];

  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Métodos de Donación
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-amarillo-aesi to-amarillo-aesi/50 mx-auto mb-6 rounded-2xl"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Múltiples formas seguras y convenientes para realizar tu donación
          </p>
        </div>

        {/* Donation Methods */}

        {/* Carrusel para móviles y tablets */}
        <div className="lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {metodosDonacion.map((metodo, index) => {
                const Icon = metodo.icon;
                return (
                  <div className="embla__slide p-3" key={index}>
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group h-full">
                      {/* Icon Container */}
                      <div
                        className={`w-16 h-16 ${metodo.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold ${metodo.textColor} mb-4`}
                      >
                        {metodo.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {metodo.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 disabled:opacity-50 transition-opacity hover:bg-gray-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 disabled:opacity-50 transition-opacity hover:bg-gray-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Grid para desktop */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-8">
          {metodosDonacion.map((metodo, index) => {
            const Icon = metodo.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 text-center group"
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 ${metodo.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${metodo.textColor} mb-4`}>
                  {metodo.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metodo.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DonacionesSection;
