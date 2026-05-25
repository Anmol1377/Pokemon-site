import { motion } from "framer-motion";
import { Download, Sparkles, Zap } from "lucide-react";
import { LINKS } from "@/lib/config";
import { POKEMON_ARTWORK_URL } from "@/lib/pokemonArt";

/**
 * Iconic mascots floating around the pokeball. Each one is anchored to one
 * side ("left" / "right") of the square hero container by `edge` and sits
 * within bounds at every viewport — so they never get clipped by the
 * section's overflow-hidden on narrow widths.
 *
 * `size` is a percentage of the container width so the layout scales
 * together as the hero shrinks on smaller screens.
 */
const FLOATING_MONS = [
  { id: 25, name: "Pikachu",   side: "left",  edge: 2,  top: 6,  size: 28, glow: "#fad94a", delay: 0.20 },
  { id: 6,  name: "Charizard", side: "right", edge: 0,  top: 8,  size: 32, glow: "#ff7a52", delay: 0.45 },
  { id: 1,  name: "Bulbasaur", side: "left",  edge: 4,  top: 66, size: 26, glow: "#52d6a0", delay: 0.35 },
  { id: 7,  name: "Squirtle",  side: "right", edge: 2,  top: 70, size: 24, glow: "#52a0ff", delay: 0.6  },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10"
    >
      <div
        aria-hidden
        className="starfield pointer-events-none absolute inset-0 -z-10 opacity-60"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr,1fr] lg:gap-16">
        {/* Left — copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-300 backdrop-blur"
          >
            <Sparkles size={12} className="text-amber-300" />
            Free · No accounts · No ads
          </motion.div>

          <h1 className="font-display text-[42px] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Catch them.
            <br />
            Then <span className="grad-text">battle.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-zinc-300 sm:text-lg lg:mx-0">
            A free Pokémon game for Android. Six themed habitats, the real{" "}
            <span className="font-bold text-white">18 × 18 type chart</span>,
            real catch rates, and turn-based 3-v-3 battles. Saves live on your
            device — never on a server.
          </p>

          <div
            id="download"
            className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
          >
            <a href={LINKS.apkDownload} download className="btn-cta">
              <Download size={18} />
              Download APK for Android
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-400 lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <Zap size={12} className="text-emerald-300" />
              5 MB · Android 7+
            </span>
            <span className="text-zinc-700">·</span>
            <span>Works offline</span>
            <span className="text-zinc-700">·</span>
            <span>Sideload-ready</span>
          </div>
        </motion.div>

        {/* Right — animated pokeball + floating mons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Glow halo */}
          <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-rose-500/40 via-fuchsia-500/30 to-indigo-500/40 blur-3xl" />

          {/* Pulsing rings */}
          <motion.div
            aria-hidden
            className="absolute inset-[6%] rounded-full border border-white/15"
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.15, 0.6] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-[14%] rounded-full border border-white/10"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.05, 0.4] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />

          {/* The pokeball */}
          <motion.div
            className="absolute inset-[18%] flex items-center justify-center"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src="./pokeball.svg"
              alt="Pokéball"
              className="h-full w-full drop-shadow-[0_30px_50px_rgba(255,77,94,0.45)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Floating Pokémon — anchored to a side so they always stay inside
              the container regardless of viewport width. */}
          {FLOATING_MONS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: m.delay, duration: 0.6 },
                scale: { delay: m.delay, duration: 0.6, type: "spring" },
                y: {
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: m.delay,
                },
              }}
              className="absolute"
              style={{
                [m.side]: `${m.edge}%`,
                top: `${m.top}%`,
                width: `${m.size}%`,
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={POKEMON_ARTWORK_URL(m.id)}
                alt={m.name}
                loading="eager"
                className="block h-full w-full object-contain"
                style={{
                  filter: `drop-shadow(0 18px 30px ${m.glow}66) drop-shadow(0 6px 8px rgba(0,0,0,0.5))`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
