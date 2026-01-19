import { getRepositoryDetails } from '../../utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: 'Cata Duque',
		description: 'Consultora y Mentora en RR.HH.',
		demoLink: 'https://cataduque.com.co/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor']
	},
	{
		name: 'Tanner Banco Digital',
		description: 'Sitio público banco Tanner Chile',
		demoLink: 'https://www.tbd.cl/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Astro JS', 'React', 'Tailwind CSS']
	},
	{
		name: 'Gloria Torres Pediatría',
		description: 'Pediatra en Pereira, Colombia',
		demoLink: 'https://gloriatorrespediatra.com/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor']
	},
	{
		name: 'Tanner Servicios Financieros',
		description: 'Sitio público Tanner Chile',
		demoLink: 'https://tanner.cl/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Wordpress', 'NodeJS', 'Tailwind CSS']
	},
	{
		name: 'NatalPower',
		description: 'Programa de entrenamientos y hábitos saludables',
		demoLink: 'https://natalpower.com/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor']
	},
	{
		name: 'Rutas Risaralda',
		description: 'Centro de enseñanza automotriz',
		demoLink: 'https://cearutas.com/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor']
	},
	{
		name: 'Maju Solutions',
		description: 'Empresa soluciones digitales',
		demoLink: 'https://majusolutions.co/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor']
	},
	{
		name: 'Hablar Sana',
		description: 'Psicología Online',
		demoLink: 'https://hablarsana.co/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor', 'fluentbooking']
	},
	{
		name: 'HR Boost Academy',
		description: 'Escuela Online Recursos Humanos',
		demoLink: 'https://hrboost.academy/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['wordpress', 'elementor', 'SmartFilters']
	}
];
