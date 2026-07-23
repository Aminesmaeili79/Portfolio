import Hero from '../Hero/Hero.jsx';
import Projects from '../Projects/Projects.jsx';
import Experience from '../Experience/Experience.jsx';
import About from '../About/About.jsx';
import Certifications from '../Certifications/Certifications.jsx';
import Contact from '../Contact/Contact.jsx';

/*
 * Order follows the Portfolio Grid pattern: hero, then work, then the person,
 * then the ask. Work moved above About and Experience because it is the only
 * section a visitor cannot get from a CV — and credentials moved below both,
 * since seven certificates outranking two projects sends the wrong signal.
 */
function HomePage() {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <About />
            <Certifications />
            <Contact />
        </>
    );
}

export default HomePage;
