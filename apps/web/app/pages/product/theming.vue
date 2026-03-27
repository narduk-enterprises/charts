<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Theming for product teams — Narduk Charts'
const pageDescription =
  'Brand-safe chart skins: high-contrast desks, print reports, and colorblind-safe series differentiation.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Theming</h1>
    <p class="mt-4 max-w-3xl text-muted">
      Use built-in <code>ChartTheme</code> values before overriding palette tokens. Match your design system by wrapping charts in containers that set <code>dark</code> explicitly for embedded widgets.
    </p>
    <UButton class="mt-8" to="/docs/theming" color="primary" variant="soft">Styling docs</UButton>
  </UContainer>
</template>
