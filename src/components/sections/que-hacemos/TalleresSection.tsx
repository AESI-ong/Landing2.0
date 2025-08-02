import { ArrowRight, Building2, GraduationCap, Users } from "lucide-react";

import type React from "react";

interface TallerData {
  id: string;
  title: string;
  description: string;
  stats: {
    people: string;
    schools: string;
  };
  isActive: boolean;
}

const tallersData: TallerData[] = [
  {
    id: "1",
    title: "Taller - Prevención de Acoso laboral y Hostigamiento Sexual",
    description:
      "Construimos y equipamos escuelas en comunidades rurales garantizando educación de calidad para todos los niños.",
    stats: {
      people: "1,200 niños",
      schools: "12 escuelas construidas",
    },
    isActive: true,
  },

  {
    id: "2",
    title: "Taller - Prevención de Adicciones",
    description:
      "Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.",
    stats: {
      people: "800 familias",
      schools: "12 escuelas construidas",
    },
    isActive: true,
  },

  {
    id: "3",
    title: "Orientación Vocacional",
    description:
      "Capacitación y  microcréditos para empoderar a las familias a través del emprendimiento sostenible.",
    stats: {
      people: "300 emprendedores",
      schools: "12 escuelas construidas",
    },
    isActive: true,
  },
];

const TalleresSection: React.FC = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Talleres Corporativos
          </h2>
          <div className="w-32 lg:w-48 h-1.5 bg-gradient-to-r from-verde-aesi to-verde-aesi/50 mx-auto rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tallersData.map((taller) => (
            <div
              key={taller.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="relative bg-gradient-to-b from-gray-600 via-gray-400 to-gray-200 h-48 lg:h-52 flex flex-col">
                <div className="flex justify-between items-start p-4 relative z-10">
                  {taller.isActive && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      Activo
                    </span>
                  )}
                  <span className="bg-verde-aesi text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <GraduationCap size={14} />
                    Talleres
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center px-4 pb-4">
                  <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                    <Building2 size={24} className="text-gray-700" />
                  </div>
                </div>

                <div className="flex justify-between px-4 pb-4 relative z-10">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <Users size={14} />
                    <span>{taller.stats.people}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <Building2 size={14} />
                    <span>{taller.stats.schools}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {taller.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {taller.description}
                </p>

                <button className="bg-verde-aesi hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 w-full hover:scale-[1.02] active:scale-[0.98]">
                  Ver Detalles
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalleresSection;
