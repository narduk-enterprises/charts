<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const pageTitle = 'Migration & versioning — Narduk Charts'
const pageDescription =
  'Semantic versioning for narduk-charts and stable type aliases for annotations.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">
      Migration &amp; versioning
    </h1>
    <p class="text-muted">
      Follow semver releases of <code>narduk-charts</code>. Breaking prop renames will be called out
      in release notes on GitHub. The <code>ChartLineAnnotationsV1</code> alias documents stable
      annotation array typing across upgrades.
    </p>
    <p class="text-muted">
      This marketing site version tracks the consuming app (<code>web@…</code>); pin the library
      explicitly in package.json.
    </p>
  </article>
</template>
