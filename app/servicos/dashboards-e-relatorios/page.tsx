import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboards e Relatórios | Sercil",
  description:
    "Dashboards interativos e relatórios automatizados com dados em tempo real. Centralize KPIs de todas as áreas e decida com base em evidências, não em achismo.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/dashboards-e-relatorios",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dashboards e Relatórios | Sercil",
    description:
      "Dashboards interativos e relatórios automatizados com dados em tempo real. Centralize KPIs de todas as áreas e decida com base em evidências, não em achismo.",
    url: "https://www.sercil.com.br/servicos/dashboards-e-relatorios",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil"
  },
  keywords: [
    "dashboards",
    "dashboards interativos",
    "relatórios automatizados",
    "relatórios gerenciais",
    "inteligência de dados",
    "business intelligence",
    "BI sob medida",
    "KPIs",
    "indicadores de desempenho",
    "dados em tempo real",
    "painéis gerenciais",
    "dashboard executivo",
    "dashboard comercial",
    "dashboard financeiro",
    "dashboard de marketing",
    "dashboard de RH",
    "análise de dados",
    "visualização de dados",
    "consolidação de dados",
    "fonte única de verdade",
    "alertas automáticos",
    "integração ERP CRM",
    "Power BI",
    "Looker",
    "tomada de decisão baseada em dados",
    "data-driven",
    "relatórios em tempo real",
    "monitoramento de metas",
  ],
};

