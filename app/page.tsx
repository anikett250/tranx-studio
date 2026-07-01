"use client";

import { useRef } from "react";
import Header from "./components/header";
import Header2 from "./components/header2";
import Navbar from "./components/navbar";
import ProjectShowcase from "./components/projectshowcase";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // scrollYProgress goes 0 -> 1 across this pinned container's scroll range only.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Header fades out first (0 -> 0.5), fully gone before Header2 starts.
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0],
    { clamp: true }
  );

  const headerY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -40],
    { clamp: true }
  );

  // Header2 only starts fading in once Header has fully faded out.
  const header2Opacity = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 1],
    { clamp: true }
  );

  const headerPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.5 ? "none" : "auto"
  );
  const header2PointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.5 ? "auto" : "none"
  );

  return (
    <>
      {/* Sequential fade: Header fully fades out, THEN Header2 fades in.
          Height controls how much scroll distance the whole thing takes. */}
      <div ref={containerRef} className="relative h-[200vh]">
        <Navbar />

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{
              opacity: headerOpacity,
              y: headerY,
              pointerEvents: headerPointerEvents,
            }}
            className="absolute inset-0"
          >
            <Header />
          </motion.div>

          <motion.div
            style={{
              opacity: header2Opacity,
              pointerEvents: header2PointerEvents,
            }}
            className="absolute inset-0 z-10"
          >
            <Header2 />
          </motion.div>
        </div>
      </div>

      {/* Header2 fades out as this scrolls into view, ProjectShowcase fades in.
          whileInView triggers only after the pinned container above has ended,
          so this can't overlap with Header/Header2's own fade timing. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProjectShowcase />
      </motion.div>
    </>
  );
}