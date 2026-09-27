import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';
import type { Tone } from './Section';

type Props = {
    id: string;
    tone: Tone;
    eyebrow: string;
    setup: string;
    payoff: string;
    lead?: string;
    align?: 'left' | 'center';
    className?: string;
    /** Overrides the h2 size, e.g. for a heading in a narrow column. */
    titleClassName?: string;
};

// Two-tone heading: a setup line, then the payoff line in the accent colour.
// Each part fades up once in view, the payoff landing just after the setup.
export function SectionHeading({
    id,
    tone,
    eyebrow,
    setup,
    payoff,
    lead,
    align = 'left',
    className,
    titleClassName,
}: Props) {
    return (
        <div className={cn('mb-10 max-w-[800px] md:mb-14', align === 'center' && 'mx-auto text-center', className)}>
            <Reveal
                as='p'
                className={cn(
                    'text-[11px] uppercase tracking-eyebrow',
                    tone === 'ink' ? 'text-highlight' : 'text-accent-2'
                )}
            >
                {eyebrow}
            </Reveal>
            <h2
                id={id}
                className={cn(
                    'mt-3 font-display text-[28px] font-semibold leading-[1.1] text-balance md:text-[52px]',
                    tone === 'ink' ? 'text-white' : 'text-text',
                    titleClassName
                )}
            >
                <Reveal as='span' className='block'>
                    {setup}
                </Reveal>{' '}
                <Reveal as='span' delay={2} className={cn('block', tone === 'ink' ? 'text-highlight' : 'text-accent')}>
                    {payoff}
                </Reveal>
            </h2>
            {lead ? (
                <Reveal
                    as='p'
                    delay={4}
                    className={cn(
                        'mt-5 max-w-[560px] text-sm font-light leading-[1.6] md:text-base',
                        align === 'center' && 'mx-auto',
                        tone === 'ink' ? 'text-text-on-dark' : 'text-text-muted'
                    )}
                >
                    {lead}
                </Reveal>
            ) : null}
        </div>
    );
}
