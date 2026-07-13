import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer({ name }) {
  const [showTop, setShowTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 relative" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="group">
            <h4 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              TH<span className="text-bordeaux-400 group-hover:text-champagne-300 transition-colors">.</span>
            </h4>
            <p className="text-sm leading-relaxed group-hover:text-champagne-400 transition-colors" style={{ color: "var(--text-muted)" }}>
              Ingénieur d'État en Génie Informatique (MIAGE)<br />
              Full-Stack Java Spring Boot & React
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
              <span className="w-1 h-4 bg-gradient-to-b from-bordeaux-500 to-champagne-400 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <li className="flex items-center gap-2 hover:text-champagne-400 transition-colors cursor-default">
                <FaMapMarkerAlt className="text-xs text-bordeaux-400/60" />
                Casablanca, Maroc
              </li>
              <li className="flex items-center gap-2 hover:text-champagne-400 transition-colors cursor-default">
                <FaPhoneAlt className="text-xs text-champagne-400/60" />
                +212-691436399
              </li>
              <li className="flex items-center gap-2 hover:text-champagne-400 transition-colors cursor-default">
                <FaEnvelope className="text-xs text-bordeaux-400/60" />
                hilalbiktaha@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
              <span className="w-1 h-4 bg-gradient-to-b from-champagne-400 to-bordeaux-500 rounded-full" />
              {t.contact.infoTitle === "Contact Information" ? "Social" : "Réseaux"}
            </h4>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/tahahb02", hover: "hover:text-bordeaux-400", shadow: "hover:shadow-bordeaux-500/20" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/taha-hilalbik", hover: "hover:text-champagne-300", shadow: "hover:shadow-champagne-400/20" },
                { icon: FaEnvelope, href: "mailto:hilalbiktaha@gmail.com", hover: "hover:text-bordeaux-400", shadow: "hover:shadow-bordeaux-500/20" },
              ].map(({ icon: Icon, href, hover }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg transition-all hover:scale-110 hover:shadow-sm"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = hover.includes("stone") ? "#c9a96e" : "#96183a"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
                  title={href.includes("github") ? "GitHub" : href.includes("linkedin") ? "LinkedIn" : "Email"}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 text-center" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p className="text-sm flex items-center justify-center gap-1 transition-colors" style={{ color: "var(--text-muted)" }}>
            &copy; 2026 {name}. {t.footer.madeWith} <FaHeart className="text-red-500/70 text-xs hover:text-red-400 hover:scale-125 transition-all" /> {t.footer.in}.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 text-white rounded-xl shadow-lg shadow-bordeaux-500/25 hover:shadow-xl hover:shadow-bordeaux-500/40 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer z-40"
            aria-label={t.scrollTop}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
