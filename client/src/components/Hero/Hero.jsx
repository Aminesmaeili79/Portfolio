import React from 'react';
import './hero.css';
import AnimatedWaves from "../Waves/AnimatedWaves.jsx";
import {Link} from "react-router-dom";
import BlogsHome from "../Blogs/BlogsHome.jsx";

const Hero = () => {
    const projects = document.getElementById("projects")
    return (
        <main className="hero flex flex-col justify-center items-center">
            <div className="hero__waves">
                <AnimatedWaves/>
            </div>
            <div className="introduction w-full md:w-fit text-xs mt-16">
                <h1 className="introduction__heading text-center font-extrabold md:mb-4">Hello 👋, I'm Amin</h1>
                <div className="introduction__desc hidden md:flex flex-col">
                    <h3 className="italic font-extralight">I build full-stack apps</h3>
                    <h3 className="self-end italic font-extralight">And I do it cuz I love coding!</h3>
                </div>
                <div className="hidden md:mt-24 md:flex md:gap-4">
                    <button className="hero__button"><span onClick={() => (
                        scrollTo({
                            top: projects.getBoundingClientRect().top,
                            behavior: "smooth",
                        })
                        )}>Projects</span></button>
                    <button className="hero__button hero__button__2"><Link to="/blogs" >Blog</Link></button>
                    <button className="hero__button hero__button__3"><a target="_blank" href={`${import.meta.env.BASE_URL}cv.pdf`}>Resume</a></button>
                </div>
            </div>
        </main>
    )
}
export default Hero
