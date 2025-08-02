import { Bienvenidos } from "./components/pages/Bienvenidos";
import { Donaciones } from "./components/pages/Donaciones";
import { Footer } from "./components/common/navigation/Footer";
import { Navbar } from "./components/common/navigation/Navbar";
import { QueHacemos } from "./components/pages/QueHacemos";
import { QuienesSomos } from "./components/pages/QuienesSomos";
import { useState } from "react";

export function App() {
  const [currentPage, setCurrentPage] = useState("bienvenidos");

  const renderPage = () => {
    switch (currentPage) {
      case "bienvenidos":
        return <Bienvenidos onNavigate={setCurrentPage} />;
      case "quienes-somos":
        return <QuienesSomos onNavigate={setCurrentPage} />;
      case "que-hacemos":
        return <QueHacemos />;
      case "donaciones":
        return <Donaciones />;
      case "bolsa-laboral":
        window.open("https://bolsalaboralinclusiva.ongaesi.org", "_blank");
        return <Bienvenidos />; // or a placeholder
      // case 'mercado-inclusivo':
      // 	window.open('https://www.instagram.com/aesi_desarrollo/', '_blank')
      // 	return <Bienvenidos /> // or a placeholder
      default:
        return <Bienvenidos />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
