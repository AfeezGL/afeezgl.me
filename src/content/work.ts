// Wording follows resumes/Afeez Lawal - Resume - Full-Stack.md. House rules for this copy:
// - Sphera: "one of the founding engineers"; "helped move Sphera from prototype to v2".
// - Numbers: only 20,000+ matches, 1,000+ MAU, and SDK deploy time roughly halved.
// - The SDK's queueing/batching/retry detail appears once on the site (the SDK project).

export type Role = {
    company: string;
    title: string;
    dates: string;
    location: string;
    points: string[];
};

export const experience: Role[] = [
    {
        company: 'SomaEdge LLC',
        title: 'Software Engineer',
        dates: 'Feb 2025 – Present',
        location: 'Contract · Remote (Dallas, TX)',
        points: [
            'Built the guest ordering app for Diné in React, TypeScript and Tailwind CSS, with QR seat entry and real-time chat with an AI waiter over WebSockets.',
            "Built the kitchen display system and the internal admin console for tenants, staff, token usage and audit logs, with TanStack Query, Microsoft Entra ID sign-in and an API client typed from the backend's OpenAPI schema.",
            'Worked with the backend team on guest session flow, multi-tenant data isolation and the API contracts between the frontends and the backend.',
        ],
    },
    {
        company: 'Sphera Gaming Studios',
        title: 'Founding Engineer',
        dates: 'Dec 2024 – Present',
        location: 'Lagos, Nigeria',
        points: [
            'One of the founding engineers of Sphera, a mobile-first PWA football manager game. Players have completed 20,000+ matches across friendly, league and cup competitions.',
            'Work across the React and TypeScript frontend and the NestJS and Express backend and its REST APIs.',
            'Helped move Sphera from prototype to v2, which brought a new match engine, a redesigned UI and smoother gameplay.',
        ],
    },
    {
        company: 'Integraflow',
        title: 'Senior Software Engineer',
        dates: 'May 2023 – Dec 2024',
        location: 'Lagos, Nigeria',
        points: [
            'Led development of the survey management dashboard in React, Next.js, Zustand and Apollo GraphQL, running on a Django backend.',
            'Built the Integraflow Web SDK in Preact and TypeScript and published it on npm.',
            'Set up the CI/CD pipeline for internal and public SDK builds, which roughly halved SDK deploy time and automated publishing to npm.',
        ],
    },
    {
        company: 'Kophy Technologies',
        title: 'Software Engineer',
        dates: 'Apr 2022 – May 2023',
        location: 'Lagos, Nigeria',
        points: [
            'Built Spektre Task, a bilingual English and German project management app for a door manufacturer, with Django and JavaScript, including its REST APIs, authentication and employee work-hours system.',
            'Built GraphQL APIs with Django and Graphene for a comments feature on Omnidots, a vibration and air quality monitoring platform, in a team of 7 engineers.',
        ],
    },
    {
        company: 'Draftansy Football',
        title: 'Software Engineer',
        dates: 'Jan 2021 – Mar 2022',
        location: 'Lagos, Nigeria',
        points: [
            'Built and maintained a fantasy football web app with React, Node.js and Express, used by 1,000+ monthly active users. Integrated payment gateways and real-time match data feeds.',
        ],
    },
];

export type ProjectLink = { href: string; label: string };

export type Project = {
    name: string;
    context: string;
    summary: string;
    stack: string[];
    links: ProjectLink[];
};

export const projects: Project[] = [
    {
        name: 'Diné',
        context: 'SomaEdge · 2025 – Present',
        summary:
            'Diné is an AI waiter and seat-ordering product for restaurants and events. Guests scan a QR code at their seat, chat with the AI waiter and order from their phone. I built the guest ordering app, the kitchen display, the admin console, and the Diné and SomaEdge marketing sites. The chat reconnects on its own and queues messages, so orders still go through on weak venue Wi-Fi.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'WebSockets', 'Next.js'],
        links: [{ href: 'https://getdine.ai', label: 'Live site' }],
    },
    {
        name: 'Sphera',
        context: 'Sphera Gaming Studios · 2024 – Present',
        summary:
            "Sphera is a football manager game that runs as a mobile-first PWA. I'm one of the founding engineers. I work across the React and TypeScript frontend and the NestJS and Express backend, helped move Sphera from prototype to v2 (new match engine, redesigned UI), and built the push notifications for match updates. Players have completed more than 20,000 matches.",
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Express', 'PWA'],
        links: [{ href: 'https://app.sphera.gg', label: 'Live app' }],
    },
    {
        name: 'Integraflow dashboard and survey studio',
        context: 'Integraflow · 2023 – 2024',
        summary:
            "Led development of the survey management dashboard for Integraflow, an open-source in-product survey platform. Built the studio's live preview panel, which showed a survey at different device sizes while it was being edited.",
        stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Apollo GraphQL'],
        links: [
            {
                href: 'https://github.com/IntegraflowHQ/integraflow/tree/main/apps/frontend',
                label: 'Source code',
            },
        ],
    },
    {
        name: 'Integraflow Web SDK',
        context: 'Integraflow · 2023 – 2024',
        summary:
            "Built the SDK that showed surveys inside customers' products, first as @integraflow/web and then rewritten as integraflow-js with Rollup, and published both on npm. It queues and batches responses and retries failed requests, so responses aren't lost on flaky connections.",
        stack: ['Preact', 'TypeScript', 'Tailwind CSS', 'Rollup'],
        links: [
            { href: 'https://github.com/IntegraflowHQ/integraflow', label: 'Source code' },
            { href: 'https://www.npmjs.com/package/integraflow-js', label: 'npm package' },
        ],
    },
];

export type EarlierProject = {
    name: string;
    summary: string;
    stack: string[];
    links: ProjectLink[];
};

export const earlierProjects: EarlierProject[] = [
    {
        name: 'QuickStream',
        summary: 'A live-streaming web app built on WebRTC.',
        stack: ['React', 'Agora SDK', 'Firebase'],
        links: [
            { href: 'https://quick-stream.web.app', label: 'Live site' },
            { href: 'https://github.com/AfeezGL/quickstream', label: 'Source code' },
        ],
    },
    {
        name: 'Amet',
        summary: 'A concept cinema app.',
        stack: ['React', 'Redux', 'Firebase'],
        links: [
            { href: 'https://ametmovie.web.app/', label: 'Live site' },
            { href: 'https://github.com/AfeezGL/ametmovie', label: 'Source code' },
        ],
    },
    {
        name: 'BucketList',
        summary: 'An app for documenting your targets and achievements.',
        stack: ['React', 'Firebase'],
        links: [
            { href: 'https://bucketlist-24fcf.web.app/', label: 'Live site' },
            { href: 'https://github.com/AfeezGL/bucketlist-firebase', label: 'Source code' },
        ],
    },
];
