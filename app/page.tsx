"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Header />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}