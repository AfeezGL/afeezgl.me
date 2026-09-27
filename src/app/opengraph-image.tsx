import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Keep in sync with the tokens in globals.css
const paper = '#f5ece0';
const ink = '#111111';
const text = '#323332';
const accent = '#0f6e66';
const onDark = '#fff4dd';
const highlight = '#a7e3d6';

// Outfit from @fontsource (OFL). Clash Display can't be bundled here; see fonts.ts.
const fontDir = join(process.cwd(), 'node_modules/@fontsource/outfit/files');

export default async function OpengraphImage() {
    const [regular, semibold] = await Promise.all([
        readFile(join(fontDir, 'outfit-latin-400-normal.woff')),
        readFile(join(fontDir, 'outfit-latin-600-normal.woff')),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: paper,
                    fontFamily: 'Outfit',
                }}
            >
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px' }}>
                    <div style={{ fontSize: 30, letterSpacing: 4, textTransform: 'uppercase', color: accent }}>
                        Lagos, Nigeria · Open to remote and relocation
                    </div>
                    <div style={{ fontSize: 104, fontWeight: 600, lineHeight: 1, color: text, marginTop: 24 }}>
                        {site.name}
                    </div>
                    <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, color: accent, marginTop: 12 }}>
                        {`${site.jobTitle}.`}
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '36px 80px',
                        background: ink,
                        color: onDark,
                        fontSize: 30,
                    }}
                >
                    <div style={{ display: 'flex' }}>TypeScript · React · Next.js · Node.js</div>
                    <div style={{ display: 'flex', color: highlight }}>afeezlawal.com</div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: 'Outfit', data: regular, weight: 400, style: 'normal' },
                { name: 'Outfit', data: semibold, weight: 600, style: 'normal' },
            ],
        }
    );
}
