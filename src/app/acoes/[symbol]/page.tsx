import GlassCard from "@/components/GlassCard";

type PageProps = {
  params?: {
    symbol?: string;
  };
};

const mockMetrics = {
  price: "R$ 37,20",
  change: "+1,4%",
  volume: "21,4M"
};

export default function StockPage({ params }: PageProps) {
  const ticker = (params?.symbol ?? "TICKER").toUpperCase();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Ação</p>
        <h1 className="text-3xl font-semibold text-white">{ticker}</h1>
        <p className="text-slate-300/80">Dados mockados para navegação rápida.</p>
      </div>

      <GlassCard title={`Painel ${ticker}`} description="Visão rápida de preço, variação e volume.">
        <div className="grid gap-4 sm:grid-cols-3">
          <Metric label="Preço" value={mockMetrics.price} tone="emerald" />
          <Metric label="Variação" value={mockMetrics.change} tone="sky" />
          <Metric label="Volume" value={mockMetrics.volume} tone="violet" />
        </div>
        <div className="mt-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200/80">
          Contexto: este painel é ilustrativo. Integração com dados reais e IA entrarão no backend futuro.
        </div>
      </GlassCard>
    </div>
  );
}

function Metric({
  label,
  value,
  tone
}: {
  label: string;
  value: string;
  tone: "emerald" | "sky" | "violet";
}) {
  const toneMap = {
    emerald: "from-emerald-400/40 to-emerald-400/0",
    sky: "from-sky-400/40 to-sky-400/0",
    violet: "from-violet-400/40 to-violet-400/0"
  } as const;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className={`absolute inset-0 bg-gradient-to-br ${toneMap[tone]} opacity-70 blur-3xl`} />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300/70">{label}</p>
        <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
