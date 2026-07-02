"use client";

import { motion } from "framer-motion";

const lastUpdated = "July 2, 2026";

const sections = [
    {
        title: "Working With Us",
        body: [
            "These terms apply the moment you engage us for a project, whether confirmed by email, signed proposal or paid invoice. They sit alongside — not instead of — anything agreed in your project's statement of work.",
        ],
    },
    {
        title: "Scope & Quotes",
        body: [
            "Quotes are based on the brief at the time and are valid for 30 days. Work outside the agreed scope — new pages, extra revisions rounds, feature changes — is billed separately and agreed before we start.",
        ],
    },
    {
        title: "Payment",
        body: [
            "Projects are billed 50% upfront and 50% on delivery, unless otherwise agreed in writing. Invoices are due within 14 days. Work may pause on overdue invoices.",
        ],
    },
    {
        title: "Revisions",
        body: [
            "Each project includes two rounds of revisions on the agreed deliverables. Further rounds are quoted and billed at our standard rate.",
        ],
    },
    {
        title: "Timelines",
        body: [
            "Delivery dates depend on receiving assets, feedback and approvals on time. Delays on your side push the timeline back by the same amount.",
        ],
    },
    {
        title: "Ownership",
        body: [
            "Final deliverables become yours once paid in full. We keep the right to display the work in our portfolio unless you ask us not to.",
        ],
    },
    {
        title: "Third-Party Tools",
        body: [
            "Where a project relies on third-party platforms, plugins or licenses, those are governed by that provider's own terms and are your responsibility to maintain going forward.",
        ],
    },
    {
        title: "Liability",
        body: [
            "We work to a professional standard but can't guarantee uninterrupted uptime once a site leaves our hands. Our liability for any claim is capped at the fees paid for the project in question.",
        ],
    },
    {
        title: "Cancellation",
        body: [
            "Either side can end a project with written notice. You pay for work completed up to that point; any upfront balance beyond that is refunded.",
        ],
    },
    {
        title: "Changes To These Terms",
        body: [
            "We'll update the date below whenever these terms change. Continuing to work with us after an update means you accept the new terms.",
        ],
    },
];

export default function TermsOfService() {
    return (
        <section id="terms" className="bg-[#030303] px-6 py-24">
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
                        Terms of Service
                    </h2>

                    <div className="mt-5 h-px w-16 bg-[#CC1302]" />

                    <p className="mt-6 max-w-xl leading-8 text-[#8A8A88]">
                        The ground rules for working together, in plain language.
                        Last updated {lastUpdated}.
                    </p>
                </motion.div>

                {/* Sections — numbered, since these are ordered clauses of one agreement */}
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
                        For anything about these terms, email{" "}
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