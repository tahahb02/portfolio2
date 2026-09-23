import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  as: Tag = "button",
  ...props
}) {
  const ref = useRef(null);

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || window.matchMedia("(hover: none)").matches) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, []);

  const MotionTag = motion[Tag] || motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}