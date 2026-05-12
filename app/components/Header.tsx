"use client";

import Link from "next/link";

const navItems = [
    {
        label: "Projetos",
        href: "#projects",
    },
    {
        label: "Sobre",
        href: "#",
    },
    {
        label: "Contato",
        href: "#contact",
    },
];

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">

            <div
                className="
                max-w-7xl mx-auto
                flex items-center justify-between
                px-6 py-4
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(255,255,255,0.03)]
                "
            >

                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >

                    <div
                        className="
                        w-3 h-3 rounded-full
                        bg-gradient-to-r
                        from-blue-500 to-purple-500
                        shadow-[0_0_20px_rgba(59,130,246,0.8)]
                        group-hover:scale-125
                        transition-transform duration-300
                        "
                    />

                    <span
                        className="
                        text-white font-semibold
                        tracking-tight text-lg
                        "
                    >
                        Gustavo Heimburg
                    </span>

                </Link>

                <nav
                    className="
                    hidden md:flex
                    items-center gap-10
                    text-sm
                    "
                >

                    {navItems.map((item) => (

                        <a
                            key={item.label}
                            href={item.href}
                            className="
                            relative text-zinc-400
                            hover:text-white
                            transition-colors duration-300
                            after:absolute after:left-0 after:-bottom-1
                            after:w-0 after:h-[1px]
                            after:bg-white
                            after:transition-all after:duration-300
                            hover:after:w-full
                            "
                        >
                            {item.label}
                        </a>

                    ))}

                </nav>

                <a
                    href="#contact"
                    className="
                    group relative overflow-hidden
                    px-5 py-3 rounded-full
                    bg-white text-black
                    text-sm font-medium
                    transition-all duration-300
                    hover:scale-105 active:scale-95
                    "
                >

                    <span className="relative z-10 flex items-center gap-2">

                        Falar comigo

                        <span
                            className="
                            transition-transform duration-300
                            group-hover:translate-x-1
                            "
                        >
                            →
                        </span>

                    </span>

                    <div
                        className="
                        absolute inset-0
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-500
                        bg-gradient-to-r
                        from-blue-500 to-purple-500
                        "
                    />

                </a>

            </div>

        </header>
    );
}