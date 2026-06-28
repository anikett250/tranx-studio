"use client";

import DarkVeil from "./DarkVeil";
import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="relative h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.5}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <section className="relative flex mt-20 items-center justify-center px-6">
                    <div className="max-w-2xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#CC1302]/30 bg-[#CC1302]/10 px-4 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#CC1302]" />
                            <span className="text-sm font-medium text-[#CC1302]">
                                Professional Video Editing
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                            We Create
                            <br />
                            <span className="text-[#CC1302]">
                                High-Converting Videos
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/65">
                            Premium video editing for creators, brands, and businesses
                            that want to stand out and drive more engagement across every
                            platform.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <motion.button
                                className="rounded-xl border border-white/10 bg-[#CC1302] px-7 py-3 font-semibold text-white backdrop-blur-md transition"
                                whileHover={{ y: -3 }}
                                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            >
                                Book a Call
                            </motion.button>

                            <motion.button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                                whileHover={{ y: -3 }}
                                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            >
                                View Portfolio
                            </motion.button>
                        </div>

                        {/* Stats */}
                        <div className="mt-14 flex justify-center gap-12">
                            <div>
                                <h3 className="text-3xl font-bold text-white">150+</h3>
                                <p className="mt-1 text-sm uppercase tracking-wider text-white/50">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">50M+</h3>
                                <p className="mt-1 text-sm uppercase tracking-wider text-white/50">
                                    Views Generated
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">100%</h3>
                                <p className="mt-1 text-sm uppercase tracking-wider text-white/50">
                                    Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}