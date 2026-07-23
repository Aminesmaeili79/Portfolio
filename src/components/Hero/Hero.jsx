import './hero.css';
import { ArrowRightIcon, DocumentIcon, MapPinIcon } from '../ui/icons.jsx';

const CV_URL = `${import.meta.env.BASE_URL}cv.pdf`;

/* The stack strip is a claim a visitor can scan in under a second. Ordered by
   how much of the work each one actually accounts for, not alphabetically.
   Every entry here is backed by a role or project listed further down the
   page — a stack strip that outruns the evidence is the fastest way to lose a
   technical reader. */
const STACK = ['React', 'Next.js', 'FastAPI', 'Node.js', 'Nest.js', 'MongoDB', 'Postgresql', 'MySQL', 'Supabase'];

const Hero = () => (
    <section className="hero flex min-h-[max(38rem,calc(100svh-var(--nav-h)))] items-center">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />

        <div className="container-page py-24">
            <div className="flex max-w-3xl flex-col items-start">
                <p className="label flex items-center gap-2.5 text-accent">
                    <span className="status-dot" aria-hidden="true" />
                    Available for new work
                </p>

                {/*
                 * The name is the H1 and the positioning statement follows it.
                 * A visitor who lands here already knows what site they are on
                 * from the nav; what they do not know is what this person
                 * builds, so that gets the largest readable line after it.
                 */}
                <h1 className="mt-6">Amin Esmaeili</h1>

                <p className="mt-6 text-balance text-xl leading-relaxed text-muted sm:text-2xl">
                    Full-stack developer building{' '}
                    <span className="text-text">banking, insurance and healthcare</span>{' '}
                    systems — from React interfaces down to .NET and Node services.
                </p>

                <p className="label mt-6 flex items-center gap-2">
                    <MapPinIcon className="size-4" />
                    Nicosia, Cyprus
                </p>

                <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <a href="#work" className="btn btn-primary">
                        View selected work
                        <ArrowRightIcon className="size-4" />
                    </a>
                    <a
                        href={CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <DocumentIcon className="size-4" />
                        Résumé
                    </a>
                </div>

                <ul className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {STACK.map((tech) => (
                        <li key={tech} className="label text-subtle">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default Hero;
