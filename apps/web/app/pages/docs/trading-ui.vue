<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Trading UI notes — Narduk Charts'
const pageDescription = 'Credible trading surfaces: toolbars, synchronized panes, session grids, and drawing persistence.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Trading UI notes</h1>
    <p class="text-muted">
      Pair charts with desk chrome (symbol, venue, timeframe, last change) outside the SVG. Keep interaction hints visible for keyboard traders.
      Serialize <code>drawings</code> arrays when users expect persisted annotations. Use <code>priceDisplayMode</code> for comparison layouts.
    </p>
    <p class="text-muted">
      Out of scope for the core library: order book ladders, DOM, alerts, and broker-specific execution widgets—integrate alongside these charts.
    </p>
    <p class="text-muted">Reference implementation patterns: <NuxtLink to="/showcase/candle">Candle showcase</NuxtLink>.</p>
  </article>
</template>
