import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
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
    name: 'Tanner Banco',
    description: 'Sitio público banco Tanner Chile',
    demoLink: 'https://probt.tanner.cl/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Astro JS', 'React', 'Tailwind CSS']
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
    name: 'Triage',
    description: 'Tecnología en sector salud',
    demoLink: 'https://taller-peso-saludable.triage.com.co/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['wordpress', 'elementor']
  }
]
