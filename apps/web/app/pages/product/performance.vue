<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Performance & architecture — Narduk Charts'
const pageDescription =
  'SVG rendering model, draw budgets, aggregation helpers, and when to precompute studies off the hot path.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Performance &amp; architecture</h1>
    <div class="mt-8 max-w-3xl space-y-4 text-muted">
      <p>
        Charts render to SVG for predictable export and accessibility. Heavy lifting is O(n) path generation with optional decimation helpers.
      </p>
      <p>
        Candle charts cap aggregated buckets via <code>maxDrawBars</code>; pair with <code>recommendMaxDrawBars</code> for width-aware defaults.
      </p>
      <p>
        Studies execute as TypeScript loops—safe to move into workers if profiles demand it; the rendering layer stays lean.
      </p>
    </div>
    <UButton class="mt-8" to="/docs/performance" color="primary" variant="soft">Performance docs</UButton>
  </UContainer>
</template>
