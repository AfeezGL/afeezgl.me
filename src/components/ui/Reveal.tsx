'use client';

import { useEffect, useRef, type CSSProperties, type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
    /** Renders as this element, so a list item or heading line needs no extra wrapper. */
    as?: 'div' | 'li' | 'p' | 'span';
    /** Delay in stagger steps. Pass an item's index to stagger a group. */
    delay?: number;
    /** rise: fade up (default). pop: fade in from a smaller scale. draw: grow down from the top edge. */
    effect?: 'rise' | 'pop' | 'draw';
};

// Steps past this don't add delay, so a group of any size lands within about half a second
const MAX_STEPS = 6;

// Fades its content in once, the first time it scrolls into view. The hidden
// starting state lives in globals.css and applies only under the root `js`
// class, so without JavaScript the content is simply visible.
export function Reveal({ as: Tag = 'div', delay = 0, effect = 'rise', style, ...props }: Props) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                el.dataset.revealed = '';
                observer.disconnect();
            },
            { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            // The union of intrinsic elements gives each its own ref type; any HTMLElement works here
            ref={ref as React.Ref<never>}
            data-reveal={effect}
            style={{ ...style, '--reveal-delay': Math.min(delay, MAX_STEPS) } as CSSProperties}
            {...props}
        />
    );
}
