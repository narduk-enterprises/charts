<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Data shapes — Narduk Charts'
const pageDescription = 'CandleBar, ChartSeries, null gaps, PieDataItem, ScatterSeries, and HistogramBin contracts.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Data shapes</h1>
    <ul class="text-muted">
      <li><code>CandleBar</code> — <code>t</code> (open time ms), <code>o h l c</code>, optional <code>v</code> volume.</li>
      <li><code>ChartSeries</code> — <code>name</code>, <code>data[]</code> with <code>null</code> gaps, optional <code>yAxis</code> for dual scales.</li>
      <li><code>PieDataItem</code> — <code>label</code>, <code>value</code>, optional <code>color</code>.</li>
      <li><code>ScatterSeries</code> — <code>points[]</code> with numeric <code>x</code>/<code>y</code>.</li>
      <li><code>HistogramBin</code> — <code>start</code>, <code>end</code>, <code>count</code> when supplying explicit buckets.</li>
    </ul>
    <p class="text-muted">Types export from the root entry—see <NuxtLink to="/docs/api">API index</NuxtLink>.</p>
  </article>
</template>
