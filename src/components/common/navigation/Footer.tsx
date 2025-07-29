import { Heart, Mail, Phone } from "lucide-react";

import { Logo } from "../Logo";

export function Footer() {
  return (
    <footer className="bg-white font-sans">
      {/* Top colorful bar */}
      <div className="h-2 bg-[linear-gradient(to_right,var(--color-rojo-aesi),var(--color-amarillo-aesi),var(--color-azul-aesi),var(--color-verde-aesi))]"></div>

      <div className="max-w-7xl mx-auto px-8 pt-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-600 mb-2">
              © {new Date().getFullYear()} - Todos los derechos reservados AESI
            </p>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Calidad de vida y sostenibilidad para todos
            </p>

            {/* Social links */}
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-azul-aesi hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-azul-aesi hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-azul-aesi hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div> */}
          </div>

          {/* Ubicación */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              <span className="text-rojo-aesi">|</span> Ubicación
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Perú</p>
            </div>
          </div>

          {/* Horarios */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              <span className="text-amarillo-aesi">|</span> Horarios
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p>Lun - Vie: 9:00 - 18:00</p>
              <p>Sab: 9:00 - 14:00</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              <span className="text-azul-aesi">|</span> Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-azul-aesi rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-600">
                  director.ejecutivo@aesiong.org
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-azul-aesi rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-600">+51 967 972 857</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Centrado */}
        {/* <div className="text-center mb-12">
          <button className="bg-gradient-to-r from-azul-aesi to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3">
            <span>Únete a Nuestra Misión</span>
            <Heart size={20} className="text-white" />
          </button>
        </div> */}
      </div>
    </footer>
  );
}
