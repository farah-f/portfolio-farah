import * as fr from "./data";

// Reprend les objets français (liens, dates, technologies)
// et remplace seulement les textes listés dans "overrides".
const merge = (list, overrides) =>
  list.map((x) => ({ ...x, ...overrides[x.id] }));

export const profile = {
  ...fr.profile,
  title: "Software Engineer | Full-Stack Java / Spring Boot / Angular",
  roles: ["Full-Stack Developer", "Spring Boot & Angular", "React Developer", "QA Mindset · ISTQB"],
  location: "Sousse, Tunisia",
};

export const contact = { ...fr.contact, location: "Sousse, Tunisia" };

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  text: [
    "Software engineer, rigorous and methodical, specialized in Java / Angular development. I master requirements analysis, technical design and validation.",
    "I have worked on varied projects: a workflow module with a rules engine (InsyProcess), an HR application secured with Spring Security, and a React showcase platform. I am currently preparing the ISTQB certification to strengthen my quality approach.",
  ],
  education: [
    { title: "National Engineering Degree in Computer Science", place: "Polytechnic School of Sousse", date: "2021 – 2024" },
    { title: "Applied Bachelor's Degree in Industrial Computing", place: "ISSAT Sousse", date: "2019 – 2021" },
  ],
  certifications: [
    { name: "ISTQB CTFL v4.0", status: "In preparation" },
    { name: "DELF B2", status: "Valid for life" },
    { name: "Cisco CCNAv7", status: "Introduction to networks" },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent (DELF B2)" },
    { name: "English", level: "Technical proficiency" },
    { name: "German", level: "Basic" },
  ],
};

const skillTitles = ["Languages & Frameworks", "Databases", "Tools & Methods", "Environments"];
export const skillGroups = fr.skillGroups.map((g, i) => ({ ...g, title: skillTitles[i] }));

export const qaReport = {
  tool: fr.qaReport.tool,
  checks: [
    "Requirements analysis",
    "Test plans and scenarios",
    "Test execution and reports",
    "API testing and validation",
    "Defect tracking and management",
  ],
};

export const experiences = merge(fr.experiences, {
  "global-commerce": {
    role: "Full-Stack Developer & Technical Sales",
    type: "Current position",
    place: "Sahline, Tunisia",
    summary: "Design, development and deployment of a showcase web platform, with digital performance optimization.",
    bullets: [
      "Requirements study, UML modeling of the front-end and functional specifications.",
      "Graphic mockups and fluid, responsive, Mobile-First interfaces.",
      "React Proof of Concept to validate the feasibility of dynamic filtering before deployment.",
      "Reusable React components for product catalog management and filtering.",
      "Server-side business logic and SMTP/API integration to process customer requests.",
      "Clean Code practices and rigorous version tracking with Git/GitHub.",
    ],
  },
  insy2s: {
    role: "Final-year internship (engineering degree)",
    type: "Internship",
    place: "France",
    summary: "Design of a generic workflow module, \"InsyProcess\", with a rules engine to automate business processes.",
    bullets: [
      "Feasibility study, technical modeling of the module and interface mockups.",
      "Development of Spring Boot microservices and microfrontends (Module Federation).",
      "Access and authorization management with Keycloak.",
      "Monitoring dashboard and dynamic Drag & Drop modeling interfaces.",
    ],
  },
  isatisfy: {
    role: "Skills-development internship",
    type: "Internship",
    place: "Bois-Colombes, France",
    summary: "Design and development of a human resources management web application.",
    bullets: [
      "Architecture modeling with StarUML and design of HR management modules.",
      "Role and authorization management with Spring Security.",
      "Creation and optimization of REST API services (users, access).",
      "Dynamic Angular interfaces for business processes (leave, profiles).",
      "Active participation in Agile Scrum cycles (planning, sprint reviews).",
    ],
  },
  wimova: {
    role: "Skills-development internship",
    type: "Internship",
    place: "Lyon, France",
    summary: "Back-end and front-end development on an electronic assignment platform: new \"Client Area\" module.",
    bullets: [
      "Functional mapping and UML modeling of the module architecture.",
      "Functional and technical specifications.",
      "CRUD APIs (Node.js / Symfony) and dynamic Angular interfaces.",
      "Endpoint validation with Postman, deployment tracking with Docker and Azure DevOps.",
    ],
  },
  iot: {
    role: "Bachelor's final-year internship",
    type: "Internship",
    place: "Tunisia",
    summary: "Real-time acquisition and visualization of medical data with Raspberry Pi.",
    bullets: [
      "Python scripts on Raspberry Pi for real-time medical data acquisition and processing.",
      "Communication via the MQTT protocol and metrics visualization on Grafana.",
      "Sensor calibration and accuracy tests to guarantee measurement reliability.",
    ],
  },
  vortex: {
    role: "Observation internship",
    type: "Internship",
    place: "Sousse, Tunisia",
    summary: "Introduction to developing a module on a Prestashop e-commerce application.",
    bullets: [
      "Study of how modules work and of the architecture of an e-commerce platform.",
      "Creation of a test module and interface customization through the back-office.",
      "Change tracking with Git.",
    ],
  },
});

export const projects = merge(fr.projects, {
  gct: {
    subtitle: "Showcase website and product catalog",
    context: "Professional project · 2026",
    description:
      "Design, development and deployment of the company website: product catalog with dynamic filtering, Mobile-First interface and customer request handling.",
    highlights: [
      "Reusable React components",
      "Dynamic catalog filtering",
      "Contact form through SMTP/API",
      "Mobile-First interface with Tailwind CSS",
    ],
    architecture: [
      { label: "React", sub: "Catalog & filters" },
      { label: "PHP", sub: "Business logic" },
      { label: "SMTP / API", sub: "Customer requests" },
    ],
  },
  perso: {
    subtitle: "Online store with Customer and Admin areas",
    context: "Personal project",
    description:
      "Full-stack e-commerce application with two user profiles: customers place and track their orders, the administrator manages them from a dedicated area.",
    highlights: [
      "Customer: browse products, place orders, view order history",
      "Admin: manage and track all orders",
      "Role separation (Admin / Customer) and controlled access",
      "Spring Boot REST API, Angular interface, PostgreSQL database",
    ],
    architecture: [
      { label: "Angular", sub: "Customer & Admin areas" },
      { label: "Spring Boot", sub: "REST API" },
      { label: "PostgreSQL", sub: "Products & orders" },
    ],
    roles: [
      { name: "Customer", actions: ["Place orders", "View their orders"] },
      { name: "Admin", actions: ["Manage orders"] },
    ],
  },
});