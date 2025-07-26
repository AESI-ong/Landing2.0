// Importa la sección visual de información de donación
import  InfoDonacionSection  from '../sections/donaciones/HeroSection'
import  TiposDonantes  from '../sections/donaciones/DonantesSection'
import  BeneficiosTributarios  from '../sections/donaciones/BeneficiosSection'
import {DonacionesSection} from '../sections/bienvenidos/DonacionesSection'
import  NivelesImpacto  from '../sections/donaciones/NivelesImpactoSection'
import  SeccionContacto  from '../sections/donaciones/ContactoSection'

export function Donaciones() {
	return (
		<main className="page">
			{/* Sección visual sin lógica */}
			<InfoDonacionSection />
			<TiposDonantes />
			<BeneficiosTributarios/>
			<DonacionesSection />
			<NivelesImpacto />
			<SeccionContacto />
		</main>
	)
}
