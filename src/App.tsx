import { useState } from 'react'
import { Navbar } from './components/common/navigation/Navbar'
import { Footer } from './components/common/navigation/Footer'
import { Bienvenidos } from './components/pages/bienvenidos'
import { QuienesSomos } from './components/pages/quienes-somos'
import { QueHacemos } from './components/pages/que-hacemos'
import { Donaciones } from './components/pages/donaciones'
import './index.css'

export function App() {
	const [currentPage, setCurrentPage] = useState('bienvenidos')

	const renderPage = () => {
		switch (currentPage) {
			case 'bienvenidos':
				return <Bienvenidos />
			case 'quienes-somos':
				return <QuienesSomos />
			case 'que-hacemos':
				return <QueHacemos />
			case 'donaciones':
				return <Donaciones />
			case 'bolsa-laboral':
				// This will eventually open a new page
				window.open('https://www.linkedin.com/company/aesi-bolsa-laboral-inclusiva/', '_blank')
				return <Bienvenidos /> // or a placeholder
			case 'mercado-inclusivo':
				// This will also eventually open a new page
				window.open('https://www.instagram.com/aesi_desarrollo/', '_blank')
				return <Bienvenidos /> // or a placeholder
			default:
				return <Bienvenidos />
		}
	}

	return (
		<div className="app">
			<Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
			{renderPage()}
			<Footer />
		</div>
	)
}

export default App
