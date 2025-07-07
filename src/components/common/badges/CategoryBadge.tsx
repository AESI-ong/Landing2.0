interface CategoryBadgeProps {
	category: 'salud' | 'desarrollo' | 'vivienda'
	children: React.ReactNode
	className?: string
}

const badgeStyles = {
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '0.5rem',
		padding: '0.5rem 1rem',
		borderRadius: '20px',
		fontSize: '0.875rem',
		fontWeight: '600',
		color: 'white',
		position: 'absolute' as const,
		top: '1rem',
		left: '1rem',
		zIndex: 10,
	},
	salud: {
		backgroundColor: 'var(--verde-aesi)',
	},
	desarrollo: {
		backgroundColor: 'var(--azul-aesi)',
	},
	vivienda: {
		backgroundColor: 'var(--amarillo-aesi)',
	},
}

export function CategoryBadge({ category, children, className = '' }: CategoryBadgeProps) {
	return (
		<span 
			className={className}
			style={{
				...badgeStyles.base,
				...badgeStyles[category],
			}}
		>
			{children}
		</span>
	)
} 