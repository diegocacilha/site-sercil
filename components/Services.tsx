const services = [
  {
    title: "Sistema que segue SEU processo",
    description:
      "Chega de se adaptar a sistema engessado de R$197/mês. A gente mapeia como você já trabalha no Excel/WhatsApp e automatiza exatamente do seu jeito. Sem mudar seu time.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Arquitetura que não te prende",
    description:
      "Sistema pronto trava quando você cresce. Agência some depois da entrega. Entregamos com código seu, documentação e performance para escalar sem dor de cabeça futura.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Plano em 3 etapas, sem susto",
    description:
      "Nada de projeto de 6 meses. 1. Mapeamento em 7 dias 2. MVP funcionando em 30 dias 3. Evolução semanal. Você vê resultado na primeira semana.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* TOPO DE FUNIL - HISTÓRIA DO VILÃO */}
          <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest uppercase bg-red-50 text-red-600 border border-red-200 rounded-full">
            O vilão que todo mundo odeia: o sistema engessado
          </span>
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-primary mb-5 leading-[1.1]">
            Sistema pronto te obriga a mudar seu processo. <br className="hidden sm:block" />
            A gente faz o contrário.
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Você começa na planilha. Depois contrata um sistema de R$197/mês.
            Ele não faz do seu jeito, você adapta o time. 6 meses depois seu time
            voltou pra planilha porque o sistema atrapalha mais do que ajuda.{" "}
            <span className="font-semibold text-primary">É aí que a Sercil entra:</span> criamos
            o sistema web que segue 100% o seu processo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-zinc-300 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-xl mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-secondary text-[15px] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}