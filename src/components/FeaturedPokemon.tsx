import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { POKEMON_ARTWORK_URL, SHOWCASE } from "@/lib/pokemonArt";
import { LINKS } from "@/lib/config";

export function FeaturedPokemon() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Catchable
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            150+ Pokémon waiting in the wild.
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            From the iconic to the rare. Every one of them uses its real catch
            rate and base stats — Pikachu is easy, Mewtwo is a nightmare,
            Gyarados hits like a truck.
          </p>
        </motion.div>

        {/*
          Grid + overlay layering:
            - cards (default z) below
            - full-width blur band over the bottom row (z-30)
            - centred CTA over the band (z-40)
            - "+" badges on teaser cards (z-50, above band + CTA)
          `isolate` keeps the stacking context self-contained.
        */}
        <div className="relative isolate grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {SHOWCASE.map((mon, i) => {
            return (
              <motion.article
                key={mon.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 p-4 shadow-xl shadow-black/40 transition sm:p-5"
                style={{
                  background: `linear-gradient(155deg, ${mon.primary}33, ${mon.secondary}44)`,
                }}
              >
                <div className="relative z-10 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">
                  #{String(mon.id).padStart(3, "0")}
                </div>

                <div className="relative my-2 flex h-28 items-center justify-center sm:h-36">
                  <div
                    aria-hidden
                    className="absolute inset-4 rounded-full opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: mon.primary }}
                  />
                  <motion.img
                    src={POKEMON_ARTWORK_URL(mon.id)}
                    alt={mon.name}
                    loading="lazy"
                    className="relative z-10 h-full w-auto object-contain"
                    style={{
                      filter: `drop-shadow(0 12px 18px ${mon.primary}88) drop-shadow(0 4px 6px rgba(0,0,0,0.5))`,
                    }}
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  />
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="truncate font-display text-base font-bold text-white sm:text-lg">
                    {mon.name}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {mon.types.map((t) => (
                      <span
                        key={t}
                        className="chip bg-black/40 text-white/90 backdrop-blur"
                        style={{ boxShadow: `inset 0 0 0 1px ${mon.primary}55` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.article>
            );
          })}

          {/* Full-width blur band that sits over the BOTTOM ROW only.
              Mobile (2-col, 3 rows) → bottom row starts at ~66%.
              Desktop (3-col, 2 rows) → bottom row starts at ~50%. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 top-2/3 z-30 rounded-b-3xl sm:top-1/2"
            style={{
              backdropFilter: "blur(5px) saturate(140%)",
              WebkitBackdropFilter: "blur(5px) saturate(140%)",
              background:
                "linear-gradient(180deg, rgba(7,7,13,0) 0%, rgba(7,7,13,0.5) 25%, rgba(7,7,13,0.72) 100%)",
            }}
          />

          {/* Centred download CTA, layered over the blur band. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-2/3 z-40 flex items-center justify-center px-4 sm:top-1/2">
            <a
              href={LINKS.apkDownload}
              download
              className="pointer-events-auto btn-cta shadow-2xl shadow-rose-500/50"
            >
              <Download size={18} />
              Download now
            </a>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-zinc-500"
        >
          … and 140+ more, evolutions included.
        </motion.p>
      </div>
    </section>
  );
}
