import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeUp } from "../constants/animations";

const languageData = [
  { name: "Arabe", levelKey: "Langue maternelle" },
  { name: "Français", levelKey: "Bilingue" },
  { name: "Anglais", levelKey: "Avancé" },
  { name: "Allemand", levelKey: "Intermédiaire" },
];

function Dots({ level }) {
  const filled = Math.round(level / 20);
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
          style={{
            backgroundColor: i < filled ? "var(--accent)" : "var(--border-strong)",
          }}
        />
      ))}
    </span>
  );
}

export default function SoftSkillsLanguages() {
  const { t, content } = useLanguage();
  const softSkills = content.softSkills;
  const levels = content.langLevels;

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading index={8} label={t.softSkillsLanguages.label} title={t.softSkillsLanguages.softTitle} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="flex items-center gap-2 border border-(--border-color) px-4 py-2 text-sm text-(--text-secondary) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
              >
                <span className="h-1 w-1 rounded-full bg-(--accent)" aria-hidden="true" />
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading index={9} label={t.softSkillsLanguages.label} title={t.softSkillsLanguages.langTitle} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 divide-y divide-(--hairline) border-y border-(--hairline)"
          >
            {languageData.map(({ name, levelKey }) => {
              const levelValue = levels[levelKey] || 40;
              const label = t.langLabels[name] || name;
              const levelLabel = t.langLevelLabels[levelKey] || levelKey;
              return (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <span className="text-base font-medium text-(--text-primary)">{label}</span>
                  <span className="flex items-center gap-4">
                    <Dots level={levelValue} />
                    <span className="font-mono text-[11px] tracking-[0.14em] text-(--text-secondary)">
                      {levelLabel.toUpperCase()}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}