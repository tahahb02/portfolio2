import { motion } from "framer-motion";
import { FaTimes, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function CVModal({ onClose }) {
  const { t } = useLanguage();
  const cvUrl = "/Taha_HilalBik_CV.pdf";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div
          className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 sm:py-4 border-b shrink-0"
          style={{ borderColor: "var(--border-color)" }}
        >
          <h3 className="text-base sm:text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            CV - Taha HILAL BIK
          </h3>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={cvUrl}
              download
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-navy-600 to-navy-700 text-white text-xs sm:text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-navy-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FaDownload size={14} />
              <span className="hidden sm:inline">{t.hero.downloadBtn}</span>
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
            >
              <FaExternalLinkAlt size={12} />
              <span className="hidden sm:inline">Ouvrir</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-white/10"
              style={{ color: "var(--text-secondary)" }}
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-slate-800/30">
          <iframe
            src={cvUrl}
            className="w-full h-full border-0"
            title="CV Preview"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
