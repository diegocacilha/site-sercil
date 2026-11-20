"use client";
import Link from "next/link";

// TODO: preencha com seus dados reais
const FOUNDER_NAME = "Diego A. Cacilha";
const FOUNDER_ROLE = "Fundador da Sercil";
const FOUNDER_INITIALS = "Sercil";
// Quando tiver uma foto em /public (ex.: /public/fundador.jpg), troque o
// bloco do avatar por <Image src="/fundador.jpg" ... /> do next/image.

const guarantees = [
  {
    title: "Veja antes de pagar",
    desc: "Em até 24h você recebe o protótipo do seu sistema, desenhado em cima do seu processo real.",
  },
  {
    title: "Diagnóstico em 7 dias",
    desc: "Você descobre onde o processo trava antes de investir em desenvolvimento.",
  },
  {
    title: "Entrega semanal",
    desc: "Toda semana uma melhoria com base no uso real. Você acompanha cada etapa.",
  },
  {
    title: "O código é seu",
    desc: "Código-fonte e documentação entregues. Se quiser tocar sozinho ou trocar de parceiro, nada te prende.",
  },
];

export default function Garantias() {
  return (
    <section id="garantias" className="bg-zinc-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Risco baixo, por desenho
          </span>
          <h2 className="text-3xl font-semibold leading-[1.15] text-zinc-900 sm:text-4xl">
            Você não precisa confiar em promessa. Precisa ver.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Em vez de pedir um voto de confiança, reduzimos o risco em cada
            etapa: você vê o sistema antes de pagar e nunca fica preso a nós.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quem está por trás */}
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-zinc-900 p-8 sm:flex-row sm:items-start lg:p-10">
          <div
            aria-hidden="true"
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl font-semibold text-white"
          >
            {FOUNDER_INITIALS}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg leading-relaxed text-zinc-200">
              &ldquo;Há mais de 5 anos desenvolvo sistemas web para empresas.
              Por isso a Sercil começa pelo seu processo e não pelo código: eu
              desenho o fluxo, mostro o protótipo e só depois você decide se
              vale seguir.&rdquo;
            </p>
            <p className="mt-4 font-semibold text-white">{FOUNDER_NAME}</p>
            <p className="text-sm text-zinc-400">{FOUNDER_ROLE}</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 font-medium text-white shadow-lg transition-colors hover:bg-blue-500"
          >
            Quero ver um protótipo grátis
          </Link>
        </div>
      </div>
    </section>
  );
}