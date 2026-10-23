import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sercil | Dashboards e Relatórios",
  description: "Transforme dados em decisões. Criamos dashboards interativos e relatórios automatizados para você visualizar os indicadores do seu negócio em tempo real.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/dashboards-e-relatorios",
  },
};

export default function DashboardsRelatoriosPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
            alt="Painel de dados com gráficos e métricas em um monitor"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Inteligência de Dados
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transforme dados brutos em <span className="text-blue-400">decisões inteligentes</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Pare de perder tempo montando planilhas. Criamos dashboards interativos e relatórios automatizados que consolidam as informações da sua empresa em uma única tela, em tempo real.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contato"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Solicitar Demonstração
              </a>
              <a
                href="#processo"
                className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                Como Funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dores / Problemas */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Você ainda toma decisões no "achismo"?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Informações espalhadas em dezenas de planilhas e sistemas diferentes impedem que você enxergue a realidade do seu negócio.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Relatórios manuais",
                desc: "Sua equipe gasta dias consolidando dados em Excel. Quando o relatório fica pronto, as informações já estão defasadas.",
              },
              {
                title: "Métricas desconexas",
                desc: "Financeiro, Vendas e Operação têm visões diferentes do mesmo resultado. Falta uma 'fonte única da verdade'.",
              },
              {
                title: "Oportunidades perdidas",
                desc: "Sem visualização clara, fica impossível identificar gargalos, tendências de queda ou oportunidades de crescimento a tempo.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
                <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold mb-4">
                  !
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios / Solução */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Tenha o controle do seu negócio na palma da mão
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Nós estruturamos seus dados e criamos painéis visuais intuitivos, permitindo que gestores e equipes monitorem os KPIs mais importantes sem depender de TI.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Dashboards interativos (clique, filtre e aprofunde nos dados).",
                  "Atualização automática em tempo real ou agendada.",
                  "Visualização de dados de múltiplas fontes em um só lugar.",
                  "Alertas automáticos por e-mail ou WhatsApp quando uma meta não é atingida.",
                  "Acesso seguro com controle de permissões por cargo.",
                  "Exportação simplificada para PDF, Excel ou CSV.",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Análise de dados e relatórios em uma tela de computador"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Relatórios */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Painéis para cada área da empresa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Desenvolvemos dashboards sob medida para atender as necessidades específicas de cada departamento.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Visão Executiva",
                desc: "Indicadores macro do negócio (Faturamento, Lucratividade, CAC, LTV) consolidados para a diretoria.",
              },
              {
                title: "Comercial e Vendas",
                desc: "Acompanhamento do funil de vendas, performance de vendedores, metas, conversão e ticket médio.",
              },
              {
                title: "Financeiro e Operações",
                desc: "Fluxo de caixa, inadimplência, custos operacionais, giro de estoque e produtividade da equipe.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Metodologia />

      <Tecnologias />

      {/* CTA Final */}
      <section id="contato" className="section-bg w-full py-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pronto para enxergar o seu negócio com clareza?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre os dados da sua empresa. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender como podemos ajudar.
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