import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { LINKS } from "@/lib/config";

const SECTIONS = [
  { id: "features", label: "Features" },
  { id: "how-it-plays", label: "How it plays" },
  { id: "faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "border-b border-white/5 bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <PokeballMark />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold sm:text-base">
              Pokémon Safari
            </div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px]">
              Catch &amp; Battle
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a href={LINKS.apkDownload} download className="btn-primary">
          <Download size={14} />
          <span className="hidden sm:inline">Download APK</span>
          <span className="sm:hidden">Get app</span>
        </a>
      </div>
    </header>
  );
}

function PokeballMark() {
  return (
    <div className="relative h-8 w-8 shrink-0 sm:h-9 sm:w-9">
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_0_16px_rgba(255,77,94,0.55)]" />
      <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-bg" />
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-1 ring-bg" />
    </div>
  );
}
