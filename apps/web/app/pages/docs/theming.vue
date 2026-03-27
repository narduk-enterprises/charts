<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Theming & styling — Narduk Charts'
const pageDescription = 'ChartTheme tokens, dark overrides, and CSS variables shipped with narduk-charts/style.css.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Theming &amp; styling</h1>
    <p class="text-muted">
      Pass <code>theme="default | high-contrast | print | colorblind-safe"</code> and combine with <code>dark</code> or parent color mode.
      Raster exports should inline the same CSS via <code>embeddedCss</code> on <code>exportChartPng</code>.
    </p>
    <p class="text-muted">See <NuxtLink to="/showcase/capabilities/theming">Theming showcase</NuxtLink>.</p>
  </article>
</template>
