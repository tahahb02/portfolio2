import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 20 });

  const hasMoved = useRef(false);

  const updatePos = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!hasMoved.current) {
      hasMoved.current = true;
      setVisible(true);
    }
  }, [cursorX, cursorY]);

  useEffect(() => {
    document.addEventListener("mousemove", updatePos, { passive: true });
    return () => document.removeEventListener("mousemove", updatePos);
  }, [updatePos]);

  return (
    <div className="hidden lg:block" style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#96183a",
          boxShadow: "0 0 6px rgba(150,24,58,0.4)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "rgba(150,24,58,0.25)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, border-color 0.3s",
        }}
      />
    </div>
  );
}
