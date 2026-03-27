<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Accessibility — Narduk Charts'
const pageDescription = 'SVG titles, live regions, keyboard paths, and optional data tables for line and bar charts.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Accessibility</h1>
    <p class="text-muted">
      Components emit structured names/descriptions, expose keyboard navigation on supported marks, and honor reduced-motion preferences.
      Enable <code>showDataTable</code> on line/bar variants when compliance requires a tabular equivalent.
    </p>
  </article>
</template>
