import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import team1 from "../../../assets/images/welcome/our-team/team1.png";
import team2 from "../../../assets/images/welcome/our-team/team2.png";
import team3 from "../../../assets/images/welcome/our-team/team3.jpeg";
import useEmblaCarousel from "embla-carousel-react";

export function LideresSection() {
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

  const lideres = [
    {
      id: 1,
      nombre: "Juan Juárez Dioses",
      cargo: "Administrador de Empresas & Especialista Social",
      imagen: team1,
      bgColor: "bg-azul-aesi",
    },
    {
      id: 2,
      nombre: "Susana Sandoval",
      cargo: "Psicóloga & Magister en Salud Pública",
      imagen: team2,
      bgColor: "bg-azul-aesi",
    },
    {
      id: 3,
      nombre: "Julio Pinto",
      cargo: "Abogado Especialista Social",
      imagen: team3,
      bgColor: "bg-azul-aesi",
    },
  ];

  return (
    <div className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nuestro Equipo de Proyectos
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-azul-aesi to-azul-aesi/50 mx-auto mb-6 rounded-2xl"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un equipo multidisciplinario comprometido con diseñar, implementar y
            escalar iniciativas que transforman vidas.
            <br />
            Desde la planificación hasta la ejecución en territorio, trabajamos
            con enfoque social,
            <br />
            rigor técnico y convicción por un país más justo.
          </p>
        </div>

        {/* Team Section */}

        {/* Carrusel para móviles y tablets */}
        <div className="lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {lideres.map((lider) => (
                <div className="embla__slide p-3" key={lider.id}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center group">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <img
                          src={lider.imagen}
                          alt={lider.nombre}
                          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {lider.nombre}
                    </h3>

                    {/* Position Badge */}
                    <div className="mb-6">
                      <span
                        className={`inline-block ${lider.bgColor} text-white px-4 py-2 rounded-full text-sm font-medium`}
                      >
                        {lider.cargo}
                      </span>
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
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          {lideres.map((lider) => (
            <div
              key={lider.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 text-center group"
            >
              {/* Profile Image */}
              <div className="mb-6">
                <div className="relative inline-block">
                  <img
                    src={lider.imagen}
                    alt={lider.nombre}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {lider.nombre}
              </h3>

              {/* Position Badge */}
              <div className="mb-6">
                <span
                  className={`inline-block ${lider.bgColor} text-white px-4 py-2 rounded-full text-sm font-medium leading-relaxed`}
                >
                  {lider.cargo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LideresSection;
