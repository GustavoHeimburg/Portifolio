import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaGithub />,
        href: "https://github.com/GustavoHeimburg",
        label: "GitHub",
    },
    {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/gustavo-heimburg-pereira-9b3771253/",
        label: "LinkedIn",
    },
    {
        icon: <FaInstagram />,
        href: "https://www.instagram.com/gustavo.heimp",
        label: "Instagram",
    },
];

const navLinks = [
    {
        label: "Projetos",
        href: "#projects",
    },
    {
        label: "Sobre",
        href: "#about",
    },
    {
        label: "Contato",
        href: "#contact",
    },
];

export default function Footer() {
    return (
        <footer
            className="
    relative overflow-hidden
    border-t border-white/5
    py-12 md:py-16
    px-6
    "
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
                absolute left-1/2 top-0
                -translate-x-1/2
                w-[600px] h-[300px]
                bg-blue-500/10
                blur-[140px]
                rounded-full
                "
            />

            <div className="relative max-w-7xl mx-auto">

                <div
                    className="
                    flex flex-col lg:flex-row
                    items-start lg:items-center
                    justify-between
                    gap-16
                    "
                >
                    <div className="max-w-md">

                        <div className="flex items-center gap-3 mb-5">

                            <div
                                className="
                                w-3 h-3 rounded-full
                                bg-gradient-to-r
                                from-blue-500 to-purple-500
                                shadow-[0_0_20px_rgba(59,130,246,0.8)]
                                "
                            />

                            <h3
                                className="
                                text-2xl font-bold
                                text-white tracking-tight
                                "
                            >
                                Gustavo Heimburg
                            </h3>

                        </div>

                        <p
                            className="
                            text-zinc-500
                            leading-relaxed
                            "
                        >
                            Desenvolvimento frontend atual focado
                            em experiências digitais modernas,
                            rápidas e visualmente impactantes.
                        </p>

                    </div>

                    <nav
                        className="
                        flex flex-wrap items-center
                        gap-8 text-sm
                        "
                    >

                        {navLinks.map((item) => (

                            <a
                                key={item.label}
                                href={item.href}
                                className="
                                relative text-zinc-500
                                hover:text-white
                                transition-colors duration-300
                                after:absolute after:left-0 after:-bottom-1
                                after:w-0 after:h-[1px]
                                after:bg-white
                                after:transition-all after:duration-300
                                hover:after:w-full
                                "
                            >
                                {item.label}
                            </a>

                        ))}

                    </nav>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        {socialLinks.map((social) => (

                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="
                                group
                                w-12 h-12 rounded-2xl
                                border border-white/10
                                bg-white/[0.03]
                                backdrop-blur-2xl
                                flex items-center justify-center
                                text-zinc-400
                                hover:text-white
                                hover:border-white/20
                                hover:-translate-y-1
                                transition-all duration-300
                                "
                            >

                                <span
                                    className="
                                    transition-transform duration-300
                                    group-hover:scale-110
                                    "
                                >
                                    {social.icon}
                                </span>

                            </a>

                        ))}

                    </div>

                </div>

                {/* BOTTOM */}
                <div
                    className="
                    mt-16 pt-8
                    border-t border-white/5
                    flex flex-col md:flex-row
                    items-center justify-between
                    gap-4
                    "
                >

                    <p className="text-zinc-600 text-sm text-center md:text-left">
                        © 2026 Gustavo Heimburg — Todos os direitos reservados.
                    </p>

                    <p className="text-zinc-700 text-sm text-center md:text-right">
                        Design & Development by Gustavo
                    </p>

                </div>

            </div>

        </footer>
    );
}