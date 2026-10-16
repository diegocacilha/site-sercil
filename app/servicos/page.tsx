import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sercil | Serviços",
  description:
    "Conheça os serviços da Sercil: desenvolvimento de sistemas web sob medida, portais corporativos, automação de processos e integração com ERP.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos",
  },
  openGraph: {
    title: "Sercil | Serviços",
    description:
      "Soluções digitais sob medida para empresas que buscam eficiência e inovação.",
    url: "https://www.sercil.com.br/servicos",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil",
  },
};

const servicos = [
  {
    titulo: "Sistemas Web Sob Medida",
    descricao:
      "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio.",
  },
  {
    titulo: "Portais Corporativos",
    descricao:
      "Portais para clientes, parceiros e colaboradores, com autenticação, permissões e integrações.",
  },
  {
    titulo: "Automação de Processos",
    descricao:
      "Digitalização e automação de fluxos operacionais para reduzir custos e aumentar a produtividade.",
  },
  {
    titulo: "Integração com ERP",
    descricao:
      "Conectamos seus sistemas com ERPs e outras ferramentas corporativas via APIs seguras.",
  },
  {
    titulo: "Dashboards e Relatórios",
    descricao:
      "Painéis gerenciais com indicadores em tempo real para apoiar a tomada de decisão.",
  },
  {
    titulo: "Backoffice e Painéis Administrativos",
    descricao:
      "Interfaces administrativas sob medida para controle operacional e gestão de dados.",
  },
];

export default function ServicosPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Nossos Serviços
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Soluções sob medida para transformar a operação da sua empresa com
          tecnologia escalável, segura e orientada a resultados.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico) => (
          <article
            key={servico.titulo}
            className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{servico.titulo}</h2>
            <p className="mt-3 text-gray-600">{servico.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}