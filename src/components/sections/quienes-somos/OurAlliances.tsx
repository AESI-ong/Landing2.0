import { Heart } from "lucide-react";
import React from "react";
import allyCorporative1 from "../../../assets/images/quienes-somos/ally-corporative1.jpg";
import allyCorporative2 from "../../../assets/images/quienes-somos/ally-corporative2.jpg";
import allyCorporative3 from "../../../assets/images/quienes-somos/ally-corporative3.jpg";
import allyCorporative4 from "../../../assets/images/quienes-somos/ally-corporative4.jpg";
import allyEducational1 from "../../../assets/images/quienes-somos/ally-educational1.jpg";
import allyEducational2 from "../../../assets/images/quienes-somos/ally-educational2.jpg";
import allyEducational3 from "../../../assets/images/quienes-somos/ally-educational3.jpg";
import allyONG1 from "../../../assets/images/quienes-somos/ally-ong1.jpg";
import allyONG2 from "../../../assets/images/quienes-somos/ally-ong2.jpg";
import allyONG3 from "../../../assets/images/quienes-somos/ally-ong3.jpg";
import allyONG4 from "../../../assets/images/quienes-somos/ally-ong4.jpg";
import allyState1 from "../../../assets/images/quienes-somos/ally-state1.jpg";
import allyState2 from "../../../assets/images/quienes-somos/ally-state2.jpg";
import allyState3 from "../../../assets/images/quienes-somos/ally-state3.jpg";
import allyState4 from "../../../assets/images/quienes-somos/ally-state4.jpg";

const allianceCategories = [
  {
    title: "Entidades del Estado",
    subtitle: "5 organizaciones en esta categoría",
    color: "rojo-aesi",
    bgColor: "bg-rojo-aesi",
    items: [
      {
        id: 1,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyState1,
        category: "Estado",
      },
      {
        id: 2,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyState2,
        category: "Estado",
      },
      {
        id: 3,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyState3,
        category: "Estado",
      },
      {
        id: 4,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyState4,
        category: "Estado",
      },
    ],
  },
  {
    title: "Sector Corporativo",
    subtitle: "5 organizaciones en esta categoría",
    color: "amarillo-aesi",
    bgColor: "bg-amarillo-aesi",
    items: [
      {
        id: 1,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyCorporative1,
        category: "Corporativo",
      },
      {
        id: 2,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyCorporative2,
        category: "Corporativo",
      },
      {
        id: 3,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyCorporative3,
        category: "Corporativo",
      },
      {
        id: 4,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyCorporative4,
        category: "Corporativo",
      },
    ],
  },
  {
    title: "Instituciones Educativas",
    subtitle: "3 organizaciones en esta categoría",
    color: "verde-aesi",
    bgColor: "bg-verde-aesi",
    items: [
      {
        id: 1,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyEducational1,
        category: "Educativo",
      },
      {
        id: 2,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyEducational2,
        category: "Educativo",
      },
      {
        id: 3,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyEducational3,
        category: "Educativo",
      },
    ],
  },
  {
    title: "ONGs y Sociedad Civil",
    subtitle: "5 organizaciones en esta categoría",
    color: "azul-aesi",
    bgColor: "bg-azul-aesi",
    items: [
      {
        id: 1,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyONG1,
        category: "Organización",
      },
      {
        id: 2,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyONG2,
        category: "Organización",
      },
      {
        id: 3,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyONG3,
        category: "Organización",
      },
      {
        id: 4,
        name: "CONADIS",
        description:
          "Consejo Nacional para la Integración de la Persona con Discapacidad",
        image: allyONG4,
        category: "Organización",
      },
    ],
  },
];

export const OurAlliances: React.FC = () => {
  return (
    <div className="py-8 md:py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestras Colaboraciones y Alianzas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-verde-aesi to-azul-aesi mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a las organizaciones que trabajan junto a nosotros para crear
            un impacto social duradero y transformar el Perú
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {allianceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center space-x-4">
                <div className={`w-1 h-12 ${category.bgColor}`}></div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{category.subtitle}</p>
                </div>
              </div>

              {/* Alliance Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      <h4 className="font-bold text-gray-800 text-lg">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Category Badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${category.bgColor}`}
                        >
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Heart size={12} className="mr-1" />
                          <span>Educación</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
