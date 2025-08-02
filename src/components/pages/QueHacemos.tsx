import AcademySection from "../sections/que-hacemos/AcademiaSection";
import { CTA } from "../sections/quienes-somos/CTA";
import ProgramaSection from "../sections/que-hacemos/ProgramaSection";
import ProyectosSection from "../sections/que-hacemos/ProyectosSection";
import { HeroSection as QueHacemosHero } from "../sections/que-hacemos/HeroSection";
import TalleresSection from "../sections/que-hacemos/TalleresSection";

interface QuienesSomosProps {
  onNavigate?: (page: string) => void;
}

export function QueHacemos({ onNavigate }: QuienesSomosProps) {
  return (
    <main>
      <QueHacemosHero />
      <ProgramaSection />
      <TalleresSection />
      <ProyectosSection />
      <AcademySection />
      <CTA onNavigate={onNavigate} />
    </main>
  );
}
