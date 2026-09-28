'use client';

import { Download, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PillLink } from '@/components/ui/PillLink';
import { site } from '@/lib/site';
import { MobileMenu } from './MobileMenu';

export const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

// One header in two states, so there's only ever one main nav. It sits over the hero,
// and once the hero has scrolled out of view it becomes a slim bar fixed to the top
// (data-stuck). Both states are out of the page flow, so switching shifts nothing.
// Without JavaScript it never leaves the hero.
export function Header() {
    const [stuck, setStuck] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('top');
        if (!hero) return;
        // The top margin counts the strip of hero left under the bar after an anchor jump as out of view
        const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
            rootMargin: '-96px 0px 0px 0px',
        });
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <header
            data-stuck={stuck || undefined}
            className='sticky-bar group/header absolute inset-x-0 top-0 z-30 px-5 pt-5 md:px-20 data-stuck:fixed data-stuck:border-b data-stuck:border-white/10 data-stuck:bg-ink/95 data-stuck:py-3 data-stuck:backdrop-blur-[8px]'
        >
            <div className='relative mx-auto flex max-w-page items-center justify-between'>
                <a href='#top' className='font-display text-lg font-semibold text-white'>
                    Afeez Lawal
                </a>

                <nav
                    aria-label='Main'
                    className='hidden h-10 items-center gap-8 rounded-full border border-white/20 bg-black/30 px-6 backdrop-blur-[8px] group-data-stuck/header:border-transparent group-data-stuck/header:bg-transparent group-data-stuck/header:backdrop-blur-none lg:flex'
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className='link-underline text-sm text-white transition-colors hover:text-highlight'
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className='flex items-center gap-3'>
                    <PillLink
                        href={site.resume}
                        download
                        size='sm'
                        className='hidden lg:inline-flex lg:group-data-stuck/header:hidden'
                    >
                        <Download className='size-4' aria-hidden='true' />
                        Resume
                    </PillLink>
                    <PillLink href={`mailto:${site.email}`} size='sm' className='hidden group-data-stuck/header:inline-flex'>
                        <Mail className='size-4' aria-hidden='true' />
                        Email me
                    </PillLink>
                    <MobileMenu links={navLinks} />
                </div>
            </div>
        </header>
    );
}
