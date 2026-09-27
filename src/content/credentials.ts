// From resumes/Afeez Lawal - Resume - Full-Stack.md. Don't add skills the resume doesn't list
// (no PHP, Laravel, AWS, DigitalOcean, Celery, PostgreSQL, FastAPI or MongoDB).

export const skills = [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
    {
        group: 'Frontend',
        items: ['React', 'Next.js', 'Preact', 'Vue.js', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Apollo Client', 'PWAs'],
    },
    {
        group: 'Backend',
        items: ['Node.js', 'NestJS', 'Express', 'Django', 'GraphQL', 'REST APIs', 'WebSockets'],
    },
    {
        group: 'Tooling and mobile',
        items: ['Docker', 'Git', 'Linux', 'Vitest', 'React Native'],
    },
] as const;

// Certifications newest first, then the degree last.
export const credentials = [
    { date: 'Aug 2026', name: 'IBM Build RAG Applications: Get Started Certificate' },
    { date: 'Oct 2025', name: 'IBM Develop Generative AI Applications: Get Started Certification' },
    { date: 'Jul 2023', name: 'B.Tech, Urban and Regional Planning', detail: 'Federal University of Technology, Akure' },
] as const;
