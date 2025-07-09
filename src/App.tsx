import { useState } from 'react'
import { Navbar } from './components/common/navigation/Navbar'
import { Footer } from './components/common/navigation/Footer'
import { Bienvenidos } from './components/pages/Bienvenidos'
import { QuienesSomos } from './components/pages/QuienesSomos'
import { Programas } from './components/pages/Programas'
import { Aliados } from './components/pages/Aliados'
import { Contacto } from './components/pages/Contacto'
import { Donaciones } from './components/pages/Donaciones'
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
				return <Programas />
			case 'bolsa-laboral':
				return <Aliados />
			case 'mercado-inclusivo':
				return <Contacto />
			case 'donaciones':
				return <Donaciones />
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
