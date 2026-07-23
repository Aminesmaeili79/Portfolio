import './project-card.css';
import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons.jsx';

/*
 * The whole card is one link to the live site, via a stretched pseudo-element
 * on the title anchor. That keeps the accessible name on a real <a> — a div
 * with an onClick would give a screen reader nothing to announce — while still
 * letting a mouse user hit anywhere on the card.
 *
 * The GitHub link is a second, separate destination, so it sits above the
 * stretched layer (.project__action) rather than nesting inside the anchor.
 * Nested <a> elements are invalid HTML and browsers resolve them
 * unpredictably.
 */
const ProjectCard = ({ img, title, ghLink, liveLink, info, techStack = [] }) => (
    <article className="project card flex h-full flex-col overflow-hidden">
        <div className="project__media aspect-[16/10]">
            <img
                src={img}
                alt={`Screenshot of the ${title} project`}
                width="900"
                height="562"
                loading="lazy"
                decoding="async"
            />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6 lg:p-7">
            <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold">
                    {liveLink ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                        >
                            {title}
                            <span className="sr-only"> — open the live site</span>
                        </a>
                    ) : (
                        title
                    )}
                </h3>

                <ArrowUpRightIcon className="project__arrow mt-1 size-4 shrink-0 text-subtle" />
            </div>

            <p className="flex-1 text-sm leading-relaxed text-muted">{info}</p>

            <ul className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                    <li key={tech} className="pill">
                        {tech}
                    </li>
                ))}
            </ul>

            {ghLink && (
                <div className="flex items-center border-t border-line pt-4">
                    <a
                        href={ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__action inline-flex min-h-11 items-center gap-2 text-sm font-medium"
                    >
                        <GitHubIcon className="size-4" />
                        Source
                        <span className="sr-only"> code for {title} on GitHub</span>
                    </a>
                </div>
            )}
        </div>
    </article>
);

export default ProjectCard;
