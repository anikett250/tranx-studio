"use client";

import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HEADING_WORDS = ["Security"];

const FEATURES = [
    {
        title: "Fast Performance",
        desc: "Optimized code, efficient asset loading, and modern development techniques help your website load quickly and deliver a smooth user experience.",
    },
    {
        title: "Security Best Practices",
        desc: "We implement secure development practices to help protect your website, user data, and forms from common vulnerabilities.",
    },
    {
        title: "Responsive & Reliable",
        desc: "Every website is tested across major browsers and devices to ensure a consistent experience for every visitor.",
    },
    {
        title: "Scalable Architecture",
        desc: "Your website is built with a flexible foundation, making it easier to add new features and grow as your business evolves.",
    },
];

function Corner({ className }: { className: string }) {
    return (
        <span
            className={`pointer-events-none absolute h-3 w-3 transition-all duration-300 group-hover:border-[#CC1302] group-hover:scale-125 ${className}`}
        />
    );
}

export default function Security() {
    return (
        <section
            className="relative w-full min-h-screen"
        >
            <div className="relative w-full h-full overflow-hidden">
                <div className="relative z-10 flex flex-col min-h-screen justify-center px-5 sm:px-6 lg:px-20 py-24">
                    {/* Left-aligned heading + subtext */}
                    <div className="max-w-2xl text-left">
                        {/* Heading */}
                        <motion.h1
                            className="flex flex-wrap items-baseline gap-2 sm:gap-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <span>Performance &</span>
                            {HEADING_WORDS.map((word, i) => (
                                <motion.span
                                    key={word}
                                    className="text-[#CC1302]"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="mt-6 sm:mt-8 max-w-xl text-base text-start sm:text-lg leading-7 sm:leading-8 text-white/65"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            A great website isn't just built to look good—it's built to perform. We follow modern development best practices to deliver websites that are fast, secure, and reliable from day one.
                        </motion.p>
                    </div>

                    {/* Centered Feature Cards */}
                    <div className="mt-12 sm:mt-16 mx-auto w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {FEATURES.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                className="group relative flex flex-col bg-[#0A0A0A] border border-[#CC1302]/15 p-6 transition-colors duration-300 hover:border-[#CC1302]/50"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                            >
                                <Corner className="-top-px -left-px border-t-2 border-l-2" />
                                <Corner className="-top-px -right-px border-t-2 border-r-2" />
                                <Corner className="-bottom-px -left-px border-b-2 border-l-2" />
                                <Corner className="-bottom-px -right-px border-b-2 border-r-2" />

                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-white/60">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}