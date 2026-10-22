const services = [
  {
    chapter: "Capítulo 1",
    title: "Diagnóstico do processo antes do código",
    description:
      "Mapeamos a automação de processos que sua empresa já faz no WhatsApp, planilha e ERP. Em 7 dias você tem clareza de onde o processo trava — e um plano de digitalização de processos sob medida, sem mudar a rotina do time.",
    outcome: "Resultado: você sai do caos e enxerga o gargalo do controle operacional.",
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
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    ),
  },
  {
    chapter: "Capítulo 2",
    title: "Sistema web sob medida no ar em 30 dias",
    description:
      "Construímos o primeiro módulo do seu sistema personalizado para empresas em até 30 dias — com integração de sistemas, integração com ERP, WhatsApp e planilhas, além de painel administrativo e portal corporativo para clientes e parceiros, conforme o seu fluxo real.",
    outcome: "Resultado: produtividade de volta na primeira semana.",
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
    chapter: "Capítulo 3",
    title: "Evolução semanal — e o código é seu",
    description:
      "Cada semana entregamos melhoria com base no uso real. Você recebe dashboards corporativos, relatórios gerenciais, o código-fonte, a documentação e uma arquitetura de software sob medida preparada para escalar. Se amanhã quiser tocar sozinho ou trocar de parceiro, nada te prende.",
    outcome: "Resultado: de operador para dono de novo.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
          {/* VILÃO ÚNICO — conecta com a seção "Por que existimos" do site */}
          <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest uppercase bg-red-50 text-red-600 border border-red-200 rounded-full">
            O problema não é você. É o Frankenstein que montaram na sua operação.
          </span>
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-primary mb-5 leading-[1.1]">
            WhatsApp para vender. Planilha para controlar.{" "}
            <br className="hidden sm:block" />
            ERP que ninguém integra.
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Você cresceu, mas a automação de processos não acompanhou. A operação virou
            um quebra-cabeça de ferramentas que não conversam entre si — e o dono
            virou o único ponto de integração.{" "}
            <span className="font-semibold text-primary">
              A Sercil desenvolve sistemas web sob medida que substituem o
              Frankenstein por um sistema web integrado com o seu ERP e o seu
              processo.
            </span>{" "}
            Em 3 capítulos, você sai do caos do controle operacional e volta a
            ser dono do negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col"
            >
              <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-4">
                {service.chapter}
              </span>
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-xl mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-secondary text-[15px] leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-[14px] font-medium text-primary mt-auto pt-4 border-t border-gray-100">
                {service.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}