import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { cvUrlFor } from "../constants/cv";
import { EASE } from "../constants/animations";

export default function CVModal({ onClose }) {
  const { t, lang } = useLanguage();
  const cvUrl = cvUrlFor(lang);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      style={{ backgroundColor: "rgba(8,10,13,0.82)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="CV — Taha HILAL BIK"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[72vh] w-full max-w-4xl flex-col overflow-hidden border border-(--border-color) bg-(--bg-elevated) shadow-2xl sm:h-[82vh]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-(--hairline) px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-(--accent)/60 font-mono text-[9px] font-semibold text-(--accent)">THB</span>
            <h3 className="mono-label">CV — TAHA HILAL BIK</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cvUrl}
              download
              data-cursor="LINK"
              className="flex items-center gap-2 bg-(--accent) px-4 py-2 text-xs font-semibold text-(--on-accent) transition-colors duration-200 hover:bg-(--accent-soft)"
            >
              <FaDownload size={13} />
              <span className="hidden sm:inline">{t.hero.downloadBtn}</span>
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="LINK"
              className="flex items-center gap-2 border border-(--border-color) px-4 py-2 text-xs font-medium text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
            >
              <FaExternalLinkAlt size={11} />
              <span className="hidden sm:inline">{t.hero.openCv}</span>
            </a>
            <button
              onClick={onClose}
              data-cursor="LINK"
              aria-label={t.hero.close}
              className="grid h-9 w-9 place-items-center border border-(--border-color) text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-(--bg-secondary)">
          <iframe src={cvUrl} className="h-full w-full border-0" title="CV Preview" />
        </div>
      </motion.div>
    </motion.div>
  );
}