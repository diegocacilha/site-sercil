import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Integração Entre Aplicações | Sercil",
  description: "Conecte seus sistemas, ERPs, CRMs e APIs. Elimine silos de informação e garanta que os dados fluam de forma automática e segura entre todas as suas ferramentas.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/integracao-entre-aplicacoes",
  },
};

export default function IntegracaoDeAplicacoesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Rede global de conexões e dados digitais representando integração"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-4">
              Integração de Sistemas
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Faça seus sistemas <span className="text-blue-400">falarem a mesma língua</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Chega de retrabalho e dados duplicados. Conectamos suas ferramentas, ERPs, CRMs e APIs para que a informação flua automaticamente, de forma segura e em tempo real entre todos os setores da sua empresa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contato"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Solicitar Orçamento
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
              Seus dados estão presos em silos?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quando os sistemas não se comunicam, sua equipe perde tempo exportando e importando planilhas, e os gestores tomam decisões com dados desatualizados.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Dados duplicados",
                desc: "O mesmo cliente ou pedido cadastrado em vários lugares. A falta de sincronia gera inconsistência e confusão.",
              },
              {
                title: "Trabalho manual",
                desc: "Colaboradores gastam horas copiando e colando informações entre o CRM, o ERP e o sistema financeiro.",
              },
              {
                title: "Visão fragmentada",
                desc: "É impossível ter um panorama real do negócio quando cada departamento tem sua própria 'versão da verdade'.",
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
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                alt="Servidores e infraestrutura de rede de dados"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Um ecossistema conectado e inteligente
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Construímos pontes seguras entre suas aplicações, garantindo que a informação certa chegue ao sistema certo, no momento exato.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Sincronização de dados em tempo real ou agendada.",
                  "Integração via APIs REST, SOAP, Webhooks ou bancos de dados.",
                  "Centralização do cadastro de clientes e produtos (Single Source of Truth).",
                  "Redução drástica de erros manuais e custos operacionais.",
                  "Monitoramento e alertas em caso de falha na comunicação.",
                  "Segurança de dados com criptografia e autenticação (OAuth, Tokens).",
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

      {/* Tipos de Integração */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Conectamos o que você precisa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Seja qual for a sua stack de tecnologia, temos a solução para integrar os seus sistemas de forma moderna e escalável.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "API Gateway",
                desc: "Criamos camadas de API seguras para expor dados de sistemas legados ou modernos para outras aplicações.",
              },
              {
                title: "Webhooks e Eventos",
                desc: "Integrações orientadas a eventos onde uma ação em um sistema dispara reações automáticas em outro instantaneamente.",
              },
              {
                title: "Middleware (ESB)",
                desc: "Softwares intermediários que orquestram a comunicação e transformação de dados entre múltiplos sistemas complexos.",
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
            Pronto para unificar a sua operação?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto de integração. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender como podemos conectar seus sistemas.
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