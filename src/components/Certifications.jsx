import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCertificate, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

const PER_PAGE = 6;

export default function Certifications() {
  const { t, content } = useLanguage();
  const certifications = content.certifications;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(certifications.length / PER_PAGE);
  const current = certifications.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <FaAward className="text-navy-400" />
          <span className="bg-gradient-to-r from-navy-400 to-slate-300 bg-clip-text text-transparent">
            {t.certifications.title}
          </span>
        </h3>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {current.map((cert, idx) => (
                <motion.div
                  key={page * PER_PAGE + idx}
                  variants={fadeInUp}
                  className="group backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 cursor-default relative"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(44,95,138,0.3)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(44,95,138,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                >
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-navy-500/5 rounded-full blur-xl group-hover:bg-navy-500/10 transition-all duration-500" />
                  <div className="relative p-4">
                    <div className="flex items-start gap-3">
                      <div className="relative shrink-0">
                        <motion.div
                          className="p-2 rounded-lg bg-navy-500/10 text-navy-500/60 group-hover:text-navy-400 group-hover:bg-navy-500/20 transition-all duration-300"
                          whileHover={{ rotate: -10, scale: 1.1 }}
                        >
                          <FaCertificate />
                        </motion.div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-mono text-navy-500/60 group-hover:text-navy-400 transition-colors">
                          CERT-{String(page * PER_PAGE + idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-relaxed group-hover:text-slate-200 transition-colors mt-0.5" style={{ color: "var(--text-secondary)" }}>{cert.name}</p>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-400/70 hover:text-navy-300 transition-colors"
                          >
                            <FaExternalLinkAlt className="text-[10px]" />
                            Voir le certificat
                          </a>
                          {cert.courseraUrl && (
                            <a
                              href={cert.courseraUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400/70 hover:text-blue-300 transition-colors"
                            >
                              <FaLink className="text-[10px]" />
                              Vérifier sur Coursera
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-36 overflow-hidden bg-gradient-to-b from-transparent to-black/10">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goPrev}
                disabled={page === 0}
                className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
              >
                <FaChevronLeft />
              </motion.button>
              <span className="text-sm font-mono" style={{ color: "var(--text-secondary)" }}>
                {page + 1} / {totalPages}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goNext}
                disabled={page === totalPages - 1}
                className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
