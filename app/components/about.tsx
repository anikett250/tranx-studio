"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Code2,
    Cpu,
    Globe,
    Target,
    Megaphone,
    Handshake,
    Briefcase,
    Users,
} from "lucide-react";

const members = [
    {
        name: "Aniket",
        role: "Chief Technology Officer",
        bio: "I architect high-performance websites and web applications, focusing on enterprise scalability, clean code, and seamless user experiences.",

        expertise: [
            {
                title: "Frontend Development",
                description:
                    "Building responsive interfaces with React, Next.js, TypeScript and Tailwind.",
                icon: Code2,
            },
            {
                title: "Backend Development",
                description:
                    "Developing APIs, authentication systems and scalable databases.",
                icon: Cpu,
            },
            {
                title: "Full Stack Engineering",
                description:
                    "Creating complete products from idea to deployment.",
                icon: Globe,
            },
            {
                title: "Performance",
                description:
                    "Optimizing speed, SEO and smooth interactions.",
                icon: Target,
            },
        ],
    },

    {
        name: "Tanmay",
        role: "Chief Marketing Officer",
        bio: "I handle client communication, outreach, lead generation and ensure every project runs smoothly from start to finish.",

        expertise: [
            {
                title: "Lead Generation",
                description:
                    "Identifying and engaging high-value businesses through strategic, hyper-personalized outreach.",
                icon: Megaphone,
            },
            {
                title: "Client Management",
                description:
                    "Cultivating long-term partnerships and ensuring seamless alignment with client vision.",
                icon: Handshake,
            },
            {
                title: "Project Management",
                description:
                    "Overseeing operational timelines, stakeholder communication, and flawless project execution.",
                icon: Briefcase,
            },
            {
                title: "Business Growth",
                description:
                    "Driving agency scaling initiatives through strategic marketing and ecosystem partnerships.",
                icon: Users,
            },
        ],
    },
];

export default function AboutSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % members.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const member = members[active];

    return (
        <section id="about" className="bg-[#030303] px-6 py-24">
            <div className="mx-auto max-w-5xl">

                {/* Heading */}
                <div className="mb-14">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                        About Us
                    </span>

                    <h2 className="mt-3 text-4xl flex gap-2 font-bold text-[#F2F0EC]">
                        The people behind the 
                        <span className="text-[#CC1302] ">
                        Work
                        </span>
                    </h2>

                    <div className="mt-5 h-px w-16 bg-[#CC1302]" />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{
                            duration: 0.45,
                            ease: "easeInOut",
                        }}
                    >

                        {/* ================= TOP ================= */}

                        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

                            {/* LEFT */}
                            <div>
                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                    {member.role}
                                </span>

                                <p className="mt-6 max-w-xl leading-8 text-[#8A8A88]">
                                    {member.bio}
                                </p>
                            </div>

                            {/* RIGHT CARD */}
                            <div className="border border-[#CC1302]/15 bg-[#0A0A0A] p-6">

                                {/* <div className="aspect-square overflow-hidden bg-[#111]">

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover"
                                    />

                                </div> */}

                                <h4 className="mt-5 text-2xl font-bold text-[#F2F0EC]">
                                    {member.name}
                                </h4>

                                <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                    {member.role}
                                </p>

                                <div className="mt-8 flex justify-end">
                                    <span className="font-mono text-xs tracking-[0.3em] text-[#CC1302]">
                                        {String(active + 1).padStart(2, "0")} /{" "}
                                        {String(members.length).padStart(2, "0")}
                                    </span>
                                </div>

                            </div>

                        </div>

                        {/* ================= EXPERTISE ================= */}

                        <div className="mt-20">

                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                Expertise
                            </span>

                            <h3 className="mt-3 text-3xl font-bold text-[#F2F0EC]">
                                What {member.name.split(" ")[0]} does
                            </h3>

                            <div className="mt-5 h-px w-16 bg-[#CC1302]" />

                            <div className="mt-10 grid gap-7 md:grid-cols-2">
                                {member.expertise.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="border border-[#CC1302]/15 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#CC1302]/50"
                                        >
                                            <Icon
                                                className="mb-6 text-[#CC1302]"
                                                size={28}
                                            />

                                            <h4 className="mb-3 text-xl font-semibold text-[#F2F0EC]">
                                                {item.title}
                                            </h4>

                                            <p className="leading-7 text-[#8A8A88]">
                                                {item.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}