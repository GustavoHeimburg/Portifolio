export default function About() {
    return (
        <section className="max-w-5xl mx-auto py-28 px-4">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">
                        Sobre
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Eu não faço só sites.
                        <span className="block text-gray-400">
              Eu construo experiências digitais.
            </span>
                    </h2>
                </div>

                <div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Sou desenvolvedor frontend focado em criar interfaces modernas,
                        rápidas e com propósito. Meu trabalho vai além do visual —
                        eu penso em performance, experiência do usuário e resultado.
                    </p>

                    <p className="text-gray-500 leading-relaxed">
                        Utilizo tecnologias como React, TypeScript e Tailwind para
                        desenvolver projetos que parecem produtos reais, não apenas
                        páginas comuns.
                    </p>
                </div>

            </div>

        </section>
    );
}