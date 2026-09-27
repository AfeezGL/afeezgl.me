import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
    href: string;
    label: string;
    /** Read before the label by screen readers, e.g. "Diné: Live site". */
    context: string;
    className?: string;
};

export function ExternalTextLink({ href, label, context, className }: Props) {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
                'group inline-flex items-center gap-1 rounded-sm text-sm text-accent transition-colors hover:text-accent-hover',
                className
            )}
        >
            <span className='sr-only'>{context}: </span>
            <span className='link-underline'>{label}</span>
            <ArrowUpRight className='link-nudge size-4' aria-hidden='true' />
            <span className='sr-only'> (opens in new tab)</span>
        </a>
    );
}
