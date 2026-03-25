export interface SkillCategory {
    name: string;
    items: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        items: ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Astro', 'Responsive Design', 'Mobile-First']
    },
    {
        name: 'Backend y Datos',
        items: ['Node.js', 'C#', '.NET', 'SQL', 'Oracle', 'MongoDB', 'API REST']
    },
    {
        name: 'CMS y Plataformas',
        items: ['WordPress', 'WooCommerce', 'Strapi', 'cPanel']
    },
    {
        name: 'Herramientas',
        items: ['Git', 'CI/CD', 'Playwright', 'Postman', 'Figma', 'JIRA', 'Notion', 'Trello']
    },
    {
        name: 'Metodologias',
        items: ['SCRUM', 'XP', 'SEO', 'UML', 'Storytelling']
    }
];
