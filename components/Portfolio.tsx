"use client";

import { useState } from "react";
import DashboardModal from "./DashboardModal";

const projects = [
  {
    title: "Dashboard de Análise de Dados",
    category: "Business Intelligence",
    description:
      "Plataforma para visualização de métricas e KPIs em tempo real.",
    imagePlaceholder: "📊",
    hasDemo: true, // Ativa o botão de demonstração
  },
  {
    title: "Sistema de Gestão Interna",
    category: "ERP",
    description:
      "Controle de estoque, vendas e financeiro integrado para empresas.",
    imagePlaceholder: "🏢",
    hasDemo: false,
  },
  {
    title: "Portal de Atendimento ao Cliente",
    category: "SaaS",
    description: "Automação de suporte com chatbot e base de conhecimento.",
    imagePlaceholder: "💬",
    hasDemo: false,
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-4">
              Cases de sucesso
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Projetos que entregaram valor real para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-5xl">
                  {project.imagePlaceholder}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary mb-4">{project.description}</p>
                  
                  {/* Botão condicional para demonstração */}
                  <div className="mt-auto">
                    {project.hasDemo ? (
                      <button
                        onClick={() => setSelectedProject(project.title)}
                        className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                      >
                        Ver demonstração ao vivo
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    ) : (
                      <span className="text-sm text-muted">Demonstração em breve</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted text-sm">
              Esta seção será atualizada em breve com mais projetos detalhados.
            </p>
          </div>
        </div>
      </section>

      {/* Modal do Dashboard - abre quando o projeto correto é selecionado */}
      <DashboardModal
        isOpen={selectedProject === "Dashboard de Análise de Dados"}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}