import './project-card.css';
import { GitHubIcon, LiveLinkIcon } from '../ui/icons.jsx';

/*
 * `wide` swaps to a side-by-side layout from `sm` up. Orientation used to be
 * computed in JS from a one-shot window measurement, which never updated on
 * resize or rotate and flipped layout after first paint.
 */
const ProjectCard = ({ wide = false, img, title, ghLink, liveLink, info, techStack = [] }) => (
    <article className={`project card flex h-full flex-col overflow-hidden ${wide ? 'sm:flex-row' : ''}`}>
        <div className={`shrink-0 ${wide ? 'sm:w-56 lg:w-64' : ''}`}>
            <img
                src={img}
                alt={`Screenshot of the ${title} project`}
                width="900"
                height="545"
                loading="lazy"
                decoding="async"
                className={`w-full object-cover ${wide ? 'h-44 sm:h-full' : 'h-44'}`}
            />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 lg:p-6">
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold">{title}</h3>

                <div className="project__links flex shrink-0 items-center">
                    {ghLink && (
                        <a
                            href={ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} source code on GitHub`}
                            className="inline-flex size-11 items-center justify-center rounded-lg"
                        >
                            <GitHubIcon className="size-6" />
                        </a>
                    )}
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} live site`}
                            className="inline-flex size-11 items-center justify-center rounded-lg"
                        >
                            <LiveLinkIcon className="size-6" />
                        </a>
                    )}
                </div>
            </div>

            <p className="flex-1 text-sm text-muted">{info}</p>

            <ul className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <li key={tech} className="pill">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    </article>
);

export default ProjectCard;
