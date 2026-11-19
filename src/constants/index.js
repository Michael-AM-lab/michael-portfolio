import githubIcon from "simple-icons/icons/github.svg?url";

const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Michael brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
   
    title: "Frontend Developer",
    date: "January 2026 - Present",
    responsibilities: [
      "Developed and maintained user-facing features websites.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Michael's contributions to web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    
    title: "Full Stack Developer",
    date: "2026 - Present",
    responsibilities: [
      
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      " To contributed to open-source projects that are used with the firm's ecosystem.",
    ],
  },
  {
    review: "Michael's work on  web app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience  our  goals.",
   
    title: "React Developer",
    date: "2026 - Present",
    responsibilities: [
      "Built cross-platform web apps using React, integrating with  backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      ,
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nkosinamandla Moyo ( Design instructor)",
    mentions: "nkosi@uncommon.org", 
    linkedinUrl: "https://www.linkedin.com/in/nkosinamandla-moyo-sangweni-406389225/",
    review:
     "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    
  },
  {
    name: "Sandra Sibanda ( S.W.E instructor)", 
    mentions: "sandra@uncommon.org",
    linkedinUrl: "https://www.linkedin.com/in/sandra-sibanda-491521352/",
    review:
      "Michael's contributions to web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    
    
  },
  {
    name: "Charlotte Ncube ( S.W.E instructor)",
    mentions: "@charlottencube",
    linkedinUrl: "https://www.linkedin.com/in/charlotte-ncube-b926a6367/",
    review:
       "Michael's work on  web app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience  our  goals.",
    
  },
  
  {
    name: "Mfanelo Sibanda ( Cohort )",
    mentions: "mfanelosibanda99@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/mfanelo-sibanda-ba4aaa24b",
    review:
      "Michael brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    
  },
 
   {
    name: "Obediant Tshuma ( Marketing instructor)",
    mentions: "@obedianttshuma",
    linkedinUrl: "https://www.linkedin.com/in/obedient-tshuma-159329352/",
    review:
      "I had the pleasure of teaching this student during the Digital Marketing Crash Course, where he demonstrated exceptional performance, a strong understanding of concepts, and an impressive ability to apply his knowledge. His dedication, versatility, and eagerness to learn stood out throughout the course. He is a talented and capable individual with a strong ability to excel across different disciplines. I highly recommend him for future opportunities.",



    
  },

   
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: githubIcon,
    link: "https://github.com/Michael-AM-lab"
  },
 
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/michael-mlonyeni-637718405"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
