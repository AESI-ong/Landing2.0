import { HeroSection } from '../sections/bienvenidos/HeroSection'
import { ImpactoSection } from '../sections/bienvenidos/ImpactoSection'
import { ProgramasSection } from '../sections/bienvenidos/ProgramasSection'
import { PodcastSection } from '../sections/bienvenidos/PodcastSection'

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
			<PodcastSection />
		</main>
	)
} 