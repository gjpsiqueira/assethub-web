import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const links = [
    { href: "/", label: "Planos" },
    { href: "#", label: "Análises por IA" },
    { href: "#", label: "Portfólio" },
    { href: "#", label: "Sobre" }
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#1f5de9] shadow-md">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2" aria-label="Ir para página inicial">
                    <Image src="/white_bull_logo.png" alt="AssetHub Logo" width={30} height={30} priority />
                    <span className="text-lg font-semibold text-white">AssetHub</span>
                </Link>

                <nav className="hidden items-center gap-4 text-sm font-semibold text-white/90 md:flex">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-white">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/auth"
                        className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex"
                    >
                        Entrar
                    </Link>
                    <Link
                        href="/auth"
                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1f5de9] transition hover:bg-slate-100"
                    >
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </header>
    );
}
