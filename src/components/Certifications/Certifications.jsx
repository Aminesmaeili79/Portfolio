import './certifications.css';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { ArrowUpRightIcon } from '../ui/icons.jsx';

const base = import.meta.env.BASE_URL;

const certifications = [
    {
        name: 'ISC2 Candidate',
        issuer: 'ISC2',
        date: '2025',
        image: `${base}isc2.webp`,
        credentialUrl: 'https://www.credly.com/badges/394f5534-0405-42f1-917b-88f9b1832a64',
    },
    {
        name: 'Complete Intro to React, v9',
        issuer: 'Frontend Masters',
        date: '2025',
        image: `${base}frontend-masters.webp`,
        credentialUrl:
            'https://static.frontendmasters.com/ud/c/21bab8e3cf/hixpadIGiV/complete-react-v9.pdf',
    },
    {
        name: 'JavaScript: The Hard Parts, v2',
        issuer: 'Frontend Masters',
        date: '2024',
        image: `${base}frontend-masters.webp`,
        credentialUrl:
            'https://static.frontendmasters.com/ud/c/a5c2c4ad04/fjjCYVxYTO/javascript-hard-parts-v2.pdf',
    },
    {
        name: 'Vim Fundamentals',
        issuer: 'Frontend Masters',
        date: '2024',
        image: `${base}frontend-masters.webp`,
        credentialUrl:
            'https://static.frontendmasters.com/ud/c/a5c2c4ad04/umKkvduGoy/vim-fundamentals.pdf',
    },
    {
        name: 'Introduction to Git and GitHub',
        issuer: 'Google',
        date: '2023',
        image: `${base}google.webp`,
        credentialUrl:
            'https://www.coursera.org/account/accomplishments/certificate/WFEPZZV7S894',
    },
    {
        name: 'Cybersecurity Tools & Cyberattacks',
        issuer: 'IBM',
        date: '2023',
        image: `${base}ibm.webp`,
        credentialUrl:
            'https://www.coursera.org/account/accomplishments/certificate/8ZNDJ6NYYM54',
    },
    {
        name: 'Introduction to Python for Cybersecurity',
        issuer: 'InfoSec',
        date: '2023',
        image: `${base}infosec.webp`,
        credentialUrl:
            'https://www.coursera.org/account/accomplishments/certificate/HKDW86MGGZMX',
    },
];

const Certifications = () => (
    <section id="certifications" className="section">
        <div className="container-page">
            <SectionHeading index="04 — Credentials" title="Certifications" />

            <ul className="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-x-8">
                {certifications.map((cert, index) => (
                    <Reveal as="li" key={cert.name} delay={Math.min(index, 5) * 40}>
                        <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert"
                        >
                            <span className="cert__badge">
                                <img
                                    src={cert.image}
                                    alt=""
                                    width="80"
                                    height="80"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </span>

                            <span className="min-w-0 flex-1">
                                <span className="block font-medium leading-snug text-text">
                                    {cert.name}
                                </span>
                                <span className="label mt-1 block">
                                    {cert.issuer}
                                    <span aria-hidden="true"> · </span>
                                    {cert.date}
                                </span>
                            </span>

                            <ArrowUpRightIcon className="cert__verify mt-1 size-4 shrink-0" />
                            <span className="sr-only">View credential</span>
                        </a>
                    </Reveal>
                ))}
            </ul>
        </div>
    </section>
);

export default Certifications;
