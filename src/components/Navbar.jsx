import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const flagMap = { fr: "🇫🇷", en: "🇬🇧", de: "🇩🇪" };

export default function Navbar({ activeSection, scrollToSection, currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [langOpen, setLangOpen] = useState(false);

  const { dark, toggleTheme } = useTheme();
  const { lang, changeLang, t } = useLanguage();

  const langRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrolled(scrollTop > 20);
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "home", label: t.nav.home },
    { key: "skills", label: t.nav.skills },
    { key: "experience", label: t.nav.experience },
    { key: "projects", label: t.nav.projects },
    { key: "certifications", label: t.nav.certifications },
    { key: "contact", label: t.nav.contact },
  ];

  const handleClick = (key) => {
    setMenuOpen(false);
    setLangOpen(false);
    if (key === "contact") {
      setCurrentPage("contact");
    } else {
      scrollToSection(key);
    }
  };

  const langs = [
    { code: "fr", label: t.lang.fr },
    { code: "en", label: t.lang.en },
    { code: "de", label: t.lang.de },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="text-2xl font-bold tracking-tight cursor-pointer transition-colors group"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="hover:text-violet-400 transition-colors">
            TH<span className="text-violet-400 group-hover:text-cyan-400 transition-colors">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ key, label }) => {
            const isActive = currentPage === "home" ? activeSection === key : key === "contact";
            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  color: isActive ? "#a78bfa" : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => { if (!isActive) e.target.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { if (!isActive) e.target.style.color = "var(--text-secondary)"; }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15))" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          <div className="w-px h-6 mx-2" style={{ backgroundColor: "var(--border-color)" }} />

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer hover:bg-white/5"
              style={{ color: "var(--text-secondary)" }}
            >
              <span>{flagMap[lang]}</span>
              <span className="hidden lg:inline">{lang.toUpperCase()}</span>
              <FaChevronDown size={10} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 py-2 rounded-xl border shadow-xl min-w-[160px]"
                  style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-color)" }}
                >
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { changeLang(l.code); setLangOpen(false); }}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors cursor-pointer"
                      style={{
                        color: lang === l.code ? "#a78bfa" : "var(--text-secondary)",
                        backgroundColor: lang === l.code ? "rgba(139,92,246,0.08)" : "transparent",
                      }}
                      onMouseEnter={(e) => { if (lang !== l.code) e.target.style.backgroundColor = "rgba(139,92,246,0.05)"; }}
                      onMouseLeave={(e) => { if (lang !== l.code) e.target.style.backgroundColor = "transparent"; }}
                    >
                      <span>{flagMap[l.code]}</span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-300 cursor-pointer hover:scale-110"
            style={{ color: "var(--text-secondary)" }}
            aria-label={dark ? t.theme.light : t.theme.dark}
          >
            <motion.div
              key={dark ? "moon" : "sun"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.div>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-300 cursor-pointer"
            style={{ color: "var(--text-secondary)" }}
          >
            {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-white/5"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <div className="relative h-0.5" style={{ backgroundColor: "rgba(51,65,85,0.3)" }}>
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-cyan-500"
          style={{ width: `${scrollProgress}%` }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-b"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map(({ key, label }) => {
                const isActive = currentPage === "home" ? activeSection === key : key === "contact";
                return (
                  <button
                    key={key}
                    onClick={() => handleClick(key)}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-left"
                    style={{
                      color: isActive ? "#a78bfa" : "var(--text-secondary)",
                      backgroundColor: isActive ? "rgba(139,92,246,0.1)" : "transparent",
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.target.style.backgroundColor = "rgba(139,92,246,0.05)"; }}
                    onMouseLeave={(e) => { if (!isActive) e.target.style.backgroundColor = "transparent"; }}
                  >
                    {label}
                  </button>
                );
              })}
              <div className="border-t pt-3 mt-2" style={{ borderColor: "var(--border-color)" }}>
                <p className="text-xs mb-2 px-1" style={{ color: "var(--text-muted)" }}>{t.lang.fr ? "Langue" : "Language"}</p>
                <div className="flex gap-2">
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLang(l.code)}
                      className="flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer"
                      style={{
                        backgroundColor: lang === l.code ? "rgba(139,92,246,0.15)" : "transparent",
                        color: lang === l.code ? "#a78bfa" : "var(--text-secondary)",
                        border: lang === l.code ? "1px solid rgba(139,92,246,0.3)" : "1px solid transparent",
                      }}
                    >
                      {flagMap[l.code]} {l.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
