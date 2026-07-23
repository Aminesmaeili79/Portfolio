import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/* Live-tracks the OS motion preference so components can opt out of animation
 * that CSS alone can't reach (SMIL, canvas, rAF loops). */
export default function usePrefersReducedMotion() {
    const [prefersReduced, setPrefersReduced] = useState(
        () => typeof window !== 'undefined' && window.matchMedia?.(QUERY).matches,
    );

    useEffect(() => {
        const media = window.matchMedia?.(QUERY);
        if (!media) return;

        const onChange = (event) => setPrefersReduced(event.matches);
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    return prefersReduced;
}
