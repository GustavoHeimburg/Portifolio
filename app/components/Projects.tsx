const projects = [
    {
        title: "Landing page LISSE LASER",
        description:
            "Landing page premium integrada com sistema de vendas e personalização de produtos.",
        tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
        color: "from-green-500/20 to-emerald-700/20",
        year: "2025",
        type: "INSTITUCIONAL",
        link: "https://lisselaser.com.br",
    },
    {
        title: "SaaS vendas LISSE LASER",
        description:
            "Plataforma de vendas online com gerenciamento inteligente de pedidos.",
        tech: ["HTML", "TAILWIND", "JAVASCRIPT", "PHP"],
        color: "from-blue-500/20 to-cyan-700/20",
        year: "2026",
        type: "SAAS PLATFORM",
        link: "https://lisselaser.com.br/loja.php",
    },
    {
        title: "Carrinho LISSE LASER",
        description:
            "Checkout focado em conversão integrado ao WhatsApp.",
        tech: ["HTML", "TAILWIND", "JAVASCRIPT", "PHP"],
        color: "from-purple-500/20 to-fuchsia-700/20",
        year: "2026",
        type: "E-COMMERCE",
        link: "https://lisselaser.com.br/carrinho.php",
    },
    {
        title: "Pervoi Pizzaria",
        description:
            "Landing page moderna com identidade visual premium.",
        tech: ["FIGMA", "TAILWIND", "TYPESCRIPT"],
        color: "from-pink-500/20 to-rose-700/20",
        year: "2026",
        type: "LANDING PAGE",
        link: "https://pizzariapervoi.vercel.app/",
    },
    {
        title: "Portfólio Gustavo",
        description:
            "Experiência digital criada para apresentar projetos e posicionamento profissional.",
        tech: ["NEXT.JS", "TAILWIND", "TYPESCRIPT"],
        color: "from-zinc-500/20 to-zinc-800/20",
        year: "2026",
        type: "PORTFÓLIO",
        link: "https://portifolio-two-nu-28.vercel.app/",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-40 px-6 overflow-hidden"
        >

            <div
                className="
                absolute inset-0 opacity-[0.03]
                bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                bg-[size:80px_80px]
                "
            />

            <div
                className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[800px] h-[800px]
                bg-blue-500/10
                blur-[180px]
                rounded-full
                "
            />

            <div className="relative max-w-7xl mx-auto">

                <div className="text-center mb-24">

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

                        <div className="w-2 h-2 rounded-full bg-blue-400" />

                        <span className="text-sm text-zinc-300 tracking-wide">
                            Projetos selecionados
                        </span>

                    </div>

                    <h2
                        className="
                        text-5xl md:text-7xl
                        font-black
                        tracking-[-0.05em]
                        leading-[0.95]
                        text-white
                        "
                    >

                        Projetos que parecem
                        <span
                            className="
                            block
                            bg-gradient-to-r
                            from-white via-zinc-300 to-zinc-600
                            bg-clip-text text-transparent
                            "
                        >
                            produtos reais.
                        </span>

                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {projects.map((p, i) => (

                        <a
                            key={i}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            group relative overflow-hidden
                            rounded-3xl
                            border border-white/10
                            bg-white/[0.03]
                            backdrop-blur-2xl
                            p-8
                            transition-all duration-500
                            hover:-translate-y-3
                            hover:border-white/20
                            "
                        >

                            <div
                                className={`
                                absolute inset-0 opacity-0
                                group-hover:opacity-100
                                transition-opacity duration-700
                                bg-gradient-to-br ${p.color}
                                `}
                            />

                            <div className="relative flex items-start justify-between mb-16">

                                <div>

                                    <span
                                        className="
                                        text-xs tracking-[0.3em]
                                        uppercase text-zinc-500
                                        "
                                    >
                                        {p.type}
                                    </span>

                                </div>

                                <span className="text-sm text-zinc-600">
                                    {p.year}
                                </span>

                            </div>

                            <div className="relative">

                                <h3
                                    className="
                                    text-3xl font-bold
                                    text-white mb-5
                                    tracking-tight
                                    "
                                >
                                    {p.title}
                                </h3>

                                <p
                                    className="
                                    text-zinc-400
                                    leading-relaxed
                                    mb-8
                                    "
                                >
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-10">

                                    {p.tech.map((t, index) => (

                                        <span
                                            key={index}
                                            className="
                                            px-3 py-1 text-xs
                                            rounded-full
                                            border border-white/10
                                            bg-white/[0.04]
                                            text-zinc-300
                                            "
                                        >
                                            {t}
                                        </span>

                                    ))}

                                </div>

                                <div
                                    className="
                                    flex items-center gap-2
                                    text-white font-medium
                                    "
                                >

                                    Ver projeto

                                    <span
                                        className="
                                        transition-transform duration-300
                                        group-hover:translate-x-1
                                        "
                                    >
                                        →
                                    </span>

                                </div>

                            </div>

                        </a>

                    ))}

                </div>

            </div>

        </section>
    );
}