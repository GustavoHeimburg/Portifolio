export default function Services() {
    const services = [
        {
            title: "Landing Pages que convertem",
            desc: "Páginas rápidas e estratégicas focadas em gerar leads e vendas.",
        },
        {
            title: "Sites institucionais modernos",
            desc: "Presença digital profissional com design limpo e alta performance.",
        },
        {
            title: "Interfaces para produtos",
            desc: "UI/UX pensada para sistemas, dashboards e aplicações reais.",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto py-28 px-4">

            {/* título */}
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                O que eu construo
            </h2>

            {/* grid */}
            <div className="grid md:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="group border border-zinc-800 p-6 rounded-xl
            hover:border-zinc-600 transition-all duration-300"
                    >
                        {/* número (detalhe premium) */}
                        <span className="text-sm text-gray-600 block mb-4">
              0{i + 1}
            </span>

                        {/* título */}
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {s.title}
                        </h3>

                        {/* descrição */}
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {s.desc}
                        </p>

                        {/* linha animada */}
                        <div className="mt-6 h-[1px] bg-zinc-800 group-hover:bg-white transition"></div>
                    </div>
                ))}
            </div>

        </section>
    );
}