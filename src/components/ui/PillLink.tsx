import { cn } from '@/lib/cn';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary';
    size?: 'md' | 'sm';
    /** Opens in a new tab and says so to screen readers. */
    external?: boolean;
};

export function PillLink({ variant = 'primary', size = 'md', external, className, children, ...props }: Props) {
    return (
        <a
            {...props}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-full text-sm transition-colors',
                size === 'md' ? 'px-7 py-2.5' : 'px-5 py-2',
                variant === 'primary'
                    ? 'bg-accent text-white hover:bg-accent-hover'
                    : 'bg-paper-light text-accent-soft hover:bg-paper-hover',
                className
            )}
        >
            {children}
            {external ? <span className='sr-only'>(opens in new tab)</span> : null}
        </a>
    );
}
