"use client";

import { useRef } from "react";
import Header from "./components/header";
import Header2 from "./components/header2";
import Navbar from "./components/navbar";
import ProjectShowcase from "./components/projectshowcase";
import Aboutus from "./components/about";
import WhatIsTranxStudio from "./components/whoarewe";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VscHome,
  VscAccount,
  VscOrganization,
  VscFolderLibrary,
  VscArchive,
} from "react-icons/vsc";
import { useRouter } from "next/navigation";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About",
      onClick: () => scrollTo("about"),
    },
    {
      icon: <VscOrganization size={18} />,
      label: "Tranx Studio",
      onClick: () => scrollTo("tranxstudio"),
    },
    {
      icon: <VscFolderLibrary size={18} />,
      label: "Projects",
      onClick: () => scrollTo("projects"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Blogs",
      onClick: () => router.push("/web-design"),
    },
  ];

  return (
    <>
      <div ref={containerRef} className="relative h-[200vh]">
        <Navbar
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />

        <div className="sticky top-0 h-dvh w-full overflow-hidden">
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
        id="projects"
      >
        <ProjectShowcase />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="tranxstudio"
      >
        <WhatIsTranxStudio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="about"
      >
        <Aboutus />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ContactSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </>
  );
}