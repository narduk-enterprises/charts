<script setup lang="ts">
import { NPM_PACKAGE_NAME } from '~/data/site'

definePageMeta({ layout: 'docs' })

const pageTitle = 'Quick start — Narduk Charts'
const pageDescription = 'Render your first candle and line chart with typed props and events.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Quick start</h1>
    <ol class="text-muted">
      <li>
        Install the package and import <code>{{ NPM_PACKAGE_NAME }}/style.css</code>.
      </li>
      <li>
        Mount <code>NardukCandleChart</code> with a <code>CandleBar[]</code> sorted by
        <code>t</code> ascending.
      </li>
      <li>
        Enable <code>zoomable</code> and optional <code>show-volume</code> /
        <code>show-brush</code>.
      </li>
      <li>Listen for <code>@update:domain</code> when wiring multiple panes.</li>
    </ol>
    <p class="text-muted">
      Copy a full example from <NuxtLink to="/showcase/candle">Candle showcase</NuxtLink> or
      <NuxtLink to="/docs/api/narduk-candle-chart">API reference</NuxtLink>.
    </p>
  </article>
</template>
