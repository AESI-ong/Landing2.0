import { Carousel } from '../../common/carousel/Carousel'
import { ProgramCard } from '../../common/cards/ProgramCard'
import { GradientButton } from '../../common/buttons/GradientButton'
import { programsData } from '../../../data/programsData'
import './ProgramasSection.css'

export function ProgramasSection() {
	const handleViewDetails = (programId: string) => {
		console.log('View details for program:', programId)
		// TODO: Implement navigation to program details
	}

	const handleViewAllPrograms = () => {
		console.log('Navigate to all programs page')
		// TODO: Implement navigation to programs page
	}

	return (
		<section className="programas-section">
			<div className="container">
				<div className="programas-section__header">
					<h2>Nuestros Programas</h2>
					<div className="programas-section__subrayado"></div>
					<p>Descubre todas las iniciativas que estamos desarrollando para transformar vidas y comunidades</p>
				</div>
				
				<div className="programas-section__carousel">
					<Carousel 
						showArrows={true}
						showDots={true}
						itemsPerView={3}
						className="programs-carousel"
					>
						{programsData.map((program) => (
							<ProgramCard
								key={program.id}
								title={program.title}
								description={program.description}
								category={program.category}
								categoryLabel={program.categoryLabel}
								imageUrl={program.imageUrl}
								imageAlt={program.imageAlt}
								statisticOverlay={program.statisticOverlay}
								metrics={program.metrics}
								onViewDetails={() => handleViewDetails(program.id)}
							/>
						))}
					</Carousel>
				</div>

				<div className="programas-section__cta">
					<GradientButton onClick={handleViewAllPrograms}>
						Ver Todos los Programas
					</GradientButton>
				</div>
			</div>
		</section>
	)
} 