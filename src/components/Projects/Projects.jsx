import ProjectCard from './ProjectCard.jsx';
import BackgroundBlob from '../ui/BackgroundBlob.jsx';
import Reveal from '../ui/Reveal.jsx';

const base = import.meta.env.BASE_URL;

const projects = [
    {
        title: 'NASA Asset Finder',
        img: `${base}project-2.webp`,
        ghLink: 'https://www.github.com/Aminesmaeili79/NASA-Project.git',
        liveLink: 'https://aminesmaeili79.github.io/NASA-Project/',
        info: "A simple project to call the NASA's video, image and audio files and provide the content for the user.",
        techStack: ['React', 'API'],
    },
    {
        title: 'EUgration',
        img: `${base}project-3.webp`,
        ghLink: 'https://www.github.com/Aminesmaeili79/EUgration.git',
        liveLink: 'https://aminesmaeili79.github.io/EUgration/',
        info: 'Immigration/Job-seeking landing-page for expats to have a better life in Europe or Spain (exclusively).',
        techStack: ['Next.js', 'AceternityUI', 'shadcn/ui'],
    },
];

const Projects = () => (
    <section id="projects" className="section relative">
        <div className="container-page">
            <Reveal as="h2" className="mb-10 font-extrabold md:mb-14">
                Projects
            </Reveal>

            {/* Two cards, so an even 2-up rather than the previous 3-col bento.
                Grid stretch already equalises heights in a single row. */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 60}>
                        <ProjectCard {...project} />
                    </Reveal>
                ))}
            </div>
        </div>

        <BackgroundBlob position="left-[10%] top-1/3" color="var(--color-plum-deep)" />
    </section>
);

export default Projects;
