export interface ProgramData {
	id: string
	title: string
	description: string
	category: 'salud' | 'desarrollo' | 'vivienda'
	categoryLabel: string
	imageUrl: string
	imageAlt: string
	statisticOverlay: string
	metrics: Array<{
		icon: string // Lucide React icon name
		value: string
		label: string
	}>
}

export const programsData: ProgramData[] = [
	{
		id: 'salud-para-todos',
		title: 'Salud para Todos',
		description: 'Brigadas médicas y centros de salud comunitarios que brindan atención médica gratuita y preventiva.',
		category: 'salud',
		categoryLabel: 'Salud',
		imageUrl: '/src/assets/images/programs/salud-para-todos.jpg',
		imageAlt: 'Programa de Salud para Todos',
		statisticOverlay: '800 familias',
		metrics: [
			{
				icon: 'people',
				value: '800',
				label: 'familias'
			},
			{
				icon: 'building',
				value: '5',
				label: 'centros de salud'
			}
		]
	},
	{
		id: 'emprendimiento-social',
		title: 'Emprendimiento Social',
		description: 'Capacitación y microcréditos para empoderar a las familias a través del emprendimiento sostenible.',
		category: 'desarrollo',
		categoryLabel: 'Desarrollo',
		imageUrl: '/src/assets/images/programs/emprendimiento-social.jpg',
		imageAlt: 'Programa de Emprendimiento Social',
		statisticOverlay: '300 emprendedores',
		metrics: [
			{
				icon: 'people',
				value: '300',
				label: 'emprendedores'
			},
			{
				icon: 'business',
				value: '150',
				label: 'negocios creados'
			}
		]
	},
	{
		id: 'vivienda-digna',
		title: 'Vivienda Digna',
		description: 'Construcción y mejoramiento de viviendas para familias en situación de vulnerabilidad.',
		category: 'vivienda',
		categoryLabel: 'Vivienda',
		imageUrl: '/src/assets/images/programs/vivienda-digna.jpg',
		imageAlt: 'Programa de Vivienda Digna',
		statisticOverlay: '200 familias',
		metrics: [
			{
				icon: 'people',
				value: '200',
				label: 'familias'
			},
			{
				icon: 'house',
				value: '85',
				label: 'casas construidas'
			}
		]
	}
] 