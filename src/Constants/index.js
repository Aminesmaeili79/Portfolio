const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const words = [
  { text: 'Ideas', imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: 'Concepts', imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: 'Designs', imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: 'Code', imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
  { text: 'Ideas', imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: 'Concepts', imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: 'Designs', imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: 'Code', imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
  { prefix: '+', value: 1.5, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Hours Of Full-Stack Dev' },
  { value: 6, suffix: '+', label: 'Completed Projects' },
  { value: 6, suffix: '', label: 'Official Certificates' },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/nextjs.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/nodejs.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/express-js.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/typescript.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/tailwind-css.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/sass.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/csharp.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/mysql.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/mongodb.png`,
  },
];

const abilities = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/seo.png`,
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/chat.png`,
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.png`,
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
  },
  {
    name: 'Python Developer',
    imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg`,
  },
  {
    name: 'Backend Developer',
    imgPath: `${import.meta.env.BASE_URL}images/logos/node.png`,
  },
  {
    name: 'Interactive Developer',
    imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
  },
  {
    name: 'Project Manager',
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: 'Designed and developed beautiful UI/UX web applications for customers',
    imgPath: `${import.meta.env.BASE_URL}images/upwork.png`,
    logoPath: `${import.meta.env.BASE_URL}images/upwork-logo.png`,
    title: 'Freelancer',
    date: 'March 2025 - Present',
    responsibilities: [
      'Delivered high-quality projects on time and within budget by managing multiple assignments simultaneously.',
      'Collaborated closely with diverse clients to understand their needs and provide tailored solutions that drove business success.',
      'Coordinated with the product team to implement features based on feedback.',
    ],
  },
  {
    review: 'Junior fullstack developer using ASP.NET Core, Razor Pages, and MERN stack',
    imgPath: `${import.meta.env.BASE_URL}images/websure.png`,
    logoPath: `${import.meta.env.BASE_URL}images/websure-logo.jpeg`,
    title: 'Full Stack Developer',
    date: 'August 2024 - Present',
    responsibilities: [
      'Implemented robust automatic payment system using PAN number which increased insurance companies efficiency by 80%.',
      'Designed RESTful APIs to handle client-server communication, enabling seamless integration with frontend applications.',
      'Utilized a variety of industry-standard tools and technologies to consistently meet or exceed client expectations.',
    ],
  },
  {
    review:
      'Took the role of a backend .NET developer to implement and upgrade the UMS system as an intern',
    imgPath: `${import.meta.env.BASE_URL}images/ozbul.png`,
    logoPath: `${import.meta.env.BASE_URL}images/ozbul-logo.jpg`,
    title: 'Intern Backend Developer',
    date: 'June 2024 - August 2024',
    responsibilities: [
      'Developed and maintained robust backend solutions using ASP.NET Core 8.',
      'Collaborated closely experienced senior backend developers to come up with the best practices and systems.',
      'Optimized web applications security by implementing JWT and OAuth authorizations.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
  },
  {
    name: 'logo2',
    imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
  },
  {
    name: 'logo3',
    imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
  },
];

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: `${import.meta.env.BASE_URL}images/client1.png`,
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: `${import.meta.env.BASE_URL}images/client3.png`,
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: `${import.meta.env.BASE_URL}images/client2.png`,
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: `${import.meta.env.BASE_URL}images/client5.png`,
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: `${import.meta.env.BASE_URL}images/client4.png`,
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: `${import.meta.env.BASE_URL}images/client6.png`,
  },
];

const socialImgs = [
  {
    name: 'insta',
    imgPath: `${import.meta.env.BASE_URL}images/insta.png`,
  },
  {
    name: 'fb',
    imgPath: `${import.meta.env.BASE_URL}images/fb.png`,
  },
  {
    name: 'x',
    imgPath: `${import.meta.env.BASE_URL}images/x.png`,
  },
  {
    name: 'linkedin',
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
