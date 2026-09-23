import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { EASE } from "../constants/animations";

const PER_PAGE = 6;

export default function Certifications() {
  const { t, content } = useLanguage();
  const certifications = content.certifications;
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(certifications.length / PER_PAGE));
  const current = certifications.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <section>
          <SectionHeading index={7} label={t.certifications.label} title={t.certifications.title} />
        </section>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="grid grid-cols-1 gap-px border border-(--border-color) bg-(--hairline) lg:grid-cols-2"
            >
              {current.map((cert, idx) => {
                const num = page * PER_PAGE + idx + 1;
                const platform = cert.courseraUrl ? "COURSERA" : "CERTIFICATE";
                return (
                  <div key={num} className="group flex bg-(--bg-card) p-5 transition-colors duration-300 hover:bg-(--bg-card-hover)">
                    <div className="w-14 shrink-0 pt-0.5">
                      <span className="font-mono text-2xl font-bold text-(--hairline) transition-colors duration-300 group-hover:text-(--accent)/60 sm:text-3xl">
                        {String(num).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="mono-label">
                        {t.certifications.platform} · {platform}
                      </span>
                      <h3 className="mt-1.5 text-sm font-medium leading-snug text-(--text-primary)">
                        {cert.name.replace(/\s*\(Coursera\)\s*/i, "")}
                      </h3>

                      <div className="mt-4 flex items-center gap-4">
                        <a
                          href={cert.pdf}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="LINK"
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
                        >
                          <FaExternalLinkAlt size={10} />
                          {t.certifications.pdf.toUpperCase()}
                        </a>
                        {cert.courseraUrl && (
                          <a
                            href={cert.courseraUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="LINK"
                            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
                          >
                            <FaLink size={10} />
                            {t.certifications.verify.toUpperCase()}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="hidden w-20 shrink-0 sm:block">
                      <img
                        src={cert.img}
                        alt=""
                        loading="lazy"
                        className="h-16 w-16 object-contain opacity-70 mix-blend-luminosity transition-all duration-300 group-hover:opacity-100 group-hover:mix-blend-normal"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <span className="mono-label">
              {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={page === 0}
                data-cursor="LINK"
                aria-label="Previous page"
                className="grid h-10 w-10 place-items-center border border-(--border-color) text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent) disabled:pointer-events-none disabled:opacity-30"
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                onClick={next}
                disabled={page === totalPages - 1}
                data-cursor="LINK"
                aria-label="Next page"
                className="grid h-10 w-10 place-items-center border border-(--border-color) text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent) disabled:pointer-events-none disabled:opacity-30"
              >
                <FaChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}