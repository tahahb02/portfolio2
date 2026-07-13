import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaSpinner } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

export default function Education() {
  const { t, content } = useLanguage();
  const education = content.education;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <FaGraduationCap className="text-navy-400" />
          <span className="bg-gradient-to-r from-navy-400 to-slate-300 bg-clip-text text-transparent">
            {t.education.title}
          </span>
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`group backdrop-blur-sm rounded-2xl p-6 flex flex-col transition-all duration-300 relative overflow-hidden ${edu.ongoing ? "ring-1 ring-slate-400/30" : ""}`}
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(138,178,211,0.3)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(138,178,211,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-slate-400/5 to-transparent rounded-bl-2xl" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-2 mb-3 relative">
                <motion.div
                  className={`h-2.5 w-2.5 rounded-full ${edu.ongoing ? "bg-green-400 animate-pulse" : "bg-slate-300"}`}
                  whileHover={{ scale: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <FaCalendarAlt className="text-slate-400/60 text-xs" />
                <span className="text-xs font-medium text-navy-400">{edu.dates}</span>
              </div>
              <h4 className="text-base font-semibold mb-2 relative group-hover:text-navy-300 transition-colors" style={{ color: "var(--text-primary)" }}>{edu.title}</h4>
              <p className="text-sm mt-auto relative group-hover:text-slate-300 transition-colors" style={{ color: "var(--text-muted)" }}>{edu.institution}</p>
              {edu.description && (
                <p className="text-xs mt-2 relative leading-relaxed" style={{ color: "var(--text-muted)" }}>{edu.description}</p>
              )}
              {edu.ongoing && (
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-green-400">
                  <FaSpinner className="animate-spin" />
                  En cours
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
