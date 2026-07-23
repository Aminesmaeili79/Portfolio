import './background-blob.css';

/*
 * Purely decorative ambient glow. Keyframes live in the stylesheet now — the
 * previous version inlined a <style> tag per instance, so three blobs meant
 * three duplicate copies of the same CSS in the DOM.
 */
const BackgroundBlob = ({ position = '', color = 'var(--color-accent-deep)' }) => (
    <div
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 ${position}`}
    >
        <div className="blob" style={{ backgroundColor: color }} />
    </div>
);

export default BackgroundBlob;
