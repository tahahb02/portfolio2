import { motion } from "framer-motion";
import { FaUserCheck, FaLanguage } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

function ProficiencyBlocks({ level }) {
  const blocks = Math.round(level / 20);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <div
          key={s}
          className={`w-2.5 h-4 rounded-sm transition-all duration-300 ${
            s <= blocks
              ? "bg-gradient-to-t from-navy-500 to-slate-300"
              : ""
          }`}
          style={{
            backgroundColor: s <= blocks ? undefined : "var(--bg-secondary)",
            opacity: s <= blocks ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}

export default function SoftSkillsLanguages() {
  const { t, content } = useLanguage();
  const softSkills = content.softSkills;
  const languageLevels = content.langLevels;

  const languages = [
    { name: "Arabe", levelKey: "Langue maternelle" },
    { name: "Français", levelKey: "Bilingue" },
    { name: "Anglais", levelKey: "Avancé" },
    { name: "Allemand", levelKey: "Intermédiaire" },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <FaUserCheck className="text-navy-400" />
            <span className="bg-gradient-to-r from-navy-400 to-slate-300 bg-clip-text text-transparent">
              {t.softSkillsLanguages.softTitle}
            </span>
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-500"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {softSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={fadeInUp}
                  className="px-4 py-2 rounded-xl border transition-all duration-200 cursor-default"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => { e.target.style.borderColor = "rgba(44,95,138,0.4)"; e.target.style.color = "#2c5f8a"; e.target.style.boxShadow = "0 4px 12px rgba(44,95,138,0.15)"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "var(--border-color)"; e.target.style.color = "var(--text-secondary)"; e.target.style.boxShadow = "none"; }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <FaLanguage className="text-slate-400" />
            <span className="bg-gradient-to-r from-navy-400 to-slate-300 bg-clip-text text-transparent">
              {t.softSkillsLanguages.langTitle}
            </span>
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="backdrop-blur-sm rounded-2xl p-6 space-y-6 transition-all duration-500"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            {languages.map((langItem, idx) => {
              const levelValue = languageLevels[langItem.levelKey] || 30;
              const langLabel = t.langLabels[langItem.name] || langItem.name;
              const levelLabel = t.langLevelLabels[langItem.levelKey] || langItem.levelKey;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium" style={{ color: "var(--text-secondary)" }}>{langLabel}</span>
                    <div className="flex items-center gap-2">
                      <ProficiencyBlocks level={levelValue} />
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{levelLabel}</span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 rounded-full overflow-hidden group cursor-pointer" style={{ backgroundColor: "var(--bg-secondary)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${levelValue}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full relative group-hover:shadow-md transition-shadow ${
                        levelValue >= 80 ? "bg-gradient-to-r from-navy-500 to-slate-400" :
                        levelValue >= 60 ? "bg-gradient-to-r from-navy-500 to-slate-300" :
                        "bg-gradient-to-r from-navy-400 to-slate-300"
                      }`}
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
