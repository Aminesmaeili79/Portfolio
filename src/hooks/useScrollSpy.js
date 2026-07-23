import { useEffect, useState } from 'react';

/*
 * Tracks which section is currently in view so the nav can mark the active
 * link. Picks the entry closest to the top of the viewport rather than the
 * largest one — that matches how a reader perceives "where am I".
 */
export default function useScrollSpy(ids, { rootMargin = '-40% 0px -55% 0px' } = {}) {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;

        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!elements.length) return;

        const visible = new Map();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
                    else visible.delete(entry.target.id);
                });

                if (!visible.size) return;

                const [topMost] = [...visible.entries()].sort(
                    (a, b) => Math.abs(a[1]) - Math.abs(b[1]),
                );
                setActiveId(topMost[0]);
            },
            { rootMargin, threshold: 0 },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids, rootMargin]);

    return activeId;
}
