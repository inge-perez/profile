export interface ExperienceItem {
    title: string;
    description: string;
    period: string;
    tags: string[];
}

export const experienceItems: ExperienceItem[] = [
    {
        title: 'Tech Lead · Frontend Engineer · Consultor Independiente',
        description: 'Liderazgo técnico y ejecución frontend para clientes directos, agencias y startups. Arquitectura de sitios, integración de APIs, optimización de rendimiento y entrega de productos web modernos desde cero o sobre stacks existentes.',
        period: 'Jun 2023 - Actualidad',
        tags: ['React', 'SCRUM', 'API REST', 'Git', 'WordPress', 'Node.js', 'Astro', 'Tailwind CSS', 'Azure']
    },
    {
        title: 'QA Engineer · Automation Lead',
        description: 'Diseño e implementación de estrategias de pruebas automatizadas para productos SaaS en entornos de entrega continua. Cobertura E2E, pruebas de integración y garantía de calidad con foco en confiabilidad y velocidad de release.',
        period: 'Nov 2021 - Actualidad',
        tags: ['QA Automation', 'API REST', 'Playwright', 'TypeScript']
    },
    {
        title: 'Software Engineer · Frontend · eBanking',
        description: 'Desarrollo de interfaces para sistemas de banca digital y análisis funcional en productos SaaS. Construcción de componentes con React, integración de APIs y trabajo directo con equipos de producto para traducir requerimientos en experiencias funcionales.',
        period: 'Oct 2021 - Actualidad',
        tags: ['React', 'SCRUM', 'API REST', 'TypeScript', 'Git']
    },
    {
        title: 'Software Engineer · Fullstack',
        description: 'Desarrollo fullstack con .NET y SQL para plataformas web empresariales. Arquitectura MVC, modelado de bases de datos relacionales, integración de módulos y entrega de funcionalidades bajo ciclos ágiles.',
        period: 'Apr 2021 - Oct 2021',
        tags: ['.NET', 'SCRUM', 'SQL', 'MVC', 'Git', 'Jest', 'QA']
    },
    {
        title: 'Líder de Equipo · Product Owner · eBanking',
        description: 'Liderazgo de equipos multidisciplinarios en proyectos de banca digital. Coordinación entre negocio y tecnología, gestión de backlog, análisis funcional, diseño de flujos UX y acompañamiento de entrega en proyectos críticos de alto impacto.',
        period: 'Aug 2016 - Apr 2021',
        tags: ['JIRA', 'SCRUM', 'HTML', 'CSS', 'Trello', 'XP', 'Azure', 'Storytelling', 'UML']
    },
    {
        title: 'Líder de Desarrollo · Team Lead Fullstack',
        description: 'Liderazgo técnico en proyectos retail y tecnología. Desarrollo fullstack con .NET, gestión de equipos de desarrollo, diseño de arquitectura, control de calidad y entrega de plataformas web de alta demanda bajo estándares estrictos de operación.',
        period: 'Jan 2012 - Aug 2016',
        tags: ['.NET', 'SQL', 'JIRA', 'jQuery', 'JavaScript', 'XP', 'Web Server', 'SOAP', 'UML']
    }
];
