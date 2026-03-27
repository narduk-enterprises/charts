import type { CandleBar } from '@narduk-enterprises/narduk-charts'
import { mulberry32 } from './random'

/** Intraday-style OHLCV walk; anchor is recent UTC unless `fixedAnchor` is set (tests). */
export function demoCandles(
  count: number,
  options?: { seed?: number; seedPrice?: number; stepMs?: number; fixedAnchor?: number },
): CandleBar[] {
  const seed = options?.seed ?? 17031
  const rand = mulberry32(seed)
  const stepMs = options?.stepMs ?? 60_000
  const t0 =
    options?.fixedAnchor ?? Date.UTC(2026, 0, 15, 14, 0, 0) - Math.max(0, count - 120) * stepMs
  let price = options?.seedPrice ?? 21_180
  const out: CandleBar[] = []
  for (let i = 0; i < count; i++) {
    const o = price
    const drift = (rand() - 0.49) * 14
    const c = Math.max(0.01, o + drift)
    const h = Math.max(o, c) + rand() * 10
    const l = Math.min(o, c) - rand() * 10
    const v = Math.round(800 + rand() * 9000 + (Math.abs(c - o) > 6 ? 4000 : 0))
    out.push({ t: t0 + i * stepMs, o, h, l, c, v })
    price = c
  }
  return out
}
