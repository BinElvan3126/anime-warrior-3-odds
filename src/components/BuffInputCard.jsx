import { motion } from "framer-motion";

export default function BuffInputCard({ label, value, step, onChange }) {
  return (
    <motion.label
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22 }}
      className="group rounded-lg border border-white/10 bg-aw3-surface/70 p-4 shadow-card backdrop-blur-xl transition duration-300 hover:border-aw3-purple/60 hover:shadow-aura"
    >
      <span className="mb-3 flex items-center text-sm font-bold text-aw3-muted">
        {label}
      </span>
      <input
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-12 w-full rounded-md border border-white/10 bg-aw3-surface2 px-4 text-lg font-semibold text-white outline-none transition duration-300 placeholder:text-aw3-muted focus:border-aw3-purple focus:shadow-[0_0_0_3px_rgba(168,85,247,0.22)]"
      />
    </motion.label>
  );
}
