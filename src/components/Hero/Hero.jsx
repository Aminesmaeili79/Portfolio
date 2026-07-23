import './hero.css';
import AnimatedWaves from '../Waves/AnimatedWaves.jsx';
import { ArrowDownIcon, DocumentIcon } from '../ui/icons.jsx';

const CV_URL = `${import.meta.env.BASE_URL}cv.pdf`;

const Hero = () => (
    <section className="hero relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden">
        <div className="hero__waves" aria-hidden="true">
            <AnimatedWaves />
        </div>

        <div className="container-page relative py-16">
            <div className="flex max-w-2xl flex-col items-start gap-6">
                <h1 className="font-extrabold">
                    Hello{' '}
                    <span role="img" aria-label="waving hand">
                        👋
                    </span>
                    ,<br />
                    I&apos;m Amin
                </h1>

                {/* Was `hidden md:flex` — mobile visitors saw the heading and nothing else. */}
                <p className="text-lg italic text-muted sm:text-xl">
                    I build full-stack apps &mdash; and I do it cuz I love coding.
                </p>

                {/* Same: the CTAs were desktop-only. Both are now the first thing
                    a phone visitor can act on. */}
                <div className="mt-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <a href="#projects" className="btn btn-primary">
                        <ArrowDownIcon className="size-5" />
                        View projects
                    </a>
                    <a
                        href={CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <DocumentIcon className="size-5" />
                        Résumé
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
