import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative mt-12 w-full overflow-hidden px-6 pb-10 pt-12 text-slate-100 bg-gray-900">
        <div className="mx-auto w-full max-w-screen px-[4vw] sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
                <div>
                    <h4 className="text-white text-lg font-extrabold mb-4">AssetHub</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                    <div className="mb-2 md:mb-0 max-w-full">
                        <p className="text-pretty">© {new Date().getFullYear()} AssetHub. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 max-w-full">
                        <Link href="/termos-de-uso" className="hover:text-white whitespace-nowrap">Termos de Uso</Link>
                        <Link href="/politica-de-privacidade" className="hover:text-white whitespace-nowrap">Política de privacidade</Link>
                    </div>
                </div>
                <p className="mt-4 text-sm text-white text-pretty">Disclaimer: As informações aqui apresentadas são de caráter educativo, obtidas de fontes públicas como B3, CVM e Tesouro Nacional, além de análises próprias baseadas nesses dados. A AssetHub não fornece recomendações de compra ou venda de ativos e não se responsabiliza por decisões de investimento tomadas com base neste material.</p>
            </div>
        </div>
        </footer>
    );
}

