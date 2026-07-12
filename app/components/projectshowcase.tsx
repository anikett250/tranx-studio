"use client";

import { memo } from "react";
import { ArrowUpRight, Map, Activity, Layers, Aperture, LucideIcon } from "lucide-react";
import Image from "next/image";

const ACCENT = "#CC1302";
const BG = "#030303";

type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
  codeUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    name: "Lunar",
    category: "Restaurant Web Page",
    description:
      "A modern restaurant website featuring an elegant menu, smooth animations, table reservation flow, and a responsive design crafted to elevate the dining experience.",
    tags: ["React", "Tailwind", "Framer Motion", "Nextjs"],
    icon: Map,
    image: "/restaurantdemo.png",
    codeUrl: "https://github.com/anikett250/restaurant-demo",
    liveUrl: "https://restaurantdemo3.netlify.app/",
  },
  {
    name: "RoofClaim",
    category: "Roofing Web Page",
    description:
      "A conversion-focused roofing landing page designed to generate qualified leads through clear service sections, trust signals, and strategically placed call-to-actions.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Framer Motion"],
    icon: Activity,
    image: "/roofingdemo.png",
    codeUrl: "https://github.com/anikett250/roofing-demo2",
    liveUrl: "https://roofingdemo3.netlify.app/",
  },
  {
    name: "Ridge",
    category: "Roofing Web Page",
    description:
      "A premium roofing company website showcasing services, project galleries, customer testimonials, and fast-loading pages optimized for local business growth.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Framer Motion"],
    icon: Layers,
    image: "/roofingdemo2.png",
    codeUrl: "https://github.com/anikett250/roofing-demo4",
    liveUrl: "https://ridgeroofingdemo.netlify.app/",
  },
  {
    name: "Fine Dine",
    category: "Restaurant Web Page",
    description:
      "An upscale restaurant experience with immersive visuals, refined typography, online reservations, and a polished interface designed to reflect luxury dining.",
    tags: ["React", "Tailwind", "Framer Motion", "Nextjs"],
    icon: Aperture,
    image: "/restaurantdemo2.png",
    codeUrl: "https://github.com/anikett250/restaurant-demo2",
    liveUrl: "https://restaurantdemo4.netlify.app/",
  },
];

// Hoisted so this style object isn't reallocated on every card render
const GRID_BG_STYLE = {
  backgroundImage:
    "linear-gradient(#CC1302 1px, transparent 1px), linear-gradient(90deg, #CC1302 1px, transparent 1px)",
  backgroundSize: "28px 28px",
} as const;

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute w-5 h-5 border-[#CC1302] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${className}`}
    />
  );
}

const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className="group relative flex flex-col bg-[#0A0A0A] border border-[#CC1302]/15 transition-colors duration-300 hover:border-[#CC1302]/50"
    >
      <Corner className="-top-px -left-px border-t-2 border-l-2" />
      <Corner className="-top-px -right-px border-t-2 border-r-2" />
      <Corner className="-bottom-px -left-px border-b-2 border-l-2" />
      <Corner className="-bottom-px -right-px border-b-2 border-r-2" />

      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#050505]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-[#030303]/25 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#030303]/0 opacity-0 transition-all duration-300 group-hover:bg-[#030303]/85 group-hover:opacity-100">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex translate-y-2 items-center gap-2 border border-[#CC1302] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#F2F0EC] opacity-0 transition-all duration-300 delay-75 hover:bg-[#CC1302] group-hover:translate-y-0 group-hover:opacity-100"
          >
            Visit Code
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex translate-y-2 items-center gap-2 bg-[#CC1302] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#F2F0EC] opacity-0 transition-all duration-300 delay-150 hover:bg-[#a80f02] group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ArrowUpRight size={14} />
            Live Site
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#CC1302]">
            {project.category}
          </span>
        </div>
        <h3 className="font-sans text-xl font-bold text-[#F2F0EC]">{project.name}</h3>
        <p className="text-sm leading-relaxed text-[#8A8A88]">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#CC1302]/25 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-[#8A8A88]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default function ProjectShowcase() {
  return (
    <section className="w-full py-24 px-6" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
            Selected work
          </span>
          <h2 className="text-3xl flex gap-3 font-bold text-[#F2F0EC] md:text-4xl">Featured
            <span className="text-[#CC1302] ">
              Projects
            </span>
          </h2>
          <div className="mt-2 h-px w-16 bg-[#CC1302]" />
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}