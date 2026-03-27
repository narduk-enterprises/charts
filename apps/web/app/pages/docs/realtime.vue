<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Realtime patterns — Narduk Charts'
const pageDescription = 'useCandleStream and useStreamingSeries for throttled websocket feeds and forming buckets.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Realtime patterns</h1>
    <ul class="text-muted">
      <li><code>useCandleStream</code> maintains a rolling <code>CandleBar[]</code>; duplicate <code>t</code> replaces the forming bar.</li>
      <li><code>useStreamingSeries</code> stores scalar windows for sparkline-style strips.</li>
      <li>Both accept <code>maxUpdatesPerSecond</code> to coalesce bursty websocket frames.</li>
    </ul>
    <p class="text-muted">Live demo: <NuxtLink to="/showcase/capabilities/realtime">Realtime capability</NuxtLink>.</p>
  </article>
</template>
