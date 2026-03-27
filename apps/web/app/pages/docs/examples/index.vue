<script setup lang="ts">
import { chartFamilies } from '~/data/site'

definePageMeta({ layout: 'docs' })

const pageTitle = 'Examples — Narduk Charts'
const pageDescription =
  'Runnable chart examples: flagship AAPL stream demo and interactive showcase routes for every chart family.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Examples</h1>
    <p class="lead text-muted">
      These pages are the live, copy-paste-friendly surface for the library. Showcase routes go deep on
      interactions; the API reference documents props and events.
    </p>

    <h2 class="text-highlighted">Flagship</h2>
    <ul class="text-muted">
      <li>
        <NuxtLink to="/docs/examples/aapl">AAPL — live Stonx stream</NuxtLink> — linked panes, RSI row,
        drawings, volume, brush, and <code>NardukChartStack</code> domain sync.
      </li>
    </ul>

    <h2 class="text-highlighted">By chart family</h2>
    <p class="text-muted">Each link opens the interactive showcase for that component.</p>
    <ul class="text-muted">
      <li v-for="f in chartFamilies" :key="f.id">
        <NuxtLink :to="f.route">{{ f.name }}</NuxtLink>
        — {{ f.summary }}
        <span v-if="f.api">
          · <NuxtLink :to="f.api">API</NuxtLink>
        </span>
      </li>
    </ul>

    <h2 class="text-highlighted">Capabilities</h2>
    <p class="text-muted">
      Zoom models, synchronized panes, realtime buffers, studies, theming, and export are covered under
      <NuxtLink to="/showcase/capabilities">Showcase → Capabilities</NuxtLink>.
    </p>
  </article>
</template>
