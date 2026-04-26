export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center px-4">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Desenvolvedor Front-end
                </h1>
                <p className="text-gray-400 mb-6">
                    Criando interfaces modernas, rápidas e focadas em conversão.
                </p>

                <a
                    href="#projects"
                    className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition"
                >
                    Ver Projetos
                </a>
            </div>
        </section>
    );
}