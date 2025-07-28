import "./HeroSection.css";

import React from "react";
import { Users } from "lucide-react";
import hero from "../../../assets/images/quienes-somos/hero.png";

export const HeroSection: React.FC = () => {
  return (
    <div className="quienes-somos-info">
      <div
        className="quienes-somos-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="quienes-somos-content">
          <h1 className="quienes-somos-title">¿Quiénes somos?</h1>

          <div className="quienes-somos-description-box">
            <p className="quienes-somos-description">
              Conoce nuestra historia, misión y los valores que nos impulsan a
              crear un mundo más justo y equitativo para todos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