const faqItems = [
  {
    q: "Preciso contratar Power BI, Looker ou outra ferramenta?",
    a: "Não necessariamente. Podemos construir dashboards nativos dentro do sistema web da sua empresa (com as bibliotecas de visualização que usamos nos projetos) ou integrar com ferramentas de BI que você já tenha licença. A escolha depende do volume de dados, da frequência de uso e do orçamento. Definimos juntos no diagnóstico.",
  },
  {
    q: "Quanto tempo leva para ter o primeiro dashboard no ar?",
    a: "Seguindo nosso método de entrega por capítulos, o primeiro painel funcional costuma ir ao ar em 30 dias. Começamos pelo indicador mais crítico para o negócio — geralmente faturamento, funil de vendas ou fluxo de caixa — e evoluímos os demais nas semanas seguintes.",
  },
  {
    q: "Funciona com meu ERP, CRM e planilhas atuais?",
    a: "Sim. Nosso trabalho começa justamente pela integração das fontes que você já usa: ERP, CRM, planilhas, bancos de dados, APIs de marketplaces e ferramentas de pagamento. Os dados entram no dashboard de forma automática, sem digitação manual.",
  },
  {
    q: "Posso definir diferentes níveis de acesso aos dashboards?",
    a: "Sim. Cada usuário vê apenas o que seu papel permite: diretoria acessa a visão consolidada, gerentes veem os indicadores da sua área, e vendedores acompanham apenas a própria performance. Tudo com auditoria de acesso.",
  },
  {
    q: "É possível receber alertas automáticos quando uma meta não for atingida?",
    a: "Sim. Configuramos alertas por e-mail, WhatsApp ou Slack disparados por regras de negócio — por exemplo: \"me avise se a inadimplência passar de 5%\" ou \"me avise se as vendas do dia estiverem 20% abaixo da meta\". O gestor é avisado antes do problema virar crise.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.sercil.com.br/#organization",
      "name": "Sercil",
      "url": "https://www.sercil.com.br/",
      "logo": "https://www.sercil.com.br/logo.png",
      "description": "Empresa de tecnologia especializada em automação de processos, integração de sistemas e desenvolvimento de software sob medida.",
      "areaServed": { "@type": "Country", "name": "Brasil" },
      "sameAs": [
        "https://www.linkedin.com/company/sercil",
        "https://www.crunchbase.com/organization/sercil"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sercil.com.br/#website",
      "url": "https://www.sercil.com.br/",
      "name": "Sercil",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "https://www.sercil.com.br/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.sercil.com.br/servicos/dashboards-e-relatorios/#webpage",
      "url": "https://www.sercil.com.br/servicos/dashboards-e-relatorios",
      "name": "Dashboards e Relatórios | Sercil",
      "description": "Dashboards interativos e relatórios automatizados com dados em tempo real. Centralize KPIs de todas as áreas e decida com base em evidências, não em achismo.",
      "inLanguage": "pt-BR",
      "isPartOf": { "@id": "https://www.sercil.com.br/#website" }
    },
    {
      "@type": "Service",
      "@id": "https://www.sercil.com.br/servicos/dashboards-e-relatorios/#service",
      "name": "Dashboards e Relatórios",
      "serviceType": "Business Intelligence, Dashboards e Relatórios Automatizados",
      "description": "Desenvolvemos dashboards interativos e relatórios automatizados que consolidam dados de ERP, CRM e outras fontes em tempo real, com controle de acesso por perfil e alertas automáticos de metas.",
      "provider": { "@id": "https://www.sercil.com.br/#organization" },
      "areaServed": { "@type": "Country", "name": "Brasil" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sercil.com.br/servicos/dashboards-e-relatorios/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sercil.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.sercil.com.br/servicos" },
        { "@type": "ListItem", "position": 3, "name": "Dashboards e Relatórios" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sercil.com.br/servicos/dashboards-e-relatorios/#faq",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    }
  ]
};

export default function DashboardsRelatoriosPage() {
  return (
    <main className="bg-white">
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              Pare de perder tempo montando planilhas. Criamos dashboards interativos e relatórios automatizados que consolidam as informações da sua empresa em uma única tela, em tempo real — com alertas que avisam antes do problema virar crise.
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
            <p className="mt-6 text-sm text-gray-400">
              Demonstração gratuita em 20 minutos · Sem compromisso · Sem jargão técnico
            </p>
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
              Informações espalhadas em dezenas de planilhas e sistemas diferentes impedem que você enxergue a realidade do seu negócio. O problema não é a falta de dados — é a falta de consolidação.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Relatórios manuais",
                desc: "Sua equipe gasta dias consolidando dados em Excel. Quando o relatório fica pronto, as informações já estão defasadas.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Métricas desconexas",
                desc: "Financeiro, Vendas e Operação têm visões diferentes do mesmo resultado. Falta uma 'fonte única da verdade'.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Oportunidades perdidas",
                desc: "Sem visualização clara, fica impossível identificar gargalos, tendências de queda ou oportunidades de crescimento a tempo.",
                icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
              },
              {
                title: "Dependência do TI",
                desc: "Para qualquer número novo, é preciso abrir chamado, esperar dias e receber uma planilha que ninguém sabe se está atualizada.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Decisão por intuição",
                desc: "Sem dados confiáveis, o gestor decide com base em 'feeling' ou em relatos isolados — e descobre o erro tarde demais.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
              },
              {
                title: "Visão apenas do passado",
                desc: "Os relatórios mostram o que já aconteceu. Ninguém consegue antecipar tendências ou agir de forma proativa.",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
                <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
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
                Nós estruturamos seus dados e criamos painéis visuais intuitivos, permitindo que gestores e equipes monitorem os KPIs mais importantes sem depender de TI — e reajam antes que um desvio vire prejuízo.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Dashboards interativos (clique, filtre e aprofunde nos dados).",
                  "Atualização automática em tempo real ou agendada.",
                  "Visualização de dados de múltiplas fontes em um só lugar.",
                  "Alertas automáticos por e-mail ou WhatsApp quando uma meta não é atingida.",
                  "Acesso seguro com controle de permissões por cargo.",
                  "Exportação simplificada para PDF, Excel ou CSV.",
                  "Histórico e comparação entre períodos (mês a mês, ano a ano).",
                  "Visão preditiva com indicadores de tendência e projeções.",
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

      {/* Barra de Resultados */}
      <section className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: "-90%", label: "no tempo de geração de relatórios" },
              { value: "Tempo real", label: "atualização de KPIs e indicadores" },
              { value: "1", label: "fonte única de verdade para toda a empresa" },
              { value: "24/7", label: "monitoramento com alertas automáticos" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-blue-400">{item.value}</div>
                <div className="mt-2 text-gray-300">{item.label}</div>
              </div>
            ))}
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
              Desenvolvemos dashboards sob medida para atender as necessidades específicas de cada departamento, com os indicadores que realmente importam para cada gestor.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Visão Executiva",
                desc: "Indicadores macro do negócio (Faturamento, Lucratividade, CAC, LTV) consolidados para a diretoria em uma única tela.",
              },
              {
                title: "Comercial e Vendas",
                desc: "Acompanhamento do funil de vendas, performance de vendedores, metas, conversão e ticket médio.",
              },
              {
                title: "Financeiro e Operações",
                desc: "Fluxo de caixa, inadimplência, custos operacionais, giro de estoque e produtividade da equipe.",
              },
              {
                title: "Marketing e Aquisição",
                desc: "Investimento por canal, custo por lead, taxa de conversão por origem e ROI de campanhas.",
              },
              {
                title: "Atendimento e CS",
                desc: "Tempo de resposta, SLA, NPS, churn, retenção e satisfação por cliente e por canal de atendimento.",
              },
              {
                title: "RH e Pessoas",
                desc: "Headcount, turnover, absenteísmo, custo por colaborador e indicadores de produtividade por área.",
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

      {/* Sinais / Auto-diagnóstico */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Seu negócio está pedindo dashboards?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Se você se identifica com 3 ou mais dos sinais abaixo, está na hora de conversar sobre inteligência de dados.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Você só descobre o faturamento do mês no fechamento contábil.",
              "Cada área tem sua própria 'versão' dos mesmos números.",
              "Alguém da equipe passa dias montando relatórios em Excel.",
              "Você não tem visão em tempo real do que acontece na operação.",
              "Desvios de meta são percebidos tarde, quando já viraram prejuízo.",
              "Qualquer análise nova depende de um chamado para o TI.",
              "Decisões estratégicas são tomadas no 'feeling' ou na intuição.",
              "Você não consegue comparar performance entre períodos com facilidade.",
            ].map((signal) => (
              <div key={signal} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <svg className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplos de Fluxos */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Fluxos de dados que já implementamos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos reais de pipelines que alimentam dashboards automaticamente, sem planilha no meio e sem digitação manual.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                area: "Comercial",
                flow: "Vendas registradas → Pipeline consolidado → Dashboard atualiza → Alerta dispara se meta não for atingida",
                result: "Gestor vê a performance em tempo real e age no mesmo dia, não no fechamento.",
              },
              {
                area: "Financeiro",
                flow: "Contas pagas → Conciliação automática → Fluxo de caixa consolidado → Projeção de 30 dias",
                result: "Visão de caixa futura sem planilha. Decisão de investimento com base em dados.",
              },
              {
                area: "Marketing",
                flow: "Investimento por canal → Leads capturados → CRM registra conversão → Dashboard de ROI por origem",
                result: "Redireciona verba para o canal que realmente converte. Sem achismo.",
              },
              {
                area: "Operação",
                flow: "Pedidos no ERP → Dashboard de produtividade → Gargalo identificado → Alerta para o responsável",
                result: "Gargalo resolvido antes de virar atraso na entrega e reclamação de cliente.",
              },
            ].map((item) => (
              <div key={item.area} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
                  {item.area}
                </span>
                <div className="text-gray-900 font-medium text-lg leading-relaxed mb-3">
                  {item.flow}
                </div>
                <p className="text-gray-600 text-sm">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Metodologia />

      <Tecnologias />

      {/* FAQ */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              O que você precisa saber antes de construir seus dashboards.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 list-none">
                  <span className="text-lg font-semibold text-gray-900">{item.q}</span>
                  <span className="text-blue-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="section-bg w-full py-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pronto para enxergar o seu negócio com clareza?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre os dados da sua empresa. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender onde a informação trava hoje — e como podemos transformar isso em decisão.
          </p>
          <a
            href="/#contato"
            className="mt-8 inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Falar com um especialista
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Demonstração gratuita · Retorno em até 24h
          </p>
        </div>
      </section>
    </main>
  );
}