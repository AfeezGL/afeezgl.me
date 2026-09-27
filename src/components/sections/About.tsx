import Image from 'next/image';
import portrait from '@/assets/afeez-lawal.jpg';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
    return (
        <Section id='about' tone='paper' labelledBy='about-heading'>
            <div className='grid gap-10 xl:grid-cols-[minmax(0,320px)_1fr] xl:gap-16'>
                <Reveal>
                    <Image
                        src={portrait}
                        alt='Portrait of Afeez Lawal'
                        placeholder='blur'
                        sizes='(min-width: 1280px) 320px, 240px'
                        className='aspect-[4/5] w-full max-w-[240px] rounded-card border border-line object-cover xl:max-w-none'
                    />
                </Reveal>

                <div>
                    <SectionHeading
                        id='about-heading'
                        tone='paper'
                        eyebrow='About'
                        setup='I build things end to end,'
                        payoff='with design and product.'
                        className='mb-8 md:mb-10'
                        titleClassName='md:text-[40px] xl:text-[52px]'
                    />
                    <Reveal delay={3} className='max-w-prose space-y-5 text-[17px] font-light leading-[1.8] text-text'>
                        <p>
                            I like owning a feature end to end, from the interface down to the API behind it. I always
                            work closely with the designers and product people along the way, not just the other
                            engineers.
                        </p>
                        <p>
                            What I care about most is building tools that help people. So far that&apos;s meant AI
                            products, games and developer SDKs, and I&apos;m glad to keep working on that kind of
                            software.
                        </p>
                        <p>
                            Outside work it&apos;s football. It&apos;s what I look forward to watching every weekend,
                            which is a big part of why I enjoy working on Sphera, a football manager game.
                        </p>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
