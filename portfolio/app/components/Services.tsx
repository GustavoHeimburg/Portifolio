export default function Services() {
    const services = [
        {
            title: "Landing Pages",
            desc: "Páginas focadas em conversão e vendas",
        },
        {
            title: "Sites Institucionais",
            desc: "Presença profissional para sua empresa",
        },
        {
            title: "Interfaces Modernas",
            desc: "Design limpo, rápido e responsivo",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto py-20 px-4 text-center">
            <h2 className="text-3xl font-bold mb-10">Serviços</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition">
                        <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                        <p className="text-gray-400">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}