import heroEducation from '../assets/images/hero/hero-education.jpg'
import heroCommunities from '../assets/images/hero/hero-communities.jpg'
import heroTransformation from '../assets/images/hero/hero-transformation.jpg'

export interface HeroSlide {
	id: string
	title: string
	highlightedText: string
	backgroundImage: string
	highlightColor: string
	statistic: {
		number: string
		label: string
	}
	ctaText: string
	ctaAction: string
}

export const heroSlidesData: HeroSlide[] = [
	{
		id: 'educacion',
		title: 'Educación que Cambia',
		highlightedText: 'el Futuro',
		backgroundImage: heroEducation,
		highlightColor: '#2C6DB6', // Azul AESI
		statistic: {
			number: '200',
			label: 'trabajos encontrados'
		},
		ctaText: 'Conoce más de Nosotros',
		ctaAction: 'about'
	},
	{
		id: 'comunidades',
		title: 'Comunidades',
		highlightedText: 'Empoderadas',
		backgroundImage: heroCommunities,
		highlightColor: '#55B948', // Verde AESI
		statistic: {
			number: '25',
			label: 'Comunidades Activas'
		},
		ctaText: 'Únete Como Voluntario',
		ctaAction: 'volunteer'
	},
	{
		id: 'transformacion',
		title: 'Juntos Transformamos',
		highlightedText: 'Vidas',
		backgroundImage: heroTransformation,
		highlightColor: '#CD2027', // Rojo AESI
		statistic: {
			number: '500+',
			label: 'Familias ayudadas'
		},
		ctaText: 'Descubre Qué Hacemos',
		ctaAction: 'programs'
	}
] 