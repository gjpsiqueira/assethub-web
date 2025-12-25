"use client";

import { useRouter } from "next/navigation";
import { useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import GlassCard from "@/components/GlassCard";

type Mode = "login" | "signup";

export default function AuthModal() {
  const [mode, setMode] = useState<Mode>("login");
  const router = useRouter();

  return (
    <div className="w-full max-w-lg">
      <GlassCard title="Acesso" description="Entre ou crie sua conta no modo modal." className="relative p-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-white/40 hover:bg-white/20"
        >
          Fechar
        </button>

        <div className="mb-6 flex gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold">
          <TabButton label="Login" active={mode === "login"} onClick={() => setMode("login")} />
          <TabButton label="Cadastro" active={mode === "signup"} onClick={() => setMode("signup")} />
        </div>

        <form className="space-y-4">
          <Input label="Email" type="email" placeholder="seu@email.com" />
          <Input label="Senha" type="password" placeholder="••••••••" />
          {mode === "signup" ? (
            <Input label="Confirmar senha" type="password" placeholder="••••••••" />
          ) : null}

          <button
            type="button"
            className="w-full rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:bg-white"
          >
            {mode === "login" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-300/80">
          Mock UI: autenticação será conectada ao backend futuramente.
        </p>
      </GlassCard>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex-1 rounded-full px-4 py-2 transition",
        active
          ? "bg-white text-slate-900 shadow-lg shadow-emerald-400/20"
          : "text-slate-300 hover:bg-white/10"
      )}
    >
      {label}
    </button>
  );
}

function Input({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block space-y-2 text-sm text-slate-200">
      <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-300/60 focus:bg-white/15"
      />
    </label>
  );
}
