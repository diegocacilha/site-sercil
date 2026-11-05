import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Automação de Processos | Sercil — Elimine tarefas manuais da sua operação",
  description: "Automatize tarefas manuais, integre ERP, CRM e WhatsApp e elimine retrabalho. RPA, integrações e fluxos inteligentes. Diagnóstico gratuito em 20 minutos com a Sercil.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/automacao-de-processos",
  },
};

const faqItems = [
  {
    q: "Preciso trocar meu ERP ou meu sistema atual?",
    a: "Não. Nossa automação é construída para se integrar ao que você já usa. Trabalhamos com as principais plataformas de mercado e também com sistemas legados via APIs, bancos de dados ou automação de interface (RPA).",
  },
  {
    q: "Quanto tempo leva para automatizar um processo?",
    a: "Depende da complexidade, mas a maioria dos primeiros fluxos fica no ar em 2 a 4 semanas. Na etapa de diagnóstico, mapeamos o processo, definimos prioridades e entregamos um cronograma detalhado.",
  },
  {
    q: "Minha empresa é pequena. Vale a pena investir em automação?",
    a: "Sim. Justamente nas pequenas empresas cada hora economizada faz diferença. Automações pontuais — como emissão de notas, conciliação bancária ou follow-up de vendas — costumam se pagar em poucos meses.",
  },
  {
    q: "O código-fonte fica comigo?",
    a: "Sim. Todo o código-fonte e a documentação são seus. Você não fica preso a nenhum fornecedor e pode evoluir o sistema com sua equipe ou outro parceiro quando quiser.",
  },
  {
    q: "Como funciona o investimento?",
    a: "Cobramos por projeto, com escopo definido após o diagnóstico. Você sabe exatamente o que recebe e quando. Também oferecemos planos de evolução contínua, caso queira adicionar novos fluxos ao longo do tempo.",
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

export default function AutomacaoDeProcessosPage() {
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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Circuito eletrônico e tecnologia representando automação"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Automação de Processos
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Deixe a tecnologia cuidar do <span className="text-blue-400">trabalho repetitivo</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Criamos fluxos automatizados, robôs de software (RPA) e integrações entre sistemas para eliminar tarefas manuais, reduzir erros e acelerar sua operação. Sua equipe volta a fazer o que gera receita — e você recupera o controle do negócio.
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
              Quanto tempo sua equipe perde com tarefas repetitivas?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Processos manuais geram gargalos, custam caro e afastam seus profissionais de atividades estratégicas. O problema quase nunca é a equipe — é o processo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Erros humanos",
                desc: "Copiar e colar dados entre planilhas ou sistemas está sujeito a falhas que geram retrabalho, prejuízos e desgaste no time.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
              },
              {
                title: "Baixa produtividade",
                desc: "Horas são gastas em envio de e-mails, emissão de relatórios e atualizações de cadastros todos os dias — trabalho que uma máquina faria em segundos.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Informações atrasadas",
                desc: "Sem automação, os dados demoram a chegar aos gestores. Você decide com base em números de ontem — ou pior, da semana passada.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Retrabalho diário",
                desc: "A mesma informação é digitada em 2, 3 ou 4 lugares diferentes. Ninguém tem certeza de qual versão está correta.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Dependência de pessoas-chave",
                desc: "Se o responsável pelo processo tira férias, a operação trava. O conhecimento não está no sistema — está na cabeça de alguém.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Oportunidades perdidas",
                desc: "Leads esquecidos, follow-ups não enviados, prazos estourados. O custo invisível da operação manual aparece no fim do mês.",
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Eficiência que você pode medir
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Mapeamos seus processos e aplicamos a tecnologia certa para fazer o trabalho pesado de forma 24/7, sem pausas e sem erros. A automação não substitui sua equipe — ela devolve tempo para o que importa.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Redução de até 80% no tempo gasto em tarefas manuais.",
                  "Integração fluida entre ERPs, CRMs, e-mails e sistemas legados.",
                  "Robôs (RPA) para automatizar rotinas de emissão de notas e conciliação.",
                  "Notificações automáticas via WhatsApp, e-mail ou Slack.",
                  "Geração automática de relatórios e dashboards atualizados.",
                  "Redução significativa de custos operacionais.",
                  "Menos dependência de pessoas-chave — o processo fica no sistema.",
                  "Operação 24/7, mesmo fora do horário comercial.",
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe de trabalho focada em monitores de computador"
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
              { value: "-80%", label: "no tempo gasto em tarefas manuais" },
              { value: "24/7", label: "operação sem pausa e sem erro" },
              { value: "3x", label: "mais velocidade em processos-chave" },
              { value: "0", label: "retrabalho por erro de digitação" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-blue-400">{item.value}</div>
                <div className="mt-2 text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Automação */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              O que podemos automatizar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Praticamente qualquer processo digital que siga um padrão e gere trabalho manual pode ser automatizado. Estes são os fluxos mais comuns que nossos clientes pedem.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fluxos Financeiros",
                desc: "Conciliação bancária, emissão de boletos, integração com gateways de pagamento e envio de notas fiscais sem intervenção humana.",
              },
              {
                title: "Comunicação e Alertas",
                desc: "Disparos automáticos de e-mails, mensagens no WhatsApp, alertas de estoque, lembretes de prazos e notificações para o time.",
              },
              {
                title: "Integração de Sistemas",
                desc: "Sincronização de dados entre CRM, ERP, e-commerce e plataformas de atendimento. Um dado entra uma vez e alimenta tudo.",
              },
              {
                title: "Processos Comerciais",
                desc: "Propostas geradas automaticamente, follow-up de leads, atualização de pipeline e cadastro de clientes sem digitação manual.",
              },
              {
                title: "Relatórios e Dashboards",
                desc: "Relatórios gerenciais atualizados em tempo real. Você abre o painel e vê o que precisa — sem pedir para ninguém montar planilha.",
              },
              {
                title: "Backoffice e Operações",
                desc: "Rotinas de RH, controle de estoque, logística, onboarding de clientes e processos internos que hoje consomem horas da equipe.",
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
              Sua operação está pedindo automação?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Se você se identifica com 3 ou mais dos sinais abaixo, está na hora de conversar sobre automação.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Sua equipe copia e cola dados entre sistemas todos os dias.",
              "Você depende de uma única pessoa para emitir relatórios.",
              "Erros de digitação já causaram prejuízo ou retrabalho.",
              "Informações importantes chegam atrasadas ou incompletas.",
              "Alguém da equipe envia e-mails e mensagens manuais em massa.",
              "Você não consegue tirar férias sem a operação parar.",
              "O fechamento do mês vira uma maratona de planilhas.",
              "Você não tem visão em tempo real do que acontece na empresa.",
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
              Fluxos que já automatizamos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos reais de automações que economizam horas por semana nas operações dos nossos clientes. O seu processo pode ser o próximo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                area: "Comercial",
                flow: "Pedido no WhatsApp → ERP → Nota fiscal → E-mail para o cliente",
                result: "Elimina 100% da digitação manual e reduz o tempo de faturamento em até 70%.",
              },
              {
                area: "Financeiro",
                flow: "Extrato bancário → Conciliação automática → Lançamento no ERP",
                result: "Fecha o mês em horas, não em dias. Zero erro de digitação.",
              },
              {
                area: "Atendimento",
                flow: "Novo formulário → CRM → Tarefa para o vendedor → Follow-up automático em 48h",
                result: "Nenhum lead esquecido. Taxa de conversão maior.",
              },
              {
                area: "Operações",
                flow: "Estoque mínimo atingido → Alerta no WhatsApp → Pedido de compra gerado",
                result: "Sem ruptura de estoque. Sem compra de emergência.",
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
              O que você precisa saber antes de automatizar sua operação.
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
            Pronto para deixar sua operação no piloto automático?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto de automação. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender onde você perde tempo hoje — e como podemos ajudar.
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