import { ExternalTextLink } from '@/components/ui/ExternalTextLink';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { earlierProjects, projects } from '@/content/work';

function StackTags({ stack }: { stack: string[] }) {
    return (
        <ul aria-label='Built with' className='flex flex-wrap gap-1.5'>
            {stack.map((tech) => (
                <li key={tech} className='rounded-full bg-track px-2.5 py-0.5 text-[12px] leading-[1.5] text-text'>
                    {tech}
                </li>
            ))}
        </ul>
    );
}

export function Projects() {
    return (
        <Section id='projects' tone='paper' labelledBy='projects-heading'>
            <SectionHeading
                id='projects-heading'
                tone='paper'
                eyebrow='Selected projects'
                setup='Products I work on.'
                payoff='And my part in each.'
            />

            <ul className='grid gap-5 md:grid-cols-2'>
                {projects.map((project) => (
                    <li key={project.name} className='flex'>
                        <article className='flex flex-1 flex-col rounded-card border border-line bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(17,17,17,0.35)] md:p-8'>
                            <p className='text-[11px] uppercase tracking-eyebrow text-accent-2'>{project.context}</p>
                            <h3 className='mt-2.5 font-display text-[20px] font-semibold leading-[1.25] text-text md:text-[24px]'>
                                {project.name}
                            </h3>
                            <p className='mt-3 flex-1 text-[15px] font-light leading-[1.65] text-text-muted'>
                                {project.summary}
                            </p>
                            <div className='mt-6'>
                                <StackTags stack={project.stack} />
                            </div>
                            <div className='mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4'>
                                {project.links.map((link) => (
                                    <ExternalTextLink key={link.href} {...link} context={project.name} />
                                ))}
                            </div>
                        </article>
                    </li>
                ))}
            </ul>

            <div className='mt-16 md:mt-20'>
                <h3 className='font-display text-[20px] font-semibold leading-[1.25] text-text md:text-[24px]'>
                    Earlier side projects
                </h3>
                <ul className='mt-5 divide-y divide-line border-y border-line'>
                    {earlierProjects.map((project) => (
                        <li
                            key={project.name}
                            className='grid gap-2 py-5 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6'
                        >
                            <h4 className='font-display text-[17px] font-semibold text-text'>{project.name}</h4>
                            <p className='text-[15px] font-light text-text-muted'>
                                {project.summary}{' '}
                                <span className='text-text'>{project.stack.join(', ')}.</span>
                            </p>
                            <div className='flex gap-5'>
                                {project.links.map((link) => (
                                    <ExternalTextLink key={link.href} {...link} context={project.name} />
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
