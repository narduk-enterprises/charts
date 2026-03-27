<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Documentation — Narduk Charts'
const pageDescription =
  'Install, integrate, and ship @narduk-enterprises/narduk-charts in Vue 3 apps: concepts, data shapes, events, performance, and trading UI patterns.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Documentation</h1>
    <p class="lead text-muted">
      These guides mirror the public API of <code>@narduk-enterprises/narduk-charts</code>. If a behavior is not documented here, it is not guaranteed stable.
    </p>
    <h2 class="text-highlighted">Start here</h2>
    <ul>
      <li><NuxtLink to="/docs/installation">Installation</NuxtLink> — package, CSS, and subpath imports.</li>
      <li><NuxtLink to="/docs/quickstart">Quick start</NuxtLink> — first chart in under five minutes.</li>
      <li><NuxtLink to="/docs/api">API reference</NuxtLink> — components, composables, utilities.</li>
    </ul>
    <h2 class="text-highlighted">Ship to production</h2>
    <ul>
      <li><NuxtLink to="/docs/data">Data shapes</NuxtLink> — <code>CandleBar</code>, <code>ChartSeries</code>, null gaps.</li>
      <li><NuxtLink to="/docs/events">Events &amp; callbacks</NuxtLink> — zoom, clicks, domain sync.</li>
      <li><NuxtLink to="/docs/performance">Performance</NuxtLink> — decimation, draw budgets, aggregation.</li>
      <li><NuxtLink to="/docs/realtime">Realtime</NuxtLink> — streaming composables.</li>
      <li><NuxtLink to="/docs/trading-ui">Trading UI notes</NuxtLink> — layout and credibility patterns.</li>
    </ul>
  </article>
</template>
