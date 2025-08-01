import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import institutionality1 from "../../../assets/images/quienes-somos/institutionality1.png";
import institutionality2 from "../../../assets/images/quienes-somos/institutionality2.jpeg";
import institutionality3 from "../../../assets/images/quienes-somos/institutionality3.jpeg";
import institutionality4 from "../../../assets/images/quienes-somos/institutionality4.png";
import institutionality5 from "../../../assets/images/quienes-somos/institutionality5.png";
import useEmblaCarousel from "embla-carousel-react";

export const OurInstitutionality: React.FC = () => {
  const institutions = [
    {
      id: 1,
      title:
        "Entidades exoneradas del impuesto a la renta y perceptora de donaciones",
      image: institutionality1,
    },
    {
      id: 2,
      title:
        "IPREDA Receptora de donaciones de carácter asistencial o educacional provenientes del exterior",
      image: institutionality2,
    },
    {
      id: 3,
      title: "ONGD Registro de Organizaciones No Gubernamentales de Desarrollo",
      image: institutionality3,
    },
    {
      id: 4,
      title: 'Pertenecemos a la red de "Dirección del voluntariado"',
      image: institutionality4,
    },
    {
      id: 5,
      title: 'Pertenecemos a la red de "Organizaciones juveniles SENAJU"',
      image: institutionality5,
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
        {/* Título y subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestra Institucionalidad
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Somos una organización sin fines de lucro registrada en Perú,
            certificada como perceptora de donaciones y habilitada por SUNAT y
            APCI
          </p>
        </div>

        {/* Carrusel para móviles y tablets */}
        <div className="lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {institutions.map((institution) => (
                <div className="embla__slide p-3" key={institution.id}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                    {/* Imagen con aspect ratio 16:9 */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={institution.image}
                        alt={institution.title}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>

                    {/* Título */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 leading-tight text-center">
                        {institution.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* Grid para desktop */}
        <div className="hidden lg:block">
          <div className="space-y-8">
            {/* Primera fila: 3 tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutions.slice(0, 3).map((institution) => (
                <div
                  key={institution.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Imagen con aspect ratio 16:9 */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={institution.image}
                      alt={institution.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Título */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight text-center">
                      {institution.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Segunda fila: 2 tarjetas centradas */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {institutions.slice(3, 5).map((institution) => (
                  <div
                    key={institution.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* Imagen con aspect ratio 16:9 */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={institution.image}
                        alt={institution.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Título */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 leading-tight text-center">
                        {institution.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
