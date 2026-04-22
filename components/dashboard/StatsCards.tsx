const stats = [
  {
    title: "Receita Total",
    value: "R$ 128.430",
    change: "+12.5%",
    trend: "up",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Novos Usuários",
    value: "2.847",
    change: "+23.1%",
    trend: "up",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Taxa de Conversão",
    value: "3.24%",
    change: "+4.3%",
    trend: "up",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Tempo Médio",
    value: "4m 32s",
    change: "-2.1%",
    trend: "down",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "orange",
  },
];

export default function StatsCards() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600" },
      green: { bg: "bg-green-50", text: "text-green-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const colorClasses = getColorClasses(stat.color);
        return (
          <div
            key={index}
            className="bg-surface rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${colorClasses.bg} flex items-center justify-center ${colorClasses.text}`}>
                {stat.icon}
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-muted">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}