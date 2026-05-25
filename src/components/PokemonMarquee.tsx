import { motion } from "framer-motion";
import { MARQUEE_MONS, POKEMON_ARTWORK_URL } from "@/lib/pokemonArt";

/**
 * Edge-to-edge auto-scrolling Pokémon strip. Two copies of the list are
 * concatenated so the loop seamlessly wraps as one copy slides off.
 *
 * Pure framer-motion (no CSS keyframes) so it's pausable / accessible-aware.
 */
export function PokemonMarquee() {
  const doubled = [...MARQUEE_MONS, ...MARQUEE_MONS];

  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      {/* Soft fade-out at both edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32"
      />

      <motion.div
        className="flex w-max gap-6 sm:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((m, i) => (
          <div
            key={`${m.id}-${i}`}
            className="flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24"
          >
            <img
              src={POKEMON_ARTWORK_URL(m.id)}
              alt={m.name}
              loading="lazy"
              className="h-full w-full object-contain opacity-80 transition hover:opacity-100"
              style={{
                filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.6))",
              }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
