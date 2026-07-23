import { useCallback, useEffect, useId, useRef, useState } from 'react';
import SocialLinks from '../ui/SocialLinks.jsx';
import { CloseIcon, DocumentIcon, MenuIcon } from '../ui/icons.jsx';
import useScrollSpy from '../../hooks/useScrollSpy.js';

const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);
const CV_URL = `${import.meta.env.BASE_URL}cv.pdf`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeId = useScrollSpy(SECTION_IDS);
    const menuId = useId();
    const toggleRef = useRef(null);
    const panelRef = useRef(null);

    const close = useCallback(() => setIsOpen(false), []);

    /* Escape to dismiss + a focus trap so Tab can't wander behind the overlay. */
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                close();
                toggleRef.current?.focus();
                return;
            }

            if (event.key !== 'Tab') return;

            const focusables = panelRef.current?.querySelectorAll(
                'a[href], button:not([disabled])',
            );
            if (!focusables?.length) return;

            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen, close]);

    /* Lock background scroll; pad for the scrollbar so the page doesn't jump. */
    useEffect(() => {
        if (!isOpen) return;

        const { body, documentElement } = document;
        const scrollbar = window.innerWidth - documentElement.clientWidth;
        const prevOverflow = body.style.overflow;
        const prevPadding = body.style.paddingRight;

        body.style.overflow = 'hidden';
        if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

        panelRef.current?.querySelector('a[href]')?.focus();

        return () => {
            body.style.overflow = prevOverflow;
            body.style.paddingRight = prevPadding;
        };
    }, [isOpen]);

    const navLinkClass = (id) =>
        [
            'relative py-2 text-sm font-medium transition-colors',
            'after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:rounded-full',
            'after:bg-accent after:transition-all after:duration-300',
            activeId === id
                ? 'text-accent after:w-full'
                : 'text-text hover:text-accent after:w-0 hover:after:w-full',
        ].join(' ');

    return (
        <>
        <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
            <nav aria-label="Main" className="container-page flex items-center justify-between gap-6 py-3">
                <a
                    href={import.meta.env.BASE_URL}
                    className="font-display text-base font-extrabold italic tracking-tight text-text transition-colors hover:text-accent md:text-lg"
                >
                    Amin Esmaeili
                </a>

                {/* Desktop */}
                <div className="hidden items-center gap-8 lg:flex">
                    <ul className="flex items-center gap-6">
                        {NAV_LINKS.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={navLinkClass(id)}
                                    aria-current={activeId === id ? 'true' : undefined}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <span aria-hidden="true" className="h-6 w-px bg-line" />

                    <SocialLinks iconClass="size-5" />

                    <a
                        href={CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary px-5 py-2 text-sm"
                    >
                        <DocumentIcon className="size-4" />
                        My CV
                    </a>
                </div>

                {/* Mobile trigger — 44px hit area, labelled, state-announced */}
                <button
                    ref={toggleRef}
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="inline-flex size-11 items-center justify-center rounded-lg text-text transition-colors hover:text-accent lg:hidden"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </nav>
        </header>

            {/*
              * Deliberately a sibling of <header>, not a child. The header uses
              * backdrop-blur, and a backdrop-filter establishes a containing
              * block for fixed-position descendants — nested here, `inset-0`
              * resolved against the 68px header box instead of the viewport.
              */}
            <nav
                aria-label="Mobile"
                id={menuId}
                ref={panelRef}
                inert={!isOpen}
                className={[
                    'fixed inset-0 z-40 lg:hidden',
                    'bg-bg/95 backdrop-blur-lg',
                    'transition-[opacity,transform] duration-300 ease-out',
                    isOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-2 opacity-0',
                ].join(' ')}
            >
                <div className="container-page flex h-full flex-col gap-8 overflow-y-auto pt-24 pb-10">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={close}
                                    aria-current={activeId === id ? 'true' : undefined}
                                    className={[
                                        'flex min-h-14 items-center rounded-lg px-3 text-2xl font-bold transition-colors',
                                        activeId === id
                                            ? 'bg-surface text-accent'
                                            : 'text-text hover:bg-surface hover:text-accent',
                                    ].join(' ')}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex flex-col gap-6 border-t border-line pt-8">
                        <a
                            href={CV_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={close}
                            className="btn btn-primary w-full"
                        >
                            <DocumentIcon className="size-5" />
                            My CV
                        </a>
                        <SocialLinks className="justify-center gap-4" iconClass="size-7" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
