import { ArrowLeft } from 'lucide-react'
import heroBackground from '../../../assets/images/hero/hero-communities.jpg'
import './HeroSection.css'

export function HeroSection() {
	const metrics = [
		{ number: '6', label: 'Programas\nActivos' },
		{ number: '3,200+', label: 'Beneficiarios' },
		{ number: '15', label: 'Regiones' },
		{ number: '$3.3M', label: 'Inversión\nTotal' },
	]

	return (
		<section className="que-hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
			<div className="que-hero-content">
				<button className="back-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					<ArrowLeft size={20} />
					Volver al inicio
				</button>

				<h1 className="que-hero-title">¿Qué hacemos?</h1>
				<p className="que-hero-subtitle">
					Descubre todas las iniciativas que estamos desarrollando para transformar vidas y fortalecer comunidades en todo el Perú.
				</p>

				<div className="que-hero-metrics">
					{metrics.map((item, index) => (
						<div key={index} className="metric-card">
							<span className="metric-number">{item.number}</span>
							{item.label.split('\n').map((line, idx) => (
								<span key={idx} className="metric-label">
									{line}
								</span>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	)
} 