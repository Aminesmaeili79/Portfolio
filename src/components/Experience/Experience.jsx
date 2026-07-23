import BackgroundBlob from '../ui/BackgroundBlob.jsx';
import Reveal from '../ui/Reveal.jsx';

const experiences = [
    {
        company: 'WebsureSoft',
        position: 'Web Developer',
        location: 'Nicosia, Cyprus',
        date: '08/24 - Present',
        desc: 'I have taken the role of full-stack developer using React and .NET to provide seamless applications for banking and insurance systems.',
        skills: ['React', 'ASP.Net', 'Bootstrap'],
    },
    {
        company: 'CyprusCodes | Futurecast.io',
        position: 'Junior Fullstack Developer',
        date: '05/25 - 08/25',
        desc: 'Part of the Blinx healthcare project which is used across the UK by more than 40% of the population.',
        skills: ['React', 'Node.js', 'MongoDB', 'Storybook'],
    },
    {
        company: 'Ozbul Iletisim',
        position: 'Intern Back-End Developer',
        location: 'Famagusta, Cyprus',
        date: '06/24 - 08/24',
        desc: 'Was assigned the role of back-end developer to create and implement a CMS, CRUD-based APIs, and to supervise junior developers.',
        skills: ['ASP.Net', 'API', 'Mock'],
    },
    {
        company: 'Upwork',
        position: 'Freelancer',
        date: '03/25 - Present',
        desc: "I have been trying to get into the world of freelancing — it's been a challenge, but I haven't backed down yet.",
        skills: ['MERN', 'ASP.Net', 'UI/UX'],
    },
];

const Experience = () => (
    <section id="experience" className="section relative">
        <div className="container-page">
            <Reveal as="h2" className="mb-10 font-extrabold md:mb-14">
                Experience
            </Reveal>

            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {experiences.map((experience, index) => (
                    <Reveal
                        as="li"
                        key={experience.company}
                        delay={index * 60}
                        className="card flex flex-col p-5 lg:p-6"
                    >
                        <h3 className="font-bold">{experience.company}</h3>
                        <p className="mt-1 text-lg text-accent">{experience.position}</p>

                        <p className="mt-1 mb-5 flex flex-wrap items-center gap-x-2 text-sm italic text-muted">
                            <span>{experience.date}</span>
                            {experience.location && (
                                <>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{experience.location}</span>
                                </>
                            )}
                        </p>

                        <p className="mb-6 flex-1 text-sm text-muted">{experience.desc}</p>

                        <ul className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                                <li key={skill} className="pill">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </ul>
        </div>

        <BackgroundBlob position="right-0 top-1/3" color="var(--color-accent-deep)" />
    </section>
);

export default Experience;
