import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Software House especializada
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary text-balance leading-tight mb-6">
            Transformamos ideias em{" "}
            <span className="text-accent">sistemas que geram resultados</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary max-w-2xl mb-10 text-balance">
            Desenvolvimento de aplicações web sob medida para empresas que
            buscam eficiência, escalabilidade e uma presença digital robusta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              Solicitar orçamento
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-surface transition-colors"
            >
              Conheça nosso trabalho
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="flex flex-wrap gap-8 sm:gap-12">
          <div>
            <div className="text-3xl font-semibold text-primary">5+</div>
            <div className="text-sm text-muted">anos de experiência</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-primary">20+</div>
            <div className="text-sm text-muted">projetos entregues</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-primary">100%</div>
            <div className="text-sm text-muted">clientes satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
}