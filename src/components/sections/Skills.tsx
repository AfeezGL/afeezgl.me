import { Code, LayoutTemplate, Server, Wrench } from 'lucide-react';
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
                    {skills.map(({ group, items }) => {
                        const Icon = icons[group];
                        return (
                            <li key={group} className='flex flex-col gap-5 bg-paper p-7 md:p-8'>
                                <Icon className='size-8 text-accent-2' strokeWidth={1.5} aria-hidden='true' />
                                <div>
                                    <h3 className='font-display text-[18px] font-semibold leading-[1.2] text-text md:text-[20px]'>
                                        {group}
                                    </h3>
                                    <p className='mt-3 text-[15px] font-light leading-[1.7] text-text-muted'>
                                        {items.join(', ')}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Section>
    );
}
