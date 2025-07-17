// Importa la sección visual de información de donación
import  InfoDonacionSection  from '../sections/donaciones/HeroSection'
import  TiposDonantes  from '../sections/donaciones/DonantesSection'

export function Donaciones() {
	return (
		<main className="page">
			{/* Sección visual sin lógica */}
			<InfoDonacionSection />
			<TiposDonantes />
		</main>
	)
}
