import { motion } from "framer-motion";

export default function FormulaPanel() {
  return (
    <section className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#070A12]/90 shadow-card" aria-label="Calculation details">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-white">Calculation Details</h2>
          <p className="mt-1 text-xs text-aw3-muted">How the calculator turns your buffs into final odds.</p>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: 1, height: "auto" }}
        className="grid gap-4 p-4 text-sm leading-6 text-zinc-200 md:grid-cols-2"
      >
        <div className="rounded-md border border-white/10 bg-aw3-surface/60 p-4">
          <h3 className="font-black text-aw3-gold">Luck Multiplier</h3>
          <p className="mt-2 rounded bg-black/25 px-3 py-2 font-mono text-white">
            If Luck Buff &lt; 14 - Unit Offset:
            <br />
            Luck Multiplier = 1 + (Luck Buff + Unit Offset) x 0.1
            <br />
            Else:
            <br />
            Luck Multiplier = 1.7 + (Luck Buff + Unit Offset) x 0.05
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-aw3-surface/60 p-4">
          <h3 className="font-black text-aw3-gold">Final Secret Odd</h3>
          <p className="mt-2 rounded bg-black/25 px-3 py-2 font-mono text-white">
            Secret Multiplier = 1 + Secret Chance % / 100
            <br />
            Final Secret Odd = Base Odd x Secret Multiplier x Luck Multiplier
          </p>
          <p className="mt-3 text-aw3-muted">
            Secret Chance is entered as a percent. If you type <span className="font-bold text-white">50</span>, the
            web converts it to 0.5, so the secret multiplier becomes 1.5x.
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-aw3-surface/60 p-4">
          <h3 className="font-black text-aw3-gold">Final Shiny Odd</h3>
          <p className="mt-2 rounded bg-black/25 px-3 py-2 font-mono text-white">
            Shiny Multiplier = Shiny Chance % / 100
            <br />
            Final Shiny Odd = Final Secret Odd x Shiny Multiplier
          </p>
          <p className="mt-3 text-aw3-muted">
            Shiny Chance is entered like the game value. If you type{" "}
            <span className="font-bold text-white">5</span>, that means 5% in game.
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-aw3-surface/60 p-4">
          <h3 className="font-black text-aw3-gold">Ratio</h3>
          <p className="mt-2 rounded bg-black/25 px-3 py-2 font-mono text-white">
            Ratio = 1 / Final Odd
            <br />
            Shiny Ratio = 1 / Final Shiny Odd
          </p>
          <p className="mt-3 text-aw3-muted">
            Ratio is shown as 1 / X. It means the average expected opens for that odd. Smaller X means better odds.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
