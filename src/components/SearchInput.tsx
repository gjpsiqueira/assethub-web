"use client";

import { useEffect, useMemo, useRef, useState, KeyboardEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useHits, useInstantSearch, useSearchBox } from "react-instantsearch";
import type { Hit } from "instantsearch.js";

type StockHit = Hit<{
  ticker?: string;
  name?: string;
  logo?: string;
}>;

const MAX_RESULTS = 8;

export default function SearchInput() {
  const router = useRouter();
  const { query = "", refine } = useSearchBox();
  const { hits } = useHits<StockHit>();
  const { status } = useInstantSearch();

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const limitedHits = useMemo(() => hits.slice(0, MAX_RESULTS), [hits]);

  useEffect(() => {
    if (!limitedHits.length) {
      setActiveIndex(null);
    } else if (activeIndex === null) {
      setActiveIndex(0);
    } else if (activeIndex >= limitedHits.length) {
      setActiveIndex(limitedHits.length - 1);
    }
  }, [limitedHits, activeIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollIntoView = (index: number) => {
    const el = listRef.current?.children[index] as HTMLElement | undefined;
    if (el) el.scrollIntoView({ block: "nearest" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && query.trim().length >= 2) setIsOpen(true);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!limitedHits.length) return;
      setActiveIndex((prev) => {
        const next = prev === null ? 0 : (prev + 1) % limitedHits.length;
        scrollIntoView(next);
        return next;
      });
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!limitedHits.length) return;
      setActiveIndex((prev) => {
        const next =
          prev === null
            ? limitedHits.length - 1
            : (prev - 1 + limitedHits.length) % limitedHits.length;
        scrollIntoView(next);
        return next;
      });
    }

    if (event.key === "Enter") {
      if (activeIndex !== null && limitedHits[activeIndex]) {
        event.preventDefault();
        select(limitedHits[activeIndex]);
      }
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const select = (item: StockHit) => {
    const ticker = (item.ticker ?? "").trim();
    const name = item.name ?? "";
    if (ticker) {
      router.push(`/acoes/${ticker}`);
    }
    refine(`${ticker}${name ? ` · ${name}` : ""}`);
    setIsOpen(false);
  };

  const shouldShow =
    isOpen && query.trim().length >= 2 && (status === "loading" || limitedHits.length > 0);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-3xl">
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f5f6f7] px-4 py-3 text-slate-900 shadow-md focus-within:border-slate-300">
        <svg
          className="h-5 w-5 text-slate-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.65" y1="16.65" x2="21" y2="21" />
        </svg>
        <input
          value={query}
          onChange={(e) => {
            refine(e.target.value);
            if (e.target.value.trim().length >= 2) setIsOpen(true);
          }}
          onFocus={() => {
            if (query.trim().length >= 2) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Buscar ação ou empresa"
          className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none"
          aria-expanded={shouldShow}
          aria-activedescendant={
            activeIndex !== null && shouldShow ? `stock-option-${activeIndex}` : undefined
          }
          role="combobox"
        />
      </div>

      {shouldShow && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-xl border border-slate-200 bg-[#f5f6f7] shadow-md">
          <ul ref={listRef} className="max-h-80 overflow-y-auto divide-y divide-slate-100">
            {status === "loading" && (
              <li className="px-4 py-3 text-sm text-slate-600">Buscando...</li>
            )}
            {status !== "loading" && limitedHits.length === 0 && (
              <li className="px-4 py-3 text-sm text-slate-600">Nenhum resultado</li>
            )}
            {limitedHits.map((item, index) => {
              const isActive = index === activeIndex;
              const ticker = item.ticker ?? "—";
              const name = item.name ?? "Nome indisponível";
              const logo = item.logo ?? "";
              const fallback = ticker.slice(0, 2).toUpperCase() || "";

              return (
                <li key={`${ticker}-${index}`}>
                  <button
                    id={`stock-option-${index}`}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => select(item)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${
                      isActive
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
                        {logo ? (
                          <Image
                            src={logo}
                            alt={ticker}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
                          />
                        ) : (
                          <span className="text-xs font-semibold text-slate-700">{fallback}</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold tracking-wide text-slate-900">{ticker}</span>
                        <span className="text-xs text-slate-600">{name}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">Enter</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}