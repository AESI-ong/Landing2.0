import { GraduationCap, Handshake, Home, Users } from "lucide-react";

export function OurImpact() {
  const impactData = [
    {
      icon: Users,
      number: "50+",
      description: "Personas referidas a un trabajo",
      bgColor: "bg-rojo-aesi",
      textColor: "text-rojo-aesi",
    },
    {
      icon: Home,
      number: "20",
      description: "Familias ayudadas",
      bgColor: "bg-amarillo-aesi",
      textColor: "text-amarillo-aesi",
    },
    {
      icon: GraduationCap,
      number: "450",
      description: "Personas capacitadas",
      bgColor: "bg-azul-aesi",
      textColor: "text-azul-aesi",
    },
    {
      icon: Handshake,
      number: "25",
      description: "Colaboraciones y Aliados",
      bgColor: "bg-verde-aesi",
      textColor: "text-verde-aesi",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nuestro Impacto
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-rojo-aesi to-rojo-aesi/50 mx-auto mb-6 rounded-2xl"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada número representa vidas transformadas, sueños cumplidos y
            comunidades fortalecidas
          </p>
        </div>

        {/* Impact Cards Grid - 2x2 Layout */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-none lg:grid-cols-4">
          {impactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 md:p-6 lg:p-8 text-center group"
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    size={20}
                    className="text-white md:w-6 md:h-6 lg:w-7 lg:h-7"
                  />
                </div>

                {/* Number */}
                <div
                  className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${item.textColor} mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  {item.number}
                </div>

                {/* Description */}
                <p className="text-gray-600 font-medium text-xs md:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
