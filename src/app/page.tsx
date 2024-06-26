import Profile from '@/components/Profile';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';

const projects: ProjectProps[] = [
    {
        name: 'Integraflow website',
        tech: 'NextJS, TypeScript, TailwindCSS',
        description:
            'Integraflow is a cutting-edge platform that specialises in in-product micro-surveys for SaaS and digital products.',
        sourceCode: 'https://github.com/IntegraflowHQ/website',
        liveUrl: 'https://www.useintegraflow.com/',
    },
    {
        name: 'Integraflow web SDK',
        tech: 'Preact, TypeScript, TailwindCSS, WebPack, Rollup, Babel',
        sourceCode: 'https://github.com/IntegraflowHQ/integraflow',
        liveUrl: 'https://www.npmjs.com/package/integraflow-js',
    },
    {
        name: 'Integraflow dashboard',
        tech: 'React, TypeScript, TailwindCSS, Apollo',
        sourceCode: 'https://github.com/IntegraflowHQ/integraflow/tree/main/apps/frontend',
        liveUrl: 'https://app.useintegraflow.com',
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
        liveUrl:
            'https://firebasestorage.googleapis.com/v0/b/afeezgl.appspot.com/o/bucketlist.apk?alt=media&token=f4a0b0be-8523-48b2-9c3a-6778678ef0fa',
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
        <main className='flex min-h-screen overflow-x-hidden max-w-screen-2xl mx-auto flex-col lg:flex-row'>
            <Profile />

            <section className='flex-1 flex flex-col gap-3 group px-8 lg:right-0 lg:max-h-screen lg:max-w-[600px] lg:px-0 lg:pt-8 lg:pr-8 xl:pt-20 xl:pr-20 overflow-x-visible'>
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </section>
        </main>
    );
}
