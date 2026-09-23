import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaProjectDiagram, FaTerminal } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeUp } from "../constants/animations";

const categoryIcons = {
  languages: FaCode,
  frameworks: FaServer,
  databases: FaDatabase,
  tools: FaLaptopCode,
  methods: FaProjectDiagram,
  systems: FaTerminal,
};

export default function Skills({ skills }) {
  const { t } = useLanguage();
  const categories = Object.entries(skills);
  const coreStack = [...new Set(categories.flatMap(([, list]) => list))].slice(0, 14);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index={3} label={t.skills.label} title={t.skills.title} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-px border border-(--border-color) bg-(--hairline) sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map(([category, list], catIdx) => {
            const Icon = categoryIcons[category] || FaCode;
            return (
              <motion.div
                key={category}
                variants={fadeUp}
                className="group flex flex-col gap-4 bg-(--bg-card) p-6 transition-colors duration-300 hover:bg-(--bg-card-hover)"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon size={15} className="text-(--accent)" />
                    <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-(--text-primary)">
                      {t.skills.categories[category]}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-(--text-muted)" aria-hidden="true">
                    0{catIdx + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill, i) => (
                    <span
                      key={skill}
                      className="group/tag inline-flex items-center gap-1.5 border border-(--border-color) px-2.5 py-1 font-mono text-[11px] tracking-wide text-(--text-secondary) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
                    >
                      <span className="text-[9px] text-(--text-muted) transition-colors group-hover/tag:text-(--accent)" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 border border-(--border-color) bg-(--bg-secondary) p-6"
        >
          <span className="mono-label">{t.skills.coreLabel}</span>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            {coreStack.map((tech, i) => (
              <span
                key={tech}
                className="flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-(--text-secondary)"
              >
                <span className="text-(--accent)" aria-hidden="true">▪</span>
                {tech.toUpperCase()}
                {i < coreStack.length - 1 && <span className="ml-1 text-(--text-muted)" aria-hidden="true">/</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}