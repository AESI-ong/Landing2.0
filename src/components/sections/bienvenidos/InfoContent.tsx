import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import institutionality1 from "../../../assets/images/welcome/info-content/institutionality1.png";
import institutionality2 from "../../../assets/images/welcome/info-content/institutionality2.jpeg";
import institutionality3 from "../../../assets/images/welcome/info-content/institutionality3.jpeg";
import useEmblaCarousel from "embla-carousel-react";

export const InfoContent: React.FC = () => {
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

  const cardsData = [
    {
      id: 1,
      image: institutionality1,
      alt: "Entidades exoneradas del impuesto a la renta",
      title:
        "Entidades exoneradas del impuesto a la renta y receptora de donaciones",
    },
    {
      id: 2,
      image: institutionality2,
      alt: "IPREDA Receptora de donaciones",
      title:
        "IPREDA Receptora de donaciones de carácter asistencial o educacional provenientes del exterior",
    },
    {
      id: 3,
      image: institutionality3,
      alt: "ONGD Registro de Organizaciones No Gubernamentales",
      title: "ONGD Registro de Organizaciones No Gubernamentales de Desarrollo",
    },
  ];

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Asociación Economía, Sostenibilidad E Interseccionalidad - AESI
          </h2>
          <div className="text-lg md:text-xl text-gray-600 mb-4">
            <span className="font-semibold">RUC N° 20612143642</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos una asociación sin fines de lucro comprometida con la
            inclusión social y la sostenibilidad.
            <br />
            Trabajamos para transformar vidas y proteger el medio ambiente en
            Perú
          </p>
        </div>

        {/* Cards Section */}

        {/* Carrusel para móviles y tablets */}
        <div className="md:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {cardsData.map((card) => (
                <div className="embla__slide p-3" key={card.id}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-800">
                        {card.title.split(" ").map((word, index, array) => {
                          // Dividir el título en líneas más naturales
                          if (card.id === 1) {
                            return index < 3 ? (
                              word + " "
                            ) : index === 3 ? (
                              <>
                                <br key="br1" />
                                {word}{" "}
                              </>
                            ) : index === 6 ? (
                              <>
                                <br key="br2" />
                                {word}{" "}
                              </>
                            ) : (
                              word + " "
                            );
                          } else if (card.id === 2) {
                            return index < 4 ? (
                              word + " "
                            ) : index === 4 ? (
                              <>
                                <br key="br1" />
                                {word}{" "}
                              </>
                            ) : index === 7 ? (
                              <>
                                <br key="br2" />
                                {word}{" "}
                              </>
                            ) : (
                              word + " "
                            );
                          } else {
                            return index < 4 ? (
                              word + " "
                            ) : index === 4 ? (
                              <>
                                <br key="br1" />
                                {word}{" "}
                              </>
                            ) : index === 6 ? (
                              <>
                                <br key="br2" />
                                {word}{" "}
                              </>
                            ) : (
                              word + " "
                            );
                          }
                        })}
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
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {card.id === 1 && (
                    <>
                      Entidades exoneradas del
                      <br />
                      impuesto a la renta
                      <br />y receptora de donaciones
                    </>
                  )}
                  {card.id === 2 && (
                    <>
                      IPREDA Receptora de donaciones de
                      <br />
                      carácter asistencial o educacional
                      <br />
                      provenientes del exterior
                    </>
                  )}
                  {card.id === 3 && (
                    <>
                      ONGD Registro de Organizaciones
                      <br />
                      No Gubernamentales
                      <br />
                      de Desarrollo
                    </>
                  )}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
