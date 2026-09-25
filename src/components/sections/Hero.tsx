import { MapPin } from 'lucide-react';
import { ContactActions } from '@/components/ui/ContactActions';

const stats = [
    { value: '5+', label: 'years building for the web' },
    { value: '20,000+', label: 'matches completed on Sphera' },
    { value: '1,000+', label: 'monthly active users at Draftansy' },
    { value: 'Remote', label: 'contract with SomaEdge, Dallas, TX' },
];

export function Hero() {
    return (
        <section
            id='top'
            aria-labelledby='hero-heading'
            className='bg-ink bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(15,110,102,0.35),transparent)] px-5 pb-20 pt-32 text-center md:px-20 md:pb-28 md:pt-44'
        >
            <div className='mx-auto max-w-page'>
                <p className='text-[11px] uppercase tracking-eyebrow text-balance text-highlight'>
                    <MapPin className='mr-1.5 inline size-3.5 align-[-2px]' aria-hidden='true' />
                    Lagos, Nigeria · Open to remote roles and relocation
                </p>

                <h1
                    id='hero-heading'
                    className='mt-5 font-display text-[40px] font-semibold leading-none text-white md:text-[68px]'
                >
                    Afeez Lawal. <span className='block text-highlight md:mt-1'>Full-Stack Engineer.</span>
                </h1>

                <p className='mx-auto mt-6 max-w-[620px] text-base font-light leading-[1.5] text-text-on-dark md:text-lg'>
                    I build web products end to end, mostly in TypeScript: React and Next.js on the frontend, Node.js
                    (NestJS, Express) and Django on the backend. I&apos;m one of the founding engineers at Sphera, and at
                    SomaEdge I build the ordering and admin apps for Diné, an AI waiter for restaurants and events.
                </p>

                <div className='mt-9'>
                    <ContactActions />
                </div>

                <dl className='mx-auto mt-16 grid max-w-[1000px] grid-cols-2 gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 text-left md:mt-20 lg:grid-cols-4'>
                    {stats.map((stat) => (
                        <div key={stat.label} className='flex flex-col-reverse justify-end gap-2 bg-ink p-5 md:p-6'>
                            <dt className='text-sm font-light leading-[1.4] text-text-on-dark-muted'>{stat.label}</dt>
                            <dd className='font-display text-[28px] font-semibold leading-none text-white lg:text-[36px]'>
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
