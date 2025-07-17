import { HeroSection as QueHacemosHero } from '../sections/que-hacemos/HeroSection'
import ProgramaSection from '../sections/que-hacemos/ProgramaSection'
import TalleresSection from '../sections/que-hacemos/TalleresSection'
import ProyectosSection from '../sections/que-hacemos/ProyectosSection'
import AcademySection from '../sections/que-hacemos/AcademiaSection'
import AboutSection from '../sections/que-hacemos/AboutSection'

export function QueHacemos() {
	return (
		<main className="page">
			<QueHacemosHero />
			<ProgramaSection />
			<TalleresSection />
			<ProyectosSection />
			<AcademySection />
			<AboutSection />
		</main>
	)
} 