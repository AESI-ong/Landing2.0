import { CategoryBadge } from '../badges/CategoryBadge'
import { GradientButton } from '../buttons/GradientButton'
import { Heart, Users, Briefcase, Home, TrendingUp, Building } from 'lucide-react'
import './ProgramCard.css'

interface Metric {
	icon: string // Icon name for Lucide React
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

const categoryIcons = {
	salud: Heart,
	desarrollo: TrendingUp,
	vivienda: Home
}

const metricIcons = {
	people: Users,
	business: Briefcase,
	house: Home,
	users: Users,
	building: Building
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
	const CategoryIcon = categoryIcons[category]
	
	return (
		<div className={`program-card ${className}`}>
			<div className="program-card__image-container">
				<CategoryBadge category={category}>
					<span className="category-badge__icon">
						<CategoryIcon size={16} />
					</span>
					{categoryLabel}
				</CategoryBadge>
				
				<div className="program-card__image">
					<img src={imageUrl} alt={imageAlt} />
				</div>
				
				<div className="program-card__statistic">
					{statisticOverlay}
				</div>
			</div>
			
			<div className="program-card__content">
				<h3 className="program-card__title">{title}</h3>
				<p className="program-card__description">{description}</p>
				
				<div className="program-card__metrics">
					{metrics.map((metric, index) => {
						const MetricIcon = metricIcons[metric.icon as keyof typeof metricIcons] || Users
						return (
							<div key={index} className="program-card__metric">
								<MetricIcon 
									size={16} 
									className="program-card__metric-icon"
								/>
								<span className="program-card__metric-value">{metric.value}</span>
								<span className="program-card__metric-label">{metric.label}</span>
							</div>
						)
					})}
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