import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { fadeUp, staggerContainer, EASE } from "../constants/animations";

const projectTechs = {
  EasyJob: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io", "Puppeteer", "OpenAI"],
  "MedCare AI": ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB", "Socket.io", "JWT", "AI"],
  "SmartLife AI": ["React", "Vite", "Tailwind CSS", "Framer Motion", "OpenAI", "Gemini", "Docker", "PWA"],
  "Smart Recruiter": ["Java", "Spring Boot", "React JS", "Ollama", "MySQL"],
  BookHub: ["React JS", "Spring Boot", "MySQL"],
  "QuizzApp (Android)": ["Java", "Android"],
  "FitTrack Web App": ["React JS", "JavaScript"],
};

function TechChips({ title }) {
  const techs = projectTechs[title] || [];
  if (!techs.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span
          key={tech}
          className="border border-(--border-color) px-2.5 py-1 font-mono text-[10px] tracking-wider text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(8,10,13,0.82)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.97 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-(--border-color) bg-(--bg-elevated)"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-(--hairline) bg-(--bg-elevated)/95 px-5 py-3 backdrop-blur">
          <span className="mono-label">CASE STUDY — {project.category}</span>
          <button
            onClick={onClose}
            data-cursor="LINK"
            aria-label={t.hero.close}
            className="grid h-9 w-9 place-items-center border border-(--border-color) text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className="bg-(--bg-secondary)">
          <img
            src={project.img}
            alt={`${project.title} — ${project.category}`}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>

        <div className="p-6 md:p-8">
          <span className="mono-label">{project.category}</span>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-(--text-primary)">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-(--text-secondary) md:text-base">
            {project.desc}
          </p>
          <div className="mt-6">
            <TechChips title={project.title} />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="LINK"
                className="inline-flex items-center gap-2 border border-(--border-color) px-4 py-2.5 text-xs font-semibold text-(--text-primary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
              >
                <FaGithub size={14} />
                {t.projects.code}
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-cursor="LINK"
                className="inline-flex items-center gap-2 bg-(--accent) px-4 py-2.5 text-xs font-semibold text-(--on-accent) transition-colors duration-200 hover:bg-(--accent-soft)"
              >
                <FaExternalLinkAlt size={12} />
                {t.projects.live}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AcademicProjects() {
  const { t, content } = useLanguage();
  const projects = content.projects;
  const [selected, setSelected] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const open = (p) => setSelected(p);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index={5} label={t.projects.label} title={t.projects.title} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 flex flex-col gap-14"
        >
          {featured.map((project, i) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="group grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10"
              data-cursor="VIEW"
              onClick={() => open(project)}
            >
              <div
                className={`overflow-hidden border border-(--border-color) bg-(--bg-secondary) ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={project.img}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    data-blend="true"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-(--border-color) px-4 py-2.5">
                  <span className="mono-label">{project.category}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-(--text-muted) group-hover:text-(--accent) transition-colors duration-300">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-mono text-[10px] tracking-[0.25em] text-(--accent)" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")} / FEATURED
                </span>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-(--text-primary) transition-colors duration-300 group-hover:text-(--accent) md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--text-secondary) md:text-base">
                  {project.desc}
                </p>
                <div className="mt-5">
                  <TechChips title={project.title} />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <span className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-(--accent)">
                    {t.projects.view} <FaArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="LINK"
                      className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
                    >
                      <FaGithub size={13} />
                      {t.projects.code}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="LINK"
                      className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
                    >
                      <FaExternalLinkAlt size={11} />
                      {t.projects.live}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-px border border-(--border-color) bg-(--hairline) sm:grid-cols-2"
        >
          {others.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="group bg-(--bg-card) transition-colors duration-300 hover:bg-(--bg-card-hover)"
              data-cursor="VIEW"
              onClick={() => open(project)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="mono-label">{project.category}</span>
                  <span className="font-mono text-[10px] text-(--text-muted) transition-colors duration-300 group-hover:text-(--accent)">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-(--text-primary) transition-colors duration-300 group-hover:text-(--accent)">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                  {project.desc}
                </p>
                <div className="mt-4">
                  <TechChips title={project.title} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}