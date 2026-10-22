export default function Tecnologias() {
    return (
        <section className="bg-gray-900 py-16 text-white">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold">Tecnologias modernas e escaláveis</h2>
                <p className="mt-2 text-gray-400">
                    Utilizamos stacks consolidadas no mercado para garantir performance e segurança.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
                    {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Vercel", "Docker", "Tailwind CSS"].map((tech) => (
                        <span key={tech} className="rounded-full border border-gray-700 bg-gray-800 px-4 py-2">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}