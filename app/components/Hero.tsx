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
            relative
            min-h-[100svh]
            flex items-center justify-center
            overflow-hidden
            bg-[#050505]
            px-5
            pt-28
            pb-16
            py-20 md:py-32
            md:px-6
            md:pt-0
            "
        >

            <div
                className="
                absolute inset-0
                opacity-[0.03]
                bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                bg-[size:70px_70px]
                md:bg-[size:90px_90px]
                "
            />

            {/* MAIN GLOW */}
            <div
                className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[500px] h-[500px]
                md:w-[900px] md:h-[900px]
                bg-blue-500/10
                blur-[120px]
                md:blur-[180px]
                rounded-full
                "
            />

            {/* SECOND GLOW */}
            <div
                className="
                absolute top-0 right-0
                w-[240px] h-[240px]
                md:w-[500px] md:h-[500px]
                bg-purple-500/10
                blur-[100px]
                md:blur-[160px]
                rounded-full
                "
            />

            {/* FLOATING ICONS */}
            <div className="absolute inset-0 pointer-events-none">

                {/* DESKTOP */}
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

                {/* MOBILE */}
                <FloatingIcon
                    icon={<SiTypescript />}
                    className="top-[18%] left-[8%]"
                    color="text-blue-500"
                />

                <FloatingIcon
                    icon={<FaHtml5 />}
                    className="top-[20%] right-[8%]"
                    color="text-orange-500"
                />

                <FloatingIcon
                    icon={<FaJs />}
                    className="bottom-[18%] right-[10%]"
                    color="text-yellow-400"
                />

                <FloatingIcon
                    icon={<SiNextdotjs />}
                    className="bottom-[16%] left-[10%]"
                    color="text-white"
                />

            </div>

            {/* CONTENT */}
            <div
                className="
                relative z-10
                w-full
                max-w-5xl
                mx-auto
                text-center
                "
            >

                {/* BADGE */}
                <div
                    className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    mb-6
                    "
                >

                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    <span
                        className="
                        text-[11px]
                        md:text-sm
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
                    text-[2.7rem]
                    sm:text-[4rem]
                    md:text-8xl
                    font-black
                    tracking-[-0.08em]
                    leading-[0.95]
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

                    <span className="block mt-1">
                        modernas.
                    </span>

                </h1>

                {/* DESCRIPTION */}
                <p
                    className="
                    mt-5
                    text-zinc-400
                    text-sm
                    sm:text-base
                    md:text-xl
                    max-w-[320px]
                    sm:max-w-xl
                    md:max-w-2xl
                    leading-relaxed
                    mx-auto
                    "
                >

                    Desenvolvimento frontend focado
                    em performance, design sofisticado
                    e experiências digitais.

                </p>

                <div
                    className="
                    mt-10
                    flex flex-col
                    sm:flex-row
                    items-center justify-center
                    gap-3
                    md:gap-5
                    "
                >

                    <a
                        href="#projects"
                        className="
                        group relative overflow-hidden
                        w-full sm:w-auto
                        px-7 py-3.5
                        rounded-full
                        bg-white text-black
                        text-sm md:text-base
                        font-semibold
                        transition-all duration-300
                        hover:scale-[1.03]
                        active:scale-95
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
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity duration-500
                            "
                        />

                    </a>

                    <a
                        href="#contact"
                        className="
                        w-full sm:w-auto
                        px-7 py-3.5
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        text-white
                        text-sm md:text-base
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
            text-2xl md:text-5xl
            ${color}
            opacity-60
            animate-float
            `}
        >
            {icon}
        </div>
    );
}