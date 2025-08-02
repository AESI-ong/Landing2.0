import heroBackground from "../../../assets/images/hero/hero-communities.jpg";

export function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full text-white text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 lg:mb-12 animate-fade-in-up">
            ¿Qué hacemos?
          </h1>

          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="bg-azul-aesi/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-2xl animate-fade-in-up animation-delay-300">
              <p className="text-md sm:text-lg lg:text-xl leading-relaxed font-medium">
                Descubre todas las iniciativas que estamos desarrollando para
                transformar vidas y fortalecer comunidades en todo el Perú
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
