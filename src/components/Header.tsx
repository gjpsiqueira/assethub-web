import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const links = [
    { href: "/", label: "Home" },
    { href: "/acoes/PETR4", label: "Exemplo" },
    { href: "/auth", label: "Entrar" }
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full overflow-x-hidden gradient-bg-blue backdrop-blur supports-backdrop-filter:bg-white/10">
            <div className="mx-auto w-full max-w-screen px-[4vw] sm:px-4 md:px-5 py-[3vw] sm:py-3">
                <div className="flex w-full flex-wrap items-center justify-between gap-2 md:gap-4">
                    {/* Logo - sempre visível */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <Link href="/" className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2" aria-label="Ir para página inicial">
                            <Image
                                src="/white_bull_logo.png"
                                alt="AssetHub Logo"
                                width={36}
                                height={36}
                                className="sm:w-10 sm:h-10"
                                priority
                            />
                            <span className="text-xl sm:text-2xl font-bold text-white">AssetHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
