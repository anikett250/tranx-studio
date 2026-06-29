"use client";

import Header from "./components/header";
import Header2 from "./components/header2";
import Navbar from "./components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
    const { scrollY } = useScroll();

    const headerOpacity = useTransform(scrollY, [0, 1000], [1, 0]);
    const header2Opacity = useTransform(scrollY, [0, 1000], [0, 1]);

    return (
        <div className="relative h-[300vh]">
            <Navbar />
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <motion.div
                    style={{ opacity: headerOpacity }}
                    className="absolute inset-0"
                >
                    <Header />
                </motion.div>

                <motion.div
                    style={{ opacity: header2Opacity }}
                    className="absolute inset-0"
                >
                    <Header2 />
                </motion.div>
            </div>
        </div>
    );
}