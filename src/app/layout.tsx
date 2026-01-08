import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AssetHub",
  description: "Insights de ações com dados e IA",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${display.variable} bg-[#05070f] text-slate-50 min-h-screen`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-28">
            {children}
          </main>
          <Footer />
        </div>
        {modal}
      </body>
    </html>
  );
}
