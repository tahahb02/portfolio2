import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "../constants/animations";

export default function Experience() {
  const { t, content } = useLanguage();
  const experiences = content.experiences;
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.45"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index={4} label={t.experience.label} title={t.experience.title} />

        <div ref={trackRef} className="relative mt-14">
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-(--hairline) sm:block" aria-hidden="true" />
          <motion.div
            className="absolute left-[7px] top-2 hidden h-full w-px origin-top bg-(--accent) sm:block"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-12 sm:gap-16"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative sm:grid sm:grid-cols-12 sm:gap-8"
              >
                <div className="hidden sm:col-span-1 sm:block">
                  <div className="relative h-7 w-[15px]">
                    <span className="absolute left-0 top-0.5 h-2 w-2 rounded-full border border-(--accent) bg-(--bg-primary)" />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <span className="font-mono text-xs text-(--accent)" aria-hidden="true">
                    {String(idx + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-mono text-xs leading-relaxed tracking-[0.14em] text-(--text-muted)">
                    {exp.period}
                  </p>
                  <p className="mt-2 font-mono text-sm font-semibold tracking-[0.14em] text-(--text-primary)">
                    {exp.company}
                  </p>
                </div>

                <div className="sm:col-span-7">
                  <h3 className="text-xl font-bold tracking-tight text-(--text-primary) md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                    <span className="font-semibold text-(--accent)">{t.experience.project} — </span>
                    {exp.project}
                  </p>
                  <div className="mt-4 border-l border-(--hairline) pl-5">
                    <span className="mono-label">{t.experience.tasks}</span>
                    <ul className="mt-3 space-y-2">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-(--text-secondary)">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-(--accent)" aria-hidden="true" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="border border-(--border-color) px-2.5 py-1 font-mono text-[10px] tracking-wider text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}