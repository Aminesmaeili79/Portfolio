import React from 'react';
import './hero.css';
import AnimatedWaves from "../Waves/AnimatedWaves.jsx";

const Hero = () => {
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
                    <button className="hero__button">Projects</button>
                    <button className="hero__button hero__button__2">Blog</button>
                    <button className="hero__button hero__button__3">Resume</button>
                </div>
            </div>
        </main>
    )
}
export default Hero
