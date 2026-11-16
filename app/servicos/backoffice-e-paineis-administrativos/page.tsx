import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Backoffice e Painéis Administrativos | Sercil",
  description:
    "Backoffices e painéis administrativos sob medida com controle de acessos, aprovações e auditoria. Centralize a gestão interna da sua empresa com a Sercil.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Backoffice e Painéis Administrativos | Sercil",
    description:
      "Backoffices e painéis administrativos sob medida com controle de acessos, aprovações e auditoria. Centralize a gestão interna da sua empresa com a Sercil.",
    url: "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil"
  },
  keywords: [
    "backoffice",
    "painéis administrativos",
    "sistema de gestão interna",
    "backoffice sob medida",
    "painel administrativo personalizado",
    "controle de acessos",
    "controle de permissões RBAC",
    "fluxos de aprovação",
    "workflow de aprovação",
    "auditoria de ações",
    "rastreabilidade de processos",
    "gestão de clientes CRM",
    "gestão de estoque",
    "gestão de solicitações internas",
    "gestão financeira interna",
    "gestão de RH",
    "sistema administrativo web",
    "desenvolvimento sob medida",
    "integração com ERP",
    "automação de processos internos",
    "segurança de dados",
    "LGPD",
  ],
};

const faqItems = [
  {
    q: "Preciso substituir o meu ERP atual por um backoffice novo?",
    a: "Não. Na maioria dos casos, o backoffice é construído para complementar o ERP, assumindo as rotinas administrativas que ele não cobre bem — como aprovações, gestão de solicitações internas, cadastros específicos ou painéis gerenciais. Integramos com o ERP existente via API ou banco de dados.",
  },
  {
    q: "Como funciona o controle de permissões e acessos?",
    a: "Implementamos controle de acesso baseado em papéis (RBAC). Cada usuário vê e edita apenas o que seu papel permite. Você define, por exemplo, que o time comercial acessa clientes e propostas, o financeiro acessa contas e notas, e o gestor vê o consolidado. Todas as ações ficam registradas em log de auditoria.",
  },
  {
    q: "Quanto tempo leva para ter o backoffice no ar?",
    a: "O primeiro módulo funcional costuma ir ao ar em 30 dias, seguindo nosso método de entrega por capítulos. Módulos adicionais são evoluídos semanalmente, com base no uso real da equipe. Você começa a usar antes do sistema estar 100% completo.",
  },
  {
    q: "O código-fonte fica com a minha empresa?",
    a: "Sim. Todo o código-fonte, a documentação e a arquitetura são seus. Você não fica preso à Sercil e pode evoluir o sistema com sua equipe interna ou outro parceiro quando quiser.",
  },
  {
    q: "É possível acessar o backoffice pelo celular?",
    a: "Sim. Os painéis são responsivos e funcionam em navegadores de desktop e mobile. Para necessidades específicas de operação em campo, podemos evoluir o sistema para um PWA (aplicativo web instalável) com recursos offline.",
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
      "@id": "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos/#webpage",
      "url": "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos",
      "name": "Backoffice e Painéis Administrativos | Sercil",
      "description": "Backoffices e painéis administrativos sob medida com controle de acessos, aprovações e auditoria. Centralize a gestão interna da sua empresa com a Sercil.",
      "inLanguage": "pt-BR",
      "isPartOf": { "@id": "https://www.sercil.com.br/#website" }
    },
    {
      "@type": "Service",
      "@id": "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos/#service",
      "name": "Backoffice e Painéis Administrativos",
      "serviceType": "Desenvolvimento de Backoffice e Sistemas de Gestão Interna",
      "description": "Desenvolvemos backoffices e painéis administrativos sob medida com controle de acessos (RBAC), fluxos de aprovação, auditoria de ações e integração com o ERP existente.",
      "provider": { "@id": "https://www.sercil.com.br/#organization" },
      "areaServed": { "@type": "Country", "name": "Brasil" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sercil.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.sercil.com.br/servicos" },
        { "@type": "ListItem", "position": 3, "name": "Backoffice e Painéis Administrativos" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos/#faq",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    }
  ]
};

export default function BackofficePaineisAdministrativosPage() {
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
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
            alt="Ambiente de trabalho corporativo focado em gestão e administração"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Sistemas de Gestão Interna
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              O centro de controle que a sua <span className="text-blue-400">operação precisa</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Substitua planilhas e processos manuais por um backoffice seguro e intuitivo. Criamos painéis administrativos que centralizam as regras do seu negócio, automatizam aprovações e dão visibilidade total aos gestores — com auditoria de cada ação.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contato"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Solicitar Diagnóstico
              </a>
              <a
                href="#processo"
                className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                Como Funciona
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Diagnóstico gratuito em 20 minutos · Sem compromisso · Sem jargão técnico
            </p>
          </div>
        </div>
      </section>

      {/* Dores / Problemas */}
      <section className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Sua gestão interna está sobrecarregada?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quando a operação depende de processos desconexos, a equipe perde tempo com burocracia e os gestores perdem o controle. O problema quase nunca é a equipe — é a falta de um sistema que centralize as regras.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Aprovações lentas",
                desc: "Fluxos de aprovação e solicitações por e-mail ou papel travam a operação e geram incerteza sobre o andamento de cada demanda.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Controle de acessos falho",
                desc: "Sem um sistema central, é difícil saber quem tem permissão para ver ou editar cada tipo de informação sensível da empresa.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "Falta de rastreabilidade",
                desc: "Sem logs ou histórico, é impossível saber quem alterou o quê, quando e identificar a origem de erros operacionais.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Dados espalhados em planilhas",
                desc: "Cada área mantém sua própria versão da verdade. Ninguém sabe qual planilha está correta e o retrabalho se multiplica.",
                icon: "M3 10h18M3 6h18M3 14h18M3 18h18",
              },
              {
                title: "Dependência de pessoas-chave",
                desc: "Se o responsável pelo processo tira férias, a operação trava. O conhecimento não está no sistema — está na cabeça de alguém.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Gestão no escuro",
                desc: "Sem painel consolidado, você não sabe o status de cada solicitação, o que está parado, nem onde a operação está travando.",
                icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
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
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe administrativa colaborando em um ambiente de escritório"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Regras de negócio aplicadas com perfeição
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Desenvolvemos o coração do seu sistema. Um ambiente seguro para colaboradores gerenciarem dados, clientes e processos, sem contato direto com o banco de dados — e com cada ação registrada.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Gestão de usuários, papéis e permissões de acesso (RBAC).",
                  "Fluxos de aprovação e workflow customizados por área.",
                  "Histórico completo de auditoria (logs de ações).",
                  "CRUDs complexos com validação de dados e regras de negócio.",
                  "Importação e exportação de dados em lote (Excel/CSV).",
                  "Design responsivo e interface focada na produtividade da equipe.",
                  "Painéis gerenciais com indicadores em tempo real.",
                  "Notificações automáticas por e-mail, WhatsApp ou Slack.",
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
          </div>
        </div>
      </section>

      {/* Barra de Resultados */}
      <section className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: "-70%", label: "no tempo de aprovações internas" },
              { value: "100%", label: "das ações registradas em auditoria" },
              { value: "1", label: "única fonte de verdade para a operação" },
              { value: "24/7", label: "visibilidade do status de cada demanda" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-blue-400">{item.value}</div>
                <div className="mt-2 text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos Administrativos */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              O que podemos gerenciar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada empresa tem suas particularidades, mas alguns módulos são fundamentais para uma operação administrativa eficiente. Estes são os mais comuns nas nossas entregas.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gestão de Clientes (CRM)",
                desc: "Cadastro unificado, histórico de atendimento, segmentação e acompanhamento do ciclo de vida do cliente.",
              },
              {
                title: "Gestão de Produtos e Estoque",
                desc: "Controle de entrada e saída, alertas de estoque mínimo, precificação e gestão de fornecedores.",
              },
              {
                title: "Painel de Solicitações",
                desc: "Central de chamados internos, controle de demandas entre setores, prazos (SLAs) e acompanhamento de status.",
              },
              {
                title: "Gestão de Aprovações",
                desc: "Fluxos de alçada, aprovação em múltiplos níveis, histórico de decisões e notificações automáticas aos aprovadores.",
              },
              {
                title: "Gestão Financeira Interna",
                desc: "Contas a pagar e a receber, conciliação, centros de custo e relatórios gerenciais consolidados.",
              },
              {
                title: "Gestão de Pessoas e RH",
                desc: "Cadastro de colaboradores, controle de ponto, solicitações de férias e histórico funcional em um só lugar.",
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
              Sua gestão interna está pedindo um backoffice?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Se você se identifica com 3 ou mais dos sinais abaixo, está na hora de conversar sobre um sistema administrativo sob medida.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Aprovações internas dependem de e-mail, WhatsApp ou papel.",
              "Ninguém sabe com certeza quem pode acessar cada informação.",
              "Já houve erro operacional sem conseguir rastrear a origem.",
              "Cada área mantém a sua própria planilha da mesma coisa.",
              "Você não tem um painel consolidado com o status das demandas.",
              "Se a pessoa-chave de um setor sai de férias, a operação trava.",
              "Onboarding de novos colaboradores leva dias por falta de padrão.",
              "Você depende do TI para cada pequena alteração em cadastros.",
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
              Fluxos administrativos que já automatizamos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos reais de backoffices que economizam horas por semana nas operações dos nossos clientes. O seu processo pode ser o próximo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                area: "Aprovações",
                flow: "Solicitação criada → Notificação ao gestor → Aprovação em 1 clique → Registro automático de auditoria",
                result: "Reduz o tempo de aprovação de dias para minutos. Zero perda de solicitação.",
              },
              {
                area: "RH",
                flow: "Colaborador solicita férias → Gestor aprova → RH é notificado → Sistema atualiza o calendário",
                result: "Fim das planilhas de férias e conflito de agenda entre times.",
              },
              {
                area: "Financeiro",
                flow: "Nota é lançada → Regra de alçada define aprovador → Aprovação registrada → Pagamento agendado",
                result: "Controle de alçadas com rastreabilidade total. Fim do 'quem autorizou isso?'.",
              },
              {
                area: "Comercial",
                flow: "Vendedor cadastra proposta → Regras de desconto validam → Diretor aprova → ERP recebe o pedido",
                result: "Descontos dentro da política. Nenhuma proposta esquecida em e-mail.",
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
              O que você precisa saber antes de construir um backoffice sob medida.
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
            Pronto para profissionalizar a sua gestão interna?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre as necessidades do seu backoffice. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender onde sua operação perde tempo hoje — e como podemos ajudar.
          </p>
          <a
            href="/#contato"
            className="mt-8 inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Falar com um especialista
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Diagnóstico gratuito · Retorno em até 24h
          </p>
        </div>
      </section>
    </main>
  );
}