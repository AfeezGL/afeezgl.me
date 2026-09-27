import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { credentials } from '@/content/credentials';

export function Credentials() {
    return (
        <Section id='credentials' tone='paper' labelledBy='credentials-heading'>
            <SectionHeading
                id='credentials-heading'
                tone='paper'
                eyebrow='Credentials'
                setup='Certifications'
                payoff='and education.'
            />

            <ul className='max-w-[880px] divide-y divide-line border-y border-line'>
                {credentials.map((item, index) => (
                    <Reveal as='li' key={item.name} delay={index} className='grid gap-1 py-5 md:grid-cols-[140px_1fr] md:gap-6'>
                        <p className='text-[11px] uppercase leading-[2.2] tracking-eyebrow text-accent-2'>{item.date}</p>
                        <div>
                            <h3 className='font-display text-[17px] font-semibold leading-[1.35] text-text md:text-[19px]'>
                                {item.name}
                            </h3>
                            {'detail' in item ? (
                                <p className='mt-1 text-[15px] font-light text-text-muted'>{item.detail}</p>
                            ) : null}
                        </div>
                    </Reveal>
                ))}
            </ul>
        </Section>
    );
}
