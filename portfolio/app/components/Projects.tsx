const projects = [
    {
        title: "Landing page LISSE LASER",
        description:
            "Lading page integrado com sistema de vendas online e edição de protudos",
        tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
        color: "from-green-600 to-green-800",
        year: "2026",
        type: "WEB",
    },
    {
        title: "Saas vendas LISSE",
        description:
            "Landing page corporativa para empresa industrial com foco em geração de leads.",
        tech: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "PHP"],
        color: "from-blue-600 to-blue-800",
        year: "2026",
        type: "WEB",
    },
    {
        title: "Vida Laches - Landing Page",
        description:
            "lading page com sistema de agendamentos via Whatsapp",
        tech: ["TYPESCRIPT", "NODE", "JAVASCRIPT"],
        color: "from-purple-600 to-purple-800",
        year: "2025",
        type: "WEB",
    },
    {
        title: "Pervoi Pizzaria",
        description:
            "Landing page da Pervoi Pizzaria",
        tech: ["FIGMA", "REACT", "TYPESCRIPT", "CSS", "JAVASCRIPT"],
        color: "from-pink-600 to-pink-800",
        year: "2024",
        type: "UI",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto py-28 px-4">

            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                Projetos
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <div key={i} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">

                        <div
                            className={`h-56 rounded-xl mb-6 bg-gradient-to-r ... overflow-hidden`}
                        >
                            <span className="w-full h-full group-hover:scale-105 transition duration-500">
                {p.type}
              </span>

                            <span className="absolute top-3 right-3 text-xs text-white/70">
                {p.year}
              </span>

                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                            {p.title}
                        </h3>

                        <p className="text-gray-400 mb-4">
                            {p.description}
                        </p>

                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                            {p.tech.map((t, index) => (
                                <span key={index} className="border border-gray-700 px-2 py-1">
                  {t}
                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}