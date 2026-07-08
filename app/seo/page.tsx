"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HEADING_WORDS = ["Blogs"];

const BLOGS = [
    {
        title: "Web Design",
        desc: "Insights on layout, branding, and crafting websites that look as good as they perform.",
        href: "/seo/web-design",
        tag: "Design",
    },
    {
        title: "Web Development",
        desc: "Deep dives into code quality, performance, security, and the tech stack behind great websites.",
        href: "/seo/web-dev",
        tag: "Development",
    },
];

function Corner({ className }: { className: string }) {
    return (
        <span
            className={`pointer-events-none absolute h-3 w-3 transition-all duration-300 group-hover:border-[#CC1302] group-hover:scale-125 ${className}`}
        />
    );
}

export default function Blogs() {
    return (
        <section className="relative w-full min-h-screen">
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
                            Guides and insights split into two tracks—design and development—so you can find what's relevant to you.
                        </motion.p>
                    </div>

                    {/* Centered Blog Cards */}
                    <div className="mt-12 sm:mt-16 mx-auto w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {BLOGS.map((blog, i) => (
                            <motion.div
                                key={blog.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                            >
                                <Link
                                    href={blog.href}
                                    className="group relative flex flex-col h-full bg-[#0A0A0A] border border-[#CC1302]/15 p-6 sm:p-8 transition-colors duration-300 hover:border-[#CC1302]/50"
                                >
                                    <Corner className="-top-px -left-px border-t-2 border-l-2" />
                                    <Corner className="-top-px -right-px border-t-2 border-r-2" />
                                    <Corner className="-bottom-px -left-px border-b-2 border-l-2" />
                                    <Corner className="-bottom-px -right-px border-b-2 border-r-2" />

                                    <span className="w-fit text-xs uppercase tracking-widest text-[#CC1302]/80 font-medium">
                                        {blog.tag}
                                    </span>

                                    <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                                        {blog.title}
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-white/60">
                                        {blog.desc}
                                    </p>

                                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 group-hover:gap-3 group-hover:text-[#CC1302]">
                                        Read more
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}