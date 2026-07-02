"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Loader2,
    CheckCircle2,
} from "lucide-react";

const contactInfo = [
    {
        title: "Agency's Email",
        value: "hello@youragency.com",
        icon: Mail,
    },
    // {
    //     title: "Aniket's Email (CTO)",
    //     value: "anikettiwari25000@gmail.com",
    //     icon: Mail,
    // },
    // {
    //     title: "Tanmay's Email (CMO)",
    //     value: "hello@youragency.com",
    //     icon: Mail,
    // },
    {
        title: "Place",
        value: "India-based • Working with clients worldwide • Remote-first delivery",
        icon: MapPin,
        badge: "EST / GMT",
    },
];

type Status = "idle" | "submitting" | "success";

export default function ContactSection() {
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

            setTimeout(() => setStatus("idle"), 4000);
        } catch (err) {
            console.error(err);
            alert("Failed to send message.");
            setStatus("idle");
        }
    };

    return (
        <section className="bg-[#030303] px-6 py-24">
            <div className="mx-auto max-w-5xl">

                {/* Heading */}
                <div className="mb-14">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                        Contact Us
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-[#F2F0EC]">
                        Let&apos;s start a conversation
                    </h2>

                    <div className="mt-5 h-px w-16 bg-[#CC1302]" />
                </div>

                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">

                    {/* ================= LEFT: CONTACT INFO ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                        <p className="max-w-sm leading-8 text-[#8A8A88]">
                            Have a project in mind or just want to say hello?
                            Fill out the form and we&apos;ll get back to you
                            within one business day.
                        </p>

                        <div className="mt-10 flex flex-col gap-6">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="border border-[#CC1302]/15 bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-[#CC1302]/50"
                                    >
                                        <div className="flex items-start justify-between">
                                            <Icon
                                                className="mb-4 text-[#CC1302]"
                                                size={22}
                                            />

                                            {item.badge && (
                                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8A88]">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>

                                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                            {item.title}
                                        </p>

                                        <p className="mt-2 text-[#F2F0EC]">
                                            {item.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* ================= RIGHT: FORM ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="border border-[#CC1302]/15 bg-[#0A0A0A] p-6 md:p-8"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="mt-3 w-full border border-[#CC1302]/15 bg-[#030303] px-4 py-3 text-[#F2F0EC] placeholder:text-[#8A8A88] outline-none transition-colors duration-300 focus:border-[#CC1302]/60"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="mt-3 w-full border border-[#CC1302]/15 bg-[#030303] px-4 py-3 text-[#F2F0EC] placeholder:text-[#8A8A88] outline-none transition-colors duration-300 focus:border-[#CC1302]/60"
                                />
                            </div>

                            {/* Phone (optional) */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]"
                                >
                                    Phone{" "}
                                    <span className="text-[#8A8A88] normal-case tracking-normal">
                                        (optional)
                                    </span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                    className="mt-3 w-full border border-[#CC1302]/15 bg-[#030303] px-4 py-3 text-[#F2F0EC] placeholder:text-[#8A8A88] outline-none transition-colors duration-300 focus:border-[#CC1302]/60"
                                />
                            </div>

                            {/* Query */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]"
                                >
                                    Your Query
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us a bit about your project..."
                                    className="mt-3 w-full resize-none border border-[#CC1302]/15 bg-[#030303] px-4 py-3 text-[#F2F0EC] placeholder:text-[#8A8A88] outline-none transition-colors duration-300 focus:border-[#CC1302]/60"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="mt-2 flex items-center justify-center gap-3 border border-[#CC1302] bg-[#CC1302]/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-[#F2F0EC] transition-all duration-300 hover:bg-[#CC1302]/20 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "submitting" && (
                                    <>
                                        <Loader2
                                            size={16}
                                            className="animate-spin"
                                        />
                                        Sending
                                    </>
                                )}

                                {status === "success" && (
                                    <>
                                        <CheckCircle2 size={16} />
                                        Message Sent
                                    </>
                                )}

                                {status === "idle" && (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}