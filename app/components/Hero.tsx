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
            flex items-center justify-center
            overflow-hidden
            bg-[#050505]
            px-6
            "
        >

            <div
                className="
                absolute inset-0 opacity-[0.03]
                bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                bg-[size:90px_90px]
                "
            />

            <div
                className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[900px] h-[900px]
                bg-blue-500/10
                blur-[180px]
                rounded-full
                "
            />

            <div
                className="
                absolute top-0 right-0
                w-[500px] h-[500px]
                bg-purple-500/10
                blur-[160px]
                rounded-full
                "
            />

            <div className="absolute inset-0 pointer-events-none">

                <FloatingIcon
                    icon={<FaReact />}
                    className="top-[18%] left-[10%]"
                    color="text-cyan-400"
                />

                <FloatingIcon
                    icon={<SiTypescript />}
                    className="bottom-[20%] left-[15%]"
                    color="text-blue-500"
                />

                <FloatingIcon
                    icon={<SiTailwindcss />}
                    className="top-[25%] right-[12%]"
                    color="text-cyan-300"
                />

                <FloatingIcon
                    icon={<FaHtml5 />}
                    className="bottom-[18%] right-[10%]"
                    color="text-orange-500"
                />

                <FloatingIcon
                    icon={<FaCss3Alt />}
                    className="top-[60%] left-[28%]"
                    color="text-blue-400"
                />

                <FloatingIcon
                    icon={<FaJs />}
                    className="top-[65%] right-[25%]"
                    color="text-yellow-400"
                />

                <FloatingIcon
                    icon={<SiNextdotjs />}
                    className="top-[12%] left-1/2"
                    color="text-white"
                />

            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">

                <div
                    className="
                    inline-flex items-center gap-3
                    px-5 py-2 rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    mb-8
                    "
                >

                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-sm text-zinc-300 tracking-wide">
                        Disponível para novos projetos
                    </span>

                </div>

                <h1
                    className="
                    text-6xl md:text-8xl
                    font-black
                    tracking-[-0.06em]
                    leading-[0.9]
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

                    <span className="block mt-2">
                        absurdamente modernas.
                    </span>

                </h1>

                <p
                    className="
                    mt-10
                    text-zinc-400
                    text-lg md:text-xl
                    max-w-2xl mx-auto
                    leading-relaxed
                    "
                >

                    Desenvolvimento frontend premium focado em
                    performance, design sofisticado e experiências
                    que realmente impressionam.

                </p>

                <div
                    className="
                    mt-14
                    flex flex-wrap
                    items-center justify-center
                    gap-5
                    "
                >

                    <a
                        href="#projects"
                        className="
                        group relative overflow-hidden
                        px-8 py-4 rounded-full
                        bg-white text-black
                        font-semibold
                        transition-all duration-300
                        hover:scale-105 active:scale-95
                        "
                    >

                        <span className="relative z-10 flex items-center gap-2">

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

                    <a
                        href="#contact"
                        className="
                        px-8 py-4 rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        text-white
                        hover:bg-white/[0.06]
                        transition-all duration-300
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
            text-5xl ${color}
            opacity-70
            animate-float
            `}
        >
            {icon}
        </div>
    );
}