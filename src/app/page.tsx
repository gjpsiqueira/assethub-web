import Link from "next/link";
import GlassCard from "@/components/GlassCard";

const features = [
  {
    title: "Dados de mercado",
    description: "Cotações, volume e variação em tempo real para acompanhar o pulso do mercado.",
    points: ["Radar de liquidez e movimento de preço", "Alertas de volatilidade inteligente", "Curadoria visual de indicadores"]
  },
  {
    title: "Análise com IA",
    description: "Contexto acionável com linguagem natural e resumos claros para o time decidir rápido.",
    points: ["Resumo executivo de fatos relevantes", "Detecção de sentimento em notícias", "Sugestões de próximos passos"]
  },
  {
    title: "Histórico e contexto",
    description: "Linha do tempo de eventos e métricas para entender o porquê por trás dos números.",
    points: ["Comparativos por setor e índice", "Marcos corporativos e governança", "Timeline de resultados e calls"]
  }
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 shadow-lg shadow-black/30">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Plataforma em beta privado
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">AssetHub</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Insights de ações com dados + IA
            </h1>
            <p className="max-w-xl text-lg text-slate-200/80">
              Monitore tickers, acompanhe eventos e receba análises claras com visual líquido e elegante.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/acoes/PETR4"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explorar PETR4
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20"
            >
              Entrar
              <span className="text-white/70">(modal)</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300/80">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Dados mockados para demo</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-200">IA no roadmap</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Sem login obrigatório</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-6 top-8 h-28 w-28 rounded-full bg-indigo-400/20 blur-3xl" />
          <GlassCard
            title="Radar inteligente"
            description="Curadoria visual para acompanhar o mercado com clareza."
            className="relative overflow-hidden"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/90">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Momentum</p>
                <p className="mt-2 text-2xl font-semibold text-white">+1.4%</p>
                <p className="text-slate-300/70">Variação diária PETR4</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/90">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Volume</p>
                <p className="mt-2 text-2xl font-semibold text-white">21.4M</p>
                <p className="text-slate-300/70">Negócios nas últimas 24h</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/90 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Eventos</p>
                <p className="mt-2 text-base text-slate-200">
                  Radar de fatos relevantes, atas e sentimento de notícias com resumo executivo.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <GlassCard key={feature.title} title={feature.title} description={feature.description}>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
              {feature.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
