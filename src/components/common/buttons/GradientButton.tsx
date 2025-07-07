interface GradientButtonProps {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	variant?: 'primary' | 'secondary'
}

const buttonStyles = {
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '0.5rem',
		padding: '1rem 2rem',
		border: 'none',
		borderRadius: '50px',
		color: 'white',
		fontWeight: '600',
		fontSize: '1rem',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
	},
	primary: {
		background: 'linear-gradient(135deg, var(--rojo-aesi) 0%, #a01c22 100%)',
		boxShadow: '0 4px 15px rgba(205, 32, 39, 0.3)',
	},
	secondary: {
		background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
		boxShadow: '0 4px 15px rgba(107, 114, 128, 0.3)',
	},
}

const arrowStyles = {
	transition: 'transform 0.3s ease',
}

export function GradientButton({ 
	children, 
	onClick, 
	className = '', 
	variant = 'primary' 
}: GradientButtonProps) {
	return (
		<button
			className={className}
			style={{
				...buttonStyles.base,
				...buttonStyles[variant],
			}}
			onClick={onClick}
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = 'translateY(-2px)'
				e.currentTarget.style.boxShadow = variant === 'primary' 
					? '0 6px 20px rgba(205, 32, 39, 0.4)'
					: '0 6px 20px rgba(107, 114, 128, 0.4)'
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = 'translateY(0)'
				e.currentTarget.style.boxShadow = variant === 'primary'
					? '0 4px 15px rgba(205, 32, 39, 0.3)'
					: '0 4px 15px rgba(107, 114, 128, 0.3)'
			}}
		>
			{children}
			<svg 
				style={arrowStyles}
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
	)
} 