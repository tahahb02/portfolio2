import { useState, useEffect, useRef, useMemo, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cvData } from "./data/cvData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AcademicProjects from "./components/AcademicProjects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import SoftSkillsLanguages from "./components/SoftSkillsLanguages";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import TechIconsField from "./components/TechIconsField";

const Contact = lazy(() => import("./components/Contact"));

const pageTransition = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.98 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function ContactFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const certRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(() => ({
    home: homeRef,
    skills: skillsRef,
    experience: expRef,
    projects: projRef,
    certifications: certRef,
    contact: contactRef,
  }), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== "home") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [currentPage, sectionRefs]);

  const scrollToSection = (id) => {
    if (id === "contact") {
      setCurrentPage("contact");
      return;
    }
    setCurrentPage("home");
    setTimeout(() => {
      sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <TechIconsField />
      <div className="relative z-[2]">
      <CustomCursor />
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.main key="home" {...pageTransition}>
            <div id="home" ref={sectionRefs.home}>
              <Hero profile={cvData.profile} onContactClick={() => setCurrentPage("contact")} />
            </div>
            <About />
            <div id="skills" ref={sectionRefs.skills}>
              <Skills skills={cvData.skills} />
            </div>
            <div id="experience" ref={sectionRefs.experience}>
              <Experience />
            </div>
            <div id="projects" ref={sectionRefs.projects}>
              <AcademicProjects />
            </div>
            <Education />
            <div id="certifications" ref={sectionRefs.certifications}>
              <Certifications />
            </div>
            <SoftSkillsLanguages />
          </motion.main>
        ) : (
          <motion.main key="contact" {...pageTransition}>
            <Suspense fallback={<ContactFallback />}>
              <Contact profile={cvData.profile} onBack={() => setCurrentPage("home")} />
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>

      <Footer name={cvData.profile.name} />
      </div>
    </div>
  );
}
