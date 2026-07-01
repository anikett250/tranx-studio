"use client";

const menuLinks = [
    { label: "About Us", href: "#about" },
    { label: "Tranx Studio", href: "#studio" },
    { label: "Project", href: "#project" },
];

const socialLinks = [
    { label: "X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
];

const contactEmails = [
    "hello@tranxstudio.com",
    "projects@tranxstudio.com",
    "careers@tranxstudio.com",
];

export default function Footer() {
    return (
        <footer className="bg-[#030303] px-6 py-15">
            <div className="mx-auto px-15">
                <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr]">

                    {/* LEFT */}
                    <div>
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                            Get In Touch
                        </span>

                        <h2 className="mt-3 text-4xl font-bold leading-tight text-[#F2F0EC] md:text-7xl">
                            Let&apos;s Work
                            <br />
                            Together
                        </h2>

                        <div className="mt-5 h-px w-16 bg-[#CC1302]" />

                        <a
                            href="#contact"
                            className="mt-10 inline-flex items-center gap-3 border border-[#CC1302]/40 bg-[#0A0A0A] px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-[#F2F0EC] transition-all duration-300 hover:border-[#CC1302] hover:bg-[#CC1302] hover:text-white"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-3 gap-6">

                        {/* MENU */}
                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                Menu
                            </span>

                            <ul className="mt-6 space-y-4">
                                {menuLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-sm leading-7 text-[#8A8A88] transition-colors duration-300 hover:text-[#F2F0EC]"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SOCIALS */}
                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                Socials
                            </span>

                            <ul className="mt-6 space-y-4">
                                {socialLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm leading-7 text-[#8A8A88] transition-colors duration-300 hover:text-[#F2F0EC]"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#CC1302]">
                                Contact
                            </span>

                            <ul className="mt-6 space-y-4">
                                {contactEmails.map((email) => (
                                    <li key={email}>
                                        <a
                                            href={`mailto:${email}`}
                                            className="break-all text-sm leading-7 text-[#8A8A88] transition-colors duration-300 hover:text-[#F2F0EC]"
                                        >
                                            {email}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[#CC1302]/15 pt-8 md:flex-row md:items-center">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8A8A88]">
                        © {new Date().getFullYear()} Tranx Studio
                    </p>

                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8A8A88]">
                        All Rights Reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}