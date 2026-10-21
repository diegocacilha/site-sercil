import Metodologia from "@/components/Metodologia";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sistemas Web Sob Medida | Sercil",
  description: "Desenvolvimento de sistemas web personalizados para automatizar processos, reduzir custos e escalar o seu negócio. Conheça nossa metodologia.",
  alternates: {
    canonical: "https://www.sercil.com.br/servicos/sistemas-web-sob-medida",
  },
};

export default function SistemasWebSobMedidaPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Dashboard de sistema web em um laptop"
            fill
            className="object-cover"
            priority
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
              Chega de planilhas manuais e softwares engessados. Criamos soluções digitais exclusivas para automatizar seus processos, centralizar informações e dar escala ao seu negócio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contato"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Entre em Contato
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
              Sua operação ainda depende de processos manuais?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sistemas genéricos não acompanham a complexidade do seu negócio. O resultado é retrabalho, erros e falta de visibilidade.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Processos engessados",
                desc: "Softwares de prateleira obrigam você a mudar a operação para caber no sistema, e não o contrário.",
              },
              {
                title: "Dados espalhados",
                desc: "Informações críticas em planilhas, e-mails e anotações. Difícil tomar decisões sem uma visão unificada.",
              },
              {
                title: "Custo de licenças",
                desc: "Pagar por funcionalidades que você não usa e ainda ficar refém de reajustes anuais.",
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
                A solução certa para o seu desafio
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Desenvolvemos do zero, ouvindo suas regras de negócio. O sistema se adapta à sua empresa, e não o contrário.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Automação de tarefas repetitivas e redução de erros operacionais.",
                  "Painéis e relatórios em tempo real para decisões baseadas em dados.",
                  "Integração com ERPs, CRMs, gateways de pagamento e APIs externas.",
                  "Acesso seguro e controle de permissões por usuário ou departamento.",
                  "Escalabilidade: o sistema cresce junto com a sua demanda.",
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
              />
            </div>
          </div>
        </div>
      </section>

      <Metodologia />

      {/* Tecnologias */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Tecnologias modernas e escaláveis</h2>
          <p className="mt-2 text-gray-400">
            Utilizamos stacks consolidadas no mercado para garantir performance e segurança.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
            {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Vercel", "Docker", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="rounded-full border border-gray-700 bg-gray-800 px-4 py-2">
                {tech}
              </span>
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
            Vamos conversar sobre o seu projeto. Sem compromisso, sem jargão técnico. Apenas uma conversa para entender como podemos ajudar.
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