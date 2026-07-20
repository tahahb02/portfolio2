const contentFr = {
  softSkills: ["Esprit d'équipe", "Rigueur", "Autonomie", "Curiosité technique", "Gestion des priorités"],
  langLevels: { "Langue maternelle": 100, "Bilingue": 85, "Avancé": 75, "Intermédiaire": 55, "Débutant": 40 },
  experiences: [
    {
      role: "Stagiaire Développeur Full Stack", company: "Web4Jobs",
      period: "Mars 2025 - Août 2025 | Casablanca, Maroc",
      project: "Plateforme de gestion des patrimoines pour centres de coding (Maroc & Afrique)",
      tasks: ["Analyse des besoins et modélisation UML", "Développement Front-End (ReactJS) & Back-End (Java Spring Boot)", "Intégration d'un module IA (Ollama LLM) pour la maintenance prédictive"],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Stagiaire Développeur Web", company: "Royal Air Maroc (RAM)",
      period: "Juillet 2024 - Août 2024 | Casablanca, Maroc",
      project: "Application de gestion centralisée des pièces & maintenances",
      tasks: ["Conception et modélisation UML du système.", "Développement du frontend et backend de l'application.", "Intégration des fonctionnalités de maintenance."],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Stagiaire Développeur Web / Planification", company: "Safilait (Groupe Bel)",
      period: "Août 2023 - Septembre 2023 | Casablanca, Maroc",
      project: "Développement d'un site e-commerce dédié au secteur agroalimentaire",
      tasks: ["Modélisation des systèmes avec UML.", "Développement du frontend et backend du site.", "Gestion de la base de données pour le suivi des commandes."],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: [
    { title: "MedCare AI", desc: "Plateforme médicale intelligente digitalisant les cabinets : gestion des patients, téléconsultation, IA clinique, prescriptions électroniques et suivi santé.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Assistant quotidien intelligent : budget IA, tâches Kanban, médicaments, scanner de factures, assistant vocal et recommandations personnalisées.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Matching intelligent entre offres et CVs via LLM (Ollama)" },
    { title: "BookHub", desc: "Plateforme de gestion et distribution d'E-books (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Application mobile de quiz pour permis de conduire" },
    { title: "FitTrack Web App", desc: "Calculateur de calories & suivi nutritionnel" }
  ],
  education: [
    { dates: "Mai 2026 - Novembre 2026", title: "Formation Intensive Wings Tech", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Formation intensive de 6 mois+ axée sur le développement full-stack (projets concrets), le développement personnel et les ateliers pratiques.", ongoing: true },
    { dates: "2022-2025", title: "Cycle d'ingénierie en informatique et réseau option MIAGE", institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    { dates: "2020 - 2022", title: "Années préparatoires", institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    { dates: "2019-2020", title: "Baccalauréat physique chimie option français", institution: "Mention Bien" }
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
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png", courseraUrl: "https://www.coursera.org/verify/K5WJLN7HZGQY" },
  ]
};

const contentEn = {
  softSkills: ["Team Spirit", "Rigor", "Autonomy", "Technical Curiosity", "Priority Management"],
  langLevels: { "Langue maternelle": 100, "Bilingue": 85, "Avancé": 75, "Intermédiaire": 55, "Débutant": 40 },
  experiences: [
    {
      role: "Full Stack Developer Intern", company: "Web4Jobs",
      period: "March 2025 - August 2025 | Casablanca, Morocco",
      project: "Asset management platform for coding centers (Morocco & Africa)",
      tasks: ["Requirements analysis and UML modeling", "Front-End (ReactJS) & Back-End (Java Spring Boot) development", "AI module integration (Ollama LLM) for predictive maintenance"],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Web Developer Intern", company: "Royal Air Maroc (RAM)",
      period: "July 2024 - August 2024 | Casablanca, Morocco",
      project: "Centralized parts & maintenance management application",
      tasks: ["System design and UML modeling.", "Frontend and backend application development.", "Maintenance features integration."],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Web Developer / Planning Intern", company: "Safilait (Groupe Bel)",
      period: "August 2023 - September 2023 | Casablanca, Morocco",
      project: "E-commerce website dedicated to the agri-food sector",
      tasks: ["System modeling with UML.", "Frontend and backend website development.", "Database management for order tracking."],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: [
    { title: "MedCare AI", desc: "Smart medical platform digitizing clinics: patient management, teleconsultation, clinical AI, e-prescriptions and health tracking.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Smart daily assistant: AI budget, Kanban tasks, medication tracker, invoice scanner, voice assistant and personalized recommendations.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Intelligent matching between job offers and CVs via LLM (Ollama)" },
    { title: "BookHub", desc: "E-book management and distribution platform (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Mobile quiz application for driver's license" },
    { title: "FitTrack Web App", desc: "Calorie calculator & nutritional tracking" }
  ],
  education: [
    { dates: "May 2026 - Nov 2026", title: "Wings Tech Intensive Training", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Intensive 6+ month program focused on full-stack development (concrete projects), personal development and practical workshops.", ongoing: true },
    { dates: "2022-2025", title: "Engineering cycle in Computer Science and Networks, MIAGE option", institution: "Moroccan School of Engineering Sciences (EMSI)" },
    { dates: "2020 - 2022", title: "Preparatory classes", institution: "Moroccan School of Engineering Sciences (EMSI)" },
    { dates: "2019-2020", title: "Baccalaureate in Physics and Chemistry, French option", institution: "With Honors" }
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
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png", courseraUrl: "https://www.coursera.org/verify/K5WJLN7HZGQY" },
  ]
};

const contentDe = {
  softSkills: ["Teamgeist", "Genauigkeit", "Eigenständigkeit", "Technische Neugier", "Prioritätenmanagement"],
  langLevels: { "Langue maternelle": 100, "Bilingue": 85, "Avancé": 75, "Intermédiaire": 55, "Débutant": 40 },
  experiences: [
    {
      role: "Full-Stack-Entwickler Praktikant", company: "Web4Jobs",
      period: "März 2025 - August 2025 | Casablanca, Marokko",
      project: "Vermögensverwaltungsplattform für Coding-Zentren (Marokko & Afrika)",
      tasks: ["Anforderungsanalyse und UML-Modellierung", "Front-End (ReactJS) & Back-End (Java Spring Boot) Entwicklung", "Integration eines KI-Moduls (Ollama LLM) für vorausschauende Wartung"],
      stack: ["Java", "Spring Boot", "React JS", "MySQL", "Git", "IntelliJ", "Ollama"]
    },
    {
      role: "Webentwickler Praktikant", company: "Royal Air Maroc (RAM)",
      period: "Juli 2024 - August 2024 | Casablanca, Marokko",
      project: "Zentralisierte Teile- und Wartungsverwaltungsanwendung",
      tasks: ["Systemdesign und UML-Modellierung.", "Frontend- und Backend-Entwicklung der Anwendung.", "Integration von Wartungsfunktionen."],
      stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
    },
    {
      role: "Webentwickler / Planung Praktikant", company: "Safilait (Groupe Bel)",
      period: "August 2023 - September 2023 | Casablanca, Marokko",
      project: "E-Commerce-Website für den Agrarlebensmittelsektor",
      tasks: ["Systemmodellierung mit UML.", "Frontend- und Backend-Entwicklung der Website.", "Datenbankverwaltung für die Auftragsverfolgung."],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: [
    { title: "MedCare AI", desc: "Intelligente medizinische Plattform zur Digitalisierung von Praxen: Patientenverwaltung, Telemedizin, klinische KI, E-Rezepte und Gesundheitsverfolgung.", github: "https://github.com/tahahb02/MedCare-AI", live: "https://medcare-ai-jet.vercel.app", featured: true },
    { title: "SmartLife AI", desc: "Intelligenter Tagesassistent: KI-Budget, Kanban-Aufgaben, Medikamentenverfolgung, Rechnungsscanner, Sprachassistent und personalisierte Empfehlungen.", github: "https://github.com/tahahb02/Smart-Life-AI", live: "https://smartlife-ai-eight.vercel.app", featured: true },
    { title: "Smart Recruiter", desc: "Intelligentes Matching zwischen Stellenangeboten und Lebensläufen via LLM (Ollama)" },
    { title: "BookHub", desc: "E-Book-Verwaltungs- und Vertriebsplattform (React / Spring Boot)" },
    { title: "QuizzApp (Android)", desc: "Mobile Quiz-Anwendung für den Führerschein" },
    { title: "FitTrack Web App", desc: "Kalorienrechner & Ernährungsverfolgung" }
  ],
  education: [
    { dates: "Mai 2026 - Nov 2026", title: "Wings Tech Intensivschulung", institution: "Wings Tech by Jadara & Drosos Foundation", description: "Intensives 6+ Monate Programm mit Fokus auf Full-Stack-Entwicklung (konkrete Projekte), persönliche Entwicklung und praktische Workshops.", ongoing: true },
    { dates: "2022-2025", title: "Ingenieurstudium in Informatik und Netzwerken, Option MIAGE", institution: "Marokkanische Schule für Ingenieurwissenschaften (EMSI)" },
    { dates: "2020 - 2022", title: "Vorbereitungsjahre", institution: "Marokkanische Schule für Ingenieurwissenschaften (EMSI)" },
    { dates: "2019-2020", title: "Abitur in Physik und Chemie, Französisch-Option", institution: "Mit Auszeichnung" }
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
    { name: "Unix System Basics", pdf: "/certif Unix System Basics.pdf", img: "/certs/unix.png", courseraUrl: "https://www.coursera.org/verify/K5WJLN7HZGQY" },
  ]
};

export const contentTranslations = { fr: contentFr, en: contentEn, de: contentDe };

export const translations = {
  fr: {
    nav: { home: "Accueil", skills: "Compétences", experience: "Expériences", projects: "Projets", certifications: "Certifications", contact: "Contact" },
    hero: { contactBtn: "Contactez-moi", downloadBtn: "Télécharger CV", viewCV: "Consulter CV", close: "Fermer" },
    about: { title: "À Propos", desc: "Ingénieur diplômé de l'EMSI, je combine une solide maîtrise des environnements Java/Spring Boot et des architectures web réactives avec React, enrichie d'une forte orientation vers l'intégration de l'intelligence artificielle locale." },
    stats: [{ label: "Années d'études" }, { label: "Stages" }, { label: "Certifications" }, { label: "Projets" }],
    skills: { title: "Compétences Techniques" },
    experience: { title: "Expériences Professionnelles", project: "Projet" },
    projects: { title: "Projets" },
    education: { title: "Formation" },
    certifications: { title: "Certifications" },
    softSkillsLanguages: { softTitle: "Soft Skills", langTitle: "Langues" },
    contact: { title: "Contact", formTitle: "Envoyez-moi un message", name: "Nom Complet", email: "Adresse Email", subject: "Sujet", message: "Message", submit: "Envoyer le message", sending: "Envoi en cours...", infoTitle: "Informations de contact", phone: "Téléphone" },
    footer: { madeWith: "Tous droits réservés.", in: "", social: "Réseaux" },
    theme: { light: "Mode clair", dark: "Mode sombre" },
    lang: { fr: "Français", en: "English", de: "Deutsch" },
    scrollTop: "Retour en haut",
    langLabels: { "Arabe": "Arabe", "Français": "Français", "Anglais": "Anglais", "Allemand": "Allemand" },
    langLevelLabels: { "Langue maternelle": "Langue maternelle", "Bilingue": "Bilingue", "Avancé": "Avancé", "Intermédiaire": "Intermédiaire", "Débutant": "Débutant" },
  },
  en: {
    nav: { home: "Home", skills: "Skills", experience: "Experience", projects: "Projects", certifications: "Certifications", contact: "Contact" },
    hero: { contactBtn: "Contact Me", downloadBtn: "Download CV", viewCV: "View CV", close: "Close" },
    about: { title: "About Me", desc: "EMSI graduate engineer combining strong expertise in Java/Spring Boot environments and reactive web architectures with React, enriched by a strong focus on local AI integration." },
    stats: [{ label: "Years of Study" }, { label: "Internships" }, { label: "Certifications" }, { label: "Projects" }],
    skills: { title: "Technical Skills" },
    experience: { title: "Professional Experience", project: "Project" },
    projects: { title: "Projects" },
    education: { title: "Education" },
    certifications: { title: "Certifications" },
    softSkillsLanguages: { softTitle: "Soft Skills", langTitle: "Languages" },
    contact: { title: "Contact", formTitle: "Send me a message", name: "Full Name", email: "Email Address", subject: "Subject", message: "Message", submit: "Send Message", sending: "Sending...", infoTitle: "Contact Information", phone: "Phone" },
    footer: { madeWith: "All rights reserved.", in: "", social: "Social" },
    theme: { light: "Light mode", dark: "Dark mode" },
    lang: { fr: "Français", en: "English", de: "Deutsch" },
    scrollTop: "Back to top",
    langLabels: { "Arabe": "Arabic", "Français": "French", "Anglais": "English", "Allemand": "German" },
    langLevelLabels: { "Langue maternelle": "Native", "Bilingue": "Bilingual", "Avancé": "Advanced", "Intermédiaire": "Intermediate", "Débutant": "Beginner" },
  },
  de: {
    nav: { home: "Startseite", skills: "Fähigkeiten", experience: "Erfahrung", projects: "Projekte", certifications: "Zertifikate", contact: "Kontakt" },
    hero: { contactBtn: "Kontaktieren Sie mich", downloadBtn: "Lebenslauf herunterladen", viewCV: "Lebenslauf anzeigen", close: "Schließen" },
    about: { title: "Über mich", desc: "Absolvent der EMSI, vereine ich fundierte Kenntnisse in Java/Spring Boot und reaktiven Webarchitekturen mit React, angereichert durch einen starken Fokus auf lokale KI-Integration." },
    stats: [{ label: "Studienjahre" }, { label: "Praktika" }, { label: "Zertifizierungen" }, { label: "Projekte" }],
    skills: { title: "Technische Fähigkeiten" },
    experience: { title: "Berufserfahrung", project: "Projekt" },
    projects: { title: "Projekte" },
    education: { title: "Ausbildung" },
    certifications: { title: "Zertifizierungen" },
    softSkillsLanguages: { softTitle: "Soft Skills", langTitle: "Sprachen" },
    contact: { title: "Kontakt", formTitle: "Senden Sie mir eine Nachricht", name: "Vollständiger Name", email: "E-Mail-Adresse", subject: "Betreff", message: "Nachricht", submit: "Nachricht senden", sending: "Senden...", infoTitle: "Kontaktinformationen", phone: "Telefon" },
    footer: { madeWith: "Alle Rechte vorbehalten.", in: "", social: "Sozial" },
    theme: { light: "Heller Modus", dark: "Dunkler Modus" },
    lang: { fr: "Français", en: "English", de: "Deutsch" },
    scrollTop: "Nach oben",
    langLabels: { "Arabe": "Arabisch", "Français": "Französisch", "Anglais": "Englisch", "Allemand": "Deutsch" },
    langLevelLabels: { "Langue maternelle": "Muttersprache", "Bilingue": "Zweisprachig", "Avancé": "Fortgeschritten", "Intermédiaire": "Mittelstufe", "Débutant": "Anfänger" },
  },
};

export const defaultLang = "fr";
