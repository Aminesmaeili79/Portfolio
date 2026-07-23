import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx';

const SOCIALS = [
    {
        label: 'GitHub profile',
        href: 'https://github.com/aminesmaeili79',
        Icon: GitHubIcon,
    },
    {
        label: 'LinkedIn profile',
        href: 'https://linkedin.com/in/aminesmaeili79',
        Icon: LinkedInIcon,
    },
    {
        label: 'Email Amin',
        href: 'mailto:aminesmaeili79@yahoo.com',
        Icon: MailIcon,
    },
];

/*
 * Icon-only links, so each carries an aria-label. The 44x44 hit area is on the
 * <a> itself while the glyph stays visually smaller.
 */
const SocialLinks = ({ iconClass = 'size-6', className = '' }) => (
    <ul className={`flex items-center gap-1 ${className}`}>
        {SOCIALS.map(({ label, href, Icon }) => (
            <li key={href}>
                <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    className="inline-flex size-11 items-center justify-center rounded-full text-text transition-colors hover:text-accent"
                >
                    <Icon className={iconClass} />
                </a>
            </li>
        ))}
    </ul>
);

export default SocialLinks;
