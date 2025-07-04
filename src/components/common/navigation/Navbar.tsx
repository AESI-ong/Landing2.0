

interface NavbarProps {
	currentPage: string
	onNavigate: (page: string) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
	const navItems = [
		{ key: 'bienvenidos', label: 'Bienvenidos' },
		{ key: 'quienes-somos', label: 'Quienes Somos?' },
		{ key: 'programas', label: 'Programas' },
		{ key: 'aliados', label: 'Aliados' },
		{ key: 'contacto', label: 'Contacto' },
		{ key: 'donaciones', label: 'Donaciones' },
	]

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-brand">
					<h2>AESI</h2>
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
			</div>
		</nav>
	)
} 