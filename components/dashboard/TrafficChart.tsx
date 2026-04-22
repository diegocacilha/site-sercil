"use client";

export default function TrafficChart() {
  const hours = ["00h", "03h", "06h", "09h", "12h", "15h", "18h", "21h"];
  const desktop = [12, 8, 15, 45, 78, 95, 88, 52];
  const mobile = [8, 5, 12, 35, 62, 82, 75, 42];

  const maxValue = Math.max(...desktop, ...mobile);

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-primary">Tráfego por Dispositivo</h2>
          <p className="text-sm text-muted mt-0.5">Visitas nas últimas 24h</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-xs text-muted">Desktop</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-xs text-muted">Mobile</span>
          </div>
        </div>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end">
          <div className="w-full h-full flex items-end justify-between">
            {hours.map((hour, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center gap-1">
                  <div className="w-full flex justify-center gap-1 px-0.5">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full max-w-[20px] relative group">
                        <div
                          className="bg-purple-400 rounded-t transition-all duration-300 group-hover:opacity-80"
                          style={{ height: `${(mobile[index] / maxValue) * 160}px` }}
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full max-w-[20px] relative group">
                        <div
                          className="bg-accent rounded-t transition-all duration-300 group-hover:opacity-80"
                          style={{ height: `${(desktop[index] / maxValue) * 160}px` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted mt-2">{hour}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}