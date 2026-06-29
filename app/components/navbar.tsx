"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Services", "Pricing"];

function CTAButton() {
    return (
        <motion.button
            className="text-white bg-[#CC1302] border border-[#CC1302] text-sm font-semibold px-5 py-2.5 rounded-[10px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
            Book a Call
        </motion.button>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed left-1/2 top-6 z-50 w-[92vw] max-w-6xl -translate-x-1/2">
            <nav className="relative w-full max-w-5xl mx-auto mt-8 px-4 py-3 flex items-center justify-between rounded-full border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-white font-bold text-xl">
                        <img src="./logo.png" alt=""
                            className="w-10 h-10 ml-10"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-3">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="px-4 py-2.5 rounded-[10px] text-white font-bold text-sm hover:text-white hover:bg-white/10 transition"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}

                        {/* Desktop CTA */}
                        <div className="hidden md:block ml-10 ">
                            <CTAButton />
                        </div>
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : ""
                                }`}
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            {menuOpen ? (
                                <>
                                    <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </>
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                id="mobile-menu"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 right-0 top-full mt-3 mx-2 rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 md:hidden"
                            >
                                <div className="flex flex-col gap-2">
                                    {links.map((link) => (
                                        <a
                                            key={link}
                                            href={`#${link.toLowerCase()}`}
                                            onClick={() => setMenuOpen(false)}
                                            className="rounded-lg px-3 py-2 text-white/75 hover:bg-white/10 hover:text-white transition"
                                        >
                                            {link}
                                        </a>
                                    ))}

                                    <div className="pt-2">
                                        <CTAButton />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
        </div>
    );
}