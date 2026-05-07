"use client";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Header />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </main>
    );
}