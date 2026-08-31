// ─────────────────────────────────────────────────────────────────────────────
// Central content source for the whole site.
// Edit this file and every section updates — no need to touch components.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Yusuf",
  fullName: "Yusuf Ismail bin Shukor",
  greeting: "Hola! 👋 I'm",
  // Rotates in the hero. First entry is the current role.
  roles: ["AI Developer", "Full Stack Engineer", "Senior Software Engineer"],
  tagline: "Constructor of mobile & web experiences",
  bio: "A mixed coder (half Malaysian, half Australian). Venturing the world and life in search of new technology and the next big advancement for mankind. Always hungry to learn new tech, and climb the ever eternal growth ladder. What's life if not an adventure into the constant unknown!",
  highlights: [
    "Mobile & Web",
    "React / React Native",
    "AI & Cloud (Azure)",
    "Mobile Games",
  ],
};

// ─── 2025 → present ──────────────────────────────────────────────────────────
// TODO(yusuf): expand `summary` and `stack` for both roles below with the
// real project details — the copy in this file is a minimal placeholder.

export const experience = [
  {
    id: "afed",
    company: "AFED Digital Sdn. Bhd.",
    role: "AI Developer",
    period: "Nov 2025 — Present",
    current: true,
    summary:
      "AI development with hands-on experience on the Azure Portal.",
    stack: ["Azure", "AI"],
  },
  {
    id: "fathopes",
    company: "FatHopes Energy Sdn. Bhd.",
    role: "Full Stack Engineer",
    period: "Jun 2025 — Nov 2025",
    current: false,
    summary:
      "Full stack engineering with hands-on experience on the Azure Portal.",
    stack: ["Azure", "Full Stack"],
  },
];

// ─── Past projects (carried over from the previous site) ────────────────────
export const pastProjects = [
  {
    id: "franklin-templeton",
    name: "Franklin Templeton US",
    type: "Mobile App",
    summary:
      "Architected, developed and published the main mobile app for Franklin Templeton (live to USA public). Available for both iOS and Android app stores. Worked entirely in React Native with JavaScript, and lead a team of developers to work across multiple simultaneous sprints to achieve strict deadlines.",
    stack: ["React Native", "Xcode", "JavaScript", "Redux", "Android Studio"],
    image: "work-ft",
  },
  {
    id: "principal-am",
    name: "Principal Asset Management Thailand",
    type: "Mobile App",
    summary:
      "Setup, developed and published this React Native mobile app for Principal Thailand. Introduced continuous deployments with Microsoft App Center to speed up time-to-test and time-to-delivery. App supports both Thai and English internationalization.",
    stack: ["React Native", "Redux", "Google Firebase", "JavaScript"],
    image: "work-cpamth",
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    type: "Web App",
    summary:
      "Setup and developed an admin dashboard web application that was used as the core basis for the company's main admin dashboard product. This admin dashboard front-end codebase has gone on to be used for more than three years and is still being heavily used both internally and with new external client projects.",
    stack: ["ReactJS", "JavaScript", "Redux", "MaterialUI"],
    image: "work-admin",
  },
  {
    id: "telekom-malaysia",
    name: "Telekom Malaysia",
    type: "Web App (Map)",
    summary:
      "Developed a ReactJS web-based solution for Telekom Malaysia's on-the-ground engineers. This solution was integrated with Google Maps, and Telekom Malaysia's geomapped hardware nodes and cable lines. Developed web services using Groovy to achieve this integration.",
    stack: ["ReactJS", "JavaScript", "Google Maps", "Groovy", "Flux"],
    image: "work-tm",
  },
  {
    id: "oh-my-english",
    name: "Oh-My-English",
    type: "Mobile Game",
    summary:
      "Developed game levels and mechanics in Unity3D. The 2D mobile game Oh-My-English was released publicly to the app stores for both Android and iOS for Astro. Integrated the game with Facebook's mobile leaderboard SDK.",
    stack: ["Unity3D", "C#", "Facebook Leaderboard"],
    image: "work-ome",
  },
  {
    id: "beanstox-us",
    name: "Beanstox US",
    type: "Mobile App",
    summary:
      "Took over, upgraded, developed and published mobile app for Beanstox (live to the USA public).",
    stack: ["React Native", "Redux", "Google Firebase", "JavaScript"],
    image: "work-bsx",
  },
];

// ─── Qualifications ──────────────────────────────────────────────────────────
export const qualifications = [
  { id: "aws", title: "AWS", image: "aws" },
  { id: "hadoop", title: "Hadoop", image: "hadoop" },
  { id: "degree", title: "Degree", image: "degree" },
];

// ─── Socials / contact ───────────────────────────────────────────────────────
export const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "Sabun123",
    href: "https://github.com/sabun123/sabun123",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Yusuf Ismail bin Shukor",
    href: "https://www.linkedin.com/in/yusuf-ismail-bin-shukor/",
  },
  {
    id: "email",
    label: "Email",
    handle: "encrypted.potato@gmail.com",
    href: "mailto:encrypted.potato@gmail.com",
  },
  {
    id: "blog",
    label: "Blog",
    handle: "techpromad",
    href: "https://techpromad.wordpress.com/",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "Penguin Recordings",
    href: "https://www.youtube.com/c/PenguinRecordings/featured",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "qualifications", label: "Qualifications" },
  { id: "contact", label: "Contact" },
];
