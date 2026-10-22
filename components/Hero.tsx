import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Imagem de Fundo Nítida (Estilo Inline para garantir exibição) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
          alt="Ambiente de escritório moderno"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradiente para garantir a leitura do texto à esquerda, mantendo o lado direito da imagem visível */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(15, 23, 42, 0.2) 100%)',
            zIndex: 1
          }}
        />
      </div>

      {/* Conteúdo - zIndex relativo para ficar acima da imagem */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-green-400 text-sm font-medium mb-8 border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Software House especializada
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance leading-tight mb-6">
            Transformamos ideias em{" "}
            <span className="text-blue-400">sistemas que geram resultados</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 text-balance">
            Desenvolvimento de aplicações web sob medida para empresas que
            buscam eficiência, escalabilidade e uma presença digital robusta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/servicos" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-lg"            >
              Nossos Serviços
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
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 backdrop-blur-md transition-colors"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-24 max-w-2xl">
          <div className="flex flex-wrap gap-8 sm:gap-12 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
            <div>
              <div className="text-3xl font-semibold text-white">5+</div>
              <div className="text-sm text-gray-400">anos de experiência</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">20+</div>
              <div className="text-sm text-gray-400">projetos entregues</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">100%</div>
              <div className="text-sm text-gray-400">clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}