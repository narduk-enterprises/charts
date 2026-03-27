<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Performance — Narduk Charts'
const pageDescription = 'Decimation, candle aggregation, maxDrawBars, and choosing render strategies for wide datasets.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Performance</h1>
    <ul class="text-muted">
      <li>Cap plotted categories with <code>maxRenderPoints</code> on line charts when zoom is disabled.</li>
      <li>Use <code>recommendMaxDrawBars</code> + <code>suggestCandleRenderStrategy</code> to align draw cost with plot width.</li>
      <li>Aggregate intraday feeds with <code>aggregateCandlesToResolution</code> before passing to candles.</li>
      <li>Prefer studies computed incrementally or memoized when datasets exceed interactive budgets.</li>
    </ul>
    <p class="text-muted">Product notes: <NuxtLink to="/product/performance">Performance &amp; architecture</NuxtLink>.</p>
  </article>
</template>
