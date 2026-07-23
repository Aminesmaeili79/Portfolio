import ProjectCard from './ProjectCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Glow from '../ui/Glow.jsx';
import { ArrowUpRightIcon } from '../ui/icons.jsx';

const base = import.meta.env.BASE_URL;

const projects = [
    {
        title: 'NASA Asset Finder',
        img: `${base}project-2.webp`,
        ghLink: 'https://www.github.com/Aminesmaeili79/NASA-Project.git',
        liveLink: 'https://aminesmaeili79.github.io/NASA-Project/',
        info: "Searches NASA's public media archive across video, image and audio, and presents the results in a single browsable library.",
        techStack: ['React', 'REST API'],
    },
    {
        title: 'EUgration',
        img: `${base}project-3.webp`,
        ghLink: 'https://www.github.com/Aminesmaeili79/EUgration.git',
        liveLink: 'https://aminesmaeili79.github.io/EUgration/',
        info: 'Landing page for expats relocating to Europe — immigration guidance and job-seeking resources, focused on Spain.',
        techStack: ['Next.js', 'Aceternity UI', 'shadcn/ui'],
    },
];

const Projects = () => (
    <section id="work" className="section">
        <Glow className="left-[-10%] top-1/4 h-[32rem] w-[32rem]" color="var(--color-accent)" />

        <div className="container-page">
            <SectionHeading index="01 — Work" title="Selected work">
                A couple of things I have built end to end. Each one links to the live site and
                the source.
            </SectionHeading>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 70}>
                        <ProjectCard {...project} />
                    </Reveal>
                ))}
            </div>

            {/*
             * With only two case studies on the page, sending people to the full
             * repo list is more honest than padding the grid with filler.
             */}
            <Reveal delay={140} className="mt-8">
                <a
                    href="https://github.com/aminesmaeili79?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                >
                    More on GitHub
                    <ArrowUpRightIcon className="size-4" />
                </a>
            </Reveal>
        </div>
    </section>
);

export default Projects;
