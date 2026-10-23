import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sercil | Serviços",
  description:
    "Conheça os serviços da Sercil: desenvolvimento de sistemas web sob medida, portais corporativos, automação de processos e integrações.",
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
    rota: "/servicos/sistemas-web-sob-medida",
    descricao:
      "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio.",
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Portais Corporativos",
    rota: "/servicos/portais-corporativos",
    descricao:
      "Portais para clientes, parceiros e colaboradores, com autenticação, permissões e integrações.",
    imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Automação de Processos",
    rota: "/servicos/automacao-de-processos",
    descricao:
      "Digitalização e automação de fluxos operacionais para reduzir custos e aumentar a produtividade.",
    imagem: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Integração de Aplicações",
    rota: "/servicos/integracao-de-aplicacoes",
    descricao:
      "Conectamos seus sistemas a outras ferramentas corporativas via APIs seguras.",
    imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Dashboards e Relatórios",
    rota: "/servicos/dashboards-e-relatorios",
    descricao:
      "Painéis gerenciais com indicadores em tempo real para apoiar a tomada de decisão.",
    imagem: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Backoffice e Painéis Administrativos",
    rota: "/servicos/backoffice-e-paineis-administrativos",
    descricao:
      "Interfaces administrativas sob medida para controle operacional e gestão de dados.",
    imagem: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ServicosPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Equipe de tecnologia trabalhando em soluções digitais"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Nossas Soluções
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tecnologia sob medida para <span className="text-blue-400">transformar sua operação</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Soluções sob medida para transformar a operação da sua empresa com tecnologia escalável, segura e orientada a resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <a
                href={servico.rota}
                key={servico.titulo}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Imagem do Card */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={servico.imagem}
                    alt={servico.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {servico.titulo}
                  </h2>
                  <p className="mt-3 flex-1 text-gray-600">
                    {servico.descricao}
                  </p>
                  
                  {/* Botão Saiba Mais */}
                  <div className="mt-6 flex items-center text-sm font-semibold text-blue-600">
                    Saiba mais
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="bg-gray-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Não sabe por onde começar?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Vamos conversar sobre o seu desafio. A Sercil pode ajudar a desenhar a solução ideal para o seu negócio, sem compromisso.
          </p>
          <a
            href="/#contato"
            className="mt-8 inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Falar com um especialista
          </a>
        </div>
      </section>
    </main>
  );
}