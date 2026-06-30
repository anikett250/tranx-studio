"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

type Video = {
  id: string;
  title: string;
  tag: string;
};

const videos: Video[] = [
  { id: "M7lc1UVf-VE", title: "Behind the Cut", tag: "Reel 01" },
  { id: "aqz-KE-bpKQ", title: "Color Grade Breakdown", tag: "Reel 02" },
  { id: "ScMzIvxBSi4", title: "Motion Graphics Pack", tag: "Reel 03" },
  { id: "9bZkp7q19f0", title: "Sound Design Layer", tag: "Reel 04" },
  { id: "L_jWHffIx5E", title: "Client Brand Spot", tag: "Reel 05" },
  { id: "fJ9rUzIMcZQ", title: "Final Delivery Cut", tag: "Reel 06" },
];

const loop = [...videos, ...videos];

function VideoCard({ id, title, tag }: Video) {
  const [hovered, setHovered] = useState(false);

    return (
        <a
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative shrink-0 w-[320px] overflow-hidden rounded-2xl border border-[#CC1302]/40 bg-[#030303]"
            style={{
                boxShadow: hovered
                    ? "0 0 0 1px rgba(204,19,2,0.6), 0 0 40px rgba(204,19,2,0.35)"
                    : "0 0 0 1px rgba(204,19,2,0.15)",
                transition: "box-shadow 0.4s ease",
            }}
        >
            <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/10 to-transparent" />
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                        background: "rgba(3,3,3,0.35)",
                    }}
                >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#CC1302] text-white shadow-lg">
                        <Play className="h-6 w-6 fill-white" />
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 px-5 py-4">
                <span className="self-start bg-[#CC1302]/15 text-[#CC1302] text-xs font-medium px-3 py-1 rounded-full border border-[#CC1302]/30">
                    {tag}
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                    {title}
                </h3>
            </div>
        </a>
    );
}

export default function VideoCarousel() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 font-sans bg-[#030303] ">
            <div className="w-full max-w-7xl flex flex-col items-center">
                {/* Top label */}
                <div className="mb-8 flex justify-center w-full">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#CC1302]/30 bg-[#CC1302]/10 px-4 py-1.5">
                        <motion.span
                            className="h-2 w-2 rounded-full bg-[#CC1302] shrink-0"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        <motion.span
                            className="overflow-hidden whitespace-nowrap text-sm font-medium text-[#CC1302]"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
                        >
                            Our Work
                        </motion.span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                    Recent <span className="text-[#CC1302]">Edits</span>
                </h1>
            </div>

            {/* Infinite scrolling track */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
            >
                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {loop.map((video, i) => (
                        <VideoCard key={`${video.id}-${i}`} {...video} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}