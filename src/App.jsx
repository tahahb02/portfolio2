import { lazy, Suspense, useMemo, useRef, useState, useEffect } from "react";
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
import Background from "./components/ui/Background";
import { pageTransition } from "./constants/animations";

const Contact = lazy(() => import("./components/Contact"));

function ContactFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="grid h-9 w-9 animate-spin place-items-center border border-(--accent)/40 border-t-(--accent) rounded-full" />
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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
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
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <Background />
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
              <section id="about">
                <About />
              </section>
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