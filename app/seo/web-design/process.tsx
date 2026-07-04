"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react";

const HEADING_WORDS = ["Process"];

const STEPS = [
    {
        number: "01",
        title: "Discovery",
        desc: "We start by understanding your business, goals, target audience, and project requirements to create a strategy tailored to your needs.",
    },
    {
        number: "02",
        title: "Design",
        desc: "We craft a modern, user-focused design that reflects your brand and provides an intuitive experience across all devices.",
    },
    {
        number: "03",
        title: "Development",
        desc: "Using modern technologies and clean code, we build a fast, responsive, and SEO-ready website with performance in mind.",
    },
    {
        number: "04",
        title: "Launch & Support",
        desc: "Before launch, we thoroughly test your website to ensure everything works seamlessly. Once live, we remain available for updates and ongoing support as your business grows.",
    },
];

function Corner({ className }: { className: string }) {
    return (
        <span
            className={`pointer-events-none absolute h-3 w-3 border-[#CC1302]/40 transition-all duration-300 group-hover:border-[#CC1302] group-hover:scale-125 ${className}`}
        />
    );
}

export default function Process() {
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
                            <span>Our</span>
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
                            From the first conversation to launch day, we follow a clear, collaborative process to ensure your website is delivered on time and built to achieve your business goals.
                        </motion.p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-stretch mt-20 justify-center">
                        {STEPS.map((step, i) => (
                            <div
                                key={step.number}
                                className="flex flex-col lg:flex-row items-center"
                            >
                                <motion.div
                                    className="group relative flex flex-col items-center justify-center text-center gap-2 w-[320px] aspect-video shrink-0 bg-[#0A0A0A] border border-[#CC1302]/15 p-6 transition-colors duration-300 hover:border-[#CC1302]/50"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                >
                                    <Corner className="-top-px -left-px border-t-2 border-l-2" />
                                    <Corner className="-top-px -right-px border-t-2 border-r-2" />
                                    <Corner className="-bottom-px -left-px border-b-2 border-l-2" />
                                    <Corner className="-bottom-px -right-px border-b-2 border-r-2" />

                                    <span className="text-xs font-semibold tracking-widest text-[#CC1302]">
                                        {step.number}
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-white/60 line-clamp-3">
                                        {step.desc}
                                    </p>
                                </motion.div>

                                {i < STEPS.length - 1 && (
                                    <motion.div
                                        className="flex items-center justify-center my-6 lg:my-0 lg:mx-6 shrink-0"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                                    >
                                        <ArrowDown className="block lg:hidden h-6 w-6 text-[#CC1302]/50" />
                                        <ArrowRight className="hidden lg:block h-6 w-6 text-[#CC1302]/50" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}