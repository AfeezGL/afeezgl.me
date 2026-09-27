import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: site.title,
        short_name: site.name,
        start_url: '/',
        display: 'browser',
        background_color: '#f5ece0',
        theme_color: '#111111',
        icons: [
            { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    };
}
