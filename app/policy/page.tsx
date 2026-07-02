"use client";

import { motion } from "framer-motion";

const lastUpdated = "July 2, 2026";

const sections = [
    {
        title: "Information We Collect",
        body: [
            "We collect information you give us directly — your name, email address, company details and project brief — when you fill out a contact form, book a call or send us an email.",
            "We also collect limited technical data automatically when you visit our site: pages viewed, referring URL, browser type and approximate location, gathered through standard analytics tools.",
        ],
    },
    {
        title: "How We Use It",
        body: [
            "To respond to enquiries, scope projects and deliver the work you hire us for.",
            "To send project updates, invoices and — only with your consent — occasional studio news.",
            "To understand how people use our site so we can keep it fast and useful.",
        ],
    },
    {
        title: "How We Share It",
        body: [
            "We do not sell personal data. We share it only with the tools that keep the studio running — hosting, email and analytics providers — bound by their own confidentiality obligations, or when required by law.",
        ],
    },
    {
        title: "Cookies",
        body: [
            "We use essential cookies to keep the site working, and optional analytics cookies to see which pages are useful. You can block or clear cookies at any time in your browser settings.",
        ],
    },
    {
        title: "Data Retention",
        body: [
            "We keep enquiry and project data for as long as needed to deliver the work and meet our accounting obligations, then delete or anonymise it.",
        ],
    },
    {
        title: "Your Rights",
        body: [
            "You can ask us what data we hold about you, ask us to correct it, or ask us to delete it. Reach out any time and we'll action the request within 30 days.",
        ],
    },
    {
        title: "Security",
        body: [
            "We apply reasonable technical and organisational safeguards to protect your data, but no method of transmission or storage is ever completely secure.",
        ],
    },
    {
        title: "Changes To This Policy",
        body: [
            "We'll update the date below whenever this policy changes. Material changes will be flagged on this page.",
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <section id="privacy" className="bg-[#030303] px-6 py-24">
            <div className="mx-auto max-w-5xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mb-14"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                        Legal
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-[#F2F0EC]">
                        Privacy Policy
                    </h2>

                    <div className="mt-5 h-px w-16 bg-[#CC1302]" />

                    <p className="mt-6 max-w-xl leading-8 text-[#8A8A88]">
                        This explains what we collect, why we collect it, and what
                        say you have over it. Last updated {lastUpdated}.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="grid gap-7 md:grid-cols-2">
                    {sections.map((section, i) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: (i % 2) * 0.05 }}
                            className="border border-[#CC1302]/15 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#CC1302]/50"
                        >
                            <span className="font-mono text-xs tracking-[0.3em] text-[#CC1302]">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <h4 className="mb-3 mt-4 text-xl font-semibold text-[#F2F0EC]">
                                {section.title}
                            </h4>

                            <div className="space-y-3">
                                {section.body.map((p, j) => (
                                    <p key={j} className="leading-7 text-[#8A8A88]">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact strip */}
                <div className="mt-14 border border-[#CC1302]/15 bg-[#0A0A0A] p-6">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                        Questions
                    </span>
                    <p className="mt-3 leading-7 text-[#8A8A88]">
                        For anything about this policy or your data, email{" "}
                        <a
                            href="mailto:hello@yourstudio.com"
                            className="text-[#F2F0EC] underline decoration-[#CC1302]/40 underline-offset-4 hover:text-[#CC1302]"
                        >
                            hello@yourstudio.com
                        </a>
                        .
                    </p>
                </div>

            </div>
        </section>
    );
}