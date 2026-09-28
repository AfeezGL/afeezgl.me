import Image from 'next/image';
import { ExternalTextLink } from '@/components/ui/ExternalTextLink';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { earlierProjects, projects, type ProjectImages } from '@/content/work';

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

// Fixed aspect ratios on the panel and images, so nothing shifts as they load
function ImagePanel({ images }: { images: ProjectImages }) {
    if (images.kind === 'browser') {
        const [image] = images.items;
        return (
            <div className='mb-6 overflow-hidden rounded-[10px] border border-line bg-track'>
                <div className='flex h-6 items-center gap-1.5 px-3'>
                    {[0, 1, 2].map((dot) => (
                        <span key={dot} className='size-2 rounded-full bg-line' />
                    ))}
                </div>
                <Image
                    src={image.src}
                    alt={image.alt}
                    placeholder='blur'
                    sizes='(min-width: 1280px) 530px, (min-width: 768px) 45vw, 90vw'
                    className='aspect-[16/9] w-full object-cover object-top'
                />
            </div>
        );
    }

    return (
        <div className='mb-6 flex aspect-[4/3] min-w-0 justify-center gap-4 rounded-[10px] bg-track p-5 md:aspect-[16/10]'>
            {images.items.slice(0, 2).map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    placeholder='blur'
                    sizes='(min-width: 768px) 160px, 100px'
                    className='aspect-[9/19.5] h-full w-auto rounded-[16px] object-cover'
                />
            ))}
        </div>
    );
}

export function Projects() {
    return (
        <Section id='projects' tone='paper' labelledBy='projects-heading'>
            <SectionHeading
                id='projects-heading'
                tone='paper'
                eyebrow='Selected projects'
                setup='Four products,'
                payoff='and what I did on each.'
            />

            <ul className='grid gap-5 md:grid-cols-2'>
                {projects.map((project, index) => (
                    <Reveal as='li' key={project.name} delay={index} className='flex'>
                        <article className='card-lift flex flex-1 flex-col rounded-card border border-line bg-white p-6 md:p-8'>
                            {project.images && project.images.items.length > 0 && (
                                <ImagePanel images={project.images} />
                            )}
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
                    </Reveal>
                ))}
            </ul>

            <div className='mt-16 md:mt-20'>
                <h3 className='font-display text-[20px] font-semibold leading-[1.25] text-text md:text-[24px]'>
                    Earlier side projects
                </h3>
                <ul className='mt-5 divide-y divide-line border-y border-line'>
                    {earlierProjects.map((project, index) => (
                        <Reveal
                            as='li'
                            key={project.name}
                            delay={index}
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
                        </Reveal>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
