import Metodologia from "@/components/Metodologia";
import Tecnologias from "@/components/Tecnologias";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Backoffice e Painéis Administrativos | Sercil",
  description: "Otimize a gestão interna da sua empresa com backoffices e painéis administrativos sob medida. Centralize dados, automatize aprovações e tenha controle total das operações.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/backoffice-e-paineis-administrativos",
  },
};

export default function BackofficePaineisAdministrativosPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
            alt="Ambiente de trabalho corporativo focado em gestão e administração"
            fill
            className="object-cover"
            priority
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
              Substitua planilhas e processos manuais por um backoffice seguro e intuitivo. Criamos painéis administrativos que centralizam as regras do seu negócio, automatizam aprovações e dão visibilidade total aos gestores.
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
              Sua gestão interna está sobrecarregada?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quando a operação depende de processos desconexos, a equipe perde tempo com burocracia e os gestores perdem o controle.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Aprovações lentas",
                desc: "Fluxos de aprovação e solicitações por e-mail ou papel travam a operação e geram incertezas sobre o andamento.",
              },
              {
                title: "Controle de acessos falho",
                desc: "Sem um sistema central, é difícil saber quem tem permissão para ver ou editar cada tipo de informação sensível.",
              },
              {
                title: "Falta de rastreabilidade",
                desc: "Sem logs ou histórico, é impossível saber quem alterou o quê, quando, e identificar a origem de erros operacionais.",
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe administrativa colaborando em um ambiente de escritório"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Regras de negócio aplicadas com perfeição
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Desenvolvemos o coração do seu sistema. Um ambiente seguro para colaboradores gerenciarem dados, clientes e processos, sem contato direto com o banco de dados.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Gestão de usuários, papéis e permissões de acesso (RBAC).",
                  "Fluxos de aprovação e workflow customizados por área.",
                  "Histórico completo de auditoria (logs de ações).",
                  "CRUDs complexos com validação de dados e regras de negócio.",
                  "Importação e exportação de dados em lote (Excel/CSV).",
                  "Design responsivo e interface focada na produtividade da equipe.",
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

      {/* Módulos Administrativos */}
      <section id="tipos" className="section-bg w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              O que podemos gerenciar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada empresa tem suas particularidades, mas alguns módulos são fundamentais para uma operação administrativa eficiente.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
            Pronto para profissionalizar a sua gestão interna?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre as necessidades do seu backoffice. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender como podemos ajudar.
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