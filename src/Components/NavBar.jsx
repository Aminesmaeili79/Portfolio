import React, { useEffect, useState } from 'react';
import { navLinks } from '../Constants/index.js';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Amin Esmaeili
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`${import.meta.env.BASE_URL}CV.pdf`}
          target="_blank"
          rel="noreferrer noopener"
          className="contact-btn group"
        >
          <div className="inner">
            <span>Download My CV</span>
          </div>
        </a>
      </div>
    </header>
  );
};
export default NavBar;
