const projects = [
    {
        title: "Landing Page Moderna",
        description: "Página focada em conversão com design profissional",
    },
    {
        title: "E-commerce UI",
        description: "Interface moderna para loja virtual",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition"
                    >
                        <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                        <p className="text-gray-400">{p.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}