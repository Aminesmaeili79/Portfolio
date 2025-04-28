import React from 'react'
import avatar from "/pxArt.png"
import "./about.css"
import { SparklesCore } from "../ui/sparkles.jsx";
import BackgroundBlob from "../ui/BackgroundBlob.jsx";
// import Avatar from "../Avatar/Avatar.jsx";

const About = () => {
    return (
        <section className="mt-[6em] md:mt-[12em] flex flex-col items-center w-[100vw] px-[4em] md:px-[24em]">
            <div className="flex flex-col items-center md:flex-row justify-between gap-16">
                <div className="about order-2 md:order-1">
                    <h2 className="font-bold">I'm a developer aiming to bring innovation and <span className="relative text-[#bf59bb]"><SparklesPreview/>spark</span> into digital world</h2>
                    <p>In my honest opinion, an application must be flawless -- for both devs and users -- and solve the daily problems easily.</p>
                </div>
                <div className="avatar order-1 md:order-2 w-[200px] md:w-[400px]">
                    <img className="rounded-full" src={avatar} alt=""/>
                    {/*<Avatar/>*/}
                    <BackgroundBlob position={"left-[10%]"} color={"#ff0080"}/>
                </div>
            </div>
        </section>
    )
}
export default About


export function SparklesPreview() {
    return (
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="absolute w-full top-0 left-0 h-full"
                    particleColor="#FFFFFF" />
    );
}
