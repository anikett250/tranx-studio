"use client";

import { memo, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import DarkVeil from "./DarkVeil";

// ─── Constants ───────────────────────────────────────────────────────────────

const springConfig = { type: "spring", stiffness: 220, damping: 18 } as const;

const statsData = [
    { value: 150, suffix: "+", label: "Projects" },
    { value: 50, suffix: "M+", label: "Views Generated" },
    { value: 100, suffix: "%", label: "Satisfaction" },
];

// Hoisted so these aren't recreated (and don't break child memoization) on every render
const HEADING_WORDS = ["New", "Visual", "Standard"];

const BUTTONS_DATA = [
    { label: "Book a Call", className: "bg-[#CC1302]" },
    { label: "View Portfolio", className: "bg-white/5 hover:bg-white/10" },
];

// ─── Count-up hook ────────────────────────────────────────────────────────────
// Only calls setState when the displayed integer actually changes, instead of
// on every animation frame (~60 times/sec). This cuts re-renders drastically
// and is the main fix for the scroll-triggered stutter.

function useCountUp(target: number, inView: boolean, duration = 3000) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number>(0);
    const lastValueRef = useRef(0);

    useEffect(() => {
        if (!inView) return;

        const start = performance.now();
        lastValueRef.current = 0;

        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const next = Math.floor(eased * target);

            if (next !== lastValueRef.current) {
                lastValueRef.current = next;
                setCount(next);
            }

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else if (next !== target) {
                setCount(target);
            }
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [inView, target, duration]);

    return count;
}

// ─── Stat item ────────────────────────────────────────────────────────────────

const StatItem = memo(function StatItem({
    value,
    suffix,
    label,
    inView,
}: (typeof statsData)[number] & { inView: boolean }) {
    const count = useCountUp(value, inView);

    return (
        <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {count}{suffix}
            </h3>
            <p className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-white/50 whitespace-nowrap">
                {label}
            </p>
        </div>
    );
});

// ─── Stats ────────────────────────────────────────────────────────────────────

const Stats = memo(function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            className="mt-12 sm:mt-14 flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
        >
            {statsData.map((stat) => (
                <StatItem key={stat.label} {...stat} inView={inView} />
            ))}
        </motion.div>
    );
});

// ─── Header ───────────────────────────────────────────────────────────────────

export default function Header() {

    return (
        <motion.section
            className="relative w-full min-h-screen"
        >
            <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 -z-10">
                                    <DarkVeil
                                        hueShift={0}
                                        noiseIntensity={0}
                                        scanlineIntensity={0}
                                        speed={0.5}
                                        scanlineFrequency={0}
                                        warpAmount={0}
                                        resolutionScale={1}
                                    />
                                </div>
                <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6 py-24 sm:py-32">
                    <div className="max-w-2xl text-center">

                        {/* Badge */}
                        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-[#CC1302]/30 bg-[#CC1302]/10 px-4 py-1.5 overflow-hidden">
                            <motion.span
                                className="h-2 w-2 rounded-full bg-[#CC1302] shrink-0"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            <motion.span
                                className="text-xs sm:text-sm font-medium text-[#CC1302] whitespace-nowrap overflow-hidden"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "auto", opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
                            >
                                Professional Video Editing
                            </motion.span>
                        </div>

                        {/* Heading */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <span className="block">Setting the</span>
                            <span className="flex flex-wrap gap-2 sm:gap-3 justify-center">
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
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="mx-auto mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-white/65"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            Premium video editing for creators, brands, and businesses that
                            want to stand out and drive more engagement across every platform.
                        </motion.p>

                        {/* Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            {BUTTONS_DATA.map(({ label, className }) => (
                                <motion.button
                                    key={label}
                                    className={`w-full sm:w-auto rounded-xl border border-white/10 ${className} px-7 py-3 font-semibold text-white backdrop-blur-md`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                    whileHover={{ y: -3, transition: springConfig }}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </div>

                        <Stats />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}