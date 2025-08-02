import { ArrowRight } from "lucide-react";
import React from "react";
import heroEducation from "../../../assets/images/hero/hero-education.jpg";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate("quienes-somos");
    } else {
      console.log("Navigating to Quienes Somos");
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroEducation}
          alt="AESI - Calidad de vida y sostenibilidad para todos"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              CALIDAD DE VIDA <br />
              <span className="text-azul-aesi">
                Y SOSTENIBILIDAD PARA TODOS
              </span>
            </h1>

            {/* CTA Button */}
            <button
              onClick={handleCtaClick}
              className="bg-azul-aesi hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3 group cursor-pointer"
            >
              <span>Conoce más de Nosotros</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
