import React, {useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard.jsx";
import BackgroundBlob from "../ui/BackgroundBlob.jsx";

const Projects = () => {
    const [screenWidth, setScreenWidth] = useState(null)

    useEffect(() => {
        setScreenWidth(document.documentElement.getBoundingClientRect().width)
    },[document.documentElement.getBoundingClientRect().width]);

    return (
            <section className="relative flex flex-col items-center w-[100vw] xl:px-[12em] lg:px-[8em] md:px-[4em] px-[1em] mt-[8em]">
                <div className="projects__heading">
                    <h2 className="font-bold">Projects</h2>
                </div>
                <div className="projects flex flex-col gap-4 lg:grid lg:grid-cols-3 grid-cols-1 auto-rows-fr mt-16">
                    <div className="col-span-2">
                        <ProjectCard
                            direction={screenWidth < 600 ? "col" : "row" }
                            img={`${import.meta.env.BASE_URL}project-1.png`}
                            title="Portfolio"
                            ghLink="https://www.github.com/Aminesmaeili79/Portfolio-New.git"
                            liveLink="https://aminesmaeili79.github.io/Portfolio-New/"
                            info="This project was aimed to create a minimalist and simple, though decent-looking portfolio, designed from scratch to showcase my styling skills."
                            blog="Read Blog"
                            techStack={["MERN", "TailwindCSS"]}
                        />
                    </div>

                    <div className="col-span-1 row-span-2">
                        <ProjectCard
                            direction={`${screenWidth > 1025 ? 'col' : screenWidth < 600 ? 'col' : 'row'}`}
                            img={`${import.meta.env.BASE_URL}project-2.png`}
                            title="NASA Asset Finder"
                            ghLink="https://www.github.com/Aminesmaeili79/NASA-Project.git"
                            liveLink="https://aminesmaeili79.github.io/NASA-Project/"
                            info="A simple project to call the NASA's video, image and audio files and provide the content for the user."
                            blog="Read Blog"
                            techStack={["React", "API"]}
                        />
                    </div>

                    <div className="col-span-2">
                        <ProjectCard
                            direction={screenWidth < 600 ? "col" : "row" }
                            img={`${import.meta.env.BASE_URL}project-3.png`}
                            title="EUgration"
                            ghLink="https://www.github.com/Aminesmaeili79/EUgration.git"
                            liveLink="https://aminesmaeili79.github.io/EUgration/"
                            info="Immigration/Job-seeking landing-page for expats to have a better life in Europe or Spain (exclusively)."
                            blog="Read Blog"
                            techStack={["Next.js", "AceternityUI", "shadcn/ui"]}
                        />
                    </div>
                    <div className="col-span-3">
                        <ProjectCard
                            direction={screenWidth < 600 ? "col" : "row" }
                            img={`${import.meta.env.BASE_URL}project-4.png`}
                            title="Old Portfolio"
                            ghLink="https://www.github.com/Aminesmaeili79/Portfolio.git"
                            liveLink="https://aminesmaeili79.github.io/Portfolio/"
                            info="This project was aimed to create a minimalist and simple, though decent-looking portfolio, designed from scratch to showcase my styling skills."
                            blog="Read Blog"
                            techStack={["React", "GSAP", "Three.js"]}
                        />
                    </div>
                </div>
                <BackgroundBlob position={"left-[10%]"} color={"#ff008055"}/>
            </section>
    )
}

export default Projects