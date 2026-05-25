import { Github, Linkedin } from "lucide-react";
import { LINKS } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg/50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 to-red-700" />
                <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-bg" />
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-1 ring-bg" />
              </div>
              <div>
                <div className="font-display text-base font-bold">
                  Pokémon Safari
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Catch &amp; Battle
                </div>
              </div>
            </div>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              A free Pokémon game for Android. Built end-to-end by one
              developer. Six habitats, real type chart, real catch rates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-xs font-bold text-zinc-100 transition hover:bg-white/[0.12]"
            >
              <Github size={14} />
              GitHub profile
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#0a66c2] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#0a66c2]/85"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} Pokémon Safari · Built by Anmol. Not
            affiliated with The Pokémon Company.
          </p>
          <p>
            Pokémon names, sprites, and data are property of their respective
            owners. This is a fan project for educational use.
          </p>
        </div>
      </div>
    </footer>
  );
}
