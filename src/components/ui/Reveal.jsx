import useReveal from '../../hooks/useReveal.js';

/*
 * Wraps children in a scroll-triggered fade/rise. `delay` staggers siblings —
 * keep it in the 30-50ms per-item range so a list feels sequenced, not slow.
 */
const Reveal = ({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) => {
    const ref = useReveal();

    return (
        <Tag
            ref={ref}
            className={`reveal ${className}`}
            style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
