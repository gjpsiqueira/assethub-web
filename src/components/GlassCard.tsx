import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function GlassCard({ title, description, children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass glass-border glass-highlight relative rounded-3xl p-6 text-slate-100 transition duration-300",
        "hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="relative space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {description ? <p className="text-sm text-slate-200/80">{description}</p> : null}
      </div>
      {children ? <div className="relative mt-4">{children}</div> : null}
    </div>
  );
}
