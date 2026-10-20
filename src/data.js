export const profile = {
  name: "Farah Faggaa",
  title: "Ingénieure Génie Logiciel | Full-Stack Java / Spring Boot / Angular",
  roles: ["Full-Stack Developer", "Spring Boot & Angular", "React Developer", "QA Mindset · ISTQB"],
  email: "farrah.faggaa@gmail.com",
  linkedin: "https://linkedin.com/in/Farah.Faggaa",
  location: "Sousse, Tunisie",
  openToWork: true,
};

export const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  text: [
    "Ingénieure en génie logiciel, rigoureuse et méthodique, spécialisée en développement Java / Angular. Je maîtrise l'analyse des besoins, la conception technique et la validation.",
    "J'ai travaillé sur des projets variés : un module de workflow avec moteur de règles (InsyProcess), une application RH sécurisée avec Spring Security, une plateforme vitrine en React. Je me forme actuellement à l'ISTQB pour renforcer mon approche qualité.",
  ],
  education: [
    { title: "Diplôme National d'Ingénieur en Génie Informatique", place: "École Polytechnique de Sousse", date: "2021 – 2024" },
    { title: "Licence appliquée en Informatique Industrielle", place: "ISSAT Sousse", date: "2019 – 2021" },
  ],
  certifications: [
    { name: "ISTQB CTFL v4.0", status: "En préparation" },
    { name: "DELF B2", status: "Valable à vie" },
    { name: "Cisco CCNAv7", status: "Introduction aux réseaux" },
  ],
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "Courant (DELF B2)" },
    { name: "Anglais", level: "Maîtrise technique" },
    { name: "Allemand", level: "Notions de base" },
  ],
};

export const skillGroups = [
  {
    icon: "code",
    title: "Langages & Frameworks",
    items: ["Java", "Spring Boot", "Angular", "React", "TypeScript", "JavaScript", "Node.js", "PHP"],
  },
  {
    icon: "database",
    title: "Bases de données",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    icon: "wrench",
    title: "Outils & Méthodes",
    items: ["Git / GitHub", "Docker", "UML", "Design Patterns", "Agile Scrum", "Keycloak", "Trello"],
  },
  {
    icon: "monitor",
    title: "Environnements",
    items: ["IntelliJ", "VS Code", "Eclipse", "Android Studio", "Windows", "Linux (Ubuntu)"],
  },
];

export const qaReport = {
  tool: "Postman · Azure DevOps",
  checks: [
    "Analyse des exigences",
    "Plans et scénarios de tests",
    "Exécution et rapports de tests",
    "Tests et validation d'API",
    "Gestion et suivi des anomalies",
  ],
};

export const experiences = [
  {
    id: "global-commerce",
    role: "Développeuse Full-Stack & Technico-Commerciale",
    company: "Global Commerce Tunisie",
    place: "Sahline, Tunisie",
    type: "Poste actuel",
    period: "Depuis janvier 2026",
    current: true,
    summary:
      "Conception, développement et déploiement d'une plateforme web vitrine, avec optimisation de la performance digitale.",
    bullets: [
      "Étude des besoins, modélisation UML du front-end et rédaction des spécifications fonctionnelles.",
      "Maquettes graphiques et interfaces fluides, réactives, Mobile-First.",
      "Proof of Concept sous React pour valider la faisabilité du filtrage dynamique avant le déploiement.",
      "Composants React réutilisables pour la gestion et le filtrage du catalogue de produits.",
      "Logique métier côté serveur et intégration de services SMTP/API pour le traitement des requêtes clients.",
      "Clean Code et suivi rigoureux des versions avec Git/GitHub.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "PHP", "APIs", "Git/GitHub", "UML"],
  },
  {
    id: "insy2s",
    role: "Stage de fin d'études (cycle ingénieur)",
    company: "Insy2s",
    place: "France",
    type: "Stage",
    period: "Janv. – Juin 2024",
    summary:
      "Conception d'un module de workflow générique « InsyProcess » avec moteur de règles pour automatiser les processus métier.",
    bullets: [
      "Étude de faisabilité, modélisation technique du module et conception des maquettes d'interfaces.",
      "Développement de microservices Spring Boot et de microfrontends (Module Federation).",
      "Gestion des accès et des autorisations via Keycloak.",
      "Dashboard de monitoring et interfaces de modélisation dynamique en Drag & Drop.",
    ],
    tech: ["Spring Boot", "Angular", "Keycloak", "PostgreSQL", "Agile Scrum"],
  },
  {
    id: "isatisfy",
    role: "Stage de perfectionnement",
    company: "ISatisfy",
    place: "Bois-Colombes, France",
    type: "Stage",
    period: "Août – Sept. 2023",
    summary:
      "Conception et développement d'une application web de gestion des ressources humaines.",
    bullets: [
      "Modélisation de l'architecture avec StarUML et conception des modules de gestion RH.",
      "Gestion des rôles et des autorisations avec Spring Security.",
      "Création et optimisation de services API REST (utilisateurs, accès).",
      "Interfaces dynamiques sous Angular pour les processus métier (congés, profils).",
      "Participation aux cycles Agile Scrum (planification, revues de sprint).",
    ],
    tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "StarUML", "Git", "Postman"],
  },
  {
    id: "wimova",
    role: "Stage de perfectionnement",
    company: "WIMOVA",
    place: "Lyon, France",
    type: "Stage",
    period: "Juin – Sept. 2022",
    summary:
      "Développement back et front sur une plateforme de missionnement électronique : nouveau module « Espace Client ».",
    bullets: [
      "Cartographie fonctionnelle et modélisation UML de l'architecture du module.",
      "Rédaction des spécifications fonctionnelles et techniques.",
      "APIs CRUD (Node.js / Symfony) et interfaces dynamiques sous Angular.",
      "Validation des endpoints via Postman, suivi des déploiements avec Docker et Azure DevOps.",
    ],
    tech: ["Angular", "Node.js", "Symfony", "PostgreSQL", "Docker", "Azure DevOps"],
  },
  {
    id: "iot",
    role: "Stage de fin d'études (Licence)",
    company: "IOT Medical Technology",
    place: "Tunisie",
    type: "Stage",
    period: "Janv. – Juin 2021",
    summary:
      "Acquisition et visualisation de données médicales en temps réel avec Raspberry Pi.",
    bullets: [
      "Scripts Python sur Raspberry Pi pour l'acquisition et le traitement de données médicales en temps réel.",
      "Communication via le protocole MQTT et visualisation des métriques sur Grafana.",
      "Calibration de capteurs et tests de précision pour garantir la fiabilité des mesures.",
    ],
    tech: ["Python", "Raspberry Pi", "MQTT", "Grafana", "Cloud"],
  },
  {
    id: "vortex",
    role: "Stage d'observation",
    company: "Vortex",
    place: "Sousse, Tunisie",
    type: "Stage",
    period: "Juil. – Août 2020",
    summary:
      "Découverte du développement d'un module sur une application e-commerce Prestashop.",
    bullets: [
      "Étude du fonctionnement des modules et de l'architecture d'une plateforme e-commerce.",
      "Création d'un module de test et personnalisation des interfaces via le back-office.",
      "Suivi des modifications avec Git.",
    ],
    tech: ["PHP", "MySQL", "Prestashop", "Git"],
  },
];

