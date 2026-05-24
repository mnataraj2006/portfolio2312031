import bloodbankImg from "./Bloodbank.png";

export const projects = [
  {
    id: 1,
    title: "Blood & Plasma Management System",
    description:
      "A full-stack blood and plasma management platform that streamlines donor registration, blood inventory tracking, and emergency request handling between donors, hospitals, and blood banks.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Docker"],
    github: "https://github.com/mnataraj2006/blood_bank-main-/tree/main",
    live: "https://lifeshare-alpha.vercel.app/",
    image: bloodbankImg,
  },
  {
    id: 2,
    title: "Multi-Domain On-Demand Services Platform",
    description:
      "A scalable service marketplace connecting customers with service providers, including booking management, real-time tracking, feedback systems, and analytics dashboards.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Power BI", "AWS"],
    github: "#",
    live: "#",
    image: "/project2.png",   // ← drop your screenshot here
  },
  {
    id: 3,
    title: "Sunday Hikers Dashboard",
    description:
      "An interactive dashboard that extracts trekking data using web scraping and visualizes hike statistics, yearly trends, and comprehensive analytics.",
    techStack: ["Python", "FastAPI", "BeautifulSoup", "Pandas", "Chart.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/mnataraj2006/SundayHikersAPI_Hiking/tree/main",
    live: "https://sundayhikersapi-hiking.onrender.com/hikes",
    image: "/project3.png",   // ← drop your screenshot here
  },
];
