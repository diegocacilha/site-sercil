"use client";
// components/ProductivityStory.tsx - Meio de funil Sercil
export default function ProductivityStory() {
  return (
    <section className="section-bg py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Lado Esquerdo - A História */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-white border border-zinc-200 text-zinc-600 rounded-full mb-4">
              Por que existimos
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 leading-[1.15]">
              Sua empresa cresceu.<br/>
              Seu controle não acompanhou.
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Você tem venda no WhatsApp, financeiro em uma planilha, estoque em outro sistema. Nada conversa entre si.
              <br/><br/>
              Resultado: você não tem relatório gerencial, tem retrabalho. Não tem produtividade, tem dependência do dono para tudo.
              <br/><br/>
              <span className="font-semibold text-zinc-900">A Sercil existe para transformar caos em fluxo visível.</span>
            </p>
          </div>

          {/* Lado Direito - Os 3 Pilares de Produtividade */}
          <div className="space-y-4">
            
            <div className="bg-white p-7 rounded-2xl border border-zinc-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-semibold text-zinc-900">1. Monitoramento de Fluxos</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Mapeamos onde seu processo trava. Quanto tempo um pedido leva do orçamento até a entrega? Onde a equipe perde mais tempo? Você vê o gargalo, não só sente ele.
              </p>
              <div className="mt-4 text-xs font-mono bg-zinc-50 border border-zinc-100 p-2 rounded-lg text-zinc-500">
                Ex: Orçamento → Aprovação → Produção → Entrega → Financeiro
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-zinc-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <h3 className="font-semibold text-zinc-900">2. Integração entre Sistemas</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Seu WhatsApp, seu ERP, sua planilha e seu gateway de pagamento conversando entre si. Chega de digitar a mesma coisa 3 vezes. Um dado entra uma vez e alimenta tudo.
              </p>
            </div>

            <div className="bg-zinc-900 p-7 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="font-semibold">3. Relatórios que geram decisão</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Não é relatório bonito. É resposta para: O que mais dá lucro? Qual vendedor vende mais? Onde estou perdendo dinheiro? Você para de decidir no escuro.
              </p>
              <p className="mt-4 text-xs font-bold tracking-widest uppercase text-emerald-400">→ De operador para dono de novo</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}