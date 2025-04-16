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
    name: 'Contact me',
    link: '#contact',
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

const techStackIcons = [
  {
    name: '"M" For Mongodb',
    modelPath: `${import.meta.env.BASE_URL}images/mongodb.svg`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: '"E" For Express.js',
    modelPath: `${import.meta.env.BASE_URL}images/express.svg`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: '"R" For React',
    modelPath: `${import.meta.env.BASE_URL}images/react.svg`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: '"N" For Node.js',
    modelPath: `${import.meta.env.BASE_URL}images/node.svg`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'And .NET Developer',
    modelPath: `${import.meta.env.BASE_URL}images/netcore.svg`,
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

const socialImgs = [
  {
    name: 'gh',
    imgPath: `${import.meta.env.BASE_URL}images/github.png`,
    url: 'https://www.github.com/aminesmaeili79',
  },
  {
    name: 'x',
    imgPath: `${import.meta.env.BASE_URL}images/x.png`,
    url: 'https://www.x.com/Aminesmaeili79',
  },
  {
    name: 'linkedin',
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.webp`,
    url: 'https://www.linkedin.com/in/aminesmaeili79/',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  navLinks,
};
