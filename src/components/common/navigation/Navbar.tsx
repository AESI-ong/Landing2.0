interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

import { Menu, X } from "lucide-react";

import { Logo } from "../Logo";
import { useState } from "react";

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { key: "bienvenidos", label: "Bienvenidos", colorClass: "nav-azul" },
    { key: "quienes-somos", label: "¿Quiénes somos?", colorClass: "nav-azul" },
    { key: "que-hacemos", label: "¿Qué hacemos?", colorClass: "nav-azul" },
    {
      key: "bolsa-laboral",
      label: "Bolsa Laboral Inclusiva",
      colorClass: "nav-verde",
    },
    {
      key: "mercado-inclusivo",
      label: "Mercado Inclusivo",
      colorClass: "nav-amarillo",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false); // Cerrar menú en mobile al navegar
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Logo className="navbar-logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-nav desktop-nav">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                className={`nav-link nav-pill ${item.colorClass} ${
                  currentPage === item.key ? "active" : ""
                }`}
                onClick={() => handleNavigation(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation - Donaciones Button */}
        <div className="navbar-cta">
          <button
            className={`donaciones-btn nav-pill ${
              currentPage === "donaciones" ? "active" : ""
            }`}
            onClick={() => handleNavigation("donaciones")}
          >
            <span className="donaciones-text">Donaciones</span>
            <span className="heart-icon">♥</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                className={`mobile-nav-link ${
                  currentPage === item.key ? "active" : ""
                }`}
                onClick={() => handleNavigation(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
