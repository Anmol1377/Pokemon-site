import { motion } from "framer-motion";
import { BookOpen, Compass, Sparkles, Swords } from "lucide-react";

const STATS = [
  { label: "Themed habitats", value: "6", icon: Compass, color: "#52d6a0" },
  { label: "Pokémon to catch", value: "150+", icon: BookOpen, color: "#52a0ff" },
  { label: "Real type chart", value: "18 × 18", icon: Swords, color: "#ff7a52" },
  { label: "Free, no accounts", value: "100%", icon: Sparkles, color: "#fad94a" },
];

export function StatsBar() {
  return (
    <section className="px-4 pb-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="glass mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/5 p-px sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 bg-bg-soft/60 px-4 py-5 text-center"
          >
            <s.icon size={18} style={{ color: s.color }} />
            <div className="font-display text-2xl font-bold tabular-nums sm:text-3xl">
              {s.value}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 sm:text-[11px]">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
