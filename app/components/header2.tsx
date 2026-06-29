"use client"

import { motion } from "framer-motion";
import BorderGlow from './borderglow';

export default function Header2() {
    const steps = [
        {
            number: "Step 01",
            title: "Share your vision",
            description:
                "Tell us about your project, goals, style preferences, and references. Upload your footage and brand assets to get started.",
        },
        {
            number: "Step 02",
            title: "We edit & create",
            description:
                "Our expert editors craft your video with clean cuts, motion graphics, color grading, and sound design.",
        },
        {
            number: "Step 03",
            title: "Review & deliver",
            description:
                "Receive your first draft, request revisions, and get the final high-quality video ready to publish.",
        },
    ];
    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            className="min-h-screen flex items-center justify-center"
        >
            <section className=" px-40 py-16 font-sans">
                {/* Top label */}
                <p className="text-xs font-semibold uppercase tracking-widest text-[#CC1302] mb-6">
                    How It Works
                </p>

                {/* Heading row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
                    <h2 className="text-5xl font-bold text-white leading-tight max-w-md">
                        From vision to cinematic experience
                    </h2>
                    {/* <p className="text-gray-500 text-sm max-w-xs md:mt-2 md:text-right leading-relaxed">
                        A simple, streamlined workflow designed for fast turnaround and
                        exceptional quality.
                    </p> */}
                </div>

                {/* Step cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {steps.map((step, index) => (
                        <BorderGlow
                            key={index}
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#120F17"
                            borderRadius={28}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated
                            colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >

                            <div
                                key={step.number}
                                className="bg-[#030303] rounded-2xl px-7 py-10 border border-[#CC1302]/80 flex flex-col gap-5"
                            >
                                <span className="self-start bg-[#CC1302] text-white text-xs font-medium px-4 py-1.5 rounded-full">
                                    {step.number}
                                </span>
                                <h3 className="text-2xl font-semibold text-white">
                                    {step.title}
                                </h3>
                                <p className="text-white/65 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </BorderGlow>
                    ))}
                </div>
            </section>
        </motion.section>
    )
}