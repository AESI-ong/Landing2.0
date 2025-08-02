import { Mic } from "lucide-react";

export function PodcastSection() {
  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-azul-aesi rounded-full flex items-center justify-center shadow-lg">
              <Mic size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              AESI "El Podcast"
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestro nuevo podcast donde compartimos historias, herramientas
            <br className="hidden md:block" />y reflexiones para construir
            organizaciones y comunidades más justas, diversas y sostenibles
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Video Wrapper for Responsive */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/keYJjblAXU4?si=4oNMWeZSHziC0v16&amp;controls=0"
                title="AESI El Podcast - YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Info */}
          {/* <div className="text-center mt-8">
            <p className="text-gray-500 text-base md:text-lg">
              Explora conversaciones profundas sobre el impacto social y
              descubre cómo podemos transformar nuestras comunidades juntos
            </p>
          </div> */}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-azul-aesi text-white px-6 py-3 rounded-full font-medium shadow-lg">
            <Mic size={16} />
            <span>¡Próximamente más episodios!</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
