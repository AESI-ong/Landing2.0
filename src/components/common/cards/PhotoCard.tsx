interface PhotoCardProps {
	title: string
	description: string
	imageUrl: string
	imageAlt: string
	className?: string
}

export function PhotoCard({ 
	title, 
	description, 
	imageUrl, 
	imageAlt, 
	className = '' 
}: PhotoCardProps) {
	return (
		<div className={`photo-card ${className}`}>
			<div className="photo-card-image">
				<img src={imageUrl} alt={imageAlt} />
			</div>
			<div className="photo-card-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
} 