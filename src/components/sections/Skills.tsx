import { Code, LayoutTemplate, Server, Wrench } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/content/credentials';

const icons = { Languages: Code, Frontend: LayoutTemplate, Backend: Server, 'Tooling and mobile': Wrench };

export function Skills() {
    return (
        <Section id='skills' tone='ink' labelledBy='skills-heading'>
            <SectionHeading
                id='skills-heading'
                tone='ink'
                eyebrow='Skills'
                setup='The tools I use.'
                payoff='Mostly TypeScript.'
            />

            <div className='overflow-hidden rounded-2xl border border-line'>
                <ul className='grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4'>
                    {skills.map(({ group, items }, index) => {
                        const Icon = icons[group];
                        return (
                            // The tile stays put and its content fades up, so the grid lines never show through
                            <li key={group} className='bg-paper p-7 md:p-8'>
                                <Reveal delay={index} className='flex flex-col gap-5'>
                                    <Icon className='size-8 text-accent-2' strokeWidth={1.5} aria-hidden='true' />
                                    <div>
                                        <h3 className='font-display text-[18px] font-semibold leading-[1.2] text-text md:text-[20px]'>
                                            {group}
                                        </h3>
                                        <p className='mt-3 text-[15px] font-light leading-[1.7] text-text-muted'>
                                            {items.join(', ')}
                                        </p>
                                    </div>
                                </Reveal>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Section>
    );
}
