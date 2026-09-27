import { cn } from '@/lib/cn';

export type Tone = 'ink' | 'paper';

type Props = {
    id: string;
    tone: Tone;
    labelledBy: string;
    className?: string;
    children: React.ReactNode;
};

// Full-width band: near-black ink or grain-textured paper, with the content capped at the page width.
export function Section({ id, tone, labelledBy, className, children }: Props) {
    return (
        <section
            id={id}
            aria-labelledby={labelledBy}
            className={cn(
                'scroll-mt-20 px-5 md:px-20',
                tone === 'ink' ? 'bg-ink py-20 text-text-on-dark md:py-28' : 'bg-paper bg-grain py-16 text-text md:py-24',
                className
            )}
        >
            <div className='mx-auto max-w-page'>{children}</div>
        </section>
    );
}
