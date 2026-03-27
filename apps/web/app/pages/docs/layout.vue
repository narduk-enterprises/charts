<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Layout & responsiveness — Narduk Charts'
const pageDescription = 'Sizing charts with width/height props, min-w-0 flex children, and container observers.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Layout &amp; responsiveness</h1>
    <ul class="text-muted">
      <li>Charts measure their container; ensure flex parents set <code>min-w-0</code> to avoid overflow clipping.</li>
      <li>Provide explicit <code>height</code> for predictable aspect; width defaults to 100% of the container.</li>
      <li>Use <code>useChartFullscreen</code> when operators need a tile to occupy the full display.</li>
    </ul>
  </article>
</template>
