import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">


            <div className="absolute top-20 left-10 text-blue-500 text-4xl animate-float pointer-events-none">
                <FaReact />
            </div>

            <div className="absolute bottom-20 right-10 text-blue-600 text-4xl animate-floatSlow pointer-events-none">
                <SiTypescript />
            </div>

            <div className="absolute top-40 right-20 text-cyan-500 text-4xl animate-float pointer-events-none">
                <SiTailwindcss />
            </div>

            <div className="absolute bottom-32 left-20 text-orange-500 text-4xl animate-floatSlow pointer-events-none">
                <FaHtml5 />
            </div>

            <div className="absolute top-60 left-1/3 text-blue-400 text-4xl animate-float pointer-events-none">
                <FaCss3Alt />
            </div>

            <div className="absolute bottom-40 right-1/3 text-yellow-400 text-4xl animate-floatSlow pointer-events-none">
                <FaJs />
            </div>

            <div className="bg-shape shape1 animate-float -z-10"></div>
            <div className="bg-shape shape2 animate-floatSlow -z-10"></div>

            <div className="z-10 animate-fadeIn">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Sites modernos que
                    <span className="block text-blue-500">
            geram resultado
          </span>
                </h1>

                <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                    Desenvolvimento de interfaces rápidas, bonitas e focadas em conversão.
                </p>

                <a
                    href="#projects"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full
          hover:scale-105 hover:bg-blue-600 transition-all duration-300 shadow-md"
                >
                    Ver projetos
                </a>
            </div>
        </section>
    );
}