import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { clashStylesheet, outfit } from './fonts';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    alternates: { canonical: '/' },
    openGraph: {
        type: 'profile',
        url: '/',
        siteName: site.name,
        title: site.title,
        description: site.description,
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.jobTitle,
    url: site.url,
    sameAs: [site.linkedin, site.github],
    worksFor: [
        { '@type': 'Organization', name: 'SomaEdge LLC' },
        { '@type': 'Organization', name: 'Sphera Gaming Studios', url: 'https://app.sphera.gg' },
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // The inline script adds a `js` class before hydration, hence suppressHydrationWarning
        <html lang='en' className={outfit.variable} suppressHydrationWarning>
            <head>
                {/* Scroll reveals start hidden only under `js`, so nothing is hidden without JavaScript */}
                <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
                <link rel='preconnect' href='https://api.fontshare.com' />
                <link rel='preconnect' href='https://cdn.fontshare.com' crossOrigin='anonymous' />
                <link rel='preload' as='style' href={clashStylesheet} />
                {/* Attach the font stylesheet from script so it doesn't block the first paint */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href=${JSON.stringify(clashStylesheet)};document.head.appendChild(l)})()`,
                    }}
                />
                <noscript>
                    <link rel='stylesheet' href={clashStylesheet} />
                </noscript>
            </head>
            <body>
                {children}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
                />
            </body>
        </html>
    );
}
