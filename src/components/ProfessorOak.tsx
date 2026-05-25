import { motion } from "framer-motion";
import { Coins, HandCoins } from "lucide-react";
import { OAK_PRICES } from "@/lib/pokemonArt";

export function ProfessorOak() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200">
            <HandCoins size={12} />
            Trade with Oak
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Sell to <span className="grad-text">Professor Oak.</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Got a Pokémon you don't need? Oak pays cash for any species. Price
            scales with rarity — a Pikachu pulls common-tier coin, a Mewtwo
            makes you rich.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50"
          style={{
            background:
              "linear-gradient(140deg, #2a1a08 0%, #1a1208 50%, #0a0805 100%)",
          }}
        >
          {/* Warm glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "#fbbf24" }}
          />

          <div className="relative grid grid-cols-1 items-center gap-5 p-5 sm:p-6 lg:grid-cols-[auto,1fr] lg:gap-8 lg:p-7">
            {/* Oak's portrait — contained card, never larger than 14rem */}
            <div className="mx-auto flex w-full max-w-[220px] flex-col items-center text-center lg:mx-0 lg:w-[220px]">
              <div
                className="relative aspect-square w-full overflow-hidden rounded-3xl border border-amber-500/20 shadow-xl shadow-black/40"
                style={{
                  background:
                    "linear-gradient(135deg, #3a280f 0%, #1a1208 60%, #0a0805 100%)",
                }}
              >
                <img
                  src="./oak.webp"
                  alt="Professor Oak"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 18%" }}
                />
                {/* Subtle inner vignette so the portrait sits in its frame */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300/90">
                  ▸ The Lab
                </div>
                <div className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                  Professor Oak
                </div>
                <div className="mt-1 text-xs italic text-white/65">
                  "Hand me anything you've caught. I'll pay fair."
                </div>
              </div>
            </div>

            {/* Pricing table */}
            <div className="flex flex-col justify-center">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200">
                Sell payout
              </div>
              <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                Pricing by rarity
              </h3>
              <p className="mt-1.5 text-sm text-zinc-300">
                Every catch has a rarity tier based on its real capture rate.
                Legendaries are rare for a reason — Oak pays the price.
              </p>

              <ul className="mt-4 flex flex-col gap-1.5">
                {OAK_PRICES.map((row, i) => (
                  <motion.li
                    key={row.rarity}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center justify-between gap-3 rounded-xl bg-black/30 px-3 py-2 backdrop-blur"
                    style={{ boxShadow: `inset 0 0 0 1px ${row.color}33` }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: row.color,
                          boxShadow: `0 0 8px ${row.color}aa`,
                        }}
                      />
                      <span
                        className="font-display text-sm font-bold"
                        style={{ color: row.color }}
                      >
                        {row.rarity}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tabular-nums text-amber-200">
                      <Coins size={11} />
                      {row.range}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
                One Legendary sale can fund half your team in the Evolution
                Lab.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
