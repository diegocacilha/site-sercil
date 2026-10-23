import type { Metadata } from "next";
import Image from "next/image";
import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";

export const metadata: Metadata = {
  title: "Sercil | Portais Corporativos",
  description:
    "Desenvolvimento de portais corporativos para clientes, parceiros e colaboradores, com autenticação, permissões e integrações. Centralize a comunicação e os processos da sua organização.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/portais-corporativos",
  },
};

export default function PortaisCorporativosPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Escritório corporativo moderno com colaboradores trabalhando"
            fill
            className="object-cover"
            priority
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
              Criamos portais corporativos seguros e integrados que centralizam a comunicação com clientes, parceiros e colaboradores — com autenticação, controle de permissões e integrações com os sistemas que você já usa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contato"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#tipos"
                className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                Tipos de Portal
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
              Sua empresa ainda comunica de forma fragmentada?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quando informações ficam espalhadas em e-mails, planilhas e ferramentas desconectadas, a produtividade cai e o risco aumenta.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Comunicação fragmentada",
                desc: "Avisos, documentos e processos circulam por canais diferentes. Cada pessoa acessa uma versão diferente da verdade.",
              },
              {
                title: "Acessos sem controle",
                desc: "Sem autenticação unificada e permissões bem definidas, dados sensíveis ficam expostos a quem não deveria vê-los.",
              },
              {
                title: "Sistemas desconectados",
                desc: "ERP, CRM, RH e financeiro não conversam entre si. Reintegrar cada novo sistema vira um projeto caro e demorado.",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe corporativa reunida em torno de uma mesa discutindo estratégias"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Tudo o que sua organização precisa em um só lugar
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Um portal corporativo bem projetado é a espinha dorsal digital da sua empresa: seguro, integrado e escalável.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Autenticação única (SSO) e controle granular de permissões por perfil.",
                  "Área personalizada para clientes, parceiros e colaboradores.",
                  "Integração com ERPs, CRMs, RH, financeiro e APIs externas.",
                  "Gestão documental, comunicados, chamados e workflows internos.",
                  "Dashboards e relatórios com dados consolidados em tempo real.",
                  "Conformidade com LGPD e boas práticas de segurança.",
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

      {/* Tipos de Portal */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Um portal para cada público
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada audiência tem necessidades próprias. Projetamos portais específicos, ou um único ambiente com áreas segregadas por perfil.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
            Pronto para centralizar a comunicação da sua empresa?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre o seu projeto de portal corporativo. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender como podemos ajudar.
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