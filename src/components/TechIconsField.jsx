import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaJs, FaReact, FaDocker, FaGit,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiPostgresql, SiIntellijidea, SiJirasoftware, SiTailwindcss,
} from "react-icons/si";

const allIcons = [
  { icon: FaJava, color: "#ED8B00", size: 26 },
  { icon: FaPython, color: "#3776AB", size: 24 },
  { icon: FaJs, color: "#F7DF1E", size: 22 },
  { icon: FaReact, color: "#61DAFB", size: 24 },
  { icon: SiSpringboot, color: "#6DB33F", size: 22 },
  { icon: FaDocker, color: "#2496ED", size: 26 },
  { icon: SiMysql, color: "#4479A1", size: 24 },
  { icon: SiPostgresql, color: "#336791", size: 22 },
  { icon: SiIntellijidea, color: "#FE315D", size: 22 },
  { icon: SiJirasoftware, color: "#0052CC", size: 22 },
  { icon: SiTailwindcss, color: "#06B6D4", size: 24 },
  { icon: FaGit, color: "#F05032", size: 24 },
];

function genPathPoints(range) {
  const t = (i) => (i / 4) * Math.PI * 2;
  return Array.from({ length: 5 }, (_, i) => ({
    x: Math.cos(t(i)) * range * (0.6 + Math.random() * 0.8),
    y: Math.sin(t(i) * 0.7 + 0.5) * range * (0.6 + Math.random() * 0.8),
  }));
}

export default function TechIconsField() {
  const offsetsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef();
  const innerRefs = useRef({});

  const items = useMemo(() =>
    allIcons.map((item, i) => {
      const range = 30 + Math.random() * 50;
      const points = genPathPoints(range);
      return {
        ...item,
        id: i,
        x: Math.random() * 85 + 7.5,
        y: Math.random() * 80 + 10,
        duration: 18 + Math.random() * 18,
        delay: Math.random() * -18,
        baseRotate: Math.random() * 360,
        rotateDrift: (Math.random() - 0.5) * 12,
        points,
      };
    }),
  []);

  useEffect(() => {
    offsetsRef.current = items.map(() => ({ x: 0, y: 0 }));
  }, [items]);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    let running = true;
    let lastTime = 0;
    const interval = 1000 / 30;

    const loop = (timestamp) => {
      if (!running) return;
      rafRef.current = requestAnimationFrame(loop);

      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      items.forEach((_, i) => {
        const el = innerRefs.current[i];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 120;

        let targetX = 0, targetY = 0;
        if (dist < radius && dist > 0) {
          const force = ((radius - dist) / radius) * 55;
          targetX = -(dx / dist) * force;
          targetY = -(dy / dist) * force;
        }

        const smooth = 0.05;
        offsetsRef.current[i].x += (targetX - offsetsRef.current[i].x) * smooth;
        offsetsRef.current[i].y += (targetY - offsetsRef.current[i].y) * smooth;

        el.style.transform = `translate(${offsetsRef.current[i].x}px, ${offsetsRef.current[i].y}px)`;
      });
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [items]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none" style={{ zIndex: 1 }}>
      {items.map((item) => {
        const Icon = item.icon;
        const { points, baseRotate, rotateDrift } = item;
        const xKf = [0, points[1].x, points[2].x, points[3].x, 0];
        const yKf = [0, points[1].y, points[2].y, points[3].y, 0];
        return (
          <motion.div
            key={item.id}
            className="absolute will-change-transform"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.15, 0.3, 0.15, 0.3, 0.15],
              x: xKf,
              y: yKf,
              scale: [1, 1.05, 0.97, 1.03, 1],
              rotate: [baseRotate, baseRotate + rotateDrift * 0.5, baseRotate - rotateDrift * 0.3, baseRotate + rotateDrift * 0.4, baseRotate],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <div ref={(el) => (innerRefs.current[item.id] = el)} style={{ willChange: "transform" }}>
              <Icon style={{ color: item.color, fontSize: item.size }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
