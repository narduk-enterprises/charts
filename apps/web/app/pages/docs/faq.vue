<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'FAQ — Narduk Charts'
const pageDescription = 'Common integration questions for narduk-charts in Vue 3 and Nuxt 4 apps.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">FAQ</h1>
    <h2 class="text-highlighted">Canvas/WebGL?</h2>
    <p class="text-muted">
      The library targets crisp SVG for embeddability and export. For millions of points,
      pre-aggregate before plotting.
    </p>
    <h2 class="text-highlighted">React?</h2>
    <p class="text-muted">
      Vue 3 only. Wrap via custom elements only if your team accepts maintenance overhead.
    </p>
    <h2 class="text-highlighted">Next.js?</h2>
    <p class="text-muted">
      Use Vue islands or choose a React-native charting stack; this package is not SSR-tested under
      React.
    </p>
  </article>
</template>
