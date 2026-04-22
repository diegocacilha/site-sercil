export default function PieChart() {
  const sources = [
    { name: "Orgânico", value: 45, color: "bg-accent" },
    { name: "Direto", value: 25, color: "bg-purple-400" },
    { name: "Referência", value: 18, color: "bg-green-400" },
    { name: "Social", value: 12, color: "bg-orange-400" },
  ];

  let cumulative = 0;
  const segments = sources.map((source) => {
    const start = cumulative;
    cumulative += (source.value / 100) * 360;
    return { ...source, start, end: cumulative };
  });

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-gray-200 h-full">
      <h2 className="text-lg font-semibold text-primary mb-4">Fontes de Tráfego</h2>
      
      <div className="relative w-48 h-48 mx-auto mb-6">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {segments.map((segment, index) => {
            const startAngle = (segment.start * Math.PI) / 180;
            const endAngle = (segment.end * Math.PI) / 180;
            
            const x1 = 50 + 45 * Math.cos(startAngle);
            const y1 = 50 + 45 * Math.sin(startAngle);
            const x2 = 50 + 45 * Math.cos(endAngle);
            const y2 = 50 + 45 * Math.sin(endAngle);
            
            const largeArc = segment.end - segment.start > 180 ? 1 : 0;
            
            const pathData = [
              `M 50 50`,
              `L ${x1} ${y1}`,
              `A 45 45 0 ${largeArc} 1 ${x2} ${y2}`,
              `Z`,
            ].join(" ");

            return (
              <path
                key={index}
                d={pathData}
                className={segment.color}
                stroke="white"
                strokeWidth="1"
              />
            );
          })}
          <circle cx="50" cy="50" r="25" fill="white" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-semibold text-primary">100%</div>
            <div className="text-xs text-muted">Total</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {sources.map((source, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
              <span className="text-sm text-secondary">{source.name}</span>
            </div>
            <span className="text-sm font-medium text-primary">{source.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}