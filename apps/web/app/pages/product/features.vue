<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Product features — Narduk Charts'
const pageDescription =
  'Capabilities grounded in the shipped public API: seven chart families, streaming helpers, studies, and export utilities.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const featureRows = [
  { t: 'Candlestick & OHLC', d: 'Volume, brush, crosshair, drawings, price modes, session grids.' },
  { t: 'Line & area', d: 'Dual axes, zoom, annotations, bands, reference lines.' },
  { t: 'Bar', d: 'Grouped, stacked, percent stacks.' },
  { t: 'Pie & donut', d: 'Legends, tooltips, slice clicks.' },
  { t: 'Scatter & histogram', d: 'Numeric correlation and distribution plots.' },
  { t: 'Stack layout', d: 'Shared domain for multi-pane boards.' },
  { t: 'Studies', d: 'SMA, EMA, VWAP, Bollinger, RSI, MACD as pure TS.' },
  { t: 'Export & fullscreen', d: 'PNG/SVG helpers and fullscreen toggle API.' },
] as const
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Features</h1>
    <p class="mt-4 max-w-3xl text-muted">
      Every item below maps to an export in <code>narduk-charts</code>—see the repo-root
      <code>CONTRACT.md</code> for enforcement rules.
    </p>
    <div class="mt-10 grid gap-4 md:grid-cols-2">
      <UCard v-for="row in featureRows" :key="row.t" class="border-default/70">
        <h2 class="text-lg font-semibold text-highlighted">{{ row.t }}</h2>
        <p class="mt-2 text-sm text-muted">{{ row.d }}</p>
      </UCard>
    </div>
    <UButton class="mt-10" to="/showcase" color="primary">Open showcase</UButton>
  </UContainer>
</template>
