import type { ChartSeries, PieDataItem, ScatterSeries } from '@narduk-enterprises/narduk-charts'
import { mulberry32 } from './random'

/** Session-style category labels for line/bar demos. */
export function demoSessionLabels(n: number): string[] {
  const start = 9 * 60 + 30
  return Array.from({ length: n }, (_, i) => {
    const m = start + i * 5
    const hh = Math.floor(m / 60)
    const mm = m % 60
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
  })
}

export function demoBenchmarkSeries(labels: string[]): ChartSeries[] {
  const rand = mulberry32(901)
  let a = 100
  let b = 100
  const s0: (number | null)[] = []
  const s1: (number | null)[] = []
  for (let i = 0; i < labels.length; i++) {
    a += (rand() - 0.48) * 1.1
    b += (rand() - 0.5) * 1.4
    s0.push(Number(a.toFixed(2)))
    s1.push(i === 40 ? null : Number(b.toFixed(2)))
  }
  return [
    { name: 'Benchmark', data: s0, yAxis: 'primary' },
    { name: 'Portfolio', data: s1, yAxis: 'secondary' },
  ]
}

export function demoSectorPie(): PieDataItem[] {
  return [
    { label: 'Technology', value: 38, color: '#0d9488' },
    { label: 'Financials', value: 22, color: '#0369a1' },
    { label: 'Healthcare', value: 16, color: '#4f46e5' },
    { label: 'Industrials', value: 14, color: '#64748b' },
    { label: 'Cash', value: 10, color: '#94a3b8' },
  ]
}

export function demoRiskScatter(): ScatterSeries[] {
  return [
    {
      name: 'Equity sleeve',
      color: '#0d9488',
      points: [
        { x: 8, y: 11, label: 'US large' },
        { x: 12, y: 9, label: 'US mid' },
        { x: 18, y: 14, label: 'Intl dev' },
        { x: 22, y: 18, label: 'EM' },
      ],
    },
    {
      name: 'Alt sleeve',
      color: '#0369a1',
      points: [
        { x: 6, y: 4, label: 'Gold' },
        { x: 15, y: 7, label: 'REITs' },
        { x: 20, y: 12, label: 'Commodities' },
      ],
    },
  ]
}

export function demoMonthlyBar(labels: string[]): ChartSeries[] {
  const rand = mulberry32(1202)
  const mk = (bias: number) =>
    labels.map(() => Math.round(20 + rand() * 55 + bias))
  return [
    { name: 'Revenue', data: mk(0) },
    { name: 'Hedge cost', data: mk(-8) },
  ]
}

export function demoReturnSample(seed = 44, n = 400): number[] {
  const rand = mulberry32(seed)
  const xs: number[] = []
  for (let i = 0; i < n; i++) {
    xs.push((rand() - 0.5) * 0.028)
  }
  return xs
}
