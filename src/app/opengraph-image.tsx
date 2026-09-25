import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 80,
                    background: '#151515',
                    color: '#ffffff',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>{site.name}</div>
                    <div style={{ fontSize: 48, marginTop: 24, color: '#949495' }}>{site.jobTitle}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: 32, color: '#949495' }}>
                    <div>TypeScript · React · Next.js · Node.js</div>
                    <div style={{ marginTop: 12 }}>Lagos, Nigeria · Open to remote roles and relocation</div>
                </div>
            </div>
        ),
        size
    );
}
