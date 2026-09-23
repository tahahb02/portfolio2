import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer({ name }) {
  const [showTop, setShowTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { icon: FaGithub, href: "https://github.com/tahahb02", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/tahahilalbik/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:hilalbiktaha@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-(--hairline) px-4 pt-14 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-(--accent)/60 font-mono text-xs font-semibold tracking-wider text-(--accent)">
                THB
              </span>
              <div>
                <p className="text-lg font-bold tracking-tight text-(--text-primary)">{name}</p>
                <p className="font-mono text-[11px] tracking-[0.18em] text-(--text-secondary)">
                  FULL-STACK ENGINEER — AI ENTHUSIAST
                </p>
              </div>
            </div>
            
          </div>

          <div>
            <p className="mono-label">{t.footer.navLabel}</p>
            <ul className="mt-4 space-y-2">
              {[
                { key: "home", label: t.nav.home },
                { key: "skills", label: t.nav.skills },
                { key: "experience", label: t.nav.experience },
                { key: "projects", label: t.nav.projects },
              ].map((l) => (
                <li key={l.key}>
                  <a
                    href={`#${l.key}`}
                    data-cursor="LINK"
                    className="font-mono text-xs tracking-[0.14em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
                  >
                    {l.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">{t.footer.social}</p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINK"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center border border-(--border-color) text-(--text-secondary) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-(--hairline) py-6 sm:flex-row">
          <p className="font-mono text-[11px] tracking-[0.14em] text-(--text-muted)">
            © 2026 {name}. {t.footer.rights}
          </p>
          <p className="font-mono text-[11px] tracking-[0.14em] text-(--text-muted)">
            <span className="text-(--accent)">//</span> CASABLANCA · MOROCCO
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollTop}
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ duration: 0.25 }}
            data-cursor="LINK"
            aria-label={t.scrollTop}
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center border border-(--accent)/50 bg-(--bg-elevated) text-(--accent) shadow-2xl transition-colors duration-200 hover:bg-(--accent) hover:text-(--on-accent)"
          >
            <FaArrowUp size={15} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}