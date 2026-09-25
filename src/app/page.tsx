import Profile from '@/components/Profile';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';

const projects: ProjectProps[] = [
    {
        name: 'Sphera app',
        tech: 'React, TypeScript, TailwindCSS, NestJS',
        description:
            'Sphera is a social-first virtual football manager game where bold fans become bold managers. In Sphera, you own your club, call the shots, and face off against real people in nonstop competition.',
        liveUrl: 'https://app.sphera.gg',
    },
    {
        name: 'Integraflow website',
        tech: 'NextJS, TypeScript, TailwindCSS',
        description:
            'Integraflow is a cutting-edge platform that specialises in in-product micro-surveys for SaaS and digital products.',
        sourceCode: 'https://github.com/IntegraflowHQ/website',
    },
    {
        name: 'Integraflow web SDK',
        tech: 'Preact, TypeScript, TailwindCSS, WebPack, Rollup, Babel',
        sourceCode: 'https://github.com/IntegraflowHQ/integraflow',
        liveUrl: 'https://www.npmjs.com/package/integraflow-js',
        liveLabel: 'npm',
    },
    {
        name: 'Integraflow dashboard',
        tech: 'React, TypeScript, TailwindCSS, Apollo',
        sourceCode: 'https://github.com/IntegraflowHQ/integraflow/tree/main/apps/frontend',
    },
    {
        name: 'Integraflow backend',
        tech: 'Python, Django, Celery, Graphene, PostgreSQL, Docker',
        sourceCode: 'https://github.com/IntegraflowHQ/integraflow/tree/main/backend',
    },
    {
        name: 'Amet',
        tech: 'React, Redux, Firebase',
        description: 'A concept cinema app',
        sourceCode: 'https://github.com/AfeezGL/ametmovie',
        liveUrl: 'https://ametmovie.web.app/',
    },
    {
        name: 'BucketList',
        tech: 'React, Firebase',
        description: 'A simple app for documenting your targets and achievements.',
        sourceCode: 'https://github.com/AfeezGL/bucketlist-firebase',
        liveUrl: 'https://bucketlist-24fcf.web.app/',
    },
    {
        name: 'BucketList Mobile',
        tech: 'React Native, Firebase',
        description: 'A simple app for documenting your targets and achievements.',
        sourceCode: 'https://github.com/AfeezGL/BucketListFirebaseNative',
    },
    {
        name: 'QuickStream',
        tech: 'React, AgoraSDK, Firebase',
        description: 'A webRTC livestream web application.',
        sourceCode: 'https://github.com/AfeezGL/quickstream',
        liveUrl: 'https://quick-stream.web.app',
    },
];

export default function Home() {
    return (
        <div className='flex min-h-screen max-w-(--breakpoint-2xl) mx-auto flex-col lg:flex-row'>
            <Profile />

            <div className='flex-1 flex flex-col gap-8 px-8 pb-12 lg:max-w-[600px] lg:px-0 lg:pt-8 lg:pr-8 xl:pt-20 xl:pr-20'>
                <main>
                    <section aria-labelledby='projects-heading'>
                        <h2 id='projects-heading' className='sr-only'>
                            Projects
                        </h2>
                        <ul className='flex flex-col gap-3'>
                            {projects.map((project) => (
                                <li key={project.name}>
                                    <ProjectCard {...project} />
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>

                <footer className='text-primary text-sm'>© {new Date().getFullYear()} Afeez Lawal</footer>
            </div>
        </div>
    );
}
