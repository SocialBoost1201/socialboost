"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type WorkItem = {
  src: string;
  title: string;
  from: { x: string; y: string };
  to: { x: string; y: string };
  easeX: [number, number, number, number];
  easeY: [number, number, number, number];
  duration: number;
  delay: number;
};

const WORKS: WorkItem[] = [
  {
    src: "/hero/work-01.webp",
    title: "実績01",
    from: { x: "-20vw", y: "-30vh" },
    to: { x: "110vw", y: "120vh" },
    easeX: [0.25, 0.1, 0.8, 0.9],
    easeY: [0.22, 1, 0.36, 1],
    duration: 22,
    delay: 0,
  },
  {
    src: "/hero/work-02.webp",
    title: "実績02",
    from: { x: "120vw", y: "-10vh" },
    to: { x: "-20vw", y: "110vh" },
    easeX: [0.42, 0, 0.58, 1],
    easeY: [0.22, 1, 0.36, 1],
    duration: 26,
    delay: 3,
  },
  {
    src: "/hero/work-03.webp",
    title: "実績03",
    from: { x: "20vw", y: "-30vh" },
    to: { x: "35vw", y: "120vh" },
    easeX: [0.65, 0, 0.35, 1],
    easeY: [0.25, 0.46, 0.45, 0.94],
    duration: 20,
    delay: 6,
  },
  {
    src: "/hero/work-04.webp",
    title: "実績04",
    from: { x: "-20vw", y: "20vh" },
    to: { x: "110vw", y: "60vh" },
    easeX: [0.22, 1, 0.36, 1],
    easeY: [0.65, 0, 0.35, 1],
    duration: 24,
    delay: 1.5,
  },
  {
    src: "/hero/work-05.webp",
    title: "実績05",
    from: { x: "120vw", y: "30vh" },
    to: { x: "-20vw", y: "80vh" },
    easeX: [0.25, 0.1, 0.8, 0.9],
    easeY: [0.42, 0, 0.58, 1],
    duration: 28,
    delay: 8,
  },
  {
    src: "/hero/work-06.webp",
    title: "実績06",
    from: { x: "-20vw", y: "120vh" },
    to: { x: "110vw", y: "-20vh" },
    easeX: [0.22, 1, 0.36, 1],
    easeY: [0.25, 0.46, 0.45, 0.94],
    duration: 23,
    delay: 4,
  },
  {
    src: "/hero/work-07.webp",
    title: "実績07",
    from: { x: "55vw", y: "120vh" },
    to: { x: "70vw", y: "-30vh" },
    easeX: [0.65, 0, 0.35, 1],
    easeY: [0.22, 1, 0.36, 1],
    duration: 19,
    delay: 10,
  },
];

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export function FloatingWorks() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-4 gap-4 p-8 content-center opacity-20"
        aria-hidden="true"
      >
        {WORKS.slice(0, 8).map((w, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl"
          >
            <Image src={w.src} alt="" fill sizes="240px" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  const visibleWorks = isMobile ? WORKS.slice(0, 4) : WORKS;

  return (
    <div
      className="floating-works-wrapper pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {visibleWorks.map((w, i) => (
        <motion.div
          key={i}
          className="absolute w-[min(180px,28vw)] transform-gpu pointer-events-auto"
          style={{
            aspectRatio: "3/4",
            willChange: "transform, opacity",
            left: 0,
            top: 0,
          }}
          initial={{
            x: w.from.x,
            y: w.from.y,
            rotate: -8,
            opacity: 0,
          }}
          animate={{
            x: [w.from.x, w.to.x],
            y: [w.from.y, w.to.y],
            rotate: [-8, 8],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            x: {
              duration: w.duration,
              ease: w.easeX,
              delay: w.delay,
              repeat: Infinity,
            },
            y: {
              duration: w.duration,
              ease: w.easeY,
              delay: w.delay,
              repeat: Infinity,
            },
            rotate: {
              duration: w.duration * 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            opacity: {
              duration: w.duration,
              times: [0, 0.08, 0.92, 1],
              ease: "linear",
              delay: w.delay,
              repeat: Infinity,
            },
          }}
          whileHover={{ scale: 1.08 }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15">
            <Image
              src={w.src}
              alt=""
              fill
              sizes="(max-width: 768px) 28vw, 180px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
