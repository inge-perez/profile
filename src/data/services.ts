export interface ServiceItem {
    title: string;
    description: string;
    tags: string[];
}

export const serviceItems: ServiceItem[] = [
    {
        title: 'Desarrollo Web a la Medida',
        description: 'Sitios corporativos, landings y plataformas diseñadas para convertir, rendir y escalar. Desde cero o sobre tu stack actual, con criterio técnico y foco en el negocio.',
        tags: ['Astro', 'React', 'Tailwind CSS', 'TypeScript']
    },
    {
        title: 'E-commerce y Plataformas LMS',
        description: 'Tiendas online y plataformas educativas con estructura técnica sólida, pagos reales integrados y arquitectura preparada para crecer con tu operación.',
        tags: ['WooCommerce', 'WordPress', 'Integraciones', 'Pasarelas de pago']
    },
    {
        title: 'Frontend y Diseño UX/UI',
        description: 'Interfaces limpias, escalables y de carga rápida, construidas con sistemas de componentes y buenas prácticas de UX. Velocidad, accesibilidad y experiencia que retiene usuarios.',
        tags: ['UI Systems', 'Responsive', 'Mobile-First', 'Figma']
    },
    {
        title: 'Integraciones y SEO Técnico',
        description: 'Conexiones con APIs externas, automatizaciones de proceso y optimización técnica para que tu sitio sea encontrado, funcione sin fricción y convierta mejor.',
        tags: ['API REST', 'SEO Técnico', 'Analytics', 'Performance']
    },
    {
        title: 'Consultoría y Liderazgo Técnico',
        description: 'Acompañamiento técnico para construir, redefinir o escalar tu producto digital. Arquitectura, decisiones tecnológicas, liderazgo de equipo y entrega sin excusas.',
        tags: ['Arquitectura', 'Node.js', '.NET', 'Tech Leadership']
    }
];
