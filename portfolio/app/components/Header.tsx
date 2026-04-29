"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

                <Link
                    href="/"
                    className="text-lg font-semibold text-white tracking-tight hover:opacity-80 transition"
                >
                    Gustavo.dev
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                    <a href="#projects" className="hover:text-white transition">
                        Projetos
                    </a>

                    <a href="#contact" className="hover:text-white transition">
                        Contato
                    </a>
                </nav>

                <a
                    href="#contact"
                    className="text-sm px-4 py-2 rounded-full
          border border-white/10 text-white
          hover:bg-white hover:text-black
          transition-all duration-300"
                >
                    Falar comigo
                </a>

            </div>
        </header>
    );
}