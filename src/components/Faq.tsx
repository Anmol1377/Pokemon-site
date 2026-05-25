import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Item {
  q: string;
  a: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    q: "Is it really free?",
    a: "Yes. No microtransactions, no ads, no signups. The game is open source — you can read every line on GitHub.",
  },
  {
    q: "Do I need an account?",
    a: "No. The app creates a local trainer profile with a unique 8-character code. Saves live in your browser's storage (or your phone's storage if you install the APK). If you want to move your save between devices, export it as a JSON file and import on the other side.",
  },
  {
    q: "What versions of Android does it support?",
    a: "Android 7.0 (Nougat) and newer. The APK is about 5 MB.",
  },
  {
    q: "Is the data real Pokémon data?",
    a: (
      <>
        Yes — capture rates, base stats, move pools, type matchups, all of it
        comes from a public Pokémon API. The 18 × 18 type chart is the
        canonical Gen 6+ chart. Damage uses a simplified Gen-style formula
        with STAB, crits, and random variance.
      </>
    ),
  },
  {
    q: "Does it work offline?",
    a: "Once the Pokémon data is cached on first launch, yes — the game keeps working without an internet connection. The cache lasts 24 hours; after that it'll refresh next time you're online.",
  },
  {
    q: "Will my save sync between my phone and browser?",
    a: "Not automatically — there's no server in the loop. Export your save as JSON from the Profile card, then import it on the other device. It's a manual move, but the data stays 100% under your control.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            FAQ
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Common questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {ITEMS.map((it, i) => (
            <FaqRow key={it.q} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.04]"
      >
        <span className="font-display text-base font-bold text-white sm:text-lg">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-zinc-400"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
