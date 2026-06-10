import { motion } from "framer-motion";

export default function OddsTableRow({ unit, index }) {
  return (
    <motion.tr
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22 }}
      className="group border-b border-white/10 bg-aw3-surface/60 transition duration-300 odd:bg-aw3-surface2/45 hover:relative hover:z-[1] hover:-translate-y-0.5 hover:border-aw3-purple/60 hover:bg-aw3-purple/10 hover:shadow-[0_0_26px_rgba(168,85,247,0.18)]"
    >
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          {unit.image ? (
            <img
              src={unit.image}
              alt=""
              className="h-10 w-10 rounded-md border border-aw3-purple/40 object-cover"
            />
          ) : null}
          <span className="font-black text-white">{unit.name}</span>
        </div>
      </td>
      <td className="px-4 py-3 font-black text-white">{unit.oddPercent}</td>
      <td className="px-4 py-3 font-semibold text-zinc-200">{unit.oneIn}</td>
      <td className="px-4 py-3 font-black text-aw3-gold">{unit.shinyPercent}</td>
      <td className="px-4 py-3 font-semibold text-zinc-200">{unit.shinyOneIn}</td>
    </motion.tr>
  );
}
