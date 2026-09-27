import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/content/work';

export function Experience() {
    return (
        <Section id='experience' tone='ink' labelledBy='experience-heading'>
            <SectionHeading
                id='experience-heading'
                tone='ink'
                eyebrow='Experience'
                setup="Where I've worked."
                payoff='What I built there.'
            />

            <ol className='flex max-w-[880px] flex-col gap-12'>
                {experience.map((role, index) => (
                    <li key={role.company} className='relative flex gap-5 md:gap-6'>
                        {/* connector between the numbered discs, drawn down once its disc has popped in */}
                        {index < experience.length - 1 ? (
                            <Reveal
                                as='span'
                                effect='draw'
                                delay={3}
                                aria-hidden='true'
                                className='absolute bottom-[-48px] left-[21px] top-11 w-px bg-white/10'
                            />
                        ) : null}
                        <Reveal
                            as='span'
                            effect='pop'
                            aria-hidden='true'
                            className='flex size-11 shrink-0 items-center justify-center rounded-full bg-paper font-display text-[15px] font-semibold text-ink'
                        >
                            {String(index + 1).padStart(2, '0')}
                        </Reveal>

                        <article className='min-w-0 flex-1'>
                            <Reveal as='p' delay={1} className='text-[11px] uppercase tracking-eyebrow text-text-on-dark-muted'>
                                {role.dates} · {role.location}
                            </Reveal>
                            <Reveal
                                as='h3'
                                delay={2}
                                className='mt-2 font-display text-[20px] font-semibold leading-[1.25] text-white md:text-[25px]'
                            >
                                {role.title}, <span className='text-highlight'>{role.company}</span>
                            </Reveal>
                            <ul className='mt-4 space-y-3'>
                                {role.points.map((point, pointIndex) => (
                                    <Reveal
                                        as='li'
                                        key={point}
                                        delay={3 + pointIndex}
                                        className='relative pl-5 text-[15px] font-light leading-[1.7] text-text-on-dark md:text-base'
                                    >
                                        <span
                                            aria-hidden='true'
                                            className='absolute left-0 top-[0.7em] size-1.5 rounded-full bg-highlight/60'
                                        />
                                        {point}
                                    </Reveal>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
