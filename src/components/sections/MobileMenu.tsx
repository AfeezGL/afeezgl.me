'use client';

import { Download, Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { PillLink } from '@/components/ui/PillLink';
import { site } from '@/lib/site';

type Props = { links: { href: string; label: string }[] };

export function MobileMenu({ links }: Props) {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <div className='lg:hidden'>
            <button
                ref={buttonRef}
                type='button'
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
                className='flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-[8px]'
            >
                {open ? <X className='size-5' aria-hidden='true' /> : <Menu className='size-5' aria-hidden='true' />}
                <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
            </button>

            <nav
                id={panelId}
                aria-label='Main'
                hidden={!open}
                className='absolute inset-x-0 top-14 rounded-card border border-white/10 bg-ink-2 p-6 shadow-2xl'
            >
                <ul className='flex flex-col gap-4'>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className='font-display text-2xl font-semibold text-white'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <PillLink href={site.resume} download className='mt-6 w-full'>
                    <Download className='size-4' aria-hidden='true' />
                    Download Resume
                </PillLink>
            </nav>
        </div>
    );
}
