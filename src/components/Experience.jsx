import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

export default function Experience() {
  const { t, content } = useLanguage();
  const experiences = content.experiences;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <FaBriefcase className="text-navy-400" />
          <span className="bg-gradient-to-r from-navy-400 to-slate-300 bg-clip-text text-transparent">
            {t.experience.title}
          </span>
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-navy-500/50 via-slate-400/50 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex gap-4 sm:gap-6 pb-10 sm:pb-12 last:pb-0 group"
            >
              <div className="relative shrink-0">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-500 to-slate-400 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-navy-500/20 group-hover:scale-110 group-hover:shadow-navy-500/40 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {idx + 1}
                </motion.div>
                <div className="absolute -inset-2 rounded-full bg-navy-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div
                className="flex-1 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(44,95,138,0.3)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(44,95,138,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                      {exp.role}{" "}
                      <span className="text-navy-400">@ {exp.company}</span>
                    </h4>
                  </div>
                  <span className="text-sm shrink-0 md:pt-1 font-mono" style={{ color: "var(--text-muted)" }}>
                    {exp.period}
                  </span>
                </div>

                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  <span className="font-medium" style={{ color: "var(--text-primary)" }}>{t.experience.project} :</span> {exp.project}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.tasks.map((task, tIdx) => (
                    <motion.li
                      key={tIdx}
                      className="flex items-start gap-2 text-sm group/task"
                      style={{ color: "var(--text-secondary)" }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: tIdx * 0.1 }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-400 shrink-0 group-hover/task:bg-slate-300 transition-colors" />
                      <span className="group-hover/task:text-slate-300 transition-colors">{task}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, techIdx) => (
                    <motion.span
                      key={techIdx}
                      className="px-3 py-1 bg-navy-500/10 text-navy-400 text-xs font-medium rounded-lg border border-navy-500/20 hover:bg-navy-500/20 hover:scale-105 hover:border-slate-400/30 transition-all duration-200 cursor-default"
                      whileHover={{ y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
