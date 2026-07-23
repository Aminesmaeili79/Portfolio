import './experience.css';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Glow from '../ui/Glow.jsx';

/*
 * Ordered current-roles-first, then past roles most-recent-first. The previous
 * order was neither chronological nor grouped, so the reader had no way to tell
 * which role was the main one.
 */
const experiences = [
    {
        company: 'WebsureSoft',
        position: 'Web Developer',
        location: 'Nicosia, Cyprus',
        date: 'Aug 2024 — Present',
        current: true,
        desc: 'Full-stack work on banking and insurance systems, building React front ends against .NET services.',
        skills: ['React', 'ASP.NET', 'Bootstrap'],
    },
    {
        company: 'Upwork',
        position: 'Freelance Developer',
        date: 'Mar 2025 — Present',
        current: true,
        desc: 'Independent full-stack briefs taken on alongside full-time work, across MERN and ASP.NET stacks.',
        skills: ['MERN', 'ASP.NET', 'UI/UX'],
    },
    {
        company: 'CyprusCodes · Futurecast.io',
        position: 'Junior Full-stack Developer',
        date: 'May 2025 — Aug 2025',
        desc: 'Contributed to Blinx, a healthcare platform used across the UK, working in React and Node with a Storybook-driven component library.',
        skills: ['React', 'Node.js', 'MongoDB', 'Storybook'],
    },
    {
        company: 'Ozbul Iletisim',
        position: 'Back-end Developer Intern',
        location: 'Famagusta, Cyprus',
        date: 'Jun 2024 — Aug 2024',
        desc: 'Built a CMS and CRUD APIs in ASP.NET, and supported junior developers on the team.',
        skills: ['ASP.NET', 'REST API', 'Mocking'],
    },
];

const Experience = () => (
    <section id="experience" className="section">
        <Glow
            className="right-[-12%] top-1/3 h-[30rem] w-[30rem]"
            color="var(--color-plum-deep)"
            opacity={0.14}
        />

        <div className="container-page">
            <SectionHeading index="02 — Experience" title="Where I have worked" />

            <ol className="max-w-3xl">
                {experiences.map((role, index) => (
                    <Reveal
                        as="li"
                        key={`${role.company}-${role.date}`}
                        delay={index * 60}
                        className="timeline__item"
                    >
                        <span
                            aria-hidden="true"
                            className={`timeline__marker ${role.current ? 'timeline__marker--current' : ''}`}
                        />

                        <p className="label">
                            {role.date}
                            {role.location && (
                                <>
                                    <span aria-hidden="true"> · </span>
                                    {role.location}
                                </>
                            )}
                        </p>

                        <h3 className="mt-2 font-semibold">{role.position}</h3>
                        <p className="mt-0.5 text-sm font-medium text-accent">{role.company}</p>

                        <p className="mt-3 text-sm leading-relaxed text-muted">{role.desc}</p>

                        <ul className="mt-4 flex flex-wrap gap-1.5">
                            {role.skills.map((skill) => (
                                <li key={skill} className="pill">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </ol>
        </div>
    </section>
);

export default Experience;
