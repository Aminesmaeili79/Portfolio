import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Experience from "../Experience/Experience.jsx";
import Certifications from "../Certifications/Certifications.jsx";

function HomePage() {
    return (
        <>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Certifications/>
        </>
    );
}

export default HomePage;