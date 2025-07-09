interface NavbarProps {
	currentPage: string
	onNavigate: (page: string) => void
}

import { Logo } from '../Logo'

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
	const navItems = [
		{ key: 'bienvenidos', label: 'Bienvenidos' },
		{ key: 'quienes-somos', label: '¿Quiénes somos?' },
		{ key: 'que-hacemos', label: '¿Qué hacemos?' },
		{ key: 'bolsa-laboral', label: 'Bolsa Laboral Inclusiva' },
		{ key: 'mercado-inclusivo', label: 'Mercado Inclusivo' },
	]

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-brand">
					<Logo className="navbar-logo" />
				</div>
				<ul className="navbar-nav">
					{navItems.map((item) => (
						<li key={item.key}>
							<button
								className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
								onClick={() => onNavigate(item.key)}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
				<div className="navbar-cta">
					<button
						className={`donaciones-btn ${currentPage === 'donaciones' ? 'active' : ''}`}
						onClick={() => onNavigate('donaciones')}
					>
						Donaciones
						<span className="heart-icon">♥</span>
					</button>
				</div>
			</div>
		</nav>
	)
} 