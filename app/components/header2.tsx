"use client"

import { memo } from "react";
import { motion } from "framer-motion";
import BorderGlow from './borderglow';

// Hoisted outside component — never recreated
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

const TRANSITION = { duration: 0.8, ease: "easeOut" } as const;
const VIEWPORT = { once: true, amount: 0.3 } as const;

// Memoized card — only re-renders if props change
const StepCard = memo(function StepCard({
    number,
    title,
    description,
}: (typeof steps)[number]) {
    return (
        // glowColor must be HSL values: "h s l" — #CC1302 in HSL is ~6deg 97% 40%
        <BorderGlow
            edgeSensitivity={30}
            glowColor="6 97 40"        // ← was "40 80 80", now #CC1302 in HSL
            backgroundColor="#030303"   // ← match your inner card bg
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.5}         // ← bump intensity so it's visible
            coneSpread={25}
            animated={true}
            colors={["#CC1302", "#ff4422", "#CC1302"]}  // ← red tones only
            fillOpacity={0.3}
        >
            {/* Remove the border from the inner div — BorderGlow handles it */}
            <div className="bg-[#030303] rounded-2xl px-7 border border-[#CC1302]/70 py-10 flex flex-col gap-5">
                <span className="self-start bg-[#CC1302] text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    {number}
                </span>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{description}</p>
            </div>
        </BorderGlow>
    );
});

export default function Header2() {
    return (
        // Single element — removed redundant nested <section>
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={TRANSITION}
            viewport={VIEWPORT}
            // willChange hints the browser before the animation fires
            style={{ willChange: "transform, opacity" }}
            className="min-h-screen flex items-center justify-center px-40 py-16 font-sans"
        >
            <div className="w-full">
                {/* Top label */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#CC1302]/30 bg-[#CC1302]/10 px-4 py-1.5 overflow-hidden">
                    <motion.span
                        className="h-2 w-2 rounded-full bg-[#CC1302] shrink-0"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.span
                        className="text-sm font-medium text-[#CC1302] whitespace-nowrap overflow-hidden"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
                    >
                        How we Work
                    </motion.span>
                </div>

                {/* Heading */}
                <motion.h1
                            className="text-5xl font-bold leading-tight mb-5 tracking-tight text-white md:text-7xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            From vision to
                            <br />
                            <div className="flex gap-3">
                                {["Cinematic", "Experience"].map((word, i) => (
                                    <motion.span
                                        key={word}
                                        className="text-[#CC1302]"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.1 + i * 0.2 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.h1>

                {/* Step cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {steps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}