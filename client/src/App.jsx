import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import BlogPage from "./components/Blogs/BlogPage.jsx";
import Layout from "./components/Layout/Layout.jsx";

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

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
            </Route>
        </Routes>
    );
}

export default App;