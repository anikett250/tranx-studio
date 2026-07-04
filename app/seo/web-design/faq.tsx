"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
    {
        q: "How much does a website cost?",
        a: "The cost depends on your project's scope, features, and complexity. Contact us for a free consultation, and we'll provide a tailored quote based on your requirements.",
    },
    {
        q: "How long does it take to build a website?",
        a: "Most websites are completed within 2–6 weeks, depending on the project's size and the speed of feedback during the design process.",
    },
    {
        q: "Will my website work on mobile devices?",
        a: "Yes. Every website we build is fully responsive and optimized to provide a seamless experience across desktops, tablets, and smartphones.",
    },
    {
        q: "Will my website be SEO-friendly?",
        a: "Absolutely. Every website is built with clean code, semantic HTML, fast loading speeds, and technical SEO best practices to give your site a strong foundation for search engines.",
    },
    {
        q: "Can you redesign my existing website?",
        a: "Yes. Whether your current website needs a visual refresh, improved performance, or a complete rebuild, we can help transform it into a modern, high-performing website.",
    },
    {
        q: "Can I update my website after it's launched?",
        a: "Yes. We build websites that are easy to maintain, and we can also provide ongoing support if you'd prefer us to handle updates for you.",
    },
    {
        q: "Do you provide website maintenance?",
        a: "Yes. We offer ongoing maintenance, performance optimization, security updates, and technical support to keep your website running smoothly.",
    },
    {
        q: "How do I get started?",
        a: "Simply contact us to discuss your project. We'll learn about your goals, recommend the best approach, and provide a free, no-obligation quote.",
    },
];

function Corner({ className }: { className: string }) {
    return (
        <span
            className={`pointer-events-none absolute h-3 w-3 border-[#CC1302]/40 transition-all duration-300 group-hover:border-[#CC1302] group-hover:scale-125 ${className}`}
        />
    );
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-24 px-5 sm:px-6 lg:px-20">
            <div className="mx-auto w-full max-w-4xl">
                {/* Heading */}
                <motion.div
                    className="max-w-2xl text-left"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-widest text-[#CC1302]">
                        FAQ
                    </span>
                    <h2 className="mt-3 flex gap-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                        Frequently Asked
                        <span className="text-[#CC1302]">
                         Questions
                        </span>
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className="mt-10 sm:mt-12 flex flex-col gap-4">
                    {FAQS.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={faq.q}
                                className="group relative bg-[#0A0A0A] border border-[#CC1302]/15 transition-colors duration-300 hover:border-[#CC1302]/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <Corner className="-top-px -left-px border-t-2 border-l-2" />
                                <Corner className="-top-px -right-px border-t-2 border-r-2" />
                                <Corner className="-bottom-px -left-px border-b-2 border-l-2" />
                                <Corner className="-bottom-px -right-px border-b-2 border-r-2" />

                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                                >
                                    <span className="text-base sm:text-lg font-semibold text-white">
                                        {faq.q}
                                    </span>
                                    <Plus
                                        className={`h-5 w-5 shrink-0 text-[#CC1302] transition-transform duration-300 ${
                                            isOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-6 sm:leading-7 text-white/60">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}