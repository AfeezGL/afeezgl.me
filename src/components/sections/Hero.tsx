import { MapPin } from 'lucide-react';
import { ContactActions } from '@/components/ui/ContactActions';
import { CountUp } from '@/components/ui/CountUp';

const stats = [
    { value: '5+', label: 'years building for the web' },
    { value: '20,000+', label: 'matches completed on Sphera', countUp: true },
];

export function Hero() {
    return (
        <section
            id='top'
            aria-labelledby='hero-heading'
            className='hero-glow bg-ink px-5 pb-20 pt-32 text-center md:px-20 md:pb-28 md:pt-44'
        >
            <div className='mx-auto max-w-page'>
                <p className='hero-step text-[11px] uppercase tracking-eyebrow text-balance text-highlight'>
                    <MapPin className='mr-1.5 inline size-3.5 align-[-2px]' aria-hidden='true' />
                    Lagos, Nigeria · Open to remote roles and relocation
                </p>

                <h1
                    id='hero-heading'
                    className='mt-5 font-display text-[40px] font-semibold leading-none text-white md:text-[68px]'
                >
                    <span className='hero-step block [--step:1]'>Afeez Lawal.</span>{' '}
                    <span className='hero-step block text-highlight [--step:2] md:mt-1'>Senior Software Engineer.</span>
                    <span className='hero-step mt-4 block [--step:2] font-sans text-[11px] font-normal uppercase leading-normal tracking-eyebrow text-highlight md:mt-5 md:text-xs'>
                        Full-Stack Developer
                    </span>
                </h1>

                <p className='hero-step mx-auto mt-6 max-w-[620px] [--step:3] text-base font-light leading-[1.5] text-text-on-dark md:text-lg'>
                    I build web products end to end in TypeScript, React and Node.js. I&apos;m one of the founding
                    engineers at Sphera, and at SomaEdge I build the apps restaurants use for Diné, an AI waiter.
                </p>

                <div className='hero-step mt-9 [--step:4]'>
                    <ContactActions />
                </div>

                <dl className='hero-step mx-auto mt-14 flex [--step:5] justify-center gap-8 md:mt-16 md:gap-20'>
                    {stats.map((stat) => (
                        <div key={stat.label} className='flex flex-col-reverse gap-2'>
                            <dt className='text-sm font-light leading-[1.4] text-balance text-text-on-dark-muted'>{stat.label}</dt>
                            <dd className='font-display text-[36px] font-semibold leading-none text-white md:text-[56px]'>
                                {'countUp' in stat ? <CountUp value={stat.value} /> : stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
