import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectLinks = {
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
};

export type ProjectStatus = "Completed" | "In Progress" | "Personal Project";
export type ProjectWorkType = "Professional" | "Personal";

export type ProjectCaseStudy = {
  userNeed?: string;
  architecture?: string[];
  storage?: string;
  engineeringDecisions?: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  contributions?: string[];
  implementation?: string;
  status?: ProjectStatus;
  workType?: ProjectWorkType;
  featured?: boolean;
  screenshots?: ProjectScreenshot[];
  links?: ProjectLinks;
  caseStudy?: ProjectCaseStudy;
  visual?: "medhire" | "cvclique" | "healthcare";
};

export type Technology = {
  name: string;
  icon?: IconType;
  color: string;
  mark?: string;
};

export type SkillGroup = {
  category: string;
  items: Technology[];
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#5da9f6" },
      { name: "Redux", icon: SiRedux, color: "#a78bfa" },
      { name: "HTML5", icon: SiHtml5, color: "#ff7651" },
      { name: "CSS3", icon: SiCss3, color: "#55a9ff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#42c9e8" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#66c66b" },
      { name: "Express.js", icon: SiExpress, color: "#e1e8e4" },
      { name: "REST APIs", color: "#c5d1cb", mark: "API" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#f4c55d" },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#78a5f9" },
      { name: "MySQL", icon: SiMysql, color: "#69b1db" },
      { name: "Cloudflare R2", icon: SiCloudflare, color: "#ff9b51" },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", icon: SiGit, color: "#ff806e" },
      { name: "GitHub", icon: SiGithub, color: "#e5ebe8" },
      { name: "VS Code", color: "#58baff", mark: "VS" },
      { name: "Postman", icon: SiPostman, color: "#ff9669" },
      { name: "Vercel", icon: SiVercel, color: "#e5ebe8" },
      { name: "Render", icon: SiRender, color: "#57e5bb" },
      { name: "Neon", color: "#62e6b0", mark: "Ne" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "medhire",
    name: "MedHire",
    category: "Healthcare Recruitment Platform",
    description:
      "A healthcare recruitment platform focused on candidate onboarding, profile management, resume handling, job applications, and recruiter or hospital workflows.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Cloudflare R2"],
    features: [
      "Candidate onboarding and profile management",
      "Job application workflows",
    ],
    contributions: [
      "Integrated React interfaces with authenticated backend APIs",
      "Implemented resume handling with private Cloudflare R2 file storage",
      "Mapped recruiter and hospital profile data between API contracts and frontend requirements",
      "Implemented backend functionality using Node.js and Express.js with PostgreSQL-backed application data",
    ],
    implementation:
      "A React frontend communicates with authenticated REST endpoints implemented in Node.js and Express.js. PostgreSQL stores application data; Cloudflare R2 handles resume and file storage.",
    screenshots: [
      {
        src: "/images/projects/medhire_collage.png",
        alt: "MedHire project screenshot",
      },
    ],
    visual: "medhire",
    featured: true,
    caseStudy: {
      userNeed:
        "Candidate onboarding, job applications, profile management, and recruiter workflows need to work together through clear, connected application experiences.",
      architecture: ["React frontend", "Authenticated REST API", "Node.js / Express", "PostgreSQL"],
      storage: "Resume and file storage: Cloudflare R2",
      engineeringDecisions:
        "Separating the frontend, authenticated API, relational data, and private file storage makes each part of the workflow explicit. Profile data mapping keeps API contracts aligned with the needs of recruiter and hospital interfaces.",
    },
  },
  {
    id: "cvclique",
    name: "CVhaven",
    category: "Job Matching Platform",
    description:
      "A job-matching platform with CV-building functionality and employer-facing tools for searching and filtering candidates.",
    technologies: ["React", "TypeScript", "Redux", "Node.js", "MySQL"],
    features: [
      "CV builder",
      "Employer search and filtering",
      "Privacy-protected contact disclosure",
      "Payment gateway integration",
      "Email notifications and an administrative panel",
    ],
    implementation:
      "The application combines a React and TypeScript interface, Redux state management, and Node.js services backed by MySQL. Payment and email providers are intentionally not specified.",
    screenshots: [
      {
        src: "/images/projects/cvhaven_collage.png",
        alt: "CVhaven project screenshot",
      },
    ],
    visual: "cvclique",
  },
  {
    id: "healthcare-management-system",
    name: "Healthcare Management System",
    category: "Healthcare Management System",
    description:
      "A role-based healthcare management application designed to support workflows for administrators, hospital owners, doctors, and patients.",
    technologies: ["React", "Node.js", "MySQL"],
    features: [
      "Role-based application interfaces",
      "JWT authentication",
      "Appointment booking and billing workflows",
      "Staff management and reporting",
    ],
    implementation:
      "Role-aware React interfaces work with Node.js application services and MySQL data. This portfolio describes project functionality and does not imply a live medical service or certification.",
    screenshots: [
      {
        src: "/images/projects/smartmedik_collage.png",
        alt: "Healthcare Management System project screenshot",
      },
    ],
    visual: "healthcare",
  },
];

export const responsibilities = [
  "Develop responsive web interfaces using React.js, TypeScript, and Redux where appropriate.",
  "Integrate frontend applications with RESTful APIs.",
  "Implement backend functionality using Node.js and Express.js.",
  "Work with SQL databases and application data workflows.",
  "Implement authentication, protected routes, profile management, and role-based application behavior where required.",
  "Use Git, GitHub, and Postman during development and integration.",
];

export const experience = {
  company: "Axcen Innovation Lab Pvt. Ltd.",
  role: "React Developer / Full Stack Developer",
  startDate: "October 2023",
};

export const education = [
  {
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    institution: "Bishop Heber College, Tiruchirappalli",
    year: "2023",
    grade: "CGPA 8.2",
  },
  {
    degree: "Bachelor of Computer Applications",
    abbreviation: "BCA",
    institution: "National College, Tiruchirappalli",
    year: "2021",
    grade: "CGPA 7.8",
  },
];

export const achievements = [
  {
    place: "1st place",
    event: "ADS_UP competition",
    institution: "Jamal Mohamed College",
  },
  {
    place: "1st place",
    event: "TRIANGULAR CODE competition",
    institution: "M.A.M. College of Engineering",
  },
];
