'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
    /** The final figure as shown, e.g. "20,000+". Leading digits count up; the rest is a fixed suffix. */
    value: string;
};

const easeOut = (t: number) => 1 - (1 - t) ** 3;

// Counts a stat up from 0 once, the first time it's in view. The server HTML and
// screen readers only ever get the final value.
export function CountUp({ value }: Props) {
    const [display, setDisplay] = useState(value);
    const [ready, setReady] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        const match = /^([\d,]+)(.*)$/.exec(value);
        if (!el || !match || matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Nothing to count: show the figure as is (the CSS hides it until ready)
            setReady(true);
            return;
        }

        const target = Number(match[1].replace(/,/g, ''));
        const suffix = match[2];
        const format = (n: number) => `${Math.round(n).toLocaleString('en-US')}${suffix}`;
        const token = getComputedStyle(document.documentElement).getPropertyValue('--motion-duration-long').trim();
        const duration = (token.endsWith('ms') ? parseFloat(token) : parseFloat(token) * 1000) || 1200;

        setDisplay(format(0));
        setReady(true);

        let frame = 0;
        let cancelled = false;
        const count = () => {
            if (cancelled) return;
            let start: number | undefined;
            const tick = (now: number) => {
                start ??= now;
                const t = Math.min((now - start) / duration, 1);
                setDisplay(t < 1 ? format(target * easeOut(t)) : value);
                if (t < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        };
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                // Start as the hero entrance begins fading the row in, not while it's still waiting its turn
                const wait = Math.max(
                    0,
                    ...document.getAnimations().map((a) => {
                        if (!(a.effect instanceof KeyframeEffect) || !a.effect.target?.contains(el)) return 0;
                        const { delay = 0, localTime } = a.effect.getComputedTiming();
                        return delay - Number(localTime ?? 0);
                    })
                );
                setTimeout(count, wait);
            },
            { threshold: 0.6 }
        );
        observer.observe(el);
        return () => {
            cancelled = true;
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value]);

    return (
        <>
            <span className='sr-only'>{value}</span>
            <span ref={ref} aria-hidden='true' data-count-up={ready ? 'ready' : ''} className='tabular-nums'>
                {display}
            </span>
        </>
    );
}
