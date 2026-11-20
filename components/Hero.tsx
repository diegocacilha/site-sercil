"use client";
import Link from "next/link";

const commitments = [
  {
    title: "Diagnóstico em 7 dias",
    desc: "Você enxerga onde o processo trava, antes de escrever uma linha de código.",
  },
  {
    title: "Primeiro módulo em 30 dias",
    desc: "No ar, integrado ao seu WhatsApp, planilha e ERP.",
  },
  {
    title: "O código-fonte é seu",
    desc: "Quer tocar sozinho ou trocar de parceiro? Nada te prende.",
  },
];

const scatteredTools = ["WhatsApp", "Planilha", "ERP"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Decoração de fundo (sem imagem externa) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-blue-600/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Lado esquerdo: promessa + CTA */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-green-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              Sistemas sob medida para pequenas e médias empresas
            </div>

            <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Pare de ser o integrador da sua empresa.{" "}
              <span className="text-blue-400">
                WhatsApp, planilha e ERP funcionando como um sistema só.
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-balance text-lg text-gray-300 sm:text-xl">
              Sua empresa cresceu e o controle não acompanhou. Integramos o que
              você já usa em um sistema web feito para o seu processo, e o
              código é seu.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 font-medium text-white shadow-lg transition-colors hover:bg-blue-500"
              >
                Quero ver um protótipo grátis
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Como funciona
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Sem compromisso. Você recebe o link da call e o protótipo
              desenhado em até 24h.
            </p>
          </div>

          {/* Lado direito: do "Frankenstein" ao sistema único */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Hoje
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {scatteredTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-dashed border-slate-500 px-4 py-2 text-sm text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Nada conversa entre si. Você é o único ponto de integração.
            </p>

            <div className="my-6 flex justify-center text-slate-500" aria-hidden="true">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Com a Sercil
            </p>
            <div className="mt-3 rounded-2xl bg-white p-5">
              <p className="font-semibold text-zinc-900">Um fluxo só</p>
              <p className="mt-1 text-sm text-zinc-600">
                Um dado entra uma vez e alimenta pedidos, financeiro e
                relatórios.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {scatteredTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                  >
                    {tool} ✓
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compromissos (substituem os números genéricos) */}
        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}