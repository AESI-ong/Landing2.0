import { useState } from 'react'
import './Carousel.css'

interface CarouselProps {
	children: React.ReactNode[]
	className?: string
	showArrows?: boolean
	showDots?: boolean
	itemsPerView?: number
}

export function Carousel({ 
	children, 
	className = '', 
	showArrows = true, 
	showDots = true,
	itemsPerView = 3 
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const totalSlides = Math.ceil(children.length / itemsPerView)

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
		<div className={`carousel ${className}`}>
			{showArrows && (
				<button 
					className="carousel__arrow carousel__arrow--prev"
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

			<div className="carousel__container">
				<div 
					className="carousel__track"
					style={{ 
						transform: `translateX(-${currentIndex * 100}%)`,
						width: `${totalSlides * 100}%`
					}}
				>
					{Array.from({ length: totalSlides }).map((_, slideIndex) => (
						<div 
							key={slideIndex} 
							className="carousel__slide"
							style={{ width: `${100 / totalSlides}%` }}
						>
							<div className="carousel__slide-content">
								{children.slice(
									slideIndex * itemsPerView, 
									(slideIndex + 1) * itemsPerView
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{showArrows && (
				<button 
					className="carousel__arrow carousel__arrow--next"
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
				<div className="carousel__indicators">
					{Array.from({ length: totalSlides }).map((_, index) => (
						<button
							key={index}
							className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Ir a diapositiva ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
} 