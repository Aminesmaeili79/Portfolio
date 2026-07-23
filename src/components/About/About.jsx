import './about.css';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Glow from '../ui/Glow.jsx';

const avatar = `${import.meta.env.BASE_URL}pxArt.webp`;

/*
 * Grouped rather than a flat cloud of tags. A flat list of twenty logos tells a
 * reader nothing about depth; grouping says which layer of the stack each thing
 * belongs to, and the grouping itself is a signal that the author thinks in
 * terms of architecture.
 *
 * Everything listed is backed by a role, project or certification elsewhere on
 * the page.
 */
const capabilities = [
    { area: 'Front end', items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
    { area: 'Back end', items: ['ASP.NET', 'Node.js', 'REST APIs'] },
    { area: 'Data', items: ['MongoDB', 'SQL'] },
    { area: 'Practice', items: ['Git', 'Storybook', 'Vim', 'Accessibility'] },
];

const About = () => (
    <section id="about" className="section">
        <Glow
            className="left-[-8%] top-1/2 h-[28rem] w-[28rem]"
            color="var(--color-plum-deep)"
            opacity={0.13}
        />

        <div className="container-page">
            <SectionHeading index="03 — About" title="How I think about the work" />

            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
                <div className="flex flex-col gap-6">
                    <Reveal>
                        <p className="text-lg leading-relaxed text-muted">
                            I build software for domains where being wrong is expensive —
                            banking, insurance, healthcare. That shapes how I work: I would
                            rather ship something small that holds up than something broad
                            that nearly works.
                        </p>
                    </Reveal>

                    <Reveal delay={60}>
                        <p className="leading-relaxed text-muted">
                            Most of my time goes on the seam between the interface and the
                            services behind it. I care about the parts users never see
                            directly but always feel: accessible markup, states that are
                            actually handled, and pages that stay fast on a bad connection.
                        </p>
                    </Reveal>

                    <Reveal delay={120}>
                        <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {capabilities.map(({ area, items }) => (
                                <div key={area} className="capability">
                                    <dt className="label mb-3">{area}</dt>
                                    <dd>
                                        <ul className="flex flex-wrap gap-1.5">
                                            {items.map((item) => (
                                                <li key={item} className="pill">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>

                <Reveal delay={80} className="order-first w-44 shrink-0 md:order-none md:w-64">
                    <div className="portrait">
                        <img
                            src={avatar}
                            alt="Pixel-art portrait of Amin Esmaeili"
                            width="800"
                            height="800"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);

export default About;
