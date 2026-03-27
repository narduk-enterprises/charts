<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Composition — Narduk Charts'
const pageDescription =
  'Stack candles with studies, slot tooltips, and align custom SVG overlays via exposed metrics.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Chart composition</h1>
    <ul class="text-muted">
      <li>
        Use <code>NardukChartStack</code> + shared <code>v-model:domain</code> for vertical trading
        layouts.
      </li>
      <li>
        Map <code>NardukLineChart</code> <code>v-model:x-window</code> with
        <code>candleIndexAtTime</code> / <code>candleTimeAtIndex</code>.
      </li>
      <li>
        Override <code>tooltip</code> and <code>legend-item</code> slots when branding demands
        custom HTML.
      </li>
      <li>
        Use candle <code>#overlay</code> slot + exposed metrics for VWAP bands and session boxes.
      </li>
    </ul>
    <p class="text-muted">
      Walk through <NuxtLink to="/showcase/capabilities/synchronized">Synchronized panes</NuxtLink>.
    </p>
  </article>
</template>
