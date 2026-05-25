import { motion } from "framer-motion";
import { ArrowRight, Coins, FlaskConical } from "lucide-react";
import { EVOLUTION_CHAINS, POKEMON_ARTWORK_URL } from "@/lib/pokemonArt";

export function EvolutionShowcase() {
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
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-fuchsia-200">
            <FlaskConical size={12} />
            Evolution Lab
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Grow them into <span className="grad-text">monsters.</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Open the Lab, pick a Pokémon, pay coins, evolve. Bulbasaur to
            Ivysaur is 200. Ivysaur to Venusaur is 500. The originals get
            consumed — you can keep both forms by catching duplicates first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {EVOLUTION_CHAINS.map((chain, i) => (
            <motion.article
              key={chain.family}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 p-5 shadow-xl shadow-black/40 sm:p-6"
              style={{
                background: `linear-gradient(155deg, ${chain.primary}26, ${chain.secondary}44)`,
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75 sm:text-[11px]">
                  {chain.family}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  3 stages
                </div>
              </div>

              {/*
                Explicit 5-column grid: poké · arrow · poké · arrow · poké.
                The 1fr columns split the remaining width evenly between the
                three Pokémon so nothing overflows; auto columns size the
                arrow gutters to their content.
              */}
              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5">
                {chain.steps.map((step, idx) => (
                  <div key={step.id} className="contents">
                    <div className="flex min-w-0 flex-col items-center text-center">
                      <div
                        className="relative h-14 w-14 sm:h-20 sm:w-20"
                        style={{
                          filter: `drop-shadow(0 8px 14px ${chain.primary}88)`,
                        }}
                      >
                        <div
                          aria-hidden
                          className="absolute inset-2 rounded-full opacity-50 blur-xl"
                          style={{ background: chain.primary }}
                        />
                        <img
                          src={POKEMON_ARTWORK_URL(step.id)}
                          alt={step.name}
                          loading="lazy"
                          className="relative h-full w-full object-contain"
                        />
                      </div>
                      <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60 sm:text-[10px]">
                        #{String(step.id).padStart(3, "0")}
                      </div>
                      <div className="w-full truncate font-display text-xs font-bold leading-tight text-white sm:text-sm">
                        {step.name}
                      </div>
                    </div>

                    {idx < chain.steps.length - 1 && (
                      <div className="flex flex-col items-center gap-1">
                        <ArrowRight size={12} className="text-white/40 sm:hidden" />
                        <ArrowRight size={14} className="hidden text-white/40 sm:block" />
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-black/50 px-1.5 py-0.5 text-[9px] font-bold tabular-nums text-amber-200 backdrop-blur sm:text-[10px]"
                          style={{
                            boxShadow: `inset 0 0 0 1px ${chain.primary}55`,
                          }}
                        >
                          <Coins size={8} />
                          {chain.costs[idx]}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-zinc-500"
        >
          Earn coins by winning Arena battles, spinning the wheel, or trading
          duplicates to Professor Oak.
        </motion.p>
      </div>
    </section>
  );
}
