export interface Experience {
  title: string;
  tags?: string[],
  description?: string;
  pubDate: Date
  [key: string]: any;
}
export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    description: 'Frontend | analista funcional | WEB UI [SaaS] [eBanking]',
    pubDate: new Date('Oct 01 2021'),
    tags: ['React', 'SCRUM', 'API REST', 'Typescript', 'Git']
  },
  {
    title: 'QA Analyst',
    description: 'Quality assurance | Testing [Technology] [SaaS]',
    pubDate: new Date('Nov 01 2021'),
    tags: ['QA Automation', 'API REST', 'Playwright', 'Typescript']
  },
  {
    title: 'Software Engineer',
    description: 'Fullstack | WEB UI | Databases [Technology]',
    pubDate: new Date('Apr 01 2021'),
    tags: ['.NET', 'SCRUM', 'SQL', 'MVC', 'Git', 'Jest', 'QA']
  },
  {
    title: 'Líder de equipo',
    description: 'Consultor web | Analista funcional | Product Owner  [eBanking]',
    pubDate: new Date('Aug 15 2016'),
    tags: ['JIRA', 'SCRUM', 'HTML', 'CSS', 'Trello', 'XP', 'Azure', 'Storytelling', 'UML']
  },
  {
    title: 'Líder de Desarrollo',
    description: 'Fullstack | Team Lead | QA [retail] [Technology]',
    pubDate: new Date('Jan 10 2012'),
    tags: ['.NET', 'SQL', 'JIRA', 'Jquery', 'Javascript', 'XP', 'Web Server', 'SOAP', 'UML']
  }
]
