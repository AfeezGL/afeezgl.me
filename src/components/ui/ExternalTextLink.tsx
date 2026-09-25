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
                'inline-flex items-center gap-1 rounded-sm text-sm text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline',
                className
            )}
        >
            <span className='sr-only'>{context}: </span>
            {label}
            <ArrowUpRight className='size-4' aria-hidden='true' />
            <span className='sr-only'> (opens in new tab)</span>
        </a>
    );
}
