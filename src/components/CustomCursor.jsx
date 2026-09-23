import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState(null);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 260, damping: 24 });
  const ringY = useSpring(cursorY, { stiffness: 260, damping: 24 });

  const hasMoved = useRef(false);

  const updatePos = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!hasMoved.current) {
      hasMoved.current = true;
      setVisible(true);
    }
  }, [cursorX, cursorY]);

  const onOver = useCallback((e) => {
    const target = e.target;
    const interactive = target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor]");
    if (!interactive) {
      setLabel(null);
      setHovering(false);
      return;
    }
    setHovering(true);
    const custom = interactive.getAttribute("data-cursor");
    if (custom && custom !== "LINK") setLabel(custom);
    else setLabel("LINK");
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !reduced.matches);
    update();
    mq.addEventListener("change", update);
    reduced.addEventListener("change", update);

    if (!enabled) return;

    document.addEventListener("mousemove", updatePos, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      mq.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
      document.removeEventListener("mousemove", updatePos);
      document.removeEventListener("mouseover", onOver);
    };
  }, [enabled, updatePos, onOver]);

  if (!enabled) return null;

  const ringActive = hovering;
  const labelActive = label && label !== "LINK";
  const ringSize = labelActive ? 84 : ringActive ? 44 : 32;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 rounded-full will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--accent)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
          borderColor: "var(--accent)",
          opacity: visible ? 1 : 0,
          backgroundColor: labelActive ? "var(--accent-dim)" : "transparent",
        }}
        animate={{
          backgroundColor: labelActive ? "var(--accent-dim)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        <AnimatePresence>
          {labelActive && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              className="grid h-full place-items-center font-mono text-[10px] font-semibold tracking-[0.2em] text-(--accent)"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}