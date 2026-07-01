"use client";

import { useRef } from "react";
import Header from "./components/header";
import Header2 from "./components/header2";
import Navbar from "./components/navbar";
import ProjectShowcase from "./components/projectshowcase";
import Aboutus from "./components/about";
import WhatIsTranxStudio from "./components/whoarewe";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProjectShowcase />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WhatIsTranxStudio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Aboutus />
      </motion.div>
    </>
  );
}