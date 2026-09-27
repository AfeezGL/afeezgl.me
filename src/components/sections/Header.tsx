import { Download } from 'lucide-react';
import { PillLink } from '@/components/ui/PillLink';
import { site } from '@/lib/site';
import { MobileMenu } from './MobileMenu';

export const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export function Header() {
    return (
        <header className='absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-20'>
            <div className='relative mx-auto flex max-w-page items-center justify-between'>
                <a href='#top' className='font-display text-lg font-semibold text-white'>
                    Afeez Lawal
                </a>

                <nav
                    aria-label='Main'
                    className='hidden h-10 items-center gap-8 rounded-full border border-white/20 bg-black/30 px-6 backdrop-blur-[8px] lg:flex'
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

                <PillLink href={site.resume} download size='sm' className='hidden lg:inline-flex'>
                    <Download className='size-4' aria-hidden='true' />
                    Resume
                </PillLink>

                <MobileMenu links={navLinks} />
            </div>
        </header>
    );
}
