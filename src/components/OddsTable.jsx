import OddsTableRow from "./OddsTableRow";

export default function OddsTable({ units }) {
  return (
    <section className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-aw3-surface/75 shadow-card backdrop-blur-xl" aria-label="Secret unit odds table">
      <div className="max-h-[60vh] overflow-auto">
        <table className="w-full min-w-[720px] border-collapse">
          <thead className="sticky top-0 z-10 bg-aw3-surface2/95 backdrop-blur">
            <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-aw3-muted">
              <th className="px-4 py-4 font-black">Unit</th>
              <th className="px-4 py-4 font-black">Odd</th>
              <th className="px-4 py-4 font-black">Ratio</th>
              <th className="px-4 py-4 font-black">Shiny %</th>
              <th className="px-4 py-4 font-black">Shiny Ratio</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit, index) => (
              <OddsTableRow key={unit.name} unit={unit} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
