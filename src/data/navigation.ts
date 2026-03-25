export interface SectionLink {
    id: string;
    label: string;
}

export const sectionLinks: SectionLink[] = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mi' },
    { id: 'services', label: 'Servicios' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
];
