import { motion } from "framer-motion";
import { Compass, Swords, Target, type LucideIcon } from "lucide-react";

interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    icon: Compass,
    title: "Pick a habitat",
    body: "Six themed zones with curated Pokémon pools and difficulty modifiers. Start in Whispering Grove, work your way up to the Aether Spires.",
    accent: "#52d6a0",
  },
  {
    num: "02",
    icon: Target,
    title: "Drag the ball, time the throw",
    body: "A wild Pokémon appears with a rarity badge. Drag the ball toward it and release — power scales with how far you pull. Bullseye throws give you the best catch odds.",
    accent: "#ff7a52",
  },
  {
    num: "03",
    icon: Swords,
    title: "Battle your team in the Arena",
    body: "Pick 3 Pokémon, swap mid-battle, exploit type matchups. Wins drop coins + bonus balls. Coins evolve your team. The ladder gets harder; your team gets stronger.",
    accent: "#a855f7",
  },
];

export function HowItPlays() {
  return (
    <section
      id="how-it-plays"
      className="relative px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            How it plays
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            From zero to champion in{" "}
            <span className="grad-text">three steps.</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block"
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass relative flex flex-col gap-3 p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}33, ${s.accent}11)`,
                    boxShadow: `inset 0 0 0 1px ${s.accent}44`,
                  }}
                >
                  <s.icon size={22} style={{ color: s.accent }} />
                </div>
                <div
                  className="font-display text-3xl font-bold opacity-30"
                  style={{ color: s.accent }}
                >
                  {s.num}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-300">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
