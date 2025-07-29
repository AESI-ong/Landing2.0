import { Bienvenidos } from "./components/pages/bienvenidos";
import { Donaciones } from "./components/pages/donaciones";
import { Footer } from "./components/common/navigation/Footer";
import { Navbar } from "./components/common/navigation/Navbar";
import { QueHacemos } from "./components/pages/que-hacemos";
import { QuienesSomos } from "./components/pages/quienes-somos";
import { useState } from "react";

export function App() {
  const [currentPage, setCurrentPage] = useState("bienvenidos");

  const renderPage = () => {
    switch (currentPage) {
      case "bienvenidos":
        return <Bienvenidos />;
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
