import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center px-4 relative overflow-hidden bg-[#0a0a0a]">

            <div className="absolute top-20 left-10 text-blue-500 text-4xl opacity-60 animate-float">
                <FaReact />
            </div>

            <div className="absolute bottom-20 right-10 text-blue-600 text-4xl opacity-60 animate-floatSlow">
                <SiTypescript />
            </div>

            <div className="absolute top-40 right-20 text-cyan-500 text-4xl opacity-60 animate-float">
                <SiTailwindcss />
            </div>

            <div className="absolute bottom-32 left-20 text-orange-500 text-4xl opacity-60 animate-floatSlow">
                <FaHtml5 />
            </div>

            <div className="absolute top-60 left-1/3 text-blue-400 text-4xl opacity-60 animate-float">
                <FaCss3Alt />
            </div>

            <div className="absolute bottom-40 right-1/3 text-yellow-400 text-4xl opacity-60 animate-floatSlow">
                <FaJs />
            </div>

            <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="z-10 max-w-3xl">

                <p className="text-sm text-gray-500 mb-4 tracking-widest uppercase">
                    Frontend Developer
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                    Interfaces que parecem
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            produto real
          </span>
                </h1>

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    Crio experiências modernas, rápidas e pensadas para conversão.
                    Nada de layouts genéricos — foco em resultado.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">

                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white font-medium
            transition-all duration-300
            hover:scale-105 active:scale-95"
                    >
                        Ver projetos
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full
            border border-gray-700 text-gray-300
            hover:bg-white hover:text-black
            transition-all duration-300"
                    >
                        Falar comigo
                    </a>

                </div>
            </div>
        </section>
    );
}