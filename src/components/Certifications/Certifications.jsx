import './certifications.css';
import BackgroundBlob from '../ui/BackgroundBlob.jsx';
import Reveal from '../ui/Reveal.jsx';
import { ExternalLinkIcon } from '../ui/icons.jsx';

const base = import.meta.env.BASE_URL;

const certifications = [
    {
        name: 'ISC2 Candidate',
        issuer: 'ISC2',
        date: '2025',
        image: `${base}isc2.webp`,
        credentialUrl: 'https://www.credly.com/badges/394f5534-0405-42f1-917b-88f9b1832a64',
        skills: ['Cloud Computing', 'AWS', 'Infrastructure'],
    },
    {
        name: 'Complete Intro to React, v9',
        issuer: 'Frontend Masters',
        date: '2025',
        image: `${base}frontend-masters.webp`,
        credentialUrl:
            'https://static.frontendmasters.com/ud/c/21bab8e3cf/hixpadIGiV/complete-react-v9.pdf',
        skills: ['React', 'JavaScript', 'UI/UX'],
    },
    {
        name: 'JavaScript: The Hard Parts v2',
        issuer: 'Frontend Masters',
        date: '2024',
        image: `${base}frontend-masters.webp`,
        credentialUrl:
            'https://static.frontendmasters.com/ud/c/a5c2c4ad04/fjjCYVxYTO/javascript-hard-parts-v2.pdf',
        skills: ['JavaScript', 'Closure', 'Asynchronous JavaScript'],
    },
    {
        name: 'VIM Fundamentals',
        issuer: 'Frontend Masters',
        date: '2024',
        image: `${base}frontend-masters.webp`,
        credentialUrl:
            'https://static.frontendmasters.com/ud/c/a5c2c4ad04/umKkvduGoy/vim-fundamentals.pdf',
        skills: ['VIM', 'Productivity', 'Linux'],
    },
    {
        name: 'Introduction to Git and GitHub',
        issuer: 'Google',
        date: '2023',
        image: `${base}google.webp`,
        credentialUrl:
            'https://www.coursera.org/account/accomplishments/certificate/WFEPZZV7S894',
        skills: ['Git', 'GitHub', 'Version Control'],
    },
    {
        name: 'Introduction to Cybersecurity Tools & Cyberattacks',
        issuer: 'IBM',
        date: '2023',
        image: `${base}ibm.webp`,
        credentialUrl:
            'https://www.coursera.org/account/accomplishments/certificate/8ZNDJ6NYYM54',
        skills: ['Cybersecurity', 'Tools', 'Python'],
    },
    {
        name: 'Introduction to Python for Cybersecurity',
        issuer: 'InfoSec',
        date: '2023',
        image: `${base}infosec.webp`,
        credentialUrl:
            'https://www.coursera.org/account/accomplishments/certificate/HKDW86MGGZMX',
        skills: ['Python', 'Cybersecurity', 'Ethical Hacking'],
    },
];

const Certifications = () => (
    <section id="certifications" className="section relative">
        <div className="container-page">
            <Reveal as="h2" className="mb-10 font-extrabold md:mb-14">
                Certifications
            </Reveal>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                    <Reveal
                        as="li"
                        key={cert.name}
                        delay={index * 50}
                        className="card flex flex-col p-5 lg:p-6"
                    >
                        <img
                            src={cert.image}
                            alt={`${cert.issuer} badge`}
                            width="200"
                            height="200"
                            loading="lazy"
                            decoding="async"
                            className="mb-4 size-16 rounded-full object-contain"
                        />

                        <h3 className="font-bold">{cert.name}</h3>
                        <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

                        <div className="mt-1 mb-5 flex items-center justify-between gap-3">
                            <span className="text-sm italic text-muted">{cert.date}</span>
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="verify-link inline-flex min-h-11 items-center gap-1.5 text-sm"
                                >
                                    <ExternalLinkIcon className="size-4" />
                                    Verify
                                    <span className="sr-only"> {cert.name} credential</span>
                                </a>
                            )}
                        </div>

                        <ul className="mt-auto flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                                <li key={skill} className="pill">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </ul>
        </div>

        <BackgroundBlob position="left-[5%] top-1/4" color="var(--color-accent-deep)" />
    </section>
);

export default Certifications;
