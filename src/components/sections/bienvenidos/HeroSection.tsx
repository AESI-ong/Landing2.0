import { HeroCarousel } from './HeroCarousel'
import { GradientButton } from '../../common/buttons/GradientButton'
import { heroSlidesData, HeroSlide } from '../../../data/heroData'
import './HeroSection.css'

interface HeroSectionProps {
	slides?: HeroSlide[]
	onCtaClick?: (action: string) => void
}

export function HeroSection({ slides = heroSlidesData, onCtaClick }: HeroSectionProps) {
	const handleCtaClick = (action: string) => {
		if (onCtaClick) {
			onCtaClick(action)
		} else {
			console.log('Hero CTA clicked:', action)
		}
	}

	return (
		<section className="hero-section">
			<HeroCarousel showArrows={true} showDots={true}>
				{slides.map((slide) => (
					<div
						key={slide.id}
						className="hero-slide"
						style={{
							backgroundImage: `url(${slide.backgroundImage})`
						}}
					>
						<div className="hero-content">
							<div className="hero-statistic">
								<span
									className="hero-statistic__dot"
									style={{ backgroundColor: slide.highlightColor }}
								></span>
								<span className="hero-statistic__number">{slide.statistic.number}</span>
								<span className="hero-statistic__label">{slide.statistic.label}</span>
							</div>

							<h1 className="hero-title">
								{slide.title}
								<span
									className="hero-title__highlight"
									style={{ color: slide.highlightColor }}
								>
									{slide.highlightedText}
								</span>
							</h1>

							<div className="hero-cta">
								<GradientButton
									onClick={() => handleCtaClick(slide.ctaAction)}
									color={slide.highlightColor}
								>
									{slide.ctaText}
								</GradientButton>
							</div>
						</div>
					</div>
				))}
			</HeroCarousel>
		</section>
	)
} 