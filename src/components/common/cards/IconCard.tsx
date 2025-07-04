interface IconCardProps {
	title: string
	description: string
	icon: React.ReactNode
	className?: string
}

export function IconCard({ 
	title, 
	description, 
	icon, 
	className = '' 
}: IconCardProps) {
	return (
		<div className={`icon-card ${className}`}>
			<div className="icon-card-icon">
				{icon}
			</div>
			<div className="icon-card-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
} 