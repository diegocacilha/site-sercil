import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sistemas Web Sob Medida | Sercil",
  description:
    "Desenvolvimento de sistemas web personalizados para automatizar processos, reduzir custos e escalar o negócio. Método em 30 dias, código-fonte seu e integração com seu ERP.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/sistemas-web-sob-medida",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sistemas Web Sob Medida | Sercil",
    description:
      "Desenvolvimento de sistemas web personalizados para automatizar processos, reduzir custos e escalar o negócio. Método em 30 dias, código-fonte seu e integração com seu ERP.",
    url: "https://www.sercil.com.br/servicos/sistemas-web-sob-medida",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil",
  },
  keywords: [
    "sistemas web sob medida",
    "sistema web personalizado",
    "desenvolvimento de sistemas",
    "desenvolvimento de software sob medida",
    "software house",
    "fábrica de software",
    "sistema personalizado para empresas",
    "desenvolvimento web",
    "sistema de gestão sob medida",
    "ERP sob medida",
    "sistema sob demanda",
    "aplicação web personalizada",
    "software personalizado",
    "substituir planilhas por sistema",
    "eliminar processos manuais",
    "escalabilidade de sistemas",
    "código-fonte próprio",
    "entrega por capítulos",
    "primeiro módulo em 30 dias",
    "evolução semanal",
    "sistema integrado com ERP",
    "sistema integrado com CRM",
    "integração de sistemas",
    "automação de processos",
    "backoffice sob medida",
    "dashboards e relatórios",
    "portais corporativos",
    "marketplace sob medida",
    "aplicações web específicas",
    "sistema para controle de estoque",
    "sistema de gestão de projetos",
    "sistema de agendamento",
    "cálculo de comissões",
    "desenvolvimento ágil",
    "sem lock-in tecnológico",
  ],
};

