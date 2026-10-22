import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sercil | Automação de Processos",
  description: "Elimine tarefas manuais, reduza erros e ganhe eficiência com a automação de processos. Integramos sistemas e criamos fluxos de trabalho inteligentes para sua empresa.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/automacao-de-processos",
  },
};

export default function AutomacaoDeProcessosPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Circuito eletrônico e tecnologia representando automação"
            fill
            className="object-cover"
            priority
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
              Libere sua equipe para o que realmente importa. Criamos fluxos automatizados, robôs de software (RPA) e integrações entre sistemas para eliminar tarefas manuais, reduzir erros e acelerar a sua operação.
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
              Processos manuais geram gargalos, custam caro e afastam seus profissionais de atividades estratégicas.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Erros humanos",
                desc: "Copiar e colar dados entre planilhas ou sistemas está sujeito a falhas que geram retrabalho e prejuízos.",
              },
              {
                title: "Baixa produtividade",
                desc: "Horas são gastas em envio de e-mails, emissão de relatórios e atualizações de cadastros todos os dias.",
              },
              {
                title: "Informações atrasadas",
                desc: "Sem automação, os dados demoram a chegar aos gestores, atrasando a tomada de decisão.",
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
                Eficiência que você pode medir
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Mapeamos seus processos e aplicamos a tecnologia certa para fazer o trabalho pesado de forma 24/7, sem pausas e sem erros.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Redução de até 80% no tempo gasto em tarefas manuais.",
                  "Integração fluida entre ERPs, CRMs, e-mails e sistemas legados.",
                  "Robôs (RPA) para automatizar rotinas de emissão de notas e conciliação.",
                  "Notificações automáticas via WhatsApp, e-mail ou Slack.",
                  "Geração automática de relatórios e dashboards atualizados.",
                  "Redução significativa de custos operacionais.",
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
              />
            </div>
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
              Praticamente qualquer processo digital que siga um padrão e gere trabalho manual pode ser automatizado.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Fluxos Financeiros",
                desc: "Conciliação bancária, emissão de boletos, integração com gateways de pagamento e envio de notas fiscais.",
              },
              {
                title: "Comunicação e Alertas",
                desc: "Disparos automáticos de e-mails, mensagens no WhatsApp, alertas de estoque e notificações de prazos.",
              },
              {
                title: "Integração de Sistemas",
                desc: "Sincronização de dados entre CRM, ERP, e-commerce e plataformas de atendimento sem intervenção humana.",
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
            Pronto para deixar sua operação no piloto automático?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto de automação. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender como podemos ajudar.
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