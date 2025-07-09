import { Mic } from 'lucide-react'
import './PodcastSection.css'

export function PodcastSection() {
	return (
		<section className="podcast-section">
			<div className="container">
				<div className="podcast-section__header">
					<div className="podcast-section__title-row">
						<div className="podcast-section__icon">
							<Mic size={32} />
						</div>
						<h2>Voces del Cambio</h2>
					</div>
					<div className="podcast-section__underline" />
					<p>
						Nuestro nuevo podcast donde exploramos historias inspiradoras y conversaciones profundas sobre el impacto social.
						¡Próximamente disponible!
					</p>
				</div>

				<div className="podcast-section__player">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/keYJjblAXU4?si=4oNMWeZSHziC0v16&amp;controls=0"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</section>
	)
} 