import { Outfit } from 'next/font/google';

export const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-outfit',
    display: 'swap',
});

// Clash Display (Indian Type Foundry) is served by Fontshare's CDN rather than
// self-hosted: the ITF Free Font License doesn't allow the files in a public repo.
export const clashStylesheet = 'https://api.fontshare.com/v2/css?f[]=clash-display@500,600&display=swap';
