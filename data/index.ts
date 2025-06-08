export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  // {
  //   id: 1,
  //   title: "Dedicated to crafting seamless user experiences with modern tech.",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },
  {
  id: 1,
  title: "Dedicated to crafting seamless user experiences with modern tech.",
  description: "",
  className: "col-span-full md:col-span-6 lg:col-span-3 md:row-span-4 lg:min-h-[60vh] min-h-auto",
  imgClassName: "w-full h-auto md:h-full", // let height auto on mobile, full on md+
  titleClassName: "justify-end",
  img: "/b1.svg",
  spareImg: "",
},

  {
    id: 2,
    title: "Flexible with communication across all time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Proficient Tech Stack",
    description: "HTML, CSS, JavaScript, React.js, Node.js, and more.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about solving real-world problems with code.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Exploring new technologies and frameworks.",
    description: "Always learning and evolving.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on exciting projects.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "StockSense Plus",
    des: "A comprehensive inventory and sales management system with real-time tracking and QR code support.",
    img: "/stocksense.jpg",
    iconLists: ["/re.svg", "/node.svg", "/ts.svg", "/mongo.svg"],
    link: "https://github.com/Tajamul-Hassan112/StockSensePlus",
    sourceCode: "https://github.com/Tajamul-Hassan112/StockSensePlus",
  },
  {
    id: 2,
    title: "Trendify - E-commerce Platform",
    des: "Built an e-commerce platform with Firebase for real-time updates and user authentication.",
    img: "/trendify.jpg",
    iconLists: ["/re.svg", "/firebase.svg", "/tail.svg"],
    link: "https://github.com/Tajamul-Hassan112/Trendify",
    sourceCode: "https://github.com/Tajamul-Hassan112/Trendify",
  },
  {
    id: 3,
    title: "YouTube Clone",
    des: "A video-sharing platform with video playback, comments, and trending sections using Redux Toolkit.",
    img: "/youtube.jpg",
    iconLists: ["/re.svg", "/redux.svg", "/tail.svg"],
    link: "https://github.com/Tajamul-Hassan112/YoutubeClone",
    sourceCode: "https://github.com/Tajamul-Hassan112/YoutubeClone",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Development Intern",
    desc: "Assisted in building responsive web applications and optimizing website performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Core Java Intern",
    desc: "Developed Java-based mini-projects, including a library management system.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Developer",
    desc: "Built custom software solutions for clients, including real-time database integration.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user interfaces using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with Tajamul Hassan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tajamul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tajamul is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Tajamul-Hassan112",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tajamul-hassan-040567230/",
  },
] as const;

export const techStack = {
  stack1: ["HTML", "CSS", "JavaScript", "React.js"],
  stack2: ["Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
} as const;
