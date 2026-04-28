export default function Contact() {
    return (
        <section
            id="contact"
            className="py-32 px-4 text-center relative"
        >
            {/* título */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vamos criar algo juntos?
            </h2>

            {/* descrição */}
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Se você precisa de um site moderno, rápido e que realmente gere resultado,
                me chama que eu te mostro como podemos construir isso.
            </p>

            <a
                href="https://wa.me/554999806435"
                target="_blank"
                className="inline-block px-8 py-4 rounded-full
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white font-medium
        transition-all duration-300
        hover:scale-105 hover:shadow-lg"
            >
                Falar comigo →
            </a>

            <p className="text-gray-500 mt-6 text-sm">
                Ou me envie um e-mail:{" "}
                <span className="text-gray-300">gutogustavogu@gmail.com</span>
            </p>

            <div className="absolute -z-10 top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </section>
    );
}