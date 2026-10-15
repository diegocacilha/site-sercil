"use client";

import { useState } from "react";
import { sendContactEmail } from "@/actions/sendContact";

// components/FutureStory.tsx - Fundo de funil Sercil
export default function FutureStory() {
    const [processo, setProcesso] = useState("");
    const [como, setComo] = useState("");
    const [cel, setCel] = useState("");
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!cel.trim()) {
            setFeedback({ type: "error", message: "Informe seu WhatsApp para continuar." });
            return;
        }

        setLoading(true);
        setFeedback(null);

        const result = await sendContactEmail({
            processo: `${processo}`,
            como: `${como}`,
            cel: `${cel}`,
        });

        setLoading(false);

        if (result.success) {
            setFeedback({ type: "success", message: "Recebemos seu contato! Em até 24h enviaremos o protótipo e o link da call." });
            setProcesso("");
            setComo("");
            setCel("");
        } else {
            setFeedback({ type: "error", message: result.message || "Não foi possível enviar. Tente novamente." });
        }
    }

    return (
        <section id="contato" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-zinc-900 rounded-[32px] p-8 lg:p-12 overflow-hidden relative">

                    {/* Background decorativo */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

                    {/* Lado Esquerdo - Formulário do Futuro */}
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white text-black rounded-full mb-4">
                            Simulação gratuita
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.1]">
                            Veja como seu sistema funcionaria na prática, antes de pagar.
                        </h2>
                        <p className="mt-4 text-zinc-400 text-[15px] leading-relaxed">
                            Esquece formulário de "orçamento". Me diz onde você perde tempo hoje e em 20min de call eu desenho o fluxo, a integração e o relatório que te daria produtividade de volta.
                        </p>

                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Qual processo hoje te consome mais tempo?</label>
                                <select
                                    value={processo}
                                    onChange={(e) => setProcesso(e.target.value)}
                                    className="mt-2 w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-white transition"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="pedidos">Controle de pedidos / OS</option>
                                    <option value="financeiro">Financeiro e cobrança</option>
                                    <option value="estoque">Estoque e produção</option>
                                    <option value="agendamento">Agendamento e atendimento</option>
                                    <option value="relatorio">Relatórios e integração de sistemas</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Como você faz hoje?</label>
                                <div className="mt-2 grid grid-cols-3 gap-2">
                                    {["Planilha", "WhatsApp", "Sistema pronto"].map((item) => (
                                        <label key={item} className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="como-faz"
                                                value={item}
                                                checked={como === item}
                                                onChange={(e) => setComo(e.target.value)}
                                                className="peer sr-only"
                                            />
                                            <div className="text-center py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition">
                                                {item}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Seu WhatsApp</label>
                                <input
                                    type="tel"
                                    value={cel}
                                    onChange={(e) => setCel(e.target.value)}
                                    placeholder="(47) 9 9999-9999"
                                    className="mt-2 w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-white transition"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded-full text-sm hover:bg-zinc-200 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Enviando..." : "Quero ver um protótipo do meu sistema →"}
                            </button>

                            {feedback && (
                                <p
                                    className={`text-center text-[12px] ${feedback.type === "success" ? "text-emerald-400" : "text-red-400"
                                        }`}
                                >
                                    {feedback.message}
                                </p>
                            )}

                            <p className="text-center text-[11px] text-zinc-500">
                                Sem spam. Você recebe o link da call + protótipo desenhado em 24h.
                            </p>
                        </form>
                    </div>

                    {/* Lado Direito - Simulação Visual do Futuro */}
                    <div className="relative z-10 lg:pl-8">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-800">
                            {/* Header fake do sistema */}
                            <div className="bg-zinc-50 border-b border-zinc-100 px-5 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[11px] font-mono text-zinc-400">seu-sistema.sercil.com.br</div>
                            </div>

                            {/* Conteúdo fake - muda com base no select */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-semibold text-zinc-900">
                                        {processo === "pedidos" ? "Fluxo de Pedidos" :
                                            processo === "financeiro" ? "Relatório Financeiro" :
                                                processo === "estoque" ? "Controle de Estoque" :
                                                    processo === "agendamento" ? "Agenda do Dia" : "Painel de Produtividade"}
                                    </h4>
                                    <span className="text-[10px] px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">AO VIVO</span>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-zinc-50 p-3 rounded-xl">
                                        <div className="text-[10px] text-zinc-500 uppercase">Tempo salvo</div>
                                        <div className="font-bold text-zinc-900 mt-1">22h/sem</div>
                                    </div>
                                    <div className="bg-zinc-50 p-3 rounded-xl">
                                        <div className="text-[10px] text-zinc-500 uppercase">Erro zero</div>
                                        <div className="font-bold text-zinc-900 mt-1">-90%</div>
                                    </div>
                                    <div className="bg-zinc-900 p-3 rounded-xl">
                                        <div className="text-[10px] text-zinc-400 uppercase">Integração</div>
                                        <div className="font-bold text-white mt-1">100%</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="h-3 bg-zinc-100 rounded-full w-full"></div>
                                    <div className="h-3 bg-zinc-100 rounded-full w-5/6"></div>
                                    <div className="h-10 bg-zinc-900 rounded-xl w-full mt-4 flex items-center justify-center text-xs text-white">Relatório gerado automaticamente</div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-center text-xs text-zinc-500">
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}