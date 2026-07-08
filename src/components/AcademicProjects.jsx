import { motion } from "framer-motion";
import { FaCode, FaArrowRight } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

const projectImages = {
  "Smart Recruiter": "/projects/smart-recruiter.png",
  BookHub: "/projects/bookhub.png",
  "QuizzApp (Android)": "/projects/quizzapp.png",
  "FitTrack Web App": "/projects/fittrack.png",
};

const projectTechs = {
  "Smart Recruiter": ["Java", "Spring Boot", "React JS", "Ollama", "MySQL"],
  BookHub: ["React JS", "Spring Boot", "MySQL"],
  "QuizzApp (Android)": ["Java", "Android"],
  "FitTrack Web App": ["React JS", "JavaScript"],
};

export default function AcademicProjects() {
  const { t, content } = useLanguage();
  const projects = content.projects;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <FaCode className="text-cyan-400" />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.projects.title}
          </span>
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((proj, idx) => {
            const techs = projectTechs[proj.title] || [];
            const img = projectImages[proj.title];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(6,182,212,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                {img && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
                  </div>
                )}
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-violet-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex items-start justify-between mb-3 relative">
                    <h4 className="text-lg font-semibold group-hover:text-cyan-300 transition-colors" style={{ color: "var(--text-primary)" }}>
                      {proj.title}
                    </h4>
                    <FaArrowRight className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0" />
                  </div>
                  <p className="text-sm leading-relaxed relative group-hover:text-slate-300 transition-colors mb-3" style={{ color: "var(--text-secondary)" }}>
                    {proj.desc}
                  </p>
                  {techs.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 relative">
                      {techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-xs rounded-md transition-colors"
                          style={{ color: "var(--text-muted)", backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
                          onMouseEnter={(e) => { e.target.style.color = "#22d3ee"; e.target.style.borderColor = "rgba(6,182,212,0.3)"; }}
                          onMouseLeave={(e) => { e.target.style.color = "var(--text-muted)"; e.target.style.borderColor = "var(--border-color)"; }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
