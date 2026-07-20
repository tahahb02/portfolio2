export const cvData = {
  profile: {
    name: "Taha HILAL BIK",
    title: "Ingénieur d'État en Génie Informatique spécialité MIAGE",
    subTitle: "Ingénieur d'État en Génie Informatique (MIAGE), passionné par le développement Full Stack et la conception d'applications web modernes. Expérimenté dans les architectures REST, les bases de données SQL/NoSQL et les pratiques Agile.",
    description: "À l'aise avec plusieurs écosystèmes, notamment Java/Spring Boot, React, Node.js/Express et MongoDB, avec un intérêt particulier pour l'intégration de solutions d'Intelligence Artificielle. Curieux, autonome et orienté qualité logicielle, je recherche des projets innovants où je peux contribuer à la création de solutions performantes et évolutives.",
    email: "hilalbiktaha@gmail.com",
    phone: "+212-691436399",
    location: "Casablanca, Maroc",
    linkedin: "https://www.linkedin.com/in/tahahilalbik/",
    github: "https://github.com/tahahb02"
  },
  education: [
    { dates: "Mai 2026 - Novembre 2026", title: "Formation Intensive Wings Tech", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Formation intensive de 6 mois+ axée sur le développement full-stack (projets concrets), le développement personnel et les ateliers pratiques.", ongoing: true },
    { dates: "2022-2025", title: "Cycle d'ingénierie en informatique et réseau option MIAGE", institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    { dates: "2020 - 2022", title: "Années préparatoires", institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    { dates: "2019-2020", title: "Baccalauréat physique chimie option français", institution: "Mention Bien" }
  ],
    skills: {
    languages: ["Java", "Python", "C/C++", "PHP", "JavaScript"],
    frameworks: ["Spring Boot", "React JS", "Node.js", "Express", "Django", "Thymeleaf"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["VS Code", "IntelliJ", "Git", "GitHub", "Jira", "Docker"],
    methods: ["Agile/Scrum", "UML", "CI/CD", "REST API"],
    systems: ["Windows", "Linux"]
  },
  certifications: [
    { name: "Introduction to Java and Object-Oriented Programming (Coursera)", pdf: "/certif Introduction to Java.pdf", img: "/certs/java.png" },
    { name: "Python for Everybody (Coursera)", pdf: "/Certif Python.pdf", img: "/certs/python.png" },
    { name: "React Basics (Coursera)", pdf: "/Certif REACT BASIC.pdf", img: "/certs/react-basic.png" },
    { name: "React Native (Coursera)", pdf: "/Certif REACT native.pdf", img: "/certs/react-native.png" },
    { name: "Software Engineering: UML (Coursera)", pdf: "/certi UML.pdf", img: "/certs/uml.png" },
    { name: "Agile with Atlassian Jira (Coursera)", pdf: "/certif JIRA.pdf", img: "/certs/jira.png" },
    { name: "Git & GitHub (Coursera)", pdf: "/Certif git and github.pdf", img: "/certs/git.png" },
    { name: "French Intermediate B1-B2 (Coursera)", pdf: "/certif Francais B1-B2.pdf", img: "/certs/french.png" },
    { name: "English (Coursera)", pdf: "/certif coursera ANGLAIS.pdf", img: "/certs/english.png" },
    { name: "Docker, Kubernetes & OpenShift", pdf: "/Certif Docker,kubernetes et openshift.pdf", img: "/certs/docker.png" },
    { name: "Virtual Networks in Azure", pdf: "/Certif Virtual Networks in Azure.pdf", img: "/certs/azure.png" },
    { name: "Introduction to Scrum Master", pdf: "/certif Introduction to Scrun Master Profession.pdf", img: "/certs/scrum.png" },
    { name: "SAP Fundamentals", pdf: "/certif SAP Fundamentals.pdf", img: "/certs/sap.png" },
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png" },
  ],
  softSkills: ["Esprit d'équipe", "Rigueur", "Autonomie", "Curiosité technique", "Gestion des priorités", "Créativité"],
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "Bilingue" },
    { name: "Anglais", level: "Avancé" },
    { name: "Allemand", level: "Intermédiaire" }
  ],
  experiences: [
    {
      role: "Stagiaire Développeur Full Stack",
      company: "Web4Jobs",
      period: "Mars 2025 - Août 2025 | Casablanca, Maroc",
      project: "Plateforme de gestion des patrimoines pour centres de coding (Maroc & Afrique)",
      tasks: [
        "Analyse des besoins et modélisation UML",
        "Développement Front-End (ReactJS) & Back-End (Java Spring Boot)",
        "Intégration d'un module IA (Ollama LLM) pour la maintenance prédictive"
      ],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Stagiaire Développeur Web",
      company: "Royal Air Maroc (RAM)",
      period: "Juillet 2024 - Août 2024 | Casablanca, Maroc",
      project: "Application de gestion centralisée des pièces & maintenances",
      tasks: [
        "Conception et modélisation UML du système.",
        "Développement du frontend et backend de l'application.",
        "Intégration des fonctionnalités de maintenance."
      ],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Stagiaire Développeur Web / Planification",
      company: "Safilait (Groupe Bel)",
      period: "Août 2023 - Septembre 2023 | Casablanca, Maroc",
      project: "Développement d'un site e-commerce dédié au secteur agroalimentaire",
      tasks: [
        "Modélisation des systèmes avec UML.",
        "Développement du frontend et backend du site.",
        "Gestion de la base de données pour le suivi des commandes."
      ],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  academicProjects: [
    { title: "EasyJob", desc: "Plateforme de recrutement intelligente pour le marché marocain : scraping multi-sources, candidature en 1 clic, IA multilingue (FR/AR/EN), matching intelligent et dashboard recruteur.", github: "https://github.com/tahahb02/EasyJob", live: "https://easyjob-theta.vercel.app/", featured: true },
    { title: "MedCare AI", desc: "Plateforme médicale intelligente digitalisant les cabinets : gestion des patients, téléconsultation, IA clinique, prescriptions électroniques et suivi santé.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Assistant quotidien intelligent : budget IA, tâches Kanban, médicaments, scanner de factures, assistant vocal et recommandations personnalisées.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Matching intelligent entre offres et CVs via LLM (Ollama)" },
    { title: "BookHub", desc: "Plateforme de gestion et distribution d'E-books (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Application mobile de quiz pour permis de conduire" },
    { title: "FitTrack Web App", desc: "Calculateur de calories & suivi nutritionnel" }
  ]
};
