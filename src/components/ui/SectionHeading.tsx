import { cn } from '@/lib/cn';
import type { Tone } from './Section';

type Props = {
    id: string;
    tone: Tone;
    eyebrow: string;
    setup: string;
    payoff: string;
    lead?: string;
    className?: string;
};

// Two-tone heading: a setup line, then the payoff line in the accent colour.
export function SectionHeading({ id, tone, eyebrow, setup, payoff, lead, className }: Props) {
    return (
        <div className={cn('mb-10 max-w-[800px] md:mb-14', className)}>
            <p
                className={cn(
                    'text-[11px] uppercase tracking-eyebrow',
                    tone === 'ink' ? 'text-highlight' : 'text-accent-2'
                )}
            >
                {eyebrow}
            </p>
            <h2
                id={id}
                className={cn(
                    'mt-3 font-display text-[28px] font-semibold leading-[1.1] text-balance md:text-[52px]',
                    tone === 'ink' ? 'text-white' : 'text-text'
                )}
            >
                {setup} <span className={cn('block', tone === 'ink' ? 'text-highlight' : 'text-accent')}>{payoff}</span>
            </h2>
            {lead ? (
                <p
                    className={cn(
                        'mt-5 max-w-[560px] text-sm font-light leading-[1.6] md:text-base',
                        tone === 'ink' ? 'text-text-on-dark' : 'text-text-muted'
                    )}
                >
                    {lead}
                </p>
            ) : null}
        </div>
    );
}
