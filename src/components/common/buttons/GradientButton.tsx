import React from 'react'

function hexToRgba(hex: string, alpha: number) {
	let c = hex.replace('#', '')
	if (c.length === 3) {
		c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]
	}
	const bigint = parseInt(c, 16)
	const r = (bigint >> 16) & 255
	const g = (bigint >> 8) & 255
	const b = bigint & 255
	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

interface GradientButtonProps {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	variant?: 'primary' | 'secondary'
	color?: string // custom brand color for background and shadow
	style?: React.CSSProperties
}

export function GradientButton({
	children,
	onClick,
	className = '',
	variant = 'primary',
	color,
	style = {}
}: GradientButtonProps) {
	const baseStyles = {
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
		transition: 'all 0.3s ease'
	} as React.CSSProperties

	const variantStyles = {
		primary: {
			background: 'linear-gradient(135deg, var(--rojo-aesi) 0%, #a01c22 100%)',
			boxShadow: '0 4px 15px rgba(205, 32, 39, 0.3)'
		},
		secondary: {
			background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
			boxShadow: '0 4px 15px rgba(107, 114, 128, 0.3)'
		}
	} as const

	let customStyles: React.CSSProperties = {}

	if (color) {
		customStyles = {
			background: color,
			boxShadow: `0 4px 15px ${hexToRgba(color, 0.3)}`
		}
	}

	const combinedStyles: React.CSSProperties = {
		...baseStyles,
		...(!color ? variantStyles[variant] : {}),
		...customStyles,
		...style
	}

	return (
		<button
			className={className}
			style={combinedStyles}
			onClick={onClick}
		>
			{children}
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				style={{ transition: 'transform 0.3s ease' }}
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