export const projects = [
  {
    id: "gct",
    title: "Global Commerce Tunisie",
    subtitle: "Site vitrine et catalogue produits",
    context: "Projet professionnel · 2026",
    accent: "from-emerald-500 to-teal-500",
    description:
      "Conception, développement et déploiement du site web de l'entreprise : catalogue produits avec filtrage dynamique, interface Mobile-First et traitement des demandes clients.",
    highlights: [
      "Composants React réutilisables",
      "Filtrage dynamique du catalogue",
      "Formulaire de contact via SMTP/API",
      "Interface Mobile-First avec Tailwind CSS",
    ],
    architecture: [
      { label: "React", sub: "Catalogue & filtres" },
      { label: "PHP", sub: "Logique métier" },
      { label: "SMTP / API", sub: "Requêtes clients" },
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "PHP", "Git/GitHub"],
    image: "/gct.png", // optionnel : capture d'écran dans public/
    links: [
      { label: "Voir le site", url: "https://www.gct.tn/", type: "live" },
    ],
  },
   {
    id: "perso",
    title: "Florélia (En cours)", // ex : "ShopEase", à remplacer
    subtitle: "Boutique en ligne de ventes des bouquets des fleurs",
    context: "Projet personnel",
    accent: "from-indigo-500 to-violet-500",
    description:
      "Application e-commerce full-stack avec deux profils d'utilisateurs : le client passe et suit ses commandes, l'administrateur les gère depuis un espace dédié.",
    highlights: [
      "Client : parcourir les produits, passer commande, consulter l'historique de ses commandes",
      "Admin : gestion et suivi de toutes les commandes",
      "Séparation des rôles (Admin / Client) et accès contrôlé",
      "API REST Spring Boot, interface Angular, base PostgreSQL",
    ],
    architecture: [
      { label: "Angular", sub: "Espaces Client & Admin" },
      { label: "Spring Boot", sub: "API REST" },
      { label: "PostgreSQL", sub: "Produits & commandes" },
    ],
    roles: [
      { name: "Client", actions: ["Commander", "Consulter ses commandes"] },
      { name: "Admin", actions: ["Gérer les commandes"] },
    ],
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Java", "TypeScript", "Git/GitHub"],
    image: "/projet-perso.png", // optionnel : capture dans public/
    links: [
      { label: "Voir le site", url: "", type: "live" },
      // Si hébergé, décommente :
      // { label: "Voir la démo", url: "https://VOTRE-DEMO.com", type: "live" },
    ],
  },
];

export const contact = {
  email: "farrah.faggaa@gmail.com", 
  phone: "+216 50 453 537",
  location: "Sousse, Tunisie",
  linkedin: "https://www.linkedin.com/in/farah-faggaa-099866186/?isSelfProfile=true", 
  formEndpoint: "https://formspree.io/f/xwlvrzgd", 
};