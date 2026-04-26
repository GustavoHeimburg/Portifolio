export default function Header() {
    return (
        <header className="fixed w-full top-0 bg-black/50 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between p-4">
                <h1 className="font-bold text-xl">Gustavo.dev</h1>
                <nav className="flex gap-6">
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    );
}