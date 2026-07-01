"use client";

import {
    Globe,
    Code2,
    Zap,
    Handshake,
} from "lucide-react";

const features = [
    {
        title: "Modern Development",
        description:
            "We build fast, scalable websites and web applications using modern technologies that are built to last.",
        icon: Code2,
    },
    {
        title: "Performance Focused",
        description:
            "Every project is optimized for speed, SEO, accessibility and a smooth user experience across every device.",
        icon: Zap,
    },
    {
        title: "Business Driven",
        description:
            "Our goal isn't just delivering a website—it's creating a digital product that helps your business grow.",
        icon: Globe,
    },
    {
        title: "Long-Term Partnership",
        description:
            "From planning to launch and beyond, we work closely with our clients to ensure every project succeeds.",
        icon: Handshake,
    },
];

export default function WhatIsTranxStudio() {
    return (
        <section id="tranxstudio" className="bg-[#030303] px-6 py-28">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}

                <div className="max-w-3xl">

                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                        About Tranx Studio
                    </span>

                    <h2 className="mt-4 text-5xl font-bold leading-tight text-[#F2F0EC]">
                        What is Tranx Studio
                    </h2>

                    <div className="mt-6 h-px w-16 bg-[#CC1302]" />

                    <p className="mt-8 text-lg leading-8 text-[#8A8A88]">
                        Tranx Studio is a digital product agency. We design, architect, and build custom web applications for brands looking to scale their digital infrastucture.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-7 md:grid-cols-2">

                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="border border-[#CC1302]/15 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-[#CC1302]/50"
                            >
                                <Icon
                                    size={30}
                                    className="mb-6 text-[#CC1302]"
                                />

                                <h3 className="mb-4 text-2xl font-semibold text-[#F2F0EC]">
                                    {item.title}
                                </h3>

                                <p className="leading-8 text-[#8A8A88]">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}