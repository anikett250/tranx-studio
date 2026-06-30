"use client";

import { useRef } from "react";
import Header from "./components/header";
import Header2 from "./components/header2";
import Navbar from "./components/navbar";
import ProjectShowcase from "./components/projectshowcase";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // scrollYProgress goes 0 -> 1 across exactly this container's scrollable range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phase 1 (0 -> 0.5): Header fades out, Header2 fades in (both stacked, no movement)
  // Phase 2 (0.5 -> 0.85): Header2 slides out left + fades out, ProjectShowcase slides in from right
  const headerOpacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 0]);
  const header2X = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["0%", "-100%"]
  );

  const projectX = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["100%", "0%"]
  );

  const header2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 1],
    [0, 1, 0]
  );

  // Disable pointer events once each panel is fully out of view
  const headerPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.5 ? "none" : "auto"
  );
  const header2PointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 1 ? "none" : "auto"
  );
  const projectPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 1 ? "auto" : "none"
  );

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <Navbar />

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Header */}
        <motion.div
          style={{
            opacity: headerOpacity,
            pointerEvents: headerPointerEvents,
          }}
          className="absolute inset-0"
        >
          <Header />
        </motion.div>

        {/* Header2 */}
        <motion.div
          style={{
            opacity: header2Opacity,
            x: header2X,
            pointerEvents: header2PointerEvents,
          }}
          className="absolute inset-0 z-10"
        >
          <Header2 />
        </motion.div>

        {/* ProjectShowcase */}
        <motion.div
          style={{ x: projectX, pointerEvents: projectPointerEvents }}
          className="absolute inset-0 z-20"
        >
          <ProjectShowcase />
        </motion.div>
      </div>
    </div>
  );
}