import Reveal from './Reveal.jsx';

/*
 * Every section opens the same way: a mono index, a rule that trails off, the
 * title, and an optional standfirst. Repeating the shape is the point — it is
 * what makes five unrelated sections read as one document.
 *
 * The index is decorative (aria-hidden): a screen reader announcing
 * "zero one Selected work" adds noise, and the heading level already carries
 * the structure.
 */
const SectionHeading = ({ index, title, children }) => (
    <Reveal className="mb-[var(--space-block)] flex flex-col gap-4">
        <div className="flex items-center gap-4">
            <span className="label" aria-hidden="true">
                {index}
            </span>
            <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-line to-transparent"
            />
        </div>

        <h2>{title}</h2>

        {children && <p className="max-w-[52ch] text-muted">{children}</p>}
    </Reveal>
);

export default SectionHeading;
