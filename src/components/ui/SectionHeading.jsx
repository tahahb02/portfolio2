import { motion } from "framer-motion";
import { EASE } from "../../constants/animations";

export default function SectionHeading({
  index,
  label,
  title,
  align = "left",
  className = "",
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`flex flex-col gap-4 ${alignCls} ${className}`}
    >
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-xs tracking-[0.25em] text-(--accent)" aria-hidden="true">
          {String(index).padStart(2, "0")} /
        </span>
        <span className="h-px w-10 bg-(--hairline)" aria-hidden="true" />
        <span className="mono-label">{label}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-(--text-primary)">
        {title}
      </h2>
    </motion.div>
  );
}