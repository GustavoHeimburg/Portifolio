import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
            relative overflow-hidden
            border-t border-white/10
            py-16 px-6 mt-32
            "
        >

            <div
                className="
                absolute left-1/2 top-0
                -translate-x-1/2
                w-[500px] h-[300px]
                bg-blue-500/10
                blur-[120px]
                rounded-full
                "
            />

            <div
                className="
                relative max-w-7xl mx-auto
                flex flex-col md:flex-row
                items-center justify-between
                gap-10
                "
            >

                <div>

                    <h3
                        className="
                        text-2xl font-bold
                        text-white tracking-tight
                        "
                    >
                        Gustavo.dev
                    </h3>

                    <p
                        className="
                        text-zinc-500 mt-3
                        max-w-md leading-relaxed
                        "
                    >
                        Desenvolvimento frontend premium focado
                        em experiências digitais modernas,
                        rápidas e visualmente impactantes.
                    </p>

                </div>

                {/* CENTER */}
                <div
                    className="
                    flex items-center gap-8
                    text-sm text-zinc-500
                    "
                >

                    <a
                        href="#projects"
                        className="
                        hover:text-white
                        transition-colors duration-300
                        "
                    >
                        Projetos
                    </a>

                    <a
                        href="#contact"
                        className="
                        hover:text-white
                        transition-colors duration-300
                        "
                    >
                        Contato
                    </a>

                    <a
                        href="#"
                        className="
                        hover:text-white
                        transition-colors duration-300
                        "
                    >
                        Sobre
                    </a>

                </div>

                <div className="flex items-center gap-5">

                    <a
                        href="#"
                        className="
                        w-11 h-11 rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-zinc-400
                        hover:text-white
                        hover:border-white/20
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="#"
                        className="
                        w-11 h-11 rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-zinc-400
                        hover:text-white
                        hover:border-white/20
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="#"
                        className="
                        w-11 h-11 rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-zinc-400
                        hover:text-white
                        hover:border-white/20
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaInstagram />
                    </a>

                </div>

            </div>

            <div
                className="
                relative max-w-7xl mx-auto
                mt-16 pt-8
                border-t border-white/5
                flex flex-col md:flex-row
                items-center justify-between
                gap-4
                "
            >

                <p className="text-zinc-600 text-sm">
                    © 2026 Gustavo.dev — Todos os direitos reservados.
                </p>

                <p className="text-zinc-700 text-sm">
                    Design & Development by Gustavo
                </p>

            </div>

        </footer>
    );
}