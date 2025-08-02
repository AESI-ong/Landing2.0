import { AliadosSection } from "../sections/bienvenidos/AliadosSection";
import { CTA } from "../sections/quienes-somos/CTA";
import { DonacionesSection } from "../sections/bienvenidos/DonacionesSection";
import { HeroSection } from "../sections/bienvenidos/HeroSection";
import { InfoContent } from "../sections/bienvenidos/InfoContent";
import { LiderarSection } from "../sections/bienvenidos/LiderarSection";
import { LideresSection } from "../sections/bienvenidos/LideresSection";
import { OurImpact } from "../sections/bienvenidos/OurImpact";
import { PodcastSection } from "../sections/bienvenidos/PodcastSection";
import { ProgramasSection } from "../sections/bienvenidos/ProgramasSection";

interface QuienesSomosProps {
  onNavigate?: (page: string) => void;
}

export function Bienvenidos({ onNavigate }: QuienesSomosProps) {
  return (
    <main>
      <HeroSection onNavigate={onNavigate} />
      <InfoContent />
      <OurImpact />
      <ProgramasSection />
      <DonacionesSection />
      <LideresSection />
      <LiderarSection />
      <PodcastSection />
      <AliadosSection />
      <CTA onNavigate={onNavigate} />
    </main>
  );
}
