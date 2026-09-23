import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeUp } from "../constants/animations";

export default function Education() {
  const { t, content } = useLanguage();
  const education = content.education;

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index={6} label={t.education.label} title={t.education.title} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 divide-y divide-(--hairline) border-y border-(--hairline)"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group grid grid-cols-1 gap-2 py-7 sm:grid-cols-12 sm:gap-6"
            >
              <div className="sm:col-span-3 sm:flex sm:items-start sm:pt-1">
                <span className="font-mono text-sm tracking-[0.12em] text-(--accent)">
                  {edu.dates}
                </span>
              </div>
              <div className="sm:col-span-6">
                <p className="text-lg font-semibold tracking-tight text-(--text-primary) transition-colors duration-300 group-hover:text-(--accent)">
                  {edu.title}
                </p>
                {edu.description && (
                  <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                    {edu.description}
                  </p>
                )}
              </div>
              <div className="sm:col-span-3 sm:text-right">
                <p className="mono-label">{edu.institution}</p>
                {edu.ongoing && (
                  <span className="mt-3 inline-flex items-center gap-2 border border-(--accent)/40 bg-(--accent-dim) px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-(--accent)">
                    <span className="h-1 w-1 rounded-full bg-(--accent) animate-pulse-dot" />
                    {t.education.ongoing.toUpperCase()}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}