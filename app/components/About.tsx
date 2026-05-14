"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="
    relative
    max-w-7xl
    mx-auto
    px-6
    py-20
    md:py-28
    overflow-hidden
    "
        >

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

            <div
                className="
    relative
    grid lg:grid-cols-2
    gap-12 md:gap-20
    items-center
    "
            >

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >

                    <div
                        className="
        flex items-center justify-center
        md:justify-start
        gap-3 mb-6
        "
                    >

                        <div className="w-10 h-[1px] bg-white/30" />

                        <p
                            className="
            text-sm uppercase
            tracking-[0.3em]
            text-zinc-500
            "
                        >
                            Sobre mim
                        </p>

                    </div>

                    <h2
                        className="
        text-4xl sm:text-5xl md:text-7xl
        font-black
        leading-[1]
        md:leading-[0.95]
        tracking-[-0.05em]
        text-white
        "
                    >

                        Eu transformo

                        <span className="block text-zinc-500">
            ideias em interfaces
        </span>

                        <span
                            className="
            block mt-3 md:mt-4
            bg-gradient-to-r
            from-white via-zinc-300 to-zinc-600
            bg-clip-text text-transparent
            "
                        >
           modernas e memoráveis.
        </span>

                    </h2>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                >

                    <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-3xl rounded-3xl border border-white/10" />

                    <div className="relative p-8 md:p-10">

                        <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                            Sou desenvolvedor frontend focado em criar experiências
                            digitais modernas, rápidas e visualmente impactantes.
                            Meu objetivo não é apenas fazer algo bonito —
                            é criar produtos que transmitam valor imediatamente.
                        </p>

                        <p className="text-zinc-500 leading-relaxed mb-10">
                            Trabalho com tecnologias atuais como React,
                            TypeScript, Next.js e Tailwind Css para desenvolver
                            interfaces fluidas, escaláveis e com estética moderna.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    +15
                                </h3>

                                <p className="text-sm text-zinc-500 mt-2">
                                    Projetos
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    100%
                                </h3>

                                <p className="text-sm text-zinc-500 mt-2">
                                    Responsivo
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    ∞
                                </h3>

                                <p className="text-sm text-zinc-500 mt-2">
                                    Criatividade
                                </p>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}