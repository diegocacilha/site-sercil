const activities = [
  {
    user: "Ana Silva",
    action: "realizou uma compra",
    value: "R$ 1.299,90",
    time: "5 min atrás",
    avatar: "AS",
  },
  {
    user: "Carlos Mendes",
    action: "criou uma nova conta",
    value: "",
    time: "12 min atrás",
    avatar: "CM",
  },
  {
    user: "Patricia Lima",
    action: "atualizou o plano",
    value: "Plano Pro",
    time: "28 min atrás",
    avatar: "PL",
  },
  {
    user: "Roberto Alves",
    action: "entrou em contato",
    value: "Suporte",
    time: "1 hora atrás",
    avatar: "RA",
  },
  {
    user: "Mariana Costa",
    action: "realizou uma compra",
    value: "R$ 459,90",
    time: "2 horas atrás",
    avatar: "MC",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-gray-200 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-primary">Atividade Recente</h2>
        <button className="text-sm text-accent hover:underline">Ver todas</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-purple-400/20 flex items-center justify-center text-xs font-medium text-accent flex-shrink-0">
              {activity.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-secondary">
                <span className="font-medium text-primary">{activity.user}</span>{" "}
                {activity.action}
                {activity.value && (
                  <span className="font-medium text-primary"> ({activity.value})</span>
                )}
              </p>
              <p className="text-xs text-muted mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-accent/5 to-purple-400/5 rounded-lg p-3">
          <p className="text-xs text-muted mb-1">Próxima meta</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">R$ 200K em vendas</span>
            <span className="text-xs text-accent">85%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full w-[85%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}