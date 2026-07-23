/*
 * Ambient light. Replaces the old animated blob: that one ran an infinite
 * keyframe purely for decoration, which the UX guidance calls out directly
 * ("continuous animation: loading indicators only") and which kept the
 * compositor busy for something nobody looks at.
 *
 * This is a static radial gradient — same atmospheric depth, zero frames.
 * blur() is deliberately not used; a large blurred layer is expensive to
 * paint, and a soft-stopped gradient is visually identical here.
 */
const Glow = ({ className = '', color = 'var(--color-accent-deep)', opacity = 0.16 }) => (
    <div
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 rounded-full ${className}`}
        style={{
            background: `radial-gradient(circle, color-mix(in srgb, ${color} ${opacity * 100}%, transparent) 0%, transparent 70%)`,
        }}
    />
);

export default Glow;
