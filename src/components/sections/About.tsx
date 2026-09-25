import Image from 'next/image';
import portrait from '@/assets/afeez-lawal.jpg';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
    return (
        <Section id='about' tone='paper' labelledBy='about-heading'>
            <div className='grid gap-10 xl:grid-cols-[minmax(0,320px)_1fr] xl:gap-16'>
                <Image
                    src={portrait}
                    alt='Portrait of Afeez Lawal'
                    placeholder='blur'
                    sizes='(min-width: 1280px) 320px, 240px'
                    className='aspect-[4/5] w-full max-w-[240px] rounded-card border border-line object-cover xl:max-w-none'
                />

                <div>
                    <SectionHeading
                        id='about-heading'
                        tone='paper'
                        eyebrow='About'
                        setup='Frontend and backend,'
                        payoff='for over five years.'
                        className='mb-8 md:mb-10'
                        titleClassName='md:text-[40px] xl:text-[52px]'
                    />
                    <div className='max-w-prose space-y-5 text-[17px] font-light leading-[1.8] text-text'>
                        <p>I&apos;ve been building for the web for more than five years, mostly in TypeScript.</p>
                        <p>
                            At Sphera, a football manager game that runs as a mobile-first PWA, I&apos;m one of the
                            founding engineers. I work across the React frontend and the NestJS backend, helped move the
                            game from prototype to v2 with a new match engine and a redesigned UI, and built the push
                            notifications. Players have completed more than 20,000 matches. At SomaEdge I build the guest
                            ordering app, the kitchen display and the admin console for Diné, including real-time chat
                            with an AI waiter over WebSockets.
                        </p>
                        <p>
                            Before that I was a senior engineer at Integraflow, an open-source in-product survey
                            platform. I led the survey dashboard (Next.js, Apollo GraphQL, Zustand) and built the Web SDK
                            in Preact and TypeScript, which is published on npm. Earlier I built Django apps and APIs at
                            Kophy Technologies, and a fantasy football web app with React and Node.js at Draftansy.
                        </p>
                        <p>
                            I like work that sits close to users but needs solid engineering underneath: SDKs, real-time
                            features, and APIs other people build on.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
