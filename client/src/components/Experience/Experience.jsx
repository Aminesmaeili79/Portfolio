import "./experience.css"
import BackgroundBlob from "../ui/BackgroundBlob.jsx";

const experiences = [
    {
        "company": "Fiverr",
        "position": "Freelancer",
        // "location": "Remote",
        "date": "03/25 - Present",
        "desc": "I have been trying to get into the world of freelancing, although it's been a challenge for me, but haven't backed down yet!",
        "skills": ["MERN", "ASP.Net", "UI/UX"]
    },
    {
        "company": "WebsureSoft",
        "position": "Web Developer",
        "location": "Nicosia, Cyprus",
        "date": "08/24 - Present",
        "desc": "I have taken the role full-stack developer using React and .NET stack to provide seemless applications for banking and insurance systems.",
        "skills": ["React", "ASP.Net", "Bootstrap"]
    },
    {
        "company": "Ozbul Iletisim",
        "position": "Intern Back-End Developer",
        "location": "Famagusta, Cyprus",
        "date": "06/24 - 08/24",
        "desc": "Was assigned the role of back-end developer to create and implement CMS system, CRUD-based APIs, with supervising of junior developers.",
        "skills": ["ASP.Net", "API", "Mock"]
    },
]

const Experience = () => {
    return (
        <div className="font-bold w-[100vw] mt-[24em] flex flex-col gap-12 items-center">
            <h2>Experience</h2>
            <section className="xl:px-[16em] lg:px-[8em] md:px-[4em] px-[2em] flex flex-col lg:grid lg:grid-cols-3 gap-4">
                {experiences.map(experience => (
                    <div className="bg-[#31343D] xl:p-6 lg:p-4 md:p-6 p-4 rounded-lg experience flex flex-col">
                            <h2>{experience.company}</h2>
                        <h3 className="exp-position font-regular mb-1">{experience.position}</h3>
                            <div className="company flex justify-between items-center mb-[2em]">
                            <h4 className="font-light italic ">{experience.date}</h4>
                            <h3 className="font-extralight italic">{experience.location}</h3>
                        </div>
                        <p className="font-regular mb-[2em]">{experience.desc}</p>
                        <div className="exp-skills flex gap-2">
                            {experience.skills.map(skill => (
                                <a href="">{skill}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <BackgroundBlob position={"right-0"} color={"#128d8a"}/>
        </div>
    )
}
export default Experience
