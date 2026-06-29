"use client";

import Header from "./components/header";
import Header2 from "./components/header2";
import Navbar from "./components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";

const FADE_START = 800;
const FADE_END = 1500;

export default function Home() {
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [FADE_START, FADE_END], [1, 0]);
  const header2Opacity = useTransform(scrollY, [FADE_START, FADE_END], [0, 1]);

  return (
    <div className="relative h-[300vh]">
      <Navbar />

      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Header fades OUT — sits below */}
        <motion.div
          style={{ opacity: headerOpacity, willChange: "opacity" }}
          className="absolute inset-0"
        >
          <Header />
        </motion.div>

        {/* Header2 fades IN — sits on top */}
        <motion.div
          style={{ opacity: header2Opacity, willChange: "opacity", pointerEvents: "none" }}
          className="absolute inset-0"
        >
          <Header2 />
        </motion.div>
      </div>
    </div>
  );
}