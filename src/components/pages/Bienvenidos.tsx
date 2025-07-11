import { HeroSection } from '../sections/bienvenidos/HeroSection'
import { ImpactoSection } from '../sections/bienvenidos/ImpactoSection'
import { ProgramasSection } from '../sections/bienvenidos/ProgramasSection'
import {DonacionesSection} from '../sections/bienvenidos/DonacionesSection'
import {LideresSection} from '../sections/bienvenidos/LideresSection'
import { PodcastSection } from '../sections/bienvenidos/PodcastSection'
import {AliadosSection} from '../sections/bienvenidos/AliadosSection'
import {RealizarDonacionSection} from '../sections/bienvenidos/RealizarDonacionSection'
import ContactSection from '../sections/bienvenidos/ContactSection'

export function Bienvenidos() {
	const handleHeroCta = (action: string) => {
		console.log('Hero CTA clicked:', action)
		// TODO: Implement navigation based on action
		switch (action) {
			case 'about':
				// Navigate to "Quiénes somos" section
				break
			case 'volunteer':
				// Navigate to volunteer section
				break
			default:
				break
		}
	}

	return (
		<main className="page">
			<HeroSection onCtaClick={handleHeroCta} />
			<ImpactoSection />
			<ProgramasSection />
			<DonacionesSection />
			<LideresSection />
			<PodcastSection />
			<AliadosSection />
			<RealizarDonacionSection />
			<ContactSection />
			{/* Puedes agregar más secciones aquí según sea necesario */}
			{/* Ejemplo: <OtraSeccion /> */}
			{/* Aquí puedes agregar más secciones según sea necesario */}
		</main>
	)
} 