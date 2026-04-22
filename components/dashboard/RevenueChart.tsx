"use client";

export default function RevenueChart() {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const data = [65, 78, 90, 85, 95, 110, 125, 140, 135, 155, 170, 190];
  const maxValue = Math.max(...data);

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-primary">Receita Mensal</h2>
          <p className="text-sm text-muted mt-0.5">Em milhares de reais (R$)</p>
        </div>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50 text-primary">
          <option>Últimos 12 meses</option>
          <option>Últimos 6 meses</option>
          <option>Este ano</option>
        </select>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between gap-1 sm:gap-2">
          {data.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative group">
                <div
                  className="bg-gradient-to-t from-accent to-blue-400 rounded-t-lg transition-all duration-300 group-hover:opacity-90"
                  style={{ height: `${(value / maxValue) * 200}px` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    R$ {value}K
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Total acumulado</span>
          <span className="font-semibold text-primary">R$ 1.438.000</span>
        </div>
      </div>
    </div>
  );
}