export default function Contact() {
    return (
        <section
            id="contact"
            className="
            relative overflow-hidden
            py-20 md:py-28
            px-6
            "
        >

            {/* GRID */}
            <div
                className="
                absolute inset-0 opacity-[0.03]
                bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                bg-[size:80px_80px]
                "
            />

            {/* GLOW */}
            <div
                className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[700px] h-[700px]
                bg-gradient-to-r
                from-blue-500/20 to-purple-500/20
                blur-[160px]
                rounded-full
                "
            />

            {/* CARD */}
            <div
                className="
                relative max-w-5xl mx-auto
                text-center

                rounded-[2.5rem]

                border border-white/10

                bg-gradient-to-b
                from-white/[0.05]
                to-white/[0.02]

                backdrop-blur-3xl

                px-6 py-14
                md:px-16 md:py-20

                overflow-hidden
                "
            >

                {/* INNER GLOW */}
                <div
                    className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-blue-500/5
                    via-transparent
                    to-purple-500/5
                    pointer-events-none
                    "
                />

                {/* CONTENT */}
                <div className="relative z-10">

                    {/* TOP */}
                    <div className="flex items-center justify-center gap-4 mb-8">

                        <div className="w-10 md:w-16 h-[1px] bg-white/20" />

                        <p
                            className="
                            uppercase tracking-[0.3em]
                            text-sm text-zinc-500
                            "
                        >
                            Contato
                        </p>

                        <div className="w-10 md:w-16 h-[1px] bg-white/20" />

                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                        text-[2.8rem]
                        sm:text-6xl
                        md:text-7xl

                        font-black

                        leading-[0.9]

                        tracking-[-0.05em]

                        text-white

                        mb-8
                        "
                    >

                        Vamos criar algo

                        <span
                            className="
                            block
                            bg-gradient-to-r
                            from-white
                            via-zinc-300
                            to-zinc-600
                            bg-clip-text text-transparent
                            "
                        >
                            realmente incrível.
                        </span>

                    </h2>

                    {/* DESCRIPTION */}
                    <p
                        className="
                        max-w-2xl mx-auto

                        text-base md:text-lg

                        text-zinc-400

                        leading-relaxed

                        mb-14
                        "
                    >

                        Se você procura um site moderno,
                        com visual sofisticado, performance elevada
                        e experiência premium, posso transformar
                        sua ideia em um produto digital de alto nível.

                    </p>

                    {/* BUTTONS */}
                    <div
                        className="
                        flex flex-col md:flex-row
                        items-center justify-center
                        gap-6
                        "
                    >

                        {/* PRIMARY */}
                        <a
                            href="https://wa.me/5549998063465"
                            target="_blank"
                            className="
                            group relative overflow-hidden

                            px-10 py-5 rounded-full

                            bg-white text-black

                            font-semibold text-lg

                            transition-all duration-500

                            hover:scale-105
                            active:scale-95

                            shadow-[0_0_40px_rgba(255,255,255,0.08)]
                            hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]
                            "
                        >

                            <span
                                className="
                                relative z-10
                                flex items-center gap-2
                                "
                            >

                                Iniciar projeto

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

                                bg-gradient-to-r
                                from-blue-500 to-purple-500

                                opacity-0
                                group-hover:opacity-100

                                transition-opacity duration-500
                                "
                            />

                        </a>

                        {/* SECONDARY */}
                        <a
                            href="mailto:gutogustavogu@gmail.com"
                            className="
                            px-10 py-5 rounded-full

                            border border-white/10

                            bg-white/[0.03]

                            backdrop-blur-xl

                            text-white

                            transition-all duration-500

                            hover:bg-white/[0.06]
                            hover:border-white/20
                            hover:-translate-y-1
                            "
                        >
                            Enviar e-mail
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}