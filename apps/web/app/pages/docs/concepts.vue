<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Core concepts — Narduk Charts'
const pageDescription =
  'Categories vs time, scales, themes, and how components expose metrics for overlays.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Core concepts</h1>
    <ul class="text-muted">
      <li>
        <strong class="text-highlighted">Line &amp; bar</strong> use category indices; zoom emits
        fractional windows along X.
      </li>
      <li>
        <strong class="text-highlighted">Candles</strong> use millisecond time + bar indices;
        <code>v-model:domain</code> is the source of truth for sync.
      </li>
      <li>
        <strong class="text-highlighted">Studies</strong> are pure functions—compute off-thread if
        needed, bind results into line rows.
      </li>
      <li>
        <strong class="text-highlighted">Themes</strong> layer on top of light/dark via the
        <code>theme</code> prop.
      </li>
    </ul>
  </article>
</template>
