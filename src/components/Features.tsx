import { motion } from "framer-motion";
import { Compass, FlaskConical, Sparkles, Swords, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  chips: string[];
  tint: [string, string];
}

const FEATURES: Feature[] = [
  {
    icon: Compass,
    eyebrow: "Safari",
    title: "Hunt across six habitats",
    body: "Drag the ball, time the throw, fill your dex. Each zone has its own pool, difficulty, and rarities — from the Whispering Grove to the volcanic Ember Caves.",
    chips: ["Drag-to-throw", "Rarity tiers", "Real catch rates"],
    tint: ["#3F8C24", "#0F3D17"],
  },
  {
    icon: Swords,
    eyebrow: "Arena",
    title: "Turn-based 3-v-3 battles",
    body: "Pick a team, exploit type matchups, and climb the trainer ladder. Real Gen-style damage formula with STAB, crits, and the full 18 × 18 effectiveness chart.",
    chips: ["Real type chart", "Switch mid-battle", "Move effectiveness preview"],
    tint: ["#B8214E", "#3F0F2C"],
  },
  {
    icon: FlaskConical,
    eyebrow: "Lab",
    title: "Evolve and trade",
    body: "Spend coins in the Evolution Lab to evolve any caught Pokémon — Bulbasaur to Ivysaur to Venusaur. Or sell spares to Professor Oak by rarity for quick cash.",
    chips: ["Coin economy", "Stage-based cost", "Oak trade"],
    tint: ["#52a0ff", "#1B3A6B"],
  },
  {
    icon: Sparkles,
    eyebrow: "Spin & Win",
    title: "Daily prize wheel",
    body: "Spin the wheel for free balls or coins — including a rare Master Ball wedge. Two spins a day, no ads, no microtransactions. Just a tiny bit of luck.",
    chips: ["2 spins/day", "Master Ball wedge", "Weighted rewards"],
    tint: ["#a855f7", "#3A1860"],
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            What's inside
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Four ways to lose an afternoon.
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Every system pulls from real Pokémon data — same capture rates, same
            base stats, same move sets, same type chart. The numbers feel right
            because they <em>are</em> the numbers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl p-6 shadow-xl shadow-black/40 sm:p-7"
              style={{
                background: `linear-gradient(140deg, ${f.tint[0]}, ${f.tint[1]})`,
              }}
            >
              {/* Inner overlay for contrast */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10" />

              {/* Big glowing icon corner */}
              <div className="pointer-events-none absolute -right-6 -top-6 text-[150px] leading-none opacity-[0.08]">
                <f.icon size={150} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-white/90">
                  <f.icon size={16} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    {f.eyebrow}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-white/85 sm:text-base">
                  {f.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {f.chips.map((c) => (
                    <span
                      key={c}
                      className="chip bg-black/30 text-white/90 backdrop-blur"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
