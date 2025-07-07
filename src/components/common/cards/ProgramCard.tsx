import { CategoryBadge } from '../badges/CategoryBadge'
import { GradientButton } from '../buttons/GradientButton'
import './ProgramCard.css'

interface Metric {
	icon: string // Path to SVG icon
	value: string
	label: string
}

interface ProgramCardProps {
	title: string
	description: string
	category: 'salud' | 'desarrollo' | 'vivienda'
	categoryLabel: string
	imageUrl: string
	imageAlt: string
	statisticOverlay: string
	metrics: Metric[]
	onViewDetails?: () => void
	className?: string
}

export function ProgramCard({
	title,
	description,
	category,
	categoryLabel,
	imageUrl,
	imageAlt,
	statisticOverlay,
	metrics,
	onViewDetails,
	className = ''
}: ProgramCardProps) {
	return (
		<div className={`program-card ${className}`}>
			<div className="program-card__image-container">
				<CategoryBadge category={category}>
					{/* TODO: Add category icon SVG here */}
					<span className="category-badge__icon">
						<img 
							src={`/src/assets/icons/category/${category}.svg`} 
							alt="" 
							width="16" 
							height="16"
						/>
					</span>
					{categoryLabel}
				</CategoryBadge>
				
				<div className="program-card__image">
					<img src={imageUrl} alt={imageAlt} />
					{/* TODO: Add main program icon/illustration here */}
					<div className="program-card__image-placeholder">
						<img 
							src={`/src/assets/icons/programs/${category}-main.svg`} 
							alt="" 
							className="program-card__main-icon"
						/>
					</div>
				</div>
				
				<div className="program-card__statistic">
					{statisticOverlay}
				</div>
			</div>
			
			<div className="program-card__content">
				<h3 className="program-card__title">{title}</h3>
				<p className="program-card__description">{description}</p>
				
				<div className="program-card__metrics">
					{metrics.map((metric, index) => (
						<div key={index} className="program-card__metric">
							<img 
								src={metric.icon} 
								alt="" 
								className="program-card__metric-icon"
								width="16" 
								height="16"
							/>
							<span className="program-card__metric-value">{metric.value}</span>
							<span className="program-card__metric-label">{metric.label}</span>
						</div>
					))}
				</div>
				
				<button 
					className="program-card__details-btn"
					onClick={onViewDetails}
				>
					Ver Detalles
					<svg 
						className="program-card__details-arrow" 
						width="16" 
						height="16" 
						viewBox="0 0 16 16"
						fill="none"
					>
						<path 
							d="M6 3L11 8L6 13" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
} 