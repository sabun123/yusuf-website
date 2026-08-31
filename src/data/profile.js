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
// Tech labels that have an official logo (see TechIcon.jsx) are rendered
// with the brand mark automatically.

export const experience = [
  {
    id: "afed",
    company: "AFED Digital Sdn. Bhd.",
    role: "AI Developer",
    period: "Nov 2025 — Present",
    current: true,
    summary:
      "Developing AI agents for oil & gas subsurface exploration (PETRONAS). Built a LangChain deep-agent assistant running Azure Foundry LLM models with Perplexity API integrations, a document OCR pipeline with Mistral and GPT-5.4 deployed on the Azure Portal, and a data-availability sub-agent in LangGraph — plus LLM deployments via Alibaba's Model Studio.",
    stack: ["LangChain", "LLM", "Azure Foundry", "PostgreSQL"],
  },
  {
    id: "fathopes",
    company: "FatHopes Energy Sdn. Bhd.",
    role: "Full Stack Engineer",
    period: "Jun 2025 — Nov 2025",
    current: false,
    summary:
      "Developed and led the business's first Agentic AI apps using LangChain/LangGraph and Python. Modernised the stack — upgrading 4-year-old legacy React Native apps and migrating a 5-year-old CRA frontend to React 19 + Vite, cutting build artifacts from 5k+ files down to 433. Refactored slow APIs from 1–3s to under 100ms, shrank Docker images by 90% (1GB → 0.1GB), and drove vulnerabilities from 5 critical + 49 high down to zero, deployed and managed across the Azure Portal.",
    stack: ["MySQL", "React Native", "Azure Container Apps", "Azure"],
  },
];

// ─── Past projects (newest first) ────────────────────────────────────────────
export const pastProjects = [
  {
    id: "homage-care-pro",
    name: "Homage Care Pro",
    type: "Mobile App",
    period: "Nov 2023 — Feb 2024",
    summary:
      "A mobile app for care professionals — the mobile project I led the team to refactor and rebuild, with massive improvements to feature development time and complexity reductions.",
    stack: ["React Native", "iOS", "Android"],
    image: "homage-care-pro",
    icon: true,
    link: {
      label: "App Store",
      href: "https://apps.apple.com/sg/app/homage-care-pro/id1277845120",
    },
  },
  {
    id: "homage-partner-care",
    name: "Homage Partner Care",
    type: "Mobile App",
    period: "Jul 2023 — Sep 2023",
    summary:
      "B2B mobile app for iOS and Android that I architected and built from the ground up for Homage.",
    stack: ["React Native", "iOS", "Android"],
    image: "homage-partner-care",
    icon: true,
    link: {
      label: "App Store",
      href: "https://apps.apple.com/sg/app/homage-partner-care/id6451475740",
    },
  },
  {
    id: "franklin-templeton",
    name: "Franklin Templeton US",
    type: "Mobile App",
    period: "Jan 2021 — Jul 2022",
    summary:
      "Architected, developed and published the main mobile app for Franklin Templeton (live to USA public). Available for both iOS and Android app stores. Worked entirely in React Native with JavaScript, and lead a team of developers to work across multiple simultaneous sprints to achieve strict deadlines.",
    stack: ["React Native", "Xcode", "JavaScript", "Redux", "Android Studio"],
    image: "work-ft",
  },
  {
    id: "principal-am",
    name: "Principal Asset Management Thailand",
    type: "Mobile App",
    period: "Sep 2020 — Feb 2021",
    summary:
      "Setup, developed and published this React Native mobile app for Principal Thailand. Introduced continuous deployments with Microsoft App Center to speed up time-to-test and time-to-delivery. App supports both Thai and English internationalization.",
    stack: ["React Native", "Redux", "Google Firebase", "JavaScript"],
    image: "work-cpamth",
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    type: "Web App",
    period: "Feb 2017 — Aug 2018",
    summary:
      "Setup and developed an admin dashboard web application that was used as the core basis for the company's main admin dashboard product. This admin dashboard front-end codebase has gone on to be used for more than three years and is still being heavily used both internally and with new external client projects.",
    stack: ["ReactJS", "JavaScript", "Redux", "MaterialUI"],
    image: "work-admin",
  },
  {
    id: "telekom-malaysia",
    name: "Telekom Malaysia",
    type: "Web App (Map)",
    period: "Feb 2017 — Aug 2018",
    summary:
      "Developed a ReactJS web-based solution for Telekom Malaysia's on-the-ground engineers. This solution was integrated with Google Maps, and Telekom Malaysia's geomapped hardware nodes and cable lines. Developed web services using Groovy to achieve this integration.",
    stack: ["ReactJS", "JavaScript", "Google Maps", "Groovy", "Flux"],
    image: "work-tm",
  },
  {
    id: "oh-my-english",
    name: "Oh-My-English",
    type: "Mobile Game",
    period: "May 2015 — Aug 2015",
    summary:
      "Developed game levels and mechanics in Unity3D. The 2D mobile game Oh-My-English was released publicly to the app stores for both Android and iOS for Astro. Integrated the game with Facebook's mobile leaderboard SDK.",
    stack: ["Unity3D", "C#", "Facebook Leaderboard"],
    image: "work-ome",
  },
  {
    id: "beanstox-us",
    name: "Beanstox US",
    type: "Mobile App",
    // TODO(yusuf): add the dates for Beanstox (likely the earliest project)
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
