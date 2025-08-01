import { ExternalLink, Heart } from "lucide-react";

import BottomImage from "../../../assets/images/quienes-somos/bottom-image.png";
import React from "react";

interface CTAProps {
  onNavigate?: (page: string) => void;
}

export const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  const handleDonationClick = () => {
    if (onNavigate) {
      onNavigate("donaciones");
    } else {
      // Fallback: scroll to top and reload to donaciones
      window.location.hash = "donaciones";
      window.location.reload();
    }
  };

  return (
    <div className="bg-white font-sans">
      {/* Hero Image with CTA Button */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
          <img
            src={BottomImage}
            alt="Manos ayudando - Ayúdanos a ayudar"
            className="w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0"></div>

          {/* Content Container with max-width */}
          <div className="absolute inset-0 flex items-end justify-center md:items-center md:justify-start text-center md:text-left">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
              {/* CTA Button */}
              <div className="pb-8 md:pb-0 md:pt-12">
                <button
                  onClick={handleDonationClick}
                  className="bg-white text-rojo-aesi px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 font-semibold cursor-pointer"
                >
                  <Heart size={20} className="text-rojo-aesi" />
                  <span>Ayúdanos a Ayudar</span>
                  <ExternalLink size={16} className="text-rojo-aesi" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contáctanos
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              ¿Tienes preguntas o quieres ser parte del cambio?
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
