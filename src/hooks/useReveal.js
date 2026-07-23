import { useEffect, useRef } from 'react';

const REDUCED = '(prefers-reduced-motion: reduce)';

/*
 * One-shot scroll reveal. Attach the returned ref to an element carrying the
 * `.reveal` class; it flips to data-visible="true" once it enters the viewport
 * and is then unobserved.
 *
 * If the user prefers reduced motion — or IntersectionObserver is missing —
 * the element is revealed immediately so content is never gated behind motion.
 */
export default function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reveal = () => el.setAttribute('data-visible', 'true');

        if (window.matchMedia?.(REDUCED).matches || !('IntersectionObserver' in window)) {
            reveal();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    reveal();
                    observer.unobserve(entry.target);
                });
            },
            { threshold, rootMargin },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
