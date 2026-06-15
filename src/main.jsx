import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { units } from "./data/units";
import { calculateOdds } from "./utils/odds";
import Header from "./components/Header";
import BuffInputCard from "./components/BuffInputCard";
import OddsTable from "./components/OddsTable";
import FormulaPanel from "./components/FormulaPanel";
import { registerServiceWorker } from "./registerServiceWorker";

function App() {
  const [buffs, setBuffs] = useState({
    luck: 15,
    secretChancePercent: 50,
    shinyChancePercent: 5,
  });

  const calculatedOdds = useMemo(() => calculateOdds(units, buffs), [buffs]);

  function updateBuff(key, value) {
    setBuffs((current) => ({
      ...current,
      [key]: Number.isFinite(value) ? value : 0,
    }));
  }

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-7 text-white sm:px-6 lg:px-8">
      <Header />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3" aria-label="Buff inputs">
        <BuffInputCard
          label="Luck Buff"
          value={buffs.luck}
          step="0.01"
          onChange={(value) => updateBuff("luck", value)}
        />
        <BuffInputCard
          label="Secret Chance %"
          value={buffs.secretChancePercent}
          step="0.01"
          onChange={(value) => updateBuff("secretChancePercent", value)}
        />
        <BuffInputCard
          label="Shiny Chance %"
          value={buffs.shinyChancePercent}
          step="0.01"
          onChange={(value) => updateBuff("shinyChancePercent", value)}
        />
      </section>

      <OddsTable units={calculatedOdds} />
      <FormulaPanel />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
registerServiceWorker();
