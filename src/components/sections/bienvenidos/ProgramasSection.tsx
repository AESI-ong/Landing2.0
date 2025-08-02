import { ArrowRight, ChevronLeft, ChevronRight, Users } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import program1 from "../../../assets/images/welcome/our-programs/program1.jpg";
import program2 from "../../../assets/images/welcome/our-programs/program2.jpg";
import program3 from "../../../assets/images/welcome/our-programs/program3.jpg";
import useEmblaCarousel from "embla-carousel-react";

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  statisticOverlay: string;
  bgColor: string;
}

export function ProgramasSection() {
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

  const programsData: Program[] = [
    {
      id: "empleabilidad",
      title: "Empleabilidad Inclusiva",
      description:
        "Promovemos el acceso laboral con igualdad de oportunidades para personas en situación vulnerable",
      category: "Empleabilidad",
      categoryLabel: "Empleabilidad",
      image: program1,
      imageAlt: "Programa de Empleabilidad Inclusiva",
      statisticOverlay: "Personas en situación de vulnerabilidad",
      bgColor: "bg-verde-aesi",
    },
    {
      id: "emprendimiento",
      title: "Emprendimiento Inclusivo",
      description:
        "Formamos y fortalecemos emprendimientos liderados por personas de poblaciones vulneradas",
      category: "Emprendimiento",
      categoryLabel: "Emprendimiento",
      image: program2,
      imageAlt: "Programa de Emprendimiento Inclusivo",
      statisticOverlay: "Personas en situación de vulnerabilidad",
      bgColor: "bg-azul-aesi",
    },
    {
      id: "orientacion",
      title: "Orientación Vocacional",
      description:
        "Acompañamos a jóvenes a descubrir su vocación y diseñar un camino profesional con propósito",
      category: "Orientación Vocacional",
      categoryLabel: "Orientación Vocacional",
      image: program3,
      imageAlt: "Programa de Orientación Vocacional",
      statisticOverlay: "Personas en situación de vulnerabilidad",
      bgColor: "bg-amarillo-aesi",
    },
  ];

  const handleViewDetails = (programId: string) => {
    console.log("View details for program:", programId);
    // TODO: Implement navigation to program details
  };

  const handleViewAllPrograms = () => {
    console.log("Navigate to all programs page");
    // TODO: Implement navigation to programs page
  };

  return (
    <div className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nuestros Programas Gratuitos
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-verde-aesi to-verde-aesi/50 mx-auto mb-6 rounded-2xl"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conoce los programas gratuitos que están generando cambios reales en
            personas
            <br />y comunidades en situación de vulnerabilidad
          </p>
        </div>

        {/* Programs Section */}

        {/* Carrusel para móviles y tablets */}
        <div className="lg:hidden mb-12">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {programsData.map((program) => (
                <div className="embla__slide p-3" key={program.id}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    {/* Image with Category Badge */}
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div
                        className={`absolute top-4 left-4 ${program.bgColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {program.categoryLabel}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {program.description}
                      </p>

                      {/* Statistic Overlay */}
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Users size={16} className="mr-2" />
                        <span>{program.statisticOverlay}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => handleViewDetails(program.id)}
            >
              {/* Image with Category Badge */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 ${program.bgColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {program.categoryLabel}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Statistic Overlay */}
                <div className="flex items-center text-gray-500 text-sm">
                  <Users size={16} className="mr-2" />
                  <span>{program.statisticOverlay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllPrograms}
            className="bg-rojo-aesi hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3 group"
          >
            <span>¿Qué hacemos?</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
