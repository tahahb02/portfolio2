import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaProjectDiagram, FaTerminal } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

const categoryIcons = {
  languages: FaCode,
  frameworks: FaServer,
  databases: FaDatabase,
  tools: FaLaptopCode,
  methods: FaProjectDiagram,
  systems: FaTerminal,
};

const categoryLabels = {
  languages: "Langages",
  frameworks: "Frameworks",
  databases: "Bases de données",
  tools: "Outils & IDE",
  methods: "Méthodologies",
  systems: "Systèmes",
};

const skillLevels = {
  languages: { Java: 90, Python: 75, "C/C++": 65, "C#": 60, PHP: 70, JavaScript: 80 },
  frameworks: { "Spring Boot": 85, Django: 60, "React JS": 80, Angular: 55, Thymeleaf: 75 },
  databases: { MySQL: 85, PostgreSQL: 70, "SQL Server": 65, Oracle: 60 },
  tools: { Intellij: 85, Eclipse: 70, "VS Code": 80, Git: 80, GitHub: 80, Jira: 65 },
  methods: { "Agile/Scrum": 80, UML: 85, "CI/CD": 60, "REST API": 80 },
  systems: { Windows: 85, Linux: 70 },
};

function SkillBar({ name, level }) {
  return (
    <div className="group/skill">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm group-hover/skill:text-navy-300 transition-colors" style={{ color: "var(--text-secondary)" }}>{name}</span>
        <span className="text-xs group-hover/skill:text-navy-400 transition-colors" style={{ color: "var(--text-muted)" }}>{level}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-navy-500 to-slate-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <FaCode className="text-navy-400" />
          <span className="bg-gradient-to-r from-navy-400 to-slate-300 bg-clip-text text-transparent">
            {t.skills.title}
          </span>
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {Object.entries(skills).map(([category, list]) => {
            const Icon = categoryIcons[category] || FaCode;
            const levelsForCategory = skillLevels[category] || {};
            return (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 group"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(44,95,138,0.3)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(44,95,138,0.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 group-hover:bg-navy-500/20 transition-colors">
                    <Icon />
                  </div>
                  <h4 className="text-lg font-semibold capitalize" style={{ color: "var(--text-secondary)" }}>
                    {categoryLabels[category] || category}
                  </h4>
                </div>
                <div className="space-y-3">
                  {list.map((skill, index) => (
                    <SkillBar key={index} name={skill} level={levelsForCategory[skill] || 70} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
