<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Events & callbacks — Narduk Charts'
const pageDescription =
  'Zoom, click, domain sync, and drawing update events emitted by chart components.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Events &amp; callbacks</h1>
    <ul class="text-muted">
      <li>
        <code>NardukLineChart</code> — <code>pointClick</code>, <code>zoom</code>; optional
        <code>v-model:x-window</code>.
      </li>
      <li>
        <code>NardukCandleChart</code> — <code>update:domain</code>, <code>zoom</code>,
        <code>barClick</code>, <code>update:drawings</code>.
      </li>
      <li>
        <code>NardukBarChart</code> — <code>barClick</code>; <code>NardukPieChart</code> —
        <code>sliceClick</code>.
      </li>
      <li>
        <code>NardukScatterChart</code> — <code>pointClick</code> with series + index metadata.
      </li>
    </ul>
    <p class="text-muted">
      Detailed payloads live in <NuxtLink to="/docs/api">API reference</NuxtLink>.
    </p>
  </article>
</template>
