const PROJECT_IMAGES = {
  EasyJob: "/projects/easyjob.svg",
  "MedCare AI": "/projects/medcare-ai.svg",
  "SmartLife AI": "/projects/smartlife-ai.svg",
  "Smart Recruiter": "/projects/smart-recruiter.svg",
  BookHub: "/projects/bookhub.svg",
  "QuizzApp (Android)": "/projects/quizzapp.svg",
  "FitTrack Web App": "/projects/fittrack.svg",
};

const PROJECT_CATEGORIES = {
  EasyJob: "AI · WEB · FULL-STACK",
  "MedCare AI": "AI · HEALTH · PLATFORM",
  "SmartLife AI": "AI · LIFESTYLE · PWA",
  "Smart Recruiter": "AI · RECRUITMENT · LLM",
  BookHub: "WEB · E-COMMERCE",
  "QuizzApp (Android)": "MOBILE · ANDROID",
  "FitTrack Web App": "WEB · HEALTH",
};

function enrich(projects) {
  return projects.map((p) => ({
    ...p,
    img: PROJECT_IMAGES[p.title],
    category: PROJECT_CATEGORIES[p.title],
  }));
}

const contentFr = {
  softSkills: ["Esprit d'équipe", "Rigueur", "Autonomie", "Curiosité technique", "Gestion des priorités", "Créativité"],
  langLevels: { "Langue maternelle": 100, "Bilingue": 85, "Avancé": 75, "Intermédiaire": 55, "Débutant": 40 },
  experiences: [
    {
      role: "Stagiaire Développeur Full Stack", company: "Web4Jobs",
      period: "Mars 2025 – Août 2025 · Casablanca, Maroc",
      project: "Plateforme de gestion des patrimoines pour centres de coding (Maroc & Afrique)",
      tasks: ["Analyse des besoins et modélisation UML", "Développement Front-End (ReactJS) & Back-End (Java Spring Boot)", "Intégration d'un module IA (Ollama LLM) pour la maintenance prédictive"],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Stagiaire Développeur Web", company: "Royal Air Maroc (RAM)",
      period: "Juillet 2024 – Août 2024 · Casablanca, Maroc",
      project: "Application de gestion centralisée des pièces & maintenances",
      tasks: ["Conception et modélisation UML du système.", "Développement du frontend et backend de l'application.", "Intégration des fonctionnalités de maintenance."],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Stagiaire Développeur Web / Planification", company: "Safilait (Groupe Bel)",
      period: "Août 2023 – Septembre 2023 · Casablanca, Maroc",
      project: "Développement d'un site e-commerce dédié au secteur agroalimentaire",
      tasks: ["Modélisation des systèmes avec UML.", "Développement du frontend et backend du site.", "Gestion de la base de données pour le suivi des commandes."],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: enrich([
    { title: "EasyJob", desc: "Plateforme de recrutement intelligente pour le marché marocain : scraping multi-sources, candidature en 1 clic, IA multilingue (FR/AR/EN), matching intelligent et dashboard recruteur.", github: "https://github.com/tahahb02/EasyJob", live: "https://easyjob-theta.vercel.app/", featured: true },
    { title: "MedCare AI", desc: "Plateforme médicale intelligente digitalisant les cabinets : gestion des patients, téléconsultation, IA clinique, prescriptions électroniques et suivi santé.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Assistant quotidien intelligent : budget IA, tâches Kanban, médicaments, scanner de factures, assistant vocal et recommandations personnalisées.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Matching intelligent entre offres et CVs via LLM (Ollama)", github: "https://github.com/tahahb02/Smart-Recruiter" },
    { title: "BookHub", desc: "Plateforme de gestion et distribution d'E-books (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Application mobile de quiz pour permis de conduire" },
    { title: "FitTrack Web App", desc: "Calculateur de calories & suivi nutritionnel" }
  ]),
  education: [
    { dates: "2026", title: "Formation Intensive Wings Tech", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Formation intensive de 6 mois+ axée sur le développement full-stack (projets concrets), le développement personnel et les ateliers pratiques.", ongoing: true },
    { dates: "2022 – 2025", title: "Cycle d'ingénierie en informatique et réseau option MIAGE", institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    { dates: "2020 – 2022", title: "Années préparatoires", institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    { dates: "2019 – 2020", title: "Baccalauréat physique chimie option français", institution: "Mention Bien" }
  ],
  certifications: [
    { name: "Introduction to Java and Object-Oriented Programming (Coursera)", pdf: "/certif Introduction to Java.pdf", img: "/certs/java.png", courseraUrl: "https://www.coursera.org/verify/SKUQJK6WRTYJ" },
    { name: "Python for Everybody (Coursera)", pdf: "/Certif Python.pdf", img: "/certs/python.png", courseraUrl: "https://www.coursera.org/verify/HT5AB3HXJ76L" },
    { name: "React Basics (Coursera)", pdf: "/Certif REACT BASIC.pdf", img: "/certs/react-basic.png", courseraUrl: "https://www.coursera.org/verify/XK3HQ6VJN76L" },
    { name: "React Native (Coursera)", pdf: "/Certif REACT native.pdf", img: "/certs/react-native.png", courseraUrl: "https://www.coursera.org/verify/N7W3KJB2QWHP" },
    { name: "Software Engineering: UML (Coursera)", pdf: "/certi UML.pdf", img: "/certs/uml.png", courseraUrl: "https://www.coursera.org/verify/JB6B7MH2RYWK" },
    { name: "Agile with Atlassian Jira (Coursera)", pdf: "/certif JIRA.pdf", img: "/certs/jira.png", courseraUrl: "https://www.coursera.org/verify/X4W3MYG5NYZT" },
    { name: "Git & GitHub (Coursera)", pdf: "/Certif git and github.pdf", img: "/certs/git.png", courseraUrl: "https://www.coursera.org/verify/5D3E7V3TXKZJ" },
    { name: "French Intermediate B1-B2 (Coursera)", pdf: "/certif Francais B1-B2.pdf", img: "/certs/french.png", courseraUrl: "https://www.coursera.org/verify/LQK5VZQN3N8S" },
    { name: "English (Coursera)", pdf: "/certif coursera ANGLAIS.pdf", img: "/certs/english.png", courseraUrl: "https://www.coursera.org/verify/QT3H6L2GJ5YM" },
    { name: "Docker, Kubernetes & OpenShift", pdf: "/Certif Docker,kubernetes et openshift.pdf", img: "/certs/docker.png", courseraUrl: "https://www.coursera.org/verify/R8T5WK3NZ5YT" },
    { name: "Virtual Networks in Azure", pdf: "/Certif Virtual Networks in Azure.pdf", img: "/certs/azure.png", courseraUrl: "https://www.coursera.org/verify/7WGBN5D7LH6K" },
    { name: "Introduction to Scrum Master", pdf: "/certif Introduction to Scrun Master Profession.pdf", img: "/certs/scrum.png", courseraUrl: "https://www.coursera.org/verify/MJQ7YZCG3PYZ" },
    { name: "SAP Fundamentals", pdf: "/certif SAP Fundamentals.pdf", img: "/certs/sap.png", courseraUrl: "https://www.coursera.org/verify/VPQP3QFNLQJT" },
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png", courseraUrl: "https://www.coursera.org/verify/K5WJLN7HZGQY" }
  ]
};

const contentEn = {
  softSkills: ["Team Spirit", "Rigor", "Autonomy", "Technical Curiosity", "Priority Management", "Creativity"],
  langLevels: { "Langue maternelle": 100, "Bilingue": 85, "Avancé": 75, "Intermédiaire": 55, "Débutant": 40 },
  experiences: [
    {
      role: "Full Stack Developer Intern", company: "Web4Jobs",
      period: "March 2025 – Aug 2025 · Casablanca, Morocco",
      project: "Asset management platform for coding centers (Morocco & Africa)",
      tasks: ["Requirements analysis and UML modeling", "Front-End (ReactJS) & Back-End (Java Spring Boot) development", "AI module integration (Ollama LLM) for predictive maintenance"],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Web Developer Intern", company: "Royal Air Maroc (RAM)",
      period: "July 2024 – Aug 2024 · Casablanca, Morocco",
      project: "Centralized parts & maintenance management application",
      tasks: ["System design and UML modeling.", "Frontend and backend application development.", "Maintenance features integration."],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Web Developer / Planning Intern", company: "Safilait (Groupe Bel)",
      period: "Aug 2023 – Sep 2023 · Casablanca, Morocco",
      project: "E-commerce website dedicated to the agri-food sector",
      tasks: ["System modeling with UML.", "Frontend and backend website development.", "Database management for order tracking."],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: enrich([
    { title: "EasyJob", desc: "Smart recruitment platform for the Moroccan market: multi-source scraping, 1-click application, multilingual AI (FR/AR/EN), intelligent matching and recruiter dashboard.", github: "https://github.com/tahahb02/EasyJob", live: "https://easyjob-theta.vercel.app/", featured: true },
    { title: "MedCare AI", desc: "Smart medical platform digitizing clinics: patient management, teleconsultation, clinical AI, e-prescriptions and health tracking.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Smart daily assistant: AI budget, Kanban tasks, medication tracker, invoice scanner, voice assistant and personalized recommendations.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Intelligent matching between job offers and CVs via LLM (Ollama)", github: "https://github.com/tahahb02/Smart-Recruiter" },
    { title: "BookHub", desc: "E-book management and distribution platform (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Mobile quiz application for driver's license" },
    { title: "FitTrack Web App", desc: "Calorie calculator & nutritional tracking" }
  ]),
  education: [
    { dates: "2026", title: "Wings Tech Intensive Training", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Intensive 6+ month program focused on full-stack development (concrete projects), personal development and practical workshops.", ongoing: true },
    { dates: "2022 – 2025", title: "Engineering cycle in Computer Science and Networks, MIAGE option", institution: "Moroccan School of Engineering Sciences (EMSI)" },
    { dates: "2020 – 2022", title: "Preparatory classes", institution: "Moroccan School of Engineering Sciences (EMSI)" },
    { dates: "2019 – 2020", title: "Baccalaureate in Physics and Chemistry, French option", institution: "With Honors" }
  ],
  certifications: [
    { name: "Introduction to Java and Object-Oriented Programming (Coursera)", pdf: "/certif Introduction to Java.pdf", img: "/certs/java.png", courseraUrl: "https://www.coursera.org/verify/SKUQJK6WRTYJ" },
    { name: "Python for Everybody (Coursera)", pdf: "/Certif Python.pdf", img: "/certs/python.png", courseraUrl: "https://www.coursera.org/verify/HT5AB3HXJ76L" },
    { name: "React Basics (Coursera)", pdf: "/Certif REACT BASIC.pdf", img: "/certs/react-basic.png", courseraUrl: "https://www.coursera.org/verify/XK3HQ6VJN76L" },
    { name: "React Native (Coursera)", pdf: "/Certif REACT native.pdf", img: "/certs/react-native.png", courseraUrl: "https://www.coursera.org/verify/N7W3KJB2QWHP" },
    { name: "Software Engineering: UML (Coursera)", pdf: "/certi UML.pdf", img: "/certs/uml.png", courseraUrl: "https://www.coursera.org/verify/JB6B7MH2RYWK" },
    { name: "Agile with Atlassian Jira (Coursera)", pdf: "/certif JIRA.pdf", img: "/certs/jira.png", courseraUrl: "https://www.coursera.org/verify/X4W3MYG5NYZT" },
    { name: "Git & GitHub (Coursera)", pdf: "/Certif git and github.pdf", img: "/certs/git.png", courseraUrl: "https://www.coursera.org/verify/5D3E7V3TXKZJ" },
    { name: "French Intermediate B1-B2 (Coursera)", pdf: "/certif Francais B1-B2.pdf", img: "/certs/french.png", courseraUrl: "https://www.coursera.org/verify/LQK5VZQN3N8S" },
    { name: "English (Coursera)", pdf: "/certif coursera ANGLAIS.pdf", img: "/certs/english.png", courseraUrl: "https://www.coursera.org/verify/QT3H6L2GJ5YM" },
    { name: "Docker, Kubernetes & OpenShift", pdf: "/Certif Docker,kubernetes et openshift.pdf", img: "/certs/docker.png", courseraUrl: "https://www.coursera.org/verify/R8T5WK3NZ5YT" },
    { name: "Virtual Networks in Azure", pdf: "/Certif Virtual Networks in Azure.pdf", img: "/certs/azure.png", courseraUrl: "https://www.coursera.org/verify/7WGBN5D7LH6K" },
    { name: "Introduction to Scrum Master", pdf: "/certif Introduction to Scrun Master Profession.pdf", img: "/certs/scrum.png", courseraUrl: "https://www.coursera.org/verify/MJQ7YZCG3PYZ" },
    { name: "SAP Fundamentals", pdf: "/certif SAP Fundamentals.pdf", img: "/certs/sap.png", courseraUrl: "https://www.coursera.org/verify/VPQP3QFNLQJT" },
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png", courseraUrl: "https://www.coursera.org/verify/K5WJLN7HZGQY" }
  ]
};

const contentDe = {
  softSkills: ["Teamgeist", "Genauigkeit", "Eigenständigkeit", "Technische Neugier", "Prioritätenmanagement", "Kreativität"],
  langLevels: { "Langue maternelle": 100, "Bilingue": 85, "Avancé": 75, "Intermédiaire": 55, "Débutant": 40 },
  experiences: [
    {
      role: "Full-Stack-Entwickler Praktikant", company: "Web4Jobs",
      period: "März 2025 – Aug 2025 · Casablanca, Marokko",
      project: "Vermögensverwaltungsplattform für Coding-Zentren (Marokko & Afrika)",
      tasks: ["Anforderungsanalyse und UML-Modellierung", "Front-End (ReactJS) & Back-End (Java Spring Boot) Entwicklung", "Integration eines KI-Moduls (Ollama LLM) für vorausschauende Wartung"],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Webentwickler Praktikant", company: "Royal Air Maroc (RAM)",
      period: "Juli 2024 – Aug 2024 · Casablanca, Marokko",
      project: "Zentralisierte Teile- und Wartungsverwaltungsanwendung",
      tasks: ["Systemdesign und UML-Modellierung.", "Frontend- und Backend-Entwicklung der Anwendung.", "Integration von Wartungsfunktionen."],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Webentwickler / Planung Praktikant", company: "Safilait (Groupe Bel)",
      period: "Aug 2023 – Sep 2023 · Casablanca, Marokko",
      project: "E-Commerce-Website für den Agrarlebensmittelsektor",
      tasks: ["Systemmodellierung mit UML.", "Frontend- und Backend-Entwicklung der Website.", "Datenbankverwaltung für die Auftragsverfolgung."],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: enrich([
    { title: "EasyJob", desc: "Intelligente Rekrutierungsplattform für den marokkanischen Markt: Multi-Quellen-Scraping, 1-Klick-Bewerbung, mehrsprachige KI (FR/AR/EN), intelligentes Matching und Rekruter-Dashboard.", github: "https://github.com/tahahb02/EasyJob", live: "https://easyjob-theta.vercel.app/", featured: true },
    { title: "MedCare AI", desc: "Intelligente medizinische Plattform zur Digitalisierung von Praxen: Patientenverwaltung, Telemedizin, klinische KI, E-Rezepte und Gesundheitsverfolgung.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Intelligenter Tagesassistant: KI-Budget, Kanban-Aufgaben, Medikamentenverfolgung, Rechnungsscanner, Sprachassistent und personalisierte Empfehlungen.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Intelligentes Matching zwischen Stellenangeboten und Lebensläufen via LLM (Ollama)", github: "https://github.com/tahahb02/Smart-Recruiter" },
    { title: "BookHub", desc: "E-Book-Verwaltungs- und Vertriebsplattform (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Mobile Quiz-Anwendung für den Führerschein" },
    { title: "FitTrack Web App", desc: "Kalorienrechner & Ernährungsverfolgung" }
  ]),
  education: [
    { dates: "2026", title: "Wings Tech Intensivschulung", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Intensives 6+ Monate Programm mit Fokus auf Full-Stack-Entwicklung (konkrete Projekte), persönliche Entwicklung und praktische Workshops.", ongoing: true },
    { dates: "2022 – 2025", title: "Ingenieurstudium in Informatik und Netzwerken, Option MIAGE", institution: "Marokkanische Schule für Ingenieurwissenschaften (EMSI)" },
    { dates: "2020 – 2022", title: "Vorbereitungsjahre", institution: "Marokkanische Schule für Ingenieurwissenschaften (EMSI)" },
    { dates: "2019 – 2020", title: "Abitur in Physik und Chemie, Französisch-Option", institution: "Mit Auszeichnung" }
  ],
  certifications: [
    { name: "Introduction to Java and Object-Oriented Programming (Coursera)", pdf: "/certif Introduction to Java.pdf", img: "/certs/java.png", courseraUrl: "https://www.coursera.org/verify/SKUQJK6WRTYJ" },
    { name: "Python for Everybody (Coursera)", pdf: "/Certif Python.pdf", img: "/certs/python.png", courseraUrl: "https://www.coursera.org/verify/HT5AB3HXJ76L" },
    { name: "React Basics (Coursera)", pdf: "/Certif REACT BASIC.pdf", img: "/certs/react-basic.png", courseraUrl: "https://www.coursera.org/verify/XK3HQ6VJN76L" },
    { name: "React Native (Coursera)", pdf: "/Certif REACT native.pdf", img: "/certs/react-native.png", courseraUrl: "https://www.coursera.org/verify/N7W3KJB2QWHP" },
    { name: "Software Engineering: UML (Coursera)", pdf: "/certi UML.pdf", img: "/certs/uml.png", courseraUrl: "https://www.coursera.org/verify/JB6B7MH2RYWK" },
    { name: "Agile with Atlassian Jira (Coursera)", pdf: "/certif JIRA.pdf", img: "/certs/jira.png", courseraUrl: "https://www.coursera.org/verify/X4W3MYG5NYZT" },
    { name: "Git & GitHub (Coursera)", pdf: "/Certif git and github.pdf", img: "/certs/git.png", courseraUrl: "https://www.coursera.org/verify/5D3E7V3TXKZJ" },
    { name: "French Intermediate B1-B2 (Coursera)", pdf: "/certif Francais B1-B2.pdf", img: "/certs/french.png", courseraUrl: "https://www.coursera.org/verify/LQK5VZQN3N8S" },
    { name: "English (Coursera)", pdf: "/certif coursera ANGLAIS.pdf", img: "/certs/english.png", courseraUrl: "https://www.coursera.org/verify/QT3H6L2GJ5YM" },
    { name: "Docker, Kubernetes & OpenShift", pdf: "/Certif Docker,kubernetes et openshift.pdf", img: "/certs/docker.png", courseraUrl: "https://www.coursera.org/verify/R8T5WK3NZ5YT" },
    { name: "Virtual Networks in Azure", pdf: "/Certif Virtual Networks in Azure.pdf", img: "/certs/azure.png", courseraUrl: "https://www.coursera.org/verify/7WGBN5D7LH6K" },
    { name: "Introduction to Scrum Master", pdf: "/certif Introduction to Scrun Master Profession.pdf", img: "/certs/scrum.png", courseraUrl: "https://www.coursera.org/verify/MJQ7YZCG3PYZ" },
    { name: "SAP Fundamentals", pdf: "/certif SAP Fundamentals.pdf", img: "/certs/sap.png", courseraUrl: "https://www.coursera.org/verify/VPQP3QFNLQJT" },
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png", courseraUrl: "https://www.coursera.org/verify/K5WJLN7HZGQY" }
  ]
};

export const contentTranslations = { fr: contentFr, en: contentEn, de: contentDe };

export const translations = {
  fr: {
    nav: { home: "Accueil", skills: "Compétences", experience: "Expériences", projects: "Projets", certifications: "Certifications", contact: "Contact" },
    hero: {
      contactBtn: "Contactez-moi",
      downloadBtn: "Télécharger CV",
      viewCV: "Consulter CV",
      close: "Fermer",
      statement: "Ingénieur d'État en Génie Informatique (MIAGE). Je conçois des applications web modernes et évolutives — architectures REST, bases SQL/NoSQL — avec une attention particulière pour l'intégration de l'Intelligence Artificielle.",
      availability: "Disponible pour de nouvelles opportunités",
      scroll: "Défiler",
      metaLabel: "PROFIL / 001",
      
      coffee: "CASABLANCA / MAROC",
      roleLine: "FULL-STACK ENGINEER",
      techLine: "AI / WEB / SOFTWARE",
      stack: "STACK",
      openCv: "OUVRIR",
    },
    about: {
      title: "À propos",
      label: "PROFIL",
      intro: "Ingénieur d'État en Génie Informatique (MIAGE), passionné par le développement Full Stack et la conception d'applications web modernes.",
      philosophy: "Je crois en une ingénierie propre : des architectures lisibles, un code maintenable et des interfaces pensées pour l'humain. Chaque ligne doit avoir une raison.",
      desc: "Expérimenté dans le développement d'applications reposant sur des architectures REST, les bases de données SQL/NoSQL et les pratiques Agile, je navigue à l'aise entre plusieurs écosystèmes : Java/Spring Boot, React, Node.js/Express et MongoDB — avec un intérêt particulier pour l'intégration de solutions d'Intelligence Artificielle. Curieux, autonome et orienté qualité logicielle, je recherche des projets innovants où je peux contribuer à la création de solutions performantes et évolutives.",
      stats: [
        { label: "Années d'études", value: 5, suffix: "+" },
        { label: "Expériences professionnelles", value: 3, suffix: "" },
        { label: "Certifications", value: 14, suffix: "" },
        { label: "Projets sélectionnés", value: 6, suffix: "" }
      ],
      domains: ["FULL-STACK", "ARTIFICIAL INTELLIGENCE", "SOFTWARE ARCHITECTURE", "REST API", "WEB APPLICATIONS"],
      locationLabel: "BASÉ À",
      statusTitle: "STATUS",
      statusText: "Open to work",
    },
    skills: {
      title: "Compétences",
      label: "STACK",
      coreLabel: "STACK COMBINÉE",
      categories: {
        languages: "Langages",
        frameworks: "Frameworks",
        databases: "Bases de données",
        tools: "Outils & IDE",
        methods: "Méthodologies",
        systems: "Systèmes"
      }
    },
    experience: { title: "Expériences", label: "PARCOURS", project: "Projet", tasks: "Missions" },
    projects: {
      title: "Projets",
      label: "WORK",
      featured: "SÉLECTIONNÉ",
      live: "Live",
      code: "Code",
      view: "VOIR LE PROJET",
      open: "DÉTAILS",
      closeLabel: "Réduire",
    },
    education: { title: "Formation", label: "PARCOURS", ongoing: "En cours" },
    certifications: {
      title: "Certifications",
      label: "CREDENTIALS",
      view: "Voir le certificat",
      verify: "Vérifier sur Coursera",
      pdf: "Ouvrir PDF",
      platform: "PLATEFORME",
      
    },
    softSkillsLanguages: { softTitle: "Soft Skills", langTitle: "Langues", label: "HUMAIN", levelLabel: "NIVEAU" },
    contact: {
      title: "Contact",
      label: "CONNEXION",
      headline: "Let's build something meaningful.",
      formTitle: "Envoyez-moi un message",
      name: "Nom complet",
      email: "Adresse email",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Message envoyé. Merci !",
      infoTitle: "Coordonnées",
      phone: "Téléphone",
      address: "Casablanca, Maroc",
      copyEmail: "Copier l'email",
      copied: "Copié !",
      backHome: "Retour à l'accueil",
    },
    footer: { madeWith: "Conçu et développé par", social: "Réseaux", navLabel: "Navigation", colophon: "Casablanca · Maroc", rights: "Tous droits réservés." },
    theme: { light: "Mode clair", dark: "Mode sombre" },
    lang: { fr: "Français", en: "English", de: "Deutsch" },
    scrollTop: "Retour en haut",
    langLabels: { "Arabe": "Arabe", "Français": "Français", "Anglais": "Anglais", "Allemand": "Allemand" },
    langLevelLabels: { "Langue maternelle": "Native", "Bilingue": "Bilingue", "Avancé": "Avancé", "Intermédiaire": "Intermédiaire", "Débutant": "Débutant" }
  },
  en: {
    nav: { home: "Home", skills: "Skills", experience: "Experience", projects: "Projects", certifications: "Certifications", contact: "Contact" },
    hero: {
      contactBtn: "Contact Me",
      downloadBtn: "Download CV",
      viewCV: "View CV",
      close: "Close",
      statement: "State Engineer in Computer Science (MIAGE). I build modern, scalable web applications — REST architectures, SQL/NoSQL databases — with a strong focus on integrating Artificial Intelligence.",
      availability: "Open to new opportunities",
      scroll: "Scroll",
      metaLabel: "PROFILE / 001",
      
      coffee: "CASABLANCA / MOROCCO",
      roleLine: "FULL-STACK ENGINEER",
      techLine: "AI / WEB / SOFTWARE",
      stack: "STACK",
      openCv: "OPEN",
    },
    about: {
      title: "About",
      label: "PROFILE",
      intro: "State Engineer in Computer Science (MIAGE), passionate about Full Stack development and modern web application design.",
      philosophy: "I believe in clean engineering: readable architectures, maintainable code and human-centered interfaces. Every line should have a purpose.",
      desc: "Experienced in building applications on REST architectures, SQL/NoSQL databases and Agile practices, I move comfortably across ecosystems — Java/Spring Boot, React, Node.js/Express and MongoDB — with a particular interest in Artificial Intelligence integration. Curious, autonomous and focused on software quality, I seek innovative projects where I can contribute to high-performing and scalable solutions.",
      stats: [
        { label: "Years of Study", value: 5, suffix: "+" },
        { label: "Professional Experiences", value: 3, suffix: "" },
        { label: "Certifications", value: 14, suffix: "" },
        { label: "Selected Projects", value: 6, suffix: "" }
      ],
      domains: ["FULL-STACK", "ARTIFICIAL INTELLIGENCE", "SOFTWARE ARCHITECTURE", "REST API", "WEB APPLICATIONS"],
      locationLabel: "BASED IN",
      statusTitle: "STATUS",
      statusText: "Open to work",
    },
    skills: {
      title: "Skills",
      label: "STACK",
      coreLabel: "COMBINED STACK",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        tools: "Tools & IDE",
        methods: "Methodologies",
        systems: "Systems"
      }
    },
    experience: { title: "Experience", label: "JOURNEY", project: "Project", tasks: "Achievements" },
    projects: {
      title: "Projects",
      label: "WORK",
      featured: "FEATURED",
      live: "Live",
      code: "Code",
      view: "VIEW PROJECT",
      open: "DETAILS",
      closeLabel: "Collapse",
    },
    education: { title: "Education", label: "JOURNEY", ongoing: "Ongoing" },
    certifications: {
      title: "Certifications",
      label: "CREDENTIALS",
      view: "View certificate",
      verify: "Verify on Coursera",
      pdf: "Open PDF",
      platform: "PLATFORM",
      
    },
    softSkillsLanguages: { softTitle: "Soft Skills", langTitle: "Languages", label: "HUMAN", levelLabel: "LEVEL" },
    contact: {
      title: "Contact",
      label: "CONNECT",
      headline: "Let's build something meaningful.",
      formTitle: "Send me a message",
      name: "Full name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent. Thank you!",
      infoTitle: "Contact information",
      phone: "Phone",
      address: "Casablanca, Morocco",
      copyEmail: "Copy email",
      copied: "Copied!",
      backHome: "Back to home",
    },
    footer: { madeWith: "Designed & developed by", social: "Social", navLabel: "Navigation", colophon: "Casablanca · Morocco", rights: "All rights reserved." },
    theme: { light: "Light mode", dark: "Dark mode" },
    lang: { fr: "Français", en: "English", de: "Deutsch" },
    scrollTop: "Back to top",
    langLabels: { "Arabe": "Arabic", "Français": "French", "Anglais": "English", "Allemand": "German" },
    langLevelLabels: { "Langue maternelle": "Native", "Bilingue": "Bilingual", "Avancé": "Advanced", "Intermédiaire": "Intermediate", "Débutant": "Beginner" }
  },
  de: {
    nav: { home: "Startseite", skills: "Fähigkeiten", experience: "Erfahrung", projects: "Projekte", certifications: "Zertifikate", contact: "Kontakt" },
    hero: {
      contactBtn: "Kontaktieren",
      downloadBtn: "Lebenslauf",
      viewCV: "Lebenslauf ansehen",
      close: "Schließen",
      statement: "Staatsingenieur in Informatik (MIAGE). Ich entwickle moderne, skalierbare Webanwendungen — REST-Architekturen, SQL/NoSQL-Datenbanken — mit besonderem Fokus auf die Integration von Künstlicher Intelligenz.",
      availability: "Offen für neue Möglichkeiten",
      scroll: "Scrollen",
      metaLabel: "PROFIL / 001",
      
      coffee: "CASABLANCA / MAROKKO",
      roleLine: "FULL-STACK-ENGINEER",
      techLine: "KI / WEB / SOFTWARE",
      stack: "STACK",
      openCv: "ÖFFNEN",
    },
    about: {
      title: "Über mich",
      label: "PROFIL",
      intro: "Staatsingenieur in Informatik (MIAGE), leidenschaftlich im Full-Stack-Bereich und der Konzeption moderner Webanwendungen.",
      philosophy: "Ich glaube an sauberes Engineering: lesbare Architekturen, wartbarer Code und menschenzentrierte Interfaces. Jede Zeile sollte einen Zweck haben.",
      desc: "Erfahren in der Entwicklung von Anwendungen mit REST-Architekturen, SQL/NoSQL-Datenbanken und Agile-Praktiken, bewege ich mich sicher zwischen mehreren Ökosystemen: Java/Spring Boot, React, Node.js/Express und MongoDB — mit besonderem Interesse an der Integration von KI-Lösungen. Neugierig, eigenständig und auf Softwarequalität ausgerichtet, suche ich innovative Projekte, zu denen ich leistungsstarke und skalierbare Lösungen beitragen kann.",
      stats: [
        { label: "Studienjahre", value: 5, suffix: "+" },
        { label: "Berufliche Erfahrungen", value: 3, suffix: "" },
        { label: "Zertifizierungen", value: 14, suffix: "" },
        { label: "Ausgewählte Projekte", value: 6, suffix: "" }
      ],
      domains: ["FULL-STACK", "KÜNSTLICHE INTELLIGENZ", "SOFTWARE-ARCHITEKTUR", "REST API", "WEB-ANWENDUNGEN"],
      locationLabel: "BASIEREND IN",
      statusTitle: "STATUS",
      statusText: "Offen für Arbeit",
    },
    skills: {
      title: "Fähigkeiten",
      label: "STACK",
      coreLabel: "KOMBINIERTER STACK",
      categories: {
        languages: "Sprachen",
        frameworks: "Frameworks",
        databases: "Datenbanken",
        tools: "Tools & IDE",
        methods: "Methodologien",
        systems: "Systeme"
      }
    },
    experience: { title: "Erfahrung", label: "WERDEGANG", project: "Projekt", tasks: "Leistungen" },
    projects: {
      title: "Projekte",
      label: "ARBEIT",
      featured: "AUSGEWÄHLT",
      live: "Live",
      code: "Code",
      view: "PROJEKT ANSEHEN",
      open: "DETAILS",
      closeLabel: "Einklappen",
    },
    education: { title: "Ausbildung", label: "WERDEGANG", ongoing: "Laufend" },
    certifications: {
      title: "Zertifikate",
      label: "NACHWEISE",
      view: "Zertifikat ansehen",
      verify: "Auf Coursera verifizieren",
      pdf: "PDF öffnen",
      platform: "PLATTFORM",
      
    },
    softSkillsLanguages: { softTitle: "Soft Skills", langTitle: "Sprachen", label: "MENSCH", levelLabel: "NIVEAU" },
    contact: {
      title: "Kontakt",
      label: "VERBINDUNG",
      headline: "Let's build something meaningful.",
      formTitle: "Senden Sie mir eine Nachricht",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      subject: "Betreff",
      message: "Nachricht",
      submit: "Nachricht senden",
      sending: "Senden…",
      success: "Nachricht gesendet. Danke!",
      infoTitle: "Kontaktinformationen",
      phone: "Telefon",
      address: "Casablanca, Marokko",
      copyEmail: "E-Mail kopieren",
      copied: "Kopiert!",
      backHome: "Zurück zur Startseite",
    },
    footer: { madeWith: "Designed & entwickelt von", social: "Sozial", navLabel: "Navigation", colophon: "Casablanca · Marokko", rights: "Alle Rechte vorbehalten." },
    theme: { light: "Heller Modus", dark: "Dunkler Modus" },
    lang: { fr: "Français", en: "English", de: "Deutsch" },
    scrollTop: "Nach oben",
    langLabels: { "Arabe": "Arabisch", "Français": "Französisch", "Anglais": "Englisch", "Allemand": "Deutsch" },
    langLevelLabels: { "Langue maternelle": "Muttersprache", "Bilingue": "Zweisprachig", "Avancé": "Fortgeschritten", "Intermédiaire": "Mittelstufe", "Débutant": "Anfänger" }
  }
};

export const defaultLang = "fr";