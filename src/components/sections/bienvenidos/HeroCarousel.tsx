import { useState } from 'react'
import './HeroCarousel.css'

interface HeroCarouselProps {
	children: React.ReactNode[]
	showArrows?: boolean
	showDots?: boolean
	autoPlay?: boolean
	autoPlayInterval?: number
}

export function HeroCarousel({ 
	children, 
	showArrows = true, 
	showDots = true,
	autoPlay = false,
	autoPlayInterval = 5000
}: HeroCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const totalSlides = children.length

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % totalSlides)
	}

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
	}

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<div className="hero-carousel">
			{showArrows && (
				<button 
					className="hero-carousel__arrow hero-carousel__arrow--prev"
					onClick={goToPrevious}
					aria-label="Anterior"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path 
							d="M15 18L9 12L15 6" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			)}

			<div className="hero-carousel__container">
				<div 
					className="hero-carousel__track"
					style={{ 
						transform: `translateX(-${currentIndex * 100}%)`
					}}
				>
					{children.map((slide, index) => (
						<div 
							key={index} 
							className="hero-carousel__slide"
						>
							{slide}
						</div>
					))}
				</div>
			</div>

			{showArrows && (
				<button 
					className="hero-carousel__arrow hero-carousel__arrow--next"
					onClick={goToNext}
					aria-label="Siguiente"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path 
							d="M9 18L15 12L9 6" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			)}

			{showDots && totalSlides > 1 && (
				<div className="hero-carousel__indicators">
					{Array.from({ length: totalSlides }).map((_, index) => (
						<button
							key={index}
							className={`hero-carousel__dot ${index === currentIndex ? 'hero-carousel__dot--active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Ir a diapositiva ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
} 