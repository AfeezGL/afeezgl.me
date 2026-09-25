import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        <html lang='en'>
            <body className={`${inter.className} bg-bg`}>
                {children}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
                />
            </body>
        </html>
    );
}
