import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { staggerContainer, fadeUp } from "../constants/animations";

function Counter({ label, value, suffix, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 16 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => mv.set(value), delay);
      return () => clearTimeout(t);
    }
  }, [inView, value, delay, mv]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex flex-col gap-1 border-l-2 border-(--accent) bg-(--bg-card) px-5 py-6 transition-colors duration-300 hover:bg-(--bg-card-hover)"
      data-cursor="LINK"
    >
      <span className="flex items-baseline gap-1">
        <span className="text-4xl font-bold tabular-nums text-(--accent)" aria-hidden="true">
          <motion.span>{rounded}</motion.span>
          {suffix && <span className="text-2xl">{suffix}</span>}
        </span>
      </span>
      <span className="mono-label">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index={2} label={t.about.label} title={t.about.title} />
            <Reveal delay={0.1} className="mt-8">
              <p className="text-lg leading-relaxed text-(--text-primary)">{t.about.intro}</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-5">
              <p className="text-sm leading-relaxed text-(--text-secondary)">{t.about.philosophy}</p>
            </Reveal>

            <Reveal delay={0.26} className="mt-8">
              <div className="inline-flex items-center gap-3 border border-(--border-color) bg-(--bg-card) px-4 py-3">
                <FaMapMarkerAlt size={14} className="text-(--accent)" />
                <span className="mono-label">{t.about.locationLabel} : {t.hero.coffee}</span>
              </div>
            </Reveal>

            <Reveal delay={0.34} className="mt-6">
              <div className="flex flex-wrap gap-2">
                {t.about.domains.map((d) => (
                  <span
                    key={d}
                    className="border border-(--border-color) px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="text-sm leading-relaxed text-(--text-secondary) md:text-base">{t.about.desc}</p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-(--border-color) bg-(--hairline) sm:grid-cols-2"
          >
            {t.about.stats.map((stat, i) => (
              <Counter
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                delay={150 + i * 120}
              />
            ))}
          </motion.div>

          <Reveal delay={0.2} className="mt-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-(--success) animate-pulse-dot" />
            <span className="mono-label">{t.about.statusTitle} — {t.about.statusText}</span>
          </Reveal>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl hairline" aria-hidden="true" />
    </section>
  );
}