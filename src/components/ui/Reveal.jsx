import { motion } from "framer-motion";
import { EASE } from "../../constants/animations";

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
  style,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}