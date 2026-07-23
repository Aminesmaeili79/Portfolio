import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Glow from '../ui/Glow.jsx';
import { ArrowUpRightIcon, MailIcon } from '../ui/icons.jsx';

const EMAIL = 'aminesmaeili79@yahoo.com';

/*
 * The old page had no contact section at all — the only route to Amin was a row
 * of icon links in the footer. For a portfolio that is the one conversion the
 * whole page exists to produce, so it gets a section and a primary CTA.
 *
 * A mailto link rather than a form: a form needs a backend, a spam strategy and
 * an error state, and every one of those is a thing that can silently drop a
 * message. The address is also shown in full so it can be copied by hand.
 */
const Contact = () => (
    <section id="contact" className="section">
        <Glow
            className="left-1/2 top-0 h-[34rem] w-[44rem] -translate-x-1/2"
            color="var(--color-accent)"
            opacity={0.15}
        />

        <div className="container-page">
            <SectionHeading index="05 — Contact" title="Let's build something" />

            <div className="flex flex-col items-start gap-10">
                <Reveal>
                    <p className="max-w-[46ch] text-lg leading-relaxed text-muted">
                        I am open to full-time roles and freelance work. If you have a
                        project, a role, or just a question about something here — my inbox
                        is open.
                    </p>
                </Reveal>

                <Reveal delay={60} className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                        <MailIcon className="size-4" />
                        Email me
                    </a>

                    <a
                        href="https://linkedin.com/in/aminesmaeili79"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        LinkedIn
                        <ArrowUpRightIcon className="size-4" />
                    </a>
                </Reveal>

                <Reveal delay={120}>
                    <a
                        href={`mailto:${EMAIL}`}
                        className="label break-all transition-colors hover:text-accent"
                    >
                        {EMAIL}
                    </a>
                </Reveal>
            </div>
        </div>
    </section>
);

export default Contact;
