import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { FaCode, FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function AnimatedCounter({ value, suffix, label, icon: Icon, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 15 });
  const rounded = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      setTimeout(() => motionValue.set(value), delay * 100);
    }
  }, [isInView, value, motionValue, delay]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="backdrop-blur-sm rounded-xl p-5 text-center hover:-translate-y-1 transition-all duration-300 group cursor-default"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(150,24,58,0.3)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(150,24,58,0.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div className="p-2.5 rounded-xl bg-bordeaux-500/10 w-fit mx-auto mb-3 group-hover:bg-bordeaux-500/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="text-bordeaux-400/80 text-lg group-hover:text-bordeaux-300 transition-colors" />
      </div>
      <motion.div className="text-2xl font-bold group-hover:text-bordeaux-300 transition-colors" style={{ color: "var(--text-primary)" }}>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <div className="text-xs mt-1 group-hover:text-slate-400 transition-colors" style={{ color: "var(--text-muted)" }}>{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const icons = [FaCode, FaBriefcase, FaGraduationCap, FaAward];
  const values = [5, 3, 14, 6];
  const suffixes = ["+", "", "", ""];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto backdrop-blur-sm rounded-2xl p-8 md:p-12 transition-all duration-500 group relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-bordeaux-500/5 rounded-full blur-3xl group-hover:bg-bordeaux-500/10 transition-all duration-700" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-champagne-400/5 rounded-full blur-3xl group-hover:bg-champagne-400/10 transition-all duration-700" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-bordeaux-400 to-champagne-300 bg-clip-text text-transparent relative">
            {t.about.title}
          </h3>
          <p className="leading-relaxed text-lg relative" style={{ color: "var(--text-secondary)" }}>
            {t.about.desc}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto"
        >
          {t.stats.map((stat, idx) => (
            <AnimatedCounter
              key={stat.label}
              icon={icons[idx]}
              value={values[idx]}
              suffix={suffixes[idx]}
              label={stat.label}
              delay={idx}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
