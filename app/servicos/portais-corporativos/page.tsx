import type { Metadata } from "next";
import Image from "next/image";
import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";

export const metadata: Metadata = {
  title: "Portais Corporativos | Sercil",
  description:
    "Portais corporativos para clientes, parceiros e colaboradores com autenticação SSO, permissões por perfil e integrações. Centralize comunicação e processos com a Sercil.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/portais-corporativos",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Portais Corporativos | Sercil",
    description:
      "Portais corporativos para clientes, parceiros e colaboradores com autenticação SSO, permissões por perfil e integrações. Centralize comunicação e processos com a Sercil.",
    url: "https://www.sercil.com.br/servicos/portais-corporativos",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil",
  },
};

const faqItems = [
  {
    q: "Preciso substituir os sistemas que já tenho?",
    a: "Não. O portal corporativo é construído para se integrar ao que você já usa — ERP, CRM, RH, financeiro, gateways e APIs externas. Ele funciona como uma camada de acesso unificado, centralizando a experiência do usuário sem exigir a troca dos sistemas por trás.",
  },
  {
    q: "Como funciona a autenticação e o controle de permissões?",
    a: "Implementamos autenticação única (SSO) com suporte a MFA (duas etapas), além de controle de acesso baseado em papéis (RBAC). Cada perfil vê apenas as áreas e dados permitidos: cliente acessa seus pedidos, parceiro acessa suas comissões, colaborador acessa RH e comunicados internos. Todas as ações ficam registradas em log de auditoria.",
  },
  {
    q: "Quanto tempo leva para o portal entrar no ar?",
    a: "Seguindo nosso método de entrega por capítulos, o primeiro módulo funcional costuma ir ao ar em 30 dias. Começamos pela área de maior impacto — geralmente o autoatendimento do cliente ou o portal do colaborador — e evoluímos as demais áreas nas semanas seguintes, com base no uso real.",
  },
  {
    q: "O portal é seguro e está em conformidade com a LGPD?",
    a: "Sim. Trabalhamos com criptografia em trânsito (HTTPS/TLS), autenticação forte, controle granular de permissões, logs de auditoria e políticas de retenção de dados. O portal é projetado desde o início para atender aos princípios da LGPD — minimização de dados, consentimento, rastreabilidade e direito ao esquecimento.",
  },
  {
    q: "O código-fonte do portal fica com a minha empresa?",
    a: "Sim. Todo o código-fonte, a documentação e a arquitetura são seus. Você não fica preso à Sercil e pode evoluir o portal com sua equipe interna ou outro parceiro quando quiser.",
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

export default function PortaisCorporativosPage() {
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Escritório corporativo moderno com colaboradores trabalhando"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Portais Corporativos
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Um único ambiente para <span className="text-blue-400">conectar pessoas, dados e processos</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Criamos portais corporativos seguros e integrados que centralizam a comunicação com clientes, parceiros e colaboradores — com autenticação SSO, controle de permissões por perfil e integrações com os sistemas que você já usa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contato"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Solicitar Diagnóstico
              </a>
              <a
                href="#tipos"
                className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                Tipos de Portal
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
              Sua empresa ainda comunica de forma fragmentada?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quando informações ficam espalhadas em e-mails, planilhas e ferramentas desconectadas, a produtividade cai, o cliente espera e o risco aumenta. O problema não é a equipe — é a ausência de um ponto único de acesso.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Comunicação fragmentada",
                desc: "Avisos, documentos e processos circulam por canais diferentes. Cada pessoa acessa uma versão diferente da verdade.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                title: "Acessos sem controle",
                desc: "Sem autenticação unificada e permissões bem definidas, dados sensíveis ficam expostos a quem não deveria vê-los.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "Sistemas desconectados",
                desc: "ERP, CRM, RH e financeiro não conversam entre si. Reintegrar cada novo sistema vira um projeto caro e demorado.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Atendimento por canais isolados",
                desc: "Cliente liga para pedir segunda via, manda e-mail para abrir chamado, e nada fica registrado de forma centralizada.",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
              },
              {
                title: "Documentos dispersos",
                desc: "Cada área guarda suas versões de contrato, política e proposta. Ninguém sabe qual é a versão oficial.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Falta de rastreabilidade",
                desc: "Sem logs, é impossível saber quem acessou o quê, quando e com qual finalidade — problema direto para a LGPD.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe corporativa reunida em torno de uma mesa discutindo estratégias"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Tudo o que sua organização precisa em um só lugar
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Um portal corporativo bem projetado é a espinha dorsal digital da sua empresa: seguro, integrado e escalável — pronto para crescer sem virar um novo Frankenstein.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Autenticação única (SSO) e controle granular de permissões por perfil.",
                  "Área personalizada para clientes, parceiros, colaboradores e fornecedores.",
                  "Integração com ERPs, CRMs, RH, financeiro e APIs externas.",
                  "Gestão documental, comunicados, chamados e workflows internos.",
                  "Dashboards e relatórios com dados consolidados em tempo real.",
                  "Conformidade com LGPD e boas práticas de segurança.",
                  "Autoatendimento para reduzir demanda no suporte e no comercial.",
                  "Auditoria completa de acessos e ações dentro do portal.",
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
              { value: "-60%", label: "no volume de atendimento manual repetitivo" },
              { value: "100%", label: "dos acessos registrados em auditoria" },
              { value: "1", label: "ambiente único para todos os públicos" },
              { value: "24/7", label: "disponível em qualquer dispositivo" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-blue-400">{item.value}</div>
                <div className="mt-2 text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Portal */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Um portal para cada público
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada audiência tem necessidades próprias. Projetamos portais específicos, ou um único ambiente com áreas segregadas por perfil — como preferir.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Portal do Cliente",
                desc: "Autoatendimento, segunda via de documentos, acompanhamento de pedidos, chamados e histórico de relacionamento.",
              },
              {
                title: "Portal do Parceiro",
                desc: "Gestão de cadastros, comissionamento, treinamentos, materiais de marketing e acompanhamento de metas.",
              },
              {
                title: "Portal do Colaborador",
                desc: "Comunicados internos, RH digital, solicitações, políticas, treinamentos e colaboração entre áreas.",
              },
              {
                title: "Portal do Fornecedor",
                desc: "Envio de notas fiscais, acompanhamento de pagamentos, cadastro e comunicação com o setor de compras.",
              },
              {
                title: "Universidade Corporativa",
                desc: "Trilhas de treinamento, certificações, biblioteca de conteúdos e acompanhamento de progresso por colaborador.",
              },
              {
                title: "Intranet Corporativa",
                desc: "Central de notícias, diretório de pessoas, políticas internas e canais de comunicação institucional.",
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
              Sua operação está pedindo um portal?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Se você se identifica com 3 ou mais dos sinais abaixo, está na hora de conversar sobre um portal corporativo sob medida.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Cliente liga ou manda e-mail para pedir segunda via de boleto ou nota.",
              "Cada área guarda seus documentos em pastas e e-mails diferentes.",
              "Parceiro não tem visão das próprias comissões ou pedidos.",
              "Colaborador não sabe onde encontrar políticas, holerite ou solicitações.",
              "Você não tem SSO — cada ferramenta exige um login diferente.",
              "Novo sistema exige integração do zero, feita 'no braço'.",
              "Você não sabe quais dados cada perfil de usuário acessa (LGPD).",
              "Onboarding de cliente ou parceiro é manual, por e-mail e planilha.",
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
              Fluxos que já implementamos em portais
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos reais de jornadas dentro do portal que reduzem atendimento manual e dão autonomia ao usuário.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                area: "Portal do Cliente",
                flow: "Login com SSO → Área 'Meus Pedidos' → Segunda via de boleto em 2 cliques",
                result: "Reduz drasticamente ligações e e-mails pedindo documento. Cliente resolve sozinho.",
              },
              {
                area: "Portal do Parceiro",
                flow: "Comissão é calculada → Notificação no portal → Extrato detalhado com histórico",
                result: "Fim das planilhas de comissão. Parceiro acompanha em tempo real, sem cobrar o time.",
              },
              {
                area: "Portal do Colaborador",
                flow: "Colaborador solicita férias → Gestor aprova no portal → RH é notificado → Sistema registra",
                result: "Processo 100% digital. Sem papel, sem e-mail perdido, com auditoria.",
              },
              {
                area: "Portal do Fornecedor",
                flow: "Fornecedor envia NF no portal → Validação automática → Financeiro recebe → Pagamento agendado",
                result: "Elimina digitação de NF. Reduz erros e acelera o ciclo de pagamento.",
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
              O que você precisa saber antes de construir seu portal corporativo.
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
            Pronto para centralizar a comunicação da sua empresa?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto de portal corporativo. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender quem precisa de acesso ao quê — e como isso pode virar um ativo digital da sua empresa.
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