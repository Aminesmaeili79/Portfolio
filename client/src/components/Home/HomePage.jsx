import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Blogs from "../Blogs/Blogs.jsx";
import Projects from "../Projects/Projects.jsx";
import Experience from "../Experience/Experience.jsx";

function HomePage() {
    return (
        <>
            <Hero/>
            <About/>
            <Blogs/>
            <Projects/>
            <Experience/>
        </>
    );
}

export default HomePage;