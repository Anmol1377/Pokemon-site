import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { LINKS } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="relative px-4 pb-24 pt-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 p-8 text-center sm:p-14"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 0%, rgba(255,77,94,0.22), transparent 70%), linear-gradient(160deg, #1a0a14, #0a0612)",
        }}
      >
        {/* Sparkles */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(2px 2px at 25% 30%, rgba(255,255,255,0.4) 0, transparent 100%), radial-gradient(1.5px 1.5px at 75% 50%, rgba(255,255,255,0.35) 0, transparent 100%), radial-gradient(2px 2px at 50% 80%, rgba(255,255,255,0.3) 0, transparent 100%)",
          }}
        />

        <div className="relative z-10">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300">
            ✦ Ready to play?
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Start your <span className="grad-text">Safari</span> now.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-zinc-300">
            Two clicks to install, no signup, no waiting. Catch your first
            Pokémon in under a minute.
          </p>

          <div className="mt-6 flex justify-center">
            <a href={LINKS.apkDownload} download className="btn-cta">
              <Download size={18} />
              Download for Android
            </a>
          </div>

          <p className="mt-5 text-xs text-zinc-500">
            APK is unsigned debug build. On install, allow "unknown sources" once
            — same as any sideloaded Android app.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
