"use client";

import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import SearchInput from "@/components/SearchInput";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { searchClient, indexName } from "@/lib/algolia";

const trending = [
  { ticker: "PETR4", name: "Petrobras", change: "+1.2%" },
  { ticker: "VALE3", name: "Vale", change: "-0.4%" },
  { ticker: "ITUB4", name: "Itaú Unibanco", change: "+0.8%" },
  { ticker: "BBDC4", name: "Bradesco", change: "-1.1%" },
  { ticker: "WEGE3", name: "WEG", change: "+2.3%" },
  { ticker: "MGLU3", name: "Magazine Luiza", change: "+3.9%" }
];

const opportunities = [
  { title: "Valor", ticker: "BBAS3", note: "Desconto vs. média setorial", tag: "Value" },
  { title: "Crescimento", ticker: "LWSA3", note: "Receita 20% CAGR", tag: "Growth" },
  { title: "Dividendos", ticker: "TAEE11", note: "Dividend yield resiliente", tag: "Dividend" }
];

const movers = [
  { ticker: "RDOR3", name: "Rede D'Or", change: "+4.6%" },
  { ticker: "CVCB3", name: "CVC", change: "-3.1%" },
  { ticker: "SUZB3", name: "Suzano", change: "+2.8%" },
  { ticker: "AMER3", name: "Americanas", change: "-5.4%" }
];

const aiAnalyses = [
  {
    ticker: "PETR4",
    title: "Fluxo de caixa e hedge",
    summary: "IA destaca hedge cambial e curva de Brent estabilizando margens no curto prazo."
  },
  {
    ticker: "VALE3",
    title: "Demanda de aço e China",
    summary: "Modelo sinaliza melhora moderada em pedidos spot e frete mais baixo no trimestre."
  },
  {
    ticker: "ITUB4",
    title: "Crédito e inadimplência",
    summary: "IA projeta leve compressão de margem com mix mais conservador e NPL estável."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="mx-auto grid max-w-6xl gap-10 rounded-[32px] border border-white/10 bg-white/5 px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200/90">
            <span className="text-emerald-300">↗</span> Plataforma de Análise Inteligente
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Invista com
              <br />
              Inteligência Artificial
            </h1>
            <p className="max-w-xl text-base text-slate-200/80">
              Receba recomendações de compra e venda baseadas em algoritmos avançados. Analise ações da B3 com precisão e potencialize seus investimentos.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-200">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">Dados em tempo real</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">Análise fundamentalista</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">Recomendações por IA</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f7af8] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f7af8]/40 transition hover:-translate-y-0.5 hover:bg-[#256ae0]"
            >
              Começar gratuitamente
            </Link>
            <span className="text-sm text-slate-300/80">Experiência premium com dados seguros.</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/30">
            <InstantSearchNext
              searchClient={searchClient}
              indexName={indexName}
              future={{ preserveSharedStateOnUnmount: true }}
            >
              <SearchInput />
            </InstantSearchNext>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Ações em destaque:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { ticker: "SHUL4", color: "bg-sky-400" },
                { ticker: "BPAC3", color: "bg-indigo-400" }
              ].map((item) => (
                <button
                  key={item.ticker}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                >
                  <span className={`h-2 w-2 rounded-full ${item.color}`} />
                  {item.ticker}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/85">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Busca inteligente de tickers B3.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Dados curados e visual translúcido.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-300" />
              Insights rápidos para decidir com confiança.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Recursos premium</p>
        <h2 className="text-3xl font-semibold text-white">Ferramentas que dão vantagem competitiva</h2>
        <p className="text-sm text-slate-300/80">Construa confiança com produtos de investimento</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Portfolio Intelligence",
            description: "Acompanhe retornos reais, avaliação e perspectivas da comunidade."
          },
          {
            title: "Relatórios Visuais",
            description: "Economize tempo obtendo todos os detalhes para decisões informadas."
          },
          {
            title: "Ideias de Investimento",
            description: "Inspire-se e encontre ações vencedoras em qualquer ciclo de mercado."
          },
          {
            title: "Atualizações Inteligentes",
            description: "Receba insights concisos e oportunos que realmente importam."
          }
        ].map((card) => (
          <GlassCard key={card.title} title={card.title} description={card.description} />
        ))}
      </section>
    </div>
  );
}
