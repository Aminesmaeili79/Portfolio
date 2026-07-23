import './footer.css';
import SocialLinks from '../ui/SocialLinks.jsx';

const Footer = () => (
    <footer className="footer mt-8">
        <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
                <p className="font-semibold tracking-tight">Amin Esmaeili</p>
                <p className="footer__meta text-sm text-subtle">
                    Built with{' '}
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                        React
                    </a>
                    ,{' '}
                    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                        Vite
                    </a>{' '}
                    and{' '}
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                        Tailwind CSS
                    </a>
                    .
                </p>
                <p className="text-sm text-subtle">
                    &copy; {new Date().getFullYear()} Amin Esmaeili
                </p>
            </div>

            <SocialLinks iconClass="size-5" className="gap-1 sm:justify-end" />
        </div>
    </footer>
);

export default Footer;
