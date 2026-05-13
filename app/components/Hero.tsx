import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
} from "react-icons/fa";

import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
} from "react-icons/si";

export default function Hero() {
    return (
        <section
            className="
            relative min-h-screen
            pt-36 md:pt-0
            flex items-center justify-center
            overflow-hidden
            bg-[#050505]
            px-6
            "
        >

            {/* GRID */}
            <div
                className="
                absolute inset-0 opacity-[0.03]
                bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                bg-[size:90px_90px]
                "
            />

            {/* MAIN GLOW */}
            <div
                className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[700px] md:w-[900px]
                h-[700px] md:h-[900px]
                bg-blue-500/10
                blur-[160px]
                rounded-full
                "
            />

            {/* SECOND GLOW */}
            <div
                className="
                absolute top-0 right-0
                w-[300px] md:w-[500px]
                h-[300px] md:h-[500px]
                bg-purple-500/10
                blur-[140px]
                rounded-full
                "
            />

            {/* FLOATING ICONS */}
            <div className="absolute inset-0 pointer-events-none">

                {/* DESKTOP ONLY */}
                <FloatingIcon
                    icon={<FaReact />}
                    className="hidden md:block top-[18%] left-[10%]"
                    color="text-cyan-400"
                />

                <FloatingIcon
                    icon={<SiTailwindcss />}
                    className="hidden md:block top-[25%] right-[12%]"
                    color="text-cyan-300"
                />

                <FloatingIcon
                    icon={<FaCss3Alt />}
                    className="hidden md:block top-[60%] left-[28%]"
                    color="text-blue-400"
                />

                {/* MOBILE + DESKTOP */}
                <FloatingIcon
                    icon={<SiTypescript />}
                    className="bottom-[18%] left-[8%] md:left-[15%]"
                    color="text-blue-500"
                />

                <FloatingIcon
                    icon={<FaHtml5 />}
                    className="bottom-[18%] right-[8%] md:right-[10%]"
                    color="text-orange-500"
                />

                <FloatingIcon
                    icon={<FaJs />}
                    className="top-[63%] right-[18%] md:right-[25%]"
                    color="text-yellow-400"
                />

                <FloatingIcon
                    icon={<SiNextdotjs />}
                    className="top-[10%] left-1/2 -translate-x-1/2"
                    color="text-white"
                />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">

                {/* BADGE */}
                <div
                    className="
                    inline-flex items-center gap-3
                    px-4 py-2 md:px-5 md:py-2.5
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    mb-8
                    "
                >

                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    <span
                        className="
                        text-xs md:text-sm
                        text-zinc-300
                        tracking-wide
                        "
                    >
                        Disponível para novos projetos
                    </span>

                </div>

                {/* TITLE */}
                <h1
                    className="
                    text-[3rem]
                    sm:text-6xl
                    md:text-8xl
                    font-black
                    tracking-[-0.07em]
                    leading-[0.98]
                    md:leading-[0.9]
                    text-white
                    "
                >

                    Construindo

                    <span
                        className="
                        block
                        bg-gradient-to-r
                        from-white via-zinc-300 to-zinc-600
                        bg-clip-text text-transparent
                        "
                    >
                        experiências digitais
                    </span>

                    <span className="block mt-1 md:mt-2">
                        absurdamente modernas.
                    </span>

                </h1>

                {/* DESCRIPTION */}
                <p
                    className="
                    mt-6 md:mt-10
                    text-zinc-400
                    text-sm md:text-xl
                    max-w-md md:max-w-2xl
                    leading-relaxed
                    mx-auto
                    px-2
                    "
                >

                    Desenvolvimento frontend premium focado
                    em performance, design sofisticado e
                    experiências que realmente impressionam.

                </p>

                {/* BUTTONS */}
                <div
                    className="
                    mt-12 md:mt-14
                    flex flex-col sm:flex-row
                    items-center justify-center
                    gap-4 md:gap-5
                    "
                >

                    {/* PRIMARY */}
                    <a
                        href="#projects"
                        className="
                        group relative overflow-hidden
                        w-full sm:w-auto
                        px-8 py-4
                        rounded-full
                        bg-white text-black
                        font-semibold
                        transition-all duration-300
                        hover:scale-105 active:scale-95
                        "
                    >

                        <span className="relative z-10 flex items-center justify-center gap-2">

                            Ver projetos

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
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-500
                            "
                        />

                    </a>

                    {/* SECONDARY */}
                    <a
                        href="#contact"
                        className="
                        w-full sm:w-auto
                        px-8 py-4
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        text-white
                        hover:bg-white/[0.06]
                        transition-all duration-300
                        text-center
                        "
                    >
                        Falar comigo
                    </a>

                </div>

            </div>

        </section>
    );
}

function FloatingIcon({
                          icon,
                          className,
                          color,
                      }: {
    icon: React.ReactNode;
    className: string;
    color: string;
}) {
    return (
        <div
            className={`
            absolute ${className}
            text-4xl md:text-5xl
            ${color}
            opacity-70
            animate-float
            `}
        >
            {icon}
        </div>
    );
}