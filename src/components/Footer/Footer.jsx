import './footer.css';
import SocialLinks from '../ui/SocialLinks.jsx';

const Footer = () => (
    <footer className="footer relative mt-24 overflow-hidden">
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[390px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="footer-wave" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stopColor="var(--color-wave-from)" />
                    <stop offset="95%" stopColor="var(--color-wave-to)" />
                </linearGradient>
            </defs>
            <path
                d="M 0,400 L 0,150 C 86.27751196172247,164.0287081339713 172.55502392344494,178.05741626794256 272,179 C 371.44497607655506,179.94258373205744 484.0574162679426,167.79904306220098 594,145 C 703.9425837320574,122.20095693779902 811.2153110047847,88.74641148325357 901,77 C 990.7846889952153,65.25358851674643 1063.0813397129186,75.2153110047847 1150,91 C 1236.9186602870814,106.7846889952153 1338.4593301435407,128.39234449760767 1440,150 L 1440,400 L 0,400 Z"
                fill="url(#footer-wave)"
            />
        </svg>

        <div className="container-page relative flex flex-col items-center gap-4 pt-40 pb-10 text-center">
            <SocialLinks iconClass="size-7" className="gap-3" />

            <p className="text-sm">
                Designed and developed by <span className="font-bold">Amin Esmaeili</span>
            </p>

            <p className="footer__meta text-sm">
                Built with{' '}
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    React
                </a>
                ,{' '}
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    Vite
                </a>
                ,{' '}
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                </a>{' '}
                and{' '}
                <a href="https://heroicons.com" target="_blank" rel="noopener noreferrer">
                    Heroicons
                </a>
            </p>

            <p className="footer__meta text-xs">
                &copy; {new Date().getFullYear()} Amin Esmaeili. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
