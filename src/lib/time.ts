/** Timeline math. Months are counted from the start of the chart domain. */

export const DOMAIN_START = { year: 2012, month: 1 };

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function parseYm(ym: string): { year: number; month: number } {
  const [y, m] = ym.split('-').map(Number);
  return { year: y, month: m };
}

export function monthIndex(year: number, month: number): number {
  return (year - DOMAIN_START.year) * 12 + (month - 1);
}

export function today(): { year: number; month: number } {
  const d = new Date();
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1 };
}

/** Last month shown on the chart: the later of "now" and Dec 2026, plus a small margin. */
export function domainEndIndex(): number {
  const now = today();
  const end = Math.max(monthIndex(now.year, now.month), monthIndex(2026, 12));
  return end + 1;
}

export function pct(index: number, total: number): number {
  return Math.round((index / total) * 10000) / 100;
}

export function formatYm(ym: string): string {
  if (ym === 'present') return 'present';
  const { year, month } = parseYm(ym);
  return `${MONTHS[month - 1]} ${year}`;
}

export function yearTicks(totalMonths: number): { year: number; left: number }[] {
  const ticks: { year: number; left: number }[] = [];
  for (let y = DOMAIN_START.year; monthIndex(y, 1) <= totalMonths; y += 2) {
    ticks.push({ year: y, left: pct(monthIndex(y, 1), totalMonths) });
  }
  return ticks;
}
