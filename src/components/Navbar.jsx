import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { EASE } from "../constants/animations";

const flags = { fr: "🇫🇷", en: "🇬🇧", de: "🇩🇪" };

export default function Navbar({ activeSection, scrollToSection, currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { dark, toggleTheme } = useTheme();
  const { lang, changeLang, t } = useLanguage();
  const langRef = useRef(null);

  const links = [
    { key: "home", label: t.nav.home },
    { key: "skills", label: t.nav.skills },
    { key: "experience", label: t.nav.experience },
    { key: "projects", label: t.nav.projects },
    { key: "certifications", label: t.nav.certifications },
  ];

  const langs = [
    { code: "fr", label: t.lang.fr },
    { code: "en", label: t.lang.en },
    { code: "de", label: t.lang.de },
  ];

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const doc = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(st > 24);
      setProgress(doc > 0 ? Math.min((st / doc) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleClick = (key) => {
    setMenuOpen(false);
    setLangOpen(false);
    if (key === "contact") setCurrentPage("contact");
    else scrollToSection(key);
  };

  const goHome = () => {
    setMenuOpen(false);
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (key) =>
    currentPage === "home" ? activeSection === key : key === "contact";

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "var(--glass-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all duration-500 sm:px-6 lg:px-10">
          <button
            onClick={goHome}
            data-cursor="LINK"
            className="flex cursor-pointer items-center gap-3"
            aria-label="Taha HILAL BIK — Home"
          >
            <span className="grid h-9 w-9 place-items-center border border-(--accent)/60 font-mono text-[11px] font-semibold tracking-wider text-(--accent)">
              THB
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-(--text-primary) md:block">
              Taha HILAL BIK
            </span>
          </button>

          <motion.nav
            key={lang}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map(({ key, label }, i) => {
              const active = isActive(key);
              return (
                <button
                  key={key}
                  onClick={() => handleClick(key)}
                  data-cursor="LINK"
                  className="group relative flex items-center gap-2 px-3 py-2 font-mono text-[11px] tracking-[0.16em] transition-colors duration-200"
                  style={{ color: active ? "var(--accent)" : "var(--text-secondary)" }}
                >
                  <span className="text-[9px] text-(--text-muted) group-hover:text-(--accent)" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {label.toUpperCase()}
                  <span
                    className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-(--accent) transition-transform duration-300 group-hover:scale-x-100"
                    style={{ transform: active ? "scaleX(1)" : undefined }}
                  />
                </button>
              );
            })}
          </motion.nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                data-cursor="LINK"
                className="flex items-center gap-2 rounded-md border border-(--border-color) px-3 py-2 text-[11px] font-mono tracking-[0.14em] text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
                aria-label="Language"
                aria-expanded={langOpen}
              >
                <span>{flags[lang]}</span>
                <span className="w-6 text-left">{lang.toUpperCase()}</span>
                <FaChevronDown
                  size={9}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 min-w-[160px] overflow-hidden rounded-md border border-(--border-color) bg-(--bg-elevated) shadow-2xl"
                  >
                    {langs.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { changeLang(l.code); setLangOpen(false); }}
                        data-cursor="LINK"
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-xs transition-colors duration-150"
                        style={{
                          color: lang === l.code ? "var(--accent)" : "var(--text-secondary)",
                          backgroundColor: lang === l.code ? "var(--accent-dim)" : "transparent",
                        }}
                      >
                        <span>{flags[l.code]}</span>
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              data-cursor="LINK"
              aria-label={dark ? t.theme.light : t.theme.dark}
              className="grid h-9 w-9 place-items-center rounded-md border border-(--border-color) text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid place-items-center"
                >
                  {dark ? <FaSun size={15} /> : <FaMoon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => handleClick("contact")}
              data-cursor="LINK"
              className="rounded-md bg-(--accent) px-5 py-2.5 text-xs font-semibold tracking-wide text-(--on-accent) transition-colors duration-200 hover:bg-(--accent-soft)"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              data-cursor="LINK"
              aria-label={dark ? t.theme.light : t.theme.dark}
              className="grid h-10 w-10 place-items-center rounded-md border border-(--border-color) text-(--text-secondary)"
            >
              {dark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-cursor="LINK"
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="relative grid h-10 w-10 place-items-center rounded-md border border-(--border-color) text-(--text-primary)"
            >
              <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
                <span className={`h-px w-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`h-px w-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-px w-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div className="relative h-px bg-(--hairline)" aria-hidden="true">
          <motion.div
            className="absolute inset-y-0 left-0 bg-(--accent)"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-(--bg-primary) px-6 pb-8 pt-28"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg-primary) 96%, transparent)" }}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {[...links, { key: "contact", label: t.nav.contact }].map(({ key, label }, i) => (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, delay: 0.06 * i, ease: EASE }}
                    onClick={() => handleClick(key)}
                    className="group flex cursor-pointer items-baseline gap-4 border-b border-(--hairline) py-4 text-left"
                    style={{ color: isActive(key) ? "var(--accent)" : "var(--text-primary)" }}
                  >
                    <span className="font-mono text-[11px] text-(--accent)" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl font-bold tracking-tight transition-colors duration-200 group-hover:text-(--accent)">
                      {label}
                    </span>
                  </motion.button>
                ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    data-cursor="LINK"
                    className="flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 font-mono text-xs tracking-wider"
                    style={{
                      borderColor: lang === l.code ? "var(--accent)" : "var(--border-color)",
                      color: lang === l.code ? "var(--accent)" : "var(--text-secondary)",
                      backgroundColor: lang === l.code ? "var(--accent-dim)" : "transparent",
                    }}
                  >
                    <span>{flags[l.code]}</span>
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, href: "https://github.com/tahahb02", label: "GitHub" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/tahahilalbik/", label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-md border border-(--border-color) text-(--text-secondary) hover:border-(--accent) hover:text-(--accent)"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <span className="mono-label">CASABLANCA · MA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}