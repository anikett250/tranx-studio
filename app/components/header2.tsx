"use client"

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Define the Blueprint",
        description:
            "Tell us about your product goals, target audience, and functional requirements. We align on technical scope and user experience (UX) mapping.",
    },
    {
        number: "02",
        title: "Architect & Code",
        description:
            "We engineer your custom web platform using cutting-edge tech stacks, combining pixel-perfect frontend design with high-performance logic.",
    },
    {
        number: "03",
        title: "Test & Deploy",
        description:
            "Review the staging environment, fine-tune responsiveness, and launch your lightning-fast web product live to the world.",
    },
];

export default function Header2() {
    return (
        <section
            style={{ willChange: "transform, opacity" }}
            className="min-h-screen flex items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-40 py-16 font-sans"
        >

            <section className="bg-[#030303] px-6 py-24">
                <div className="mx-auto max-w-5xl">
                    {/* Heading */}
                    <div className="mb-14">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                            How We Work
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-[#F2F0EC]">
                            From concept to{" "}
                            <span className="text-[#CC1302]">deployment</span>
                        </h2>

                        <div className="mt-5 h-px w-16 bg-[#CC1302]" />
                    </div>

                    {/* Steps */}
                    <div className="grid gap-7 md:grid-cols-3">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                                className="border border-[#CC1302]/15 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#CC1302]/50"
                            >
                                <span className="font-mono text-xs tracking-[0.3em] text-[#CC1302]">
                                    Step {step.number}
                                </span>

                                <h4 className="mt-5 mb-3 text-xl font-semibold text-[#F2F0EC]">
                                    {step.title}
                                </h4>

                                <p className="leading-7 text-[#8A8A88]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}