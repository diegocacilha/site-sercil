const projects = [
  {
    title: "Dashboard de Análise de Dados",
    category: "Business Intelligence",
    description:
      "Plataforma para visualização de métricas e KPIs em tempo real.",
    imagePlaceholder: "📊",
  },
  {
    title: "Sistema de Gestão Interna",
    category: "ERP",
    description:
      "Controle de estoque, vendas e financeiro integrado para empresas.",
    imagePlaceholder: "🏢",
  },
  {
    title: "Portal de Atendimento ao Cliente",
    category: "SaaS",
    description: "Automação de suporte com chatbot e base de conhecimento.",
    imagePlaceholder: "💬",
  },
];

export default function Portfolio() {
  return (
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
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-5xl">
                {project.imagePlaceholder}
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-primary mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary">{project.description}</p>
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
  );
}