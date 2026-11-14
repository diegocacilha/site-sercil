import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Integração de Aplicações | Sercil",
  description:
    "Conecte ERPs, CRMs, APIs e sistemas legados com integrações sob medida. Elimine dados duplicados e garanta que a informação flua automaticamente entre suas ferramentas.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/integracao-entre-aplicacoes",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Integração de Aplicações | Sercil",
    description:
      "Conecte ERPs, CRMs, APIs e sistemas legados com integrações sob medida. Elimine dados duplicados e garanta que a informação flua automaticamente entre suas ferramentas.",
    url: "https://www.sercil.com.br/servicos/integracao-entre-aplicacoes",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil",
  }, 
  keywords: [
    "integração de aplicações",
    "integração de sistemas",
    "integração entre sistemas",
    "integração de APIs",
    "API REST",
    "API SOAP",
    "webhooks",
    "API Gateway",
    "middleware ESB",
    "integração ERP CRM",
    "integração ERP e-commerce",
    "integração com marketplaces",
    "integração Mercado Livre",
    "integração Shopee",
    "sincronização de dados",
    "sincronização em tempo real",
    "sistemas legados",
    "integração de sistemas legados",
    "RPA",
    "automação de interface",
    "single source of truth",
    "fonte única de verdade",
    "eliminar dados duplicados",
    "reduzir trabalho manual",
    "OAuth",
    "segurança de dados em integrações",
    "monitoramento de integrações",
    "logs de integração",
    "desenvolvimento de integrações sob medida",
    "eliminar silos de informação",
  ],
};

const faqItems = [
  {
    q: "Meu sistema é antigo. Ainda é possível integrá-lo?",
    a: "Sim. Boa parte dos nossos projetos envolve integrar sistemas legados que não possuem API moderna. Nesses casos, usamos abordagens alternativas: acesso direto ao banco de dados, automação de interface (RPA) ou criação de uma camada de API intermediária que expõe os dados de forma segura para outros sistemas.",
  },
  {
    q: "A integração funciona em tempo real ou agendada?",
    a: "Depende do que o seu processo exige. Sincronizações em tempo real usam webhooks e eventos (quando uma ação em um sistema dispara reação imediata em outro). Sincronizações agendadas rodam em intervalos definidos (a cada 5 minutos, de hora em hora, diariamente). Definimos juntos a estratégia certa para cada fluxo.",
  },
  {
    q: "Quanto tempo leva para construir uma integração?",
    a: "Integrações simples (dois sistemas, um fluxo) podem ficar prontas em 1 a 2 semanas. Projetos maiores, com múltiplos sistemas e regras de transformação de dados, seguem nosso método de entrega por capítulos: o primeiro fluxo no ar em 30 dias, com evolução semanal a partir daí.",
  },
  {
    q: "E se a integração falhar? Como sei que algo deu errado?",
    a: "Toda integração inclui monitoramento e alertas automáticos. Se um fluxo falhar (API indisponível, dado inválido, timeout), você é notificado por e-mail ou WhatsApp, com logs detalhados para identificar a causa. Também implementamos retentativas automáticas para falhas temporárias.",
  },
  {
    q: "Como funciona a segurança dos dados integrados?",
    a: "Usamos autenticação via OAuth, tokens e chaves de API, criptografia em trânsito (HTTPS/TLS) e, quando necessário, em repouso. Cada integração tem credenciais próprias e escopo limitado — um sistema não acessa mais do que deveria. Todas as chamadas ficam registradas em log de auditoria.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function IntegracaoDeAplicacoesPage() {
  return (
    <main className="bg-white">
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Rede global de conexões e dados digitais representando integração"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Integração de Aplicações
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Faça seus sistemas <span className="text-blue-400">falarem a mesma língua</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Chega de retrabalho e dados duplicados. Conectamos suas ferramentas, ERPs, CRMs, APIs e sistemas legados para que a informação flua automaticamente, com segurança e em tempo real entre todos os setores da sua empresa.
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
              Seus dados estão presos em silos?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quando os sistemas não se comunicam, sua equipe perde tempo exportando e importando planilhas, e os gestores tomam decisões com dados desatualizados. O problema não é a equipe — é a arquitetura.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dados duplicados",
                desc: "O mesmo cliente ou pedido cadastrado em vários lugares. A falta de sincronia gera inconsistência e confusão em toda a operação.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Trabalho manual",
                desc: "Colaboradores gastam horas copiando e colando informações entre o CRM, o ERP e o sistema financeiro. Trabalho que uma máquina faria em segundos.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
              {
                title: "Visão fragmentada",
                desc: "É impossível ter um panorama real do negócio quando cada departamento tem sua própria 'versão da verdade'.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Erros em cascata",
                desc: "Um dado errado no ERP se propaga para a nota fiscal, o financeiro e o relatório gerencial. Descobrir a origem do erro vira um desafio.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
              },
              {
                title: "Processos travados",
                desc: "Uma etapa depende da outra, mas os sistemas não sabem disso. O processo fica parado esperando alguém perceber.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Integrações frágeis",
                desc: "Integrações antigas, feitas 'na gambiarra', quebram a cada atualização de sistema. Ninguém sabe mexer sem quebrar tudo.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                alt="Servidores e infraestrutura de rede de dados"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Um ecossistema conectado e inteligente
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Construímos pontes seguras entre suas aplicações, garantindo que a informação certa chegue ao sistema certo, no momento exato — sem gambiarra e sem dependência de planilha.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Sincronização de dados em tempo real ou agendada.",
                  "Integração via APIs REST, SOAP, Webhooks ou bancos de dados.",
                  "Centralização do cadastro de clientes e produtos (Single Source of Truth).",
                  "Redução drástica de erros manuais e custos operacionais.",
                  "Monitoramento e alertas em caso de falha na comunicação.",
                  "Segurança de dados com criptografia e autenticação (OAuth, Tokens).",
                  "Retentativas automáticas para falhas temporárias de rede ou API.",
                  "Logs detalhados de cada chamada para auditoria e diagnóstico.",
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
              { value: "-95%", label: "de trabalho manual em transferência de dados" },
              { value: "Tempo real", label: "sincronização entre sistemas críticos" },
              { value: "1", label: "fonte única de verdade para toda a empresa" },
              { value: "0", label: "dado duplicado ou divergente entre áreas" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-blue-400">{item.value}</div>
                <div className="mt-2 text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Integração */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Conectamos o que você precisa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Seja qual for a sua stack de tecnologia, temos a solução para integrar os seus sistemas de forma moderna, segura e escalável.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "API Gateway",
                desc: "Camadas de API seguras para expor dados de sistemas legados ou modernos para outras aplicações, com controle de acesso e rate limiting.",
              },
              {
                title: "Webhooks e Eventos",
                desc: "Integrações orientadas a eventos onde uma ação em um sistema dispara reações automáticas em outro instantaneamente.",
              },
              {
                title: "Middleware (ESB)",
                desc: "Softwares intermediários que orquestram a comunicação e transformação de dados entre múltiplos sistemas complexos.",
              },
              {
                title: "Integração ERP ↔ CRM",
                desc: "Sincronização de clientes, pedidos, estoque e faturamento entre o ERP e o CRM, sem digitação dupla.",
              },
              {
                title: "Integrações com Marketplaces",
                desc: "Conecte e-commerce, Mercado Livre, Shopee e outros canais ao seu ERP, centralizando pedidos e estoque.",
              },
              {
                title: "Automação com RPA",
                desc: "Quando o sistema não tem API, usamos robôs de software para automatizar a interface — sem alterar o sistema original.",
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
              Sua operação está pedindo integração?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Se você se identifica com 3 ou mais dos sinais abaixo, está na hora de conversar sobre integração de sistemas.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Alguém da equipe exporta e importa planilha entre sistemas todos os dias.",
              "O mesmo cliente aparece com cadastros diferentes em cada ferramenta.",
              "Você não sabe qual é o número 'oficial' do faturamento do mês.",
              "Informações chegam ao financeiro dias depois do pedido ser fechado.",
              "Uma integração antiga quebrou e ninguém sabe consertar.",
              "O processo de emissão de nota fiscal depende de digitação manual.",
              "Sincronizar estoque entre loja física e e-commerce é um pesadelo.",
              "Você não tem logs para saber onde um dado travou ou sumiu.",
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
              Integrações que já implementamos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos reais de fluxos entre sistemas que eliminam retrabalho e mantêm a informação sincronizada.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                area: "ERP ↔ CRM",
                flow: "Cliente fecha negócio no CRM → Pedido é criado no ERP → Estoque é reservado → Nota fiscal é emitida",
                result: "Zero digitação entre as duas ferramentas. Pedido entra no ERP no momento do fechamento.",
              },
              {
                area: "E-commerce ↔ ERP",
                flow: "Venda no e-commerce → ERP recebe o pedido → Estoque é atualizado → Rastreio volta para o cliente",
                result: "Estoque sempre sincronizado entre canais. Fim de vender produto esgotado.",
              },
              {
                area: "ERP ↔ Financeiro",
                flow: "Nota fiscal emitida → Lançamento automático no financeiro → Boleto gerado → Envio ao cliente",
                result: "Cobrança acontece no mesmo dia da nota. Redução drástica de inadimplência.",
              },
              {
                area: "Sistema legado ↔ API moderna",
                flow: "Sistema antigo expõe dados via API Gateway → Aplicativo novo consome → Dados ficam disponíveis em tempo real",
                result: "Modernização sem precisar reescrever o sistema legado. Dados acessíveis onde você precisa.",
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
              O que você precisa saber antes de integrar seus sistemas.
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
            Pronto para unificar a sua operação?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto de integração. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender onde a informação trava hoje — e como podemos conectar seus sistemas.
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