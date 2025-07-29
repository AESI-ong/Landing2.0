import { CTA } from "../sections/quienes-somos/CTA";
import { HeroSection } from "../sections/quienes-somos/HeroSection";
import { InfoContent } from "../sections/quienes-somos/InfoContent";
import { OurAlliances } from "../sections/quienes-somos/OurAlliances";
import { OurInstitutionality } from "../sections/quienes-somos/OurInstitutionality";
import { OurManagementTeam } from "../sections/quienes-somos/OurManagementTeam";
import { OurValues } from "../sections/quienes-somos/OurValues";

interface QuienesSomosProps {
  onNavigate?: (page: string) => void;
}

export function QuienesSomos({ onNavigate }: QuienesSomosProps) {
  return (
    <main>
      <HeroSection />
      <InfoContent />
      <OurValues />
      <OurManagementTeam />
      <OurInstitutionality />
      <OurAlliances />
      <CTA onNavigate={onNavigate} />
    </main>
  );
}
