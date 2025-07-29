import { HeroSection } from "../sections/quienes-somos/HeroSection";
import { InfoContent } from "../sections/quienes-somos/InfoContent";
import { OurInstitutionality } from "../sections/quienes-somos/OurInstitutionality";
import { OurManagementTeam } from "../sections/quienes-somos/OurManagementTeam";
import { OurValues } from "../sections/quienes-somos/OurValues";

export function QuienesSomos() {
  return (
    <main>
      <HeroSection />
      <InfoContent />
      <OurValues />
      <OurManagementTeam />
      <OurInstitutionality />
    </main>
  );
}
