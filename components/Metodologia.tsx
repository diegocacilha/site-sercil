export default function Metodologia() {
    return (

        <section id="processo" className="section-bg px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Metodologia transparente</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Do mapeamento de perfis à entrega, você acompanha cada etapa do desenvolvimento do seu portal.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    {[
                        { step: "01", title: "Discovery", desc: "Mapeamos perfis de acesso, jornadas e integrações necessárias." },
                        { step: "02", title: "Prototipação", desc: "Desenhamos as telas e validamos o fluxo com os usuários-chave." },
                        { step: "03", title: "Desenvolvimento", desc: "Codificamos com entregas contínuas, testes de segurança e homologação." },
                        { step: "04", title: "Lançamento", desc: "Treinamento, deploy, monitoramento e evolução contínua." },
                    ].map((item) => (
                        <div key={item.step} className="relative p-6 rounded-xl border border-gray-200 bg-white">
                            <span className="text-5xl font-black text-blue-100 absolute top-4 right-4">{item.step}</span>
                            <h3 className="text-xl font-bold text-gray-900 relative">{item.title}</h3>
                            <p className="mt-2 text-gray-600 relative">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}