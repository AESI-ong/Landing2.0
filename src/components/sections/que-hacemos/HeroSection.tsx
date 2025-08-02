import { ArrowLeft } from "lucide-react";
import heroBackground from "../../../assets/images/hero/hero-communities.jpg";

export function HeroSection() {
  const metrics = [
    { number: "6", label: "Programas\nActivos" },
    { number: "3,200+", label: "Beneficiarios" },
    { number: "15", label: "Regiones" },
    { number: "$3.3M", label: "Inversión\nTotal" },
  ];

  return (
    <section
      className="relative h-screen min-h-[600px] bg-cover bg-center flex items-end overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
          <button
            className="inline-flex items-center gap-2 text-white bg-transparent border-none text-base cursor-pointer mb-4 hover:underline transition-all duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
            ¿Qué hacemos?
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mb-8 lg:mb-12 leading-relaxed">
            Descubre todas las iniciativas que estamos desarrollando para
            transformar vidas y fortalecer comunidades en todo el Perú.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-azul-aesi p-6 lg:p-8 text-center rounded-lg"
              >
                <span className="block text-3xl lg:text-4xl font-bold mb-2">
                  {item.number}
                </span>
                {item.label.split("\n").map((line, idx) => (
                  <span key={idx} className="block text-base lg:text-lg">
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
