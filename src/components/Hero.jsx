import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaEye, FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import { fadeInUp, staggerContainer, bounceIn } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";
import CVModal from "./CVModal";

const codeSnippets = [
  { text: '@SpringBootApplication\npublic class PortfolioApplication { ... }', icon: SiSpringboot, color: "#6DB33F" },
  { text: 'const [portfolio, setPortfolio] = useState({...})', icon: FaReact, color: "#61DAFB" },
  { text: 'System.out.println("Hello, World!");', icon: FaJava, color: "#ED8B00" },
  { text: '@Component\npublic class DeveloperService { ... }', icon: FaJava, color: "#ED8B00" },
  { text: '<div className="min-h-screen bg-slate-950">\n  <Navbar />\n  <Hero />\n</div>', icon: SiTailwindcss, color: "#06B6D4" },
];

function CodeTyper() {
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[current].text;
    let idx = 0;
    let timer;

    if (typing) {
      timer = setInterval(() => {
        idx++;
        setDisplay(snippet.slice(0, idx));
        if (idx >= snippet.length) {
          clearInterval(timer);
          setTimeout(() => setTyping(false), 2000);
        }
      }, 30);
    }

    return () => clearInterval(timer);
  }, [current, typing]);

  const nextSnippet = useCallback(() => {
    setTyping(true);
    setDisplay("");
    setCurrent((prev) => (prev + 1) % codeSnippets.length);
  }, []);

  const prevSnippet = useCallback(() => {
    setTyping(true);
    setDisplay("");
    setCurrent((prev) => (prev - 1 + codeSnippets.length) % codeSnippets.length);
  }, []);

  const CurrentIcon = codeSnippets[current].icon;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className="rounded-2xl overflow-hidden border shadow-2xl transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-secondary)" }}
        >
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="flex-1 flex justify-center gap-2">
            <button
              onClick={prevSnippet}
              className="text-xs px-2 py-0.5 rounded-md transition-colors cursor-pointer"
              style={{ color: "var(--text-muted)", backgroundColor: "rgba(139,92,246,0.1)" }}
            >
              &larr; Prev
            </button>
            <button
              onClick={nextSnippet}
              className="text-xs px-2 py-0.5 rounded-md transition-colors cursor-pointer"
              style={{ color: "var(--text-muted)", backgroundColor: "rgba(139,92,246,0.1)" }}
            >
              Next &rarr;
            </button>
          </div>
        </div>
        <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed min-h-[120px] relative">
          <div className="flex items-center gap-2 mb-3" style={{ color: "var(--text-muted)" }}>
            <CurrentIcon style={{ color: codeSnippets[current].color }} size={16} />
            <span className="text-xs">{current + 1}/{codeSnippets.length}</span>
          </div>
          <pre className="whitespace-pre-wrap" style={{ color: "var(--text-primary)" }}>
            {display}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block w-[2px] h-[1em] ml-0.5 align-middle"
              style={{ backgroundColor: "var(--text-primary)" }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ profile, onContactClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cvOpen, setCvOpen] = useState(false);
  const { t } = useLanguage();

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  }, []);

  const handleMouseLeave = useCallback(() => setMousePos({ x: 0, y: 0 }), []);

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden cursor-default"
    >
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px] animate-float"
        style={{ backgroundColor: "rgba(139,92,246,0.12)", transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px] animate-float-delayed"
        style={{ backgroundColor: "rgba(6,182,212,0.12)", transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={bounceIn} className="mb-6 inline-block">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-violet-500 via-cyan-400 to-violet-500 p-[3px] shadow-lg shadow-violet-500/20 group hover:shadow-violet-500/50 hover:shadow-2xl transition-all duration-500 cursor-pointer mx-auto lg:mx-0">
                <img
                  src="/profile.png"
                  alt={profile.name}
                  className="w-full h-full rounded-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                  width="144"
                  height="144"
                />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent leading-tight bg-[length:200%_auto] animate-shimmer"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-lg md:text-xl font-medium mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="leading-relaxed max-w-xl mb-6 text-sm md:text-base"
              style={{ color: "var(--text-muted)" }}
            >
              {profile.subTitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <button
                onClick={onContactClick}
                className="group relative px-6 md:px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                <span className="relative z-10">{t.hero.contactBtn}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => setCvOpen(true)}
                className="group px-6 md:px-8 py-3 border rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 text-sm md:text-base cursor-pointer"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)"; e.currentTarget.style.backgroundColor = "rgba(139,92,246,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                <FaEye className="text-sm" />
                {t.hero.viewCV}
              </button>
              <a
                href="/Taha%20HILAL%20BIK_CV_Francais.pdf"
                download
                className="group px-6 md:px-8 py-3 border rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 text-sm md:text-base"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)"; e.currentTarget.style.backgroundColor = "rgba(6,182,212,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                <FaDownload className="text-sm" />
                {t.hero.downloadBtn}
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-5 justify-center lg:justify-start">
              {[
                { icon: FaGithub, href: profile.github, hover: "hover:text-violet-400", label: "GitHub" },
                { icon: FaLinkedin, href: profile.linkedin, hover: "hover:text-cyan-400", label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${profile.email}`, hover: "hover:text-amber-400", label: "Email" },
              ].map(({ icon: Icon, href, hover, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className={`transition-all duration-300 text-2xl hover:-translate-y-1.5 hover:scale-110`}
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = hover.includes("violet") ? "#a78bfa" : hover.includes("cyan") ? "#22d3ee" : "#fbbf24" }
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <CodeTyper />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center group cursor-pointer transition-colors" style={{ borderColor: "var(--border-color)" }}>
          <motion.div
            className="w-1 h-3 rounded-full mt-2 transition-colors"
            style={{ backgroundColor: "var(--text-muted)" }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </section>
  );
}