const faqItems = [
  {
    q: "Qual a diferença entre um sistema sob medida e um software de prateleira?",
    a: "Um software de prateleira (SaaS ou ERP fechado) é feito para o mercado em geral e obriga sua empresa a se adaptar ao que ele oferece. Um sistema sob medida é construído a partir das suas regras de negócio — ele se adapta à sua operação, e não o contrário. Você não paga por funcionalidades que não usa e não fica preso a reajustes anuais de licença.",
  },
  {
    q: "Quanto tempo leva para ter o sistema no ar?",
    a: "Seguindo nosso método de entrega por capítulos, o primeiro módulo funcional costuma ir ao ar em 30 dias. Você começa a usar antes do sistema estar 100% completo, e as funcionalidades evoluem semanalmente com base no uso real da equipe.",
  },
  {
    q: "O código-fonte fica com a minha empresa?",
    a: "Sim. Todo o código-fonte, a documentação e a arquitetura são seus. Se amanhã você quiser tocar o projeto com sua equipe interna ou trocar de parceiro, nada te prende. Esse é um princípio da Sercil — não trabalhamos com aprisionamento tecnológico.",
  },
  {
    q: "Funciona com meu ERP, CRM e outras ferramentas atuais?",
    a: "Sim. O sistema sob medida é construído para se integrar ao que você já usa: ERP, CRM, gateways de pagamento, WhatsApp, planilhas, e-mails e sistemas legados. As integrações são feitas via API, banco de dados ou automação de interface (RPA), quando necessário.",
  },
  {
    q: "Como é o investimento? E se eu precisar de melhorias depois da entrega?",
    a: "Cobramos por projeto, com escopo definido após o diagnóstico — você sabe exatamente o que recebe e quando. Após a entrega, oferecemos planos de evolução contínua com melhorias semanais, ou você pode seguir com sua própria equipe usando o código que já é seu.",
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
      "@id": "https://www.sercil.com.br/servicos/sistemas-web-sob-medida/#webpage",
      "url": "https://www.sercil.com.br/servicos/sistemas-web-sob-medida",
      "name": "Sistemas Web Sob Medida | Sercil",
      "description": "Desenvolvimento de sistemas web personalizados para automatizar processos, reduzir custos e escalar o negócio. Método em 30 dias, código-fonte seu e integração com seu ERP.",
      "inLanguage": "pt-BR",
      "isPartOf": { "@id": "https://www.sercil.com.br/#website" }
    },
    {
      "@type": "Service",
      "@id": "https://www.sercil.com.br/servicos/sistemas-web-sob-medida/#service",
      "name": "Sistemas Web Sob Medida",
      "serviceType": "Desenvolvimento de Software e Sistemas Web Sob Medida",
      "description": "Desenvolvemos sistemas web personalizados com método de entrega por capítulos (primeiro módulo em 30 dias), código-fonte e arquitetura do cliente, integração com ERP, CRM e APIs externas, e evolução semanal com base no uso real da equipe.",
      "provider": { "@id": "https://www.sercil.com.br/#organization" },
      "areaServed": { "@type": "Country", "name": "Brasil" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sercil.com.br/servicos/sistemas-web-sob-medida/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sercil.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.sercil.com.br/servicos" },
        { "@type": "ListItem", "position": 3, "name": "Sistemas Web Sob Medida" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sercil.com.br/servicos/sistemas-web-sob-medida/#faq",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    }
  ]
};

export default function SistemasWebSobMedidaPage() {
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Dashboard de sistema web em um laptop"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Desenvolvimento Sob Medida
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Sistemas Web que trabalham <span className="text-blue-400">do jeito que sua empresa precisa</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Chega de planilhas manuais e softwares engessados. Criamos soluções digitais exclusivas para automatizar seus processos, centralizar informações e dar escala ao seu negócio — com o código-fonte e a arquitetura nas suas mãos.
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
              Sua operação ainda depende de processos manuais?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sistemas genéricos não acompanham a complexidade do seu negócio. O resultado é retrabalho, erros e falta de visibilidade. O problema não é a sua operação — é a ferramenta que não foi feita para ela.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Processos engessados",
                desc: "Softwares de prateleira obrigam você a mudar a operação para caber no sistema — e não o contrário.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
              },
              {
                title: "Dados espalhados",
                desc: "Informações críticas em planilhas, e-mails e anotações. Difícil tomar decisões sem uma visão unificada do negócio.",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
              },
              {
                title: "Custo de licenças",
                desc: "Pagar por funcionalidades que você não usa e ainda ficar refém de reajustes anuais de licença.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Retrabalho diário",
                desc: "A mesma informação é digitada em 2, 3 ou 4 lugares diferentes. Ninguém tem certeza de qual versão está correta.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Dependência do dono",
                desc: "Se o dono ou o responsável pelo processo tira férias, a operação trava. O conhecimento não está no sistema — está na cabeça de alguém.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Sem visão em tempo real",
                desc: "Você só descobre o resultado do mês no fechamento contábil. Sem dados em tempo real, decisão vira aposta.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
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
                A solução certa para o seu desafio
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Desenvolvemos do zero, ouvindo suas regras de negócio. O sistema se adapta à sua empresa — e você fica com o código, a documentação e a arquitetura nas mãos.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Automação de tarefas repetitivas e redução de erros operacionais.",
                  "Painéis e relatórios em tempo real para decisões baseadas em dados.",
                  "Integração com ERPs, CRMs, gateways de pagamento e APIs externas.",
                  "Acesso seguro e controle de permissões por usuário ou departamento.",
                  "Escalabilidade: o sistema cresce junto com a sua demanda.",
                  "Código-fonte, documentação e arquitetura são seus ao final da entrega.",
                  "Entrega por capítulos — primeiro módulo no ar em até 30 dias.",
                  "Evolução semanal com base no uso real da equipe, sem engessar o roadmap.",
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
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Gráficos e dashboards em uma tela de computador"
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
              { value: "30 dias", label: "para o primeiro módulo no ar" },
              { value: "100%", label: "do código-fonte é seu ao final" },
              { value: "-80%", label: "no tempo gasto em tarefas manuais" },
              { value: "0", label: "aprisionamento tecnológico ou lock-in" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-blue-400">{item.value}</div>
                <div className="mt-2 text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Sistema */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              O que podemos construir para você?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada negócio tem um desafio diferente. Estes são os tipos de sistemas que já desenvolvemos — o seu pode ser o próximo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sistemas de Gestão",
                desc: "Backoffices, ERPs sob medida e painéis administrativos que centralizam as regras do seu negócio com controle de permissões e auditoria.",
              },
              {
                title: "Portais Corporativos",
                desc: "Áreas exclusivas para clientes, parceiros e colaboradores com autenticação SSO, autoatendimento e integrações.",
              },
              {
                title: "Plataformas de Automação",
                desc: "Fluxos automatizados entre sistemas, robôs de software (RPA) e orquestração de processos internos.",
              },
              {
                title: "Dashboards e Analytics",
                desc: "Painéis interativos com dados em tempo real de múltiplas fontes, indicadores gerenciais e alertas automáticos.",
              },
              {
                title: "Marketplaces e Plataformas",
                desc: "Ambientes de intermediação com cadastro de usuários, negociação, pagamentos, reputação e regras de negócio complexas.",
              },
              {
                title: "Aplicações Web Específicas",
                desc: "Ferramentas internas sob medida: controle de estoque, gestão de projetos, sistemas de agendamento, cálculo de comissões e mais.",
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
              Sua empresa está pedindo um sistema sob medida?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Se você se identifica com 3 ou mais dos sinais abaixo, está na hora de conversar sobre um sistema personalizado.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Você usa 5+ ferramentas diferentes que não conversam entre si.",
              "Sua equipe exporta e importa planilhas todos os dias para integrar dados.",
              "Você paga por um software onde só usa 20% das funcionalidades.",
              "Já tentou adaptar sua operação a um sistema e desistiu por engessamento.",
              "Você não consegue ter relatório gerencial sem pedir para o TI.",
              "O conhecimento da operação está na cabeça de 1 ou 2 pessoas.",
              "Você já perdeu cliente por erro operacional ou demora no atendimento.",
              "Sua operação cresceu, mas a ferramenta atual não acompanha mais.",
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
              Sistemas que já entregamos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos reais de soluções sob medida que transformaram a operação dos nossos clientes. O seu desafio pode ser o próximo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                area: "Distribuição",
                flow: "Pedido no WhatsApp → Sistema registra → Estoque atualiza → NF emitida → Cliente recebe rastreio",
                result: "Elimina digitação manual e reduz o tempo de faturamento de horas para minutos.",
              },
              {
                area: "Serviços",
                flow: "Cliente agenda no portal → Técnico é alocado → Checklist é preenchido → Relatório é enviado automaticamente",
                result: "Fim das planilhas de agendamento. Visibilidade total da operação em campo.",
              },
              {
                area: "Indústria",
                flow: "Matéria-prima entra → Sistema atualiza estoque → Ordem de produção é gerada → Gestor acompanha pelo painel",
                result: "Controle de produção em tempo real. Redução drástica de ruptura e desperdício.",
              },
              {
                area: "Financeiro",
                flow: "Venda é registrada → Sistema calcula comissão → Portal do vendedor exibe extrato → Financeiro agenda pagamento",
                result: "Fim das planilhas de comissão. Vendedor acompanha em tempo real, sem cobrar o RH.",
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
              O que você precisa saber antes de construir um sistema sob medida.
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
            Pronto para ter um sistema que resolve?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender onde sua operação perde tempo hoje — e como um sistema sob medida pode devolver o controle para você.
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