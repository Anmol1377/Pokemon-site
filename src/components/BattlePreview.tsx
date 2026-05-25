import { motion } from "framer-motion";
import { Swords, Zap } from "lucide-react";
import { POKEMON_ARTWORK_URL } from "@/lib/pokemonArt";

const MOVES = [
  {
    name: "Petal Dance",
    type: "Grass",
    power: 120,
    pp: "10/10",
    eff: "4× SUPER",
    effColor: "#52d6a0",
    typeColor: "#52d6a0",
    classLabel: "SPECIAL",
  },
  {
    name: "Sludge Bomb",
    type: "Poison",
    power: 90,
    pp: "10/10",
    eff: "½× WEAK",
    effColor: "#ff6b6b",
    typeColor: "#a085d6",
    classLabel: "SPECIAL",
  },
  {
    name: "Bind",
    type: "Normal",
    power: 15,
    pp: "20/20",
    eff: null,
    effColor: "",
    typeColor: "#a0a0b0",
    classLabel: "PHYSICAL",
  },
  {
    name: "Snore",
    type: "Normal",
    power: 50,
    pp: "15/15",
    eff: null,
    effColor: "",
    typeColor: "#a0a0b0",
    classLabel: "SPECIAL",
  },
];

export function BattlePreview() {
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
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-rose-200">
            <Swords size={12} />
            Inside the Arena
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Every move tells you{" "}
            <span className="grad-text">how it'll land.</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            See type effectiveness before you commit — <strong>4× SUPER</strong>{" "}
            against a double-weakness, <strong>½× WEAK</strong> against a
            resistance, neutral when there's no match. The real 18 × 18
            Gen 6+ chart, surfaced on every move card.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/60 sm:p-10"
          style={{
            background:
              "radial-gradient(800px 500px at 70% -20%, rgba(82,160,255,0.18), transparent 70%), linear-gradient(140deg, #1a1226, #0a0612)",
          }}
        >
          {/* Combatants: defender top-right, attacker bottom-left */}
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-8">
            <Combatant
              id={3}
              name="Ivysaur"
              types={["Grass", "Poison"]}
              level={50}
              hp="135/135"
              align="left"
              isYou
            />
            <Combatant
              id={194}
              name="Wooper"
              types={["Water", "Ground"]}
              level={50}
              hp="130/130"
              align="right"
            />
          </div>

          {/* "Your turn" pill */}
          <div className="my-6 flex justify-center sm:my-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Your turn — pick a move
            </span>
          </div>

          {/* Moves grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {MOVES.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur"
                style={{
                  boxShadow: `inset 4px 0 0 ${m.typeColor}aa`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-display text-base font-bold text-white sm:text-lg">
                      {m.name}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className="chip text-white"
                        style={{
                          background: `linear-gradient(135deg, ${m.typeColor}cc, ${m.typeColor}88)`,
                        }}
                      >
                        {m.type}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        · {m.classLabel}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="flex items-center gap-1 text-sm font-bold tabular-nums text-zinc-200">
                      <Swords size={11} />
                      {m.power}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1 text-[11px] tabular-nums text-zinc-400">
                      <Zap size={9} />
                      {m.pp}
                    </div>
                  </div>
                </div>

                {m.eff && (
                  <div
                    className="chip mt-3 text-[10px]"
                    style={{
                      background: `${m.effColor}22`,
                      color: m.effColor,
                      boxShadow: `inset 0 0 0 1px ${m.effColor}55`,
                    }}
                  >
                    {m.eff}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Combatant({
  id,
  name,
  types,
  level,
  hp,
  align,
  isYou,
}: {
  id: number;
  name: string;
  types: string[];
  level: number;
  hp: string;
  align: "left" | "right";
  isYou?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <div className={align === "right" ? "order-2" : ""}>
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold sm:text-xl">
            {name}
          </span>
          {types.map((t) => (
            <span
              key={t}
              className="chip text-[9px] text-white"
              style={{
                background: typeColor(t),
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
          LV {level} {isYou && "· YOUR ACTIVE"}
        </div>
        <div className="mt-2 h-2 w-32 overflow-hidden rounded-full bg-white/10 sm:w-40">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
        </div>
        <div className="mt-1 text-[10px] tabular-nums text-zinc-400">{hp}</div>
      </div>

      <div className="relative h-24 w-24 sm:h-32 sm:w-32">
        <div
          aria-hidden
          className="absolute inset-2 rounded-full bg-white/5 blur-2xl"
        />
        <img
          src={POKEMON_ARTWORK_URL(id)}
          alt={name}
          loading="lazy"
          className="relative h-full w-full object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.6)]"
        />
      </div>
    </div>
  );
}

function typeColor(t: string): string {
  const map: Record<string, string> = {
    Grass: "linear-gradient(135deg,#52d6a0,#2a8e60)",
    Poison: "linear-gradient(135deg,#a085d6,#5a4090)",
    Water: "linear-gradient(135deg,#52a0ff,#2c63bc)",
    Ground: "linear-gradient(135deg,#d6b85a,#80661a)",
    Normal: "linear-gradient(135deg,#a0a0b0,#5a5a6a)",
  };
  return map[t] ?? "linear-gradient(135deg,#888,#444)";
}
