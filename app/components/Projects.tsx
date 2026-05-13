import Image from "next/image";

const projects = [
    {
        title: "Landing page LISSE LASER",
        description:
            "Landing page integrada com sistema de vendas online e edição de produtos.",
        tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
        year: "2025",
        type: "INSTITUCIONAL",
        link: "https://lisselaser.com.br",
        image: "/projects/lisse-saas.png",
    },

    {
        title: "SaaS vendas LISSE LASER",
        description:
            "Sistema de vendas online com gerenciamento de produtos e pedidos.",
        tech: ["HTML", "TAILWIND", "JAVASCRIPT", "PHP"],
        year: "2026",
        type: "SAAS PLATFORM",
        link: "https://lisselaser.com.br/loja.php",
        image: "/projects/lisse-store.png",
    },

    {
        title: "Carrinho de vendas LISSE LASER",
        description:
            "Sistema de checkout e conversão integrado ao WhatsApp.",
        tech: ["HTML", "TAILWIND", "JAVASCRIPT", "PHP"],
        year: "2026",
        type: "E-COMMERCE",
        link: "https://lisselaser.com.br/carrinho.php",
        image: "/projects/lisse-cart.png",
    },

    {
        title: "Pervoi Pizzaria",
        description:
            "Landing page moderna para pizzaria com foco em identidade visual.",
        tech: ["FIGMA", "TAILWIND CSS", "TYPESCRIPT"],
        year: "2026",
        type: "LANDING PAGE",
        link: "https://pizzariapervoi.vercel.app/",
        image: "/projects/pervoi.png",
    },

    {
        title: "Cardápio - Pervoi Pizzaria",
        description:
            "Cardápio para a pizzaria Pervoi, facilitando pedidos online",
        tech: ["FIGMA", "TAILWIND CSS", "TYPESCRIPT"],
        year: "2026",
        type: "LANDING PAGE",
        link: "https://pizzariapervoi.vercel.app/cardapio",
        image: "/projects/cardapio.png",
    },

    {
        title: "Portfólio Gustavo",
        description:
            "Portfólio desenvolvido para divulgação profissional e posicionamento digital.",
        tech: ["NEXT.JS", "TAILWIND CSS", "TYPESCRIPT"],
        year: "2026",
        type: "PORTFÓLIO",
        link: "https://portifolio-alpha-ashen-88.vercel.app",
        image: "/projects/portfolio.png",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="
            relative
            max-w-7xl mx-auto
           pt-16 md:pt-24
            pb-8 md:pb-14
            px-6
            "
        >

            {/* HEADER */}
            <div className="mb-10 md:mb-16">

                <p
                    className="
                    text-sm uppercase tracking-[0.3em]
                    text-zinc-500 mb-4
                    "
                >
                    Projetos
                </p>

                <h2
                    className="
                    text-4xl md:text-6xl
                    font-black
                    tracking-[-0.05em]
                    text-white
                    "
                >
                    Alguns trabalhos
                    <span className="block text-zinc-500">
                        que construí.
                    </span>
                </h2>

            </div>

            {/* GRID */}
            <div
                className="
                grid md:grid-cols-2
                gap-6 md:gap-10
                "
            >

                {projects.map((p, i) => (

                    <a
                        key={i}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        group block
                        "
                    >

                        <div
                            className="
                            relative overflow-hidden
                            rounded-[2rem]
                            border border-white/10
                            bg-white/[0.03]
                            backdrop-blur-2xl
                            "
                        >

                            {/* IMAGE */}
                            <div
                                className="
                                relative
                                h-[240px] md:h-[320px]
                                overflow-hidden
                                "
                            >

                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="
                                    object-cover
                                    transition-transform duration-700
                                    group-hover:scale-105
                                    "
                                />

                                {/* OVERLAY */}
                                <div
                                    className="
                                    absolute inset-0
                                    bg-gradient-to-t
                                    from-black/80
                                    via-black/10
                                    to-transparent
                                    "
                                />

                                {/* TYPE */}
                                <div
                                    className="
                                    absolute top-4 left-4
                                    px-4 py-2 rounded-full
                                    border border-white/10
                                    bg-black/40
                                    backdrop-blur-xl
                                    text-xs text-white
                                    tracking-wide
                                    "
                                >
                                    {p.type}
                                </div>

                                {/* YEAR */}
                                <div
                                    className="
                                    absolute top-5 right-5
                                    text-sm text-zinc-300
                                    "
                                >
                                    {p.year}
                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="p-6 md:p-8">

                                <h3
                                    className="
                                    text-2xl font-bold
                                    text-white mb-4
                                    transition-colors duration-300
                                    group-hover:text-zinc-300
                                    "
                                >
                                    {p.title}
                                </h3>

                                <p
                                    className="
                                    text-zinc-400
                                    leading-relaxed
                                    mb-6
                                    "
                                >
                                    {p.description}
                                </p>

                                {/* TECH */}
                                <div
                                    className="
                                    flex flex-wrap
                                    gap-3 mb-8
                                    "
                                >

                                    {p.tech.map((t, index) => (

                                        <span
                                            key={index}
                                            className="
                                            px-4 py-2 rounded-full
                                            border border-white/10
                                            bg-white/[0.03]
                                            text-xs tracking-wide
                                            text-zinc-300
                                            "
                                        >
                                            {t}
                                        </span>

                                    ))}

                                </div>

                                {/* LINK */}
                                <div
                                    className="
                                    inline-flex items-center
                                    gap-2 text-white
                                    font-medium
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

                        </div>

                    </a>

                ))}

            </div>

        </section>
    );
}