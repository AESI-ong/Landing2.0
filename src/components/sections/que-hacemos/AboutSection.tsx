import { Building2, MessageCircle } from "lucide-react";

import type React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-800 to-red-500 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-xl flex items-center justify-center">
              <Building2 size={40} className="lg:w-12 lg:h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-4xl">
              ¿Quieres conocer más sobre nosotros?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl opacity-95">
              Estamos siempre dispuestos a compartir nuestra experiencia y
              explorar nuevas oportunidades de colaboración.
            </p>

            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
              <MessageCircle size={18} />
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
