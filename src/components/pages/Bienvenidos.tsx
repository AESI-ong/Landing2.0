import { ImpactoSection } from '../sections/bienvenidos/ImpactoSection'
import { ProgramasSection } from '../sections/bienvenidos/ProgramasSection'

export function Bienvenidos() {
	return (
		<main className="page">
			<section className="hero-section">
				<div className="container">
					<h1>Bienvenidos a AESI</h1>
					<p>Placeholder para contenido de bienvenida</p>
				</div>
			</section>
			<ImpactoSection />
			<ProgramasSection />
		</main>
	)
} 