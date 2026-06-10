export function calculateLuckMultiplier(luck, offset) {
  if (luck < 14 - offset) {
    return 1 + (luck + offset) * 0.1;
  }

  return 1.7 + (luck + offset) * 0.05;
}

export function formatPercent(value) {
  return `${(value * 100).toFixed(10)}%`;
}

export function formatOneIn(value) {
  if (value <= 0 || !Number.isFinite(value)) {
    return "-";
  }

  return `1 / ${Math.round(1 / value).toLocaleString("en-US")}`;
}

export function getRarityTone(value) {
  if (value >= 3e-6) {
    return "gold";
  }

  if (value >= 2e-6) {
    return "purple";
  }

  if (value >= 1e-6) {
    return "white";
  }

  return "gray";
}

export function calculateOdds(units, buffs) {
  const secretMultiplier = 1 + Math.max(0, buffs.secretChancePercent) / 100;
  const shinyMultiplier = Math.max(0, buffs.shinyChancePercent) / 100;

  return units
    .map((unit) => {
      const luckMultiplier = calculateLuckMultiplier(buffs.luck, unit.luckOffset);
      const odd = unit.baseOdd * secretMultiplier * luckMultiplier;
      const shinyOdd = odd * shinyMultiplier;

      return {
        ...unit,
        luckMultiplier,
        odd,
        shinyOdd,
        oddPercent: formatPercent(odd),
        shinyPercent: formatPercent(shinyOdd),
        oneIn: formatOneIn(odd),
        shinyOneIn: formatOneIn(shinyOdd),
        rarityTone: getRarityTone(odd),
      };
    })
    .sort((a, b) => b.odd - a.odd);
}
