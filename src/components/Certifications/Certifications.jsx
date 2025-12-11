import "./certifications.css"
import BackgroundBlob from "../ui/BackgroundBlob.jsx";

const certifications = [
  {
    "name": "ISC2 Candidate",
    "issuer": "ISC2",
    "date": "2025",
    "image": `${import.meta.env.BASE_URL}isc2.jpg`,
    "credentialId": "394f5534-0405-42f1-917b-88f9b1832a64",
    "credentialUrl": "https://www.credly.com/badges/394f5534-0405-42f1-917b-88f9b1832a64",
    "skills": ["Cloud Computing", "AWS", "Infrastructure"]
  },
  {
    "name": "Complete Intro to React, v9",
    "issuer": "Frontend Masters",
    "date": "2025",
    "image": `${import.meta.env.BASE_URL}frontend-masters.jpg`,
    "credentialId": "",
    "credentialUrl": "https://static.frontendmasters.com/ud/c/21bab8e3cf/hixpadIGiV/complete-react-v9.pdf",
    "skills": ["React", "JavaScript", "UI/UX"]
  },
  {
    "name": "JavaScript: The Hard Parts v2",
    "issuer": "Frontend Masters",
    "date": "2024",
    "image": `${import.meta.env.BASE_URL}frontend-masters.jpg`,
    "credentialId": "",
    "credentialUrl": "https://static.frontendmasters.com/ud/c/a5c2c4ad04/fjjCYVxYTO/javascript-hard-parts-v2.pdf",
    "skills": ["JavaScript", "Closure", "Asynchronous JavaScript"]
  },
  {
    "name": "VIM Fundamentals",
    "issuer": "Frontend Masters",
    "date": "2024",
    "image": `${import.meta.env.BASE_URL}frontend-masters.jpg`,
    "credentialId": "",
    "credentialUrl": "https://static.frontendmasters.com/ud/c/a5c2c4ad04/umKkvduGoy/vim-fundamentals.pdf",
    "skills": ["VIM", "Productivity", "Linux"]
  },
  {
    "name": "Introduction to Git and GitHub",
    "issuer": "Google",
    "date": "2023",
    "image": `${import.meta.env.BASE_URL}google.jpg`,
    "credentialId": "",
    "credentialUrl": "https://www.coursera.org/account/accomplishments/certificate/WFEPZZV7S894",
    "skills": ["Git", "GitHub", "Version Control"]
  },
  {
    "name": "Introduction to Cybersecurity Tools & Cyberattacks",
    "issuer": "IBM",
    "date": "2023",
    "image": `${import.meta.env.BASE_URL}ibm.png`,
    "credentialId": "",
    "credentialUrl": "https://www.coursera.org/account/accomplishments/certificate/8ZNDJ6NYYM54",
    "skills": ["Cybersecurity", "Tools", "Python"]
  },
  {
    "name": "Introduction to Python for Cybersecurity",
    "issuer": "InfoSec",
    "date": "2023",
    "image": `${import.meta.env.BASE_URL}infosec.jpg`,
    "credentialId": "",
    "credentialUrl": "https://www.coursera.org/account/accomplishments/certificate/HKDW86MGGZMX",
    "skills": ["Python", "Cybersecurity", "Ethical Hacking"]
  },
]

const Certifications = () => {
  return (
    <div id="certifications" className="font-bold w-[100vw] mt-[24em] flex flex-col gap-12 items-center">
      <h2>Certifications</h2>
      <section className="xl:px-[16em] lg:px-[8em] md:px-[4em] px-[2em] flex flex-col lg:grid lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="certification bg-[#31343D] xl:p-6 lg:p-4 md:p-6 p-4 rounded-lg flex flex-col">
            <div className="cert-image mb-4">
              <img 
                src={cert.image} 
                alt={`${cert.name} certificate`}
                className="cert-badge-img"
              />
            </div>
            <h3 className="cert-name font-bold mb-1">{cert.name}</h3>
            <h4 className="cert-issuer font-regular mb-1">{cert.issuer}</h4>
            <div className="cert-meta flex justify-between items-center mb-[1.5em]">
              <span className="cert-date font-light italic">{cert.date}</span>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="verify-link flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Verify
                </a>
              )}
            </div>
            <div className="cert-skills flex gap-2 flex-wrap mt-auto">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
      <BackgroundBlob position={"left-[5%]"} color={"#6366f1"} />
    </div>
  )
}

export default Certifications
