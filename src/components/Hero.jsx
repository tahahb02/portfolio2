import { useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { cvUrlFor } from "../constants/cv";
import CVModal from "./CVModal";
import MagneticButton from "./ui/MagneticButton";
import { lineContainer, lineMask, EASE } from "../constants/animations";

const marqueeItems = [
  "React", "Java", "Spring Boot", "Node.js", "Express", "MongoDB",
  "MySQL", "PostgreSQL", "Python", "Docker", "REST API", "TypeScript",
  "Tailwind CSS", "AI Integration", "UML", "Agile / Scrum", "CI/CD",
];

function MaskedLine({ children }) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        variants={lineMask}
        className="block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

function PhotoFrame({ t }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const imgX = useTransform(sx, (v) => v * 6);
  const imgY = useTransform(sy, (v) => v * 6);

  const onMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mx, my]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative group/photo select-none"
      data-cursor="OPEN"
      aria-label={t.hero.metaLabel}
    >
      <div className="flex items-center justify-between border border-(--border-color) px-4 py-2.5 bg-(--bg-secondary)">
        <span className="mono-label">{t.hero.metaLabel}</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent) animate-pulse-dot" />
          <span className="mono-label">{t.about.statusText}</span>
        </span>
      </div>
      <div className="relative overflow-hidden border-x border-b border-(--border-color) aspect-[4/5] bg-(--bg-secondary)">
        <motion.img
          src="/profile.png"
          alt={`Taha HILAL BIK — ${t.about.title}`}
          style={{ x: imgX, y: imgY, filter: "grayscale(0.12) contrast(1.04)" }}
          className="h-full w-full object-cover object-top scale-[1.02] transition-[filter] duration-700 group-hover/photo:grayscale-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--bg-primary)/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-(--accent)" aria-hidden="true" />
        <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-(--accent)" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-(--accent)" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-(--accent)" aria-hidden="true" />
      </div>
      <div className="flex items-center justify-between border border-(--border-color) border-t-0 px-4 py-2.5 bg-(--bg-secondary)">
        <span className="mono-label">TAHA HILAL BIK</span>
        <span className="mono-label hidden sm:inline">33.5731° N · 07.5898° W</span>
      </div>
    </motion.figure>
  );
}

export default function Hero({ profile, onContactClick }) {
  const { t, lang } = useLanguage();
  const [cvOpen, setCvOpen] = useState(false);

  const meta = [
    { value: t.hero.coffee },
    { value: t.hero.roleLine },
    { value: t.hero.techLine },
  ];

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-4 pt-28 pb-0 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:self-stretch lg:justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mono-label"
            >
              PORTFOLIO — 2026
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-5"
            >
              {meta.map((m, i) => (
                <div key={m.value} className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-(--accent)" aria-hidden="true">0{i + 1}</span>
                  <span className="font-mono text-xs tracking-[0.2em] text-(--text-secondary)">
                    {m.value}
                  </span>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-(--accent)" aria-hidden="true" />
              <span className="mono-label">33.5731° N</span>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="flex items-center gap-2 border border-(--border-color) rounded-full px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-(--success) animate-pulse-dot" />
                <span className="mono-label normal-case tracking-[0.12em] text-(--text-secondary)">
                  {t.hero.availability}
                </span>
              </span>
              <span className="mono-label hidden sm:inline">{t.hero.scroll} ↓</span>
            </motion.div>

            <motion.h1
              variants={lineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.9rem,8.5vw,6.75rem)] font-bold leading-[0.95] tracking-tight text-(--text-primary)"
            >
              <MaskedLine>Taha</MaskedLine>
              <MaskedLine>
                <span className="gold-text">HILAL BIK</span>
              </MaskedLine>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="mt-5 font-mono text-xs sm:text-sm tracking-[0.18em] text-(--accent)"
            >
              FULL-STACK ENGINEER — AI ENTHUSIAST
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-(--text-secondary) sm:text-base"
            >
              {t.hero.statement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                onClick={onContactClick}
                className="group inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 text-sm font-semibold text-(--on-accent) transition-[background-color,box-shadow] duration-300 hover:bg-(--accent-soft) hover:shadow-[0_8px_30px_var(--accent-glow)]"
                data-cursor="LINK"
              >
                {t.hero.contactBtn}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </MagneticButton>
              <button
                onClick={() => setCvOpen(true)}
                data-cursor="LINK"
                className="inline-flex items-center gap-2 rounded-md border border-(--border-strong) bg-transparent px-6 py-3 text-sm font-medium text-(--text-primary) transition-all duration-300 hover:border-(--accent) hover:text-(--accent)"
              >
                {t.hero.viewCV}
              </button>
              <a
                href={cvUrlFor(lang)}
                download
                aria-label={t.hero.downloadBtn}
                data-cursor="LINK"
                className="grid h-11 w-11 place-items-center rounded-md border border-(--border-strong) text-(--text-secondary) transition-all duration-300 hover:border-(--accent) hover:text-(--accent)"
              >
                <FaDownload size={14} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center gap-6"
            >
              {[
                { icon: FaGithub, href: profile.github, label: "GitHub" },
                { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINK"
                  className="group flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
                >
                  <Icon size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-(--accent) after:transition-all after:duration-300 group-hover:after:w-full">
                    {label.toUpperCase()}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-3">
            <PhotoFrame t={t} />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative mt-16 border-t border-(--hairline) py-4"
        aria-hidden="true"
      >
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-[11px] tracking-[0.25em] text-(--text-muted)"
              >
                {item}
                <span className="text-(--accent)" aria-hidden="true">/</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </section>
  );
}