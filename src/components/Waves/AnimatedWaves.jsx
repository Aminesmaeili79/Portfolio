import { useEffect, useRef } from 'react';
import Wave1 from './Wave1.jsx';
import Wave2 from './Wave2.jsx';
import Wave3 from './Wave3.jsx';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

/*
 * The waves animate with SMIL <animate>, which CSS `prefers-reduced-motion`
 * cannot suppress. pauseAnimations() on each SVG root is the equivalent.
 */
const AnimatedWaves = () => {
    const containerRef = useRef(null);
    const prefersReduced = usePrefersReducedMotion();

    useEffect(() => {
        const svgs = containerRef.current?.querySelectorAll('svg');
        if (!svgs?.length) return;

        svgs.forEach((svg) => {
            if (prefersReduced) svg.pauseAnimations?.();
            else svg.unpauseAnimations?.();
        });
    }, [prefersReduced]);

    return (
        <div ref={containerRef} aria-hidden="true">
            <Wave1 />
            <Wave2 />
            <Wave3 />
        </div>
    );
};

export default AnimatedWaves;
