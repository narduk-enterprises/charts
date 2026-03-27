<script setup lang="ts">
import { NPM_PACKAGE_NAME } from '~/data/site'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Integration & embedding — Narduk Charts'
const pageDescription =
  'Nuxt 4, Vite, SSR considerations, CSS loading, and tree-shakable entry points for production bundles.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Integration</h1>
    <div class="mt-8 max-w-3xl space-y-4 text-muted">
      <p>
        This site runs on Nuxt 4 with charts inside <code>ClientOnly</code> where
        hydration-sensitive measurements occur—mirror that pattern if SSR flashes are visible.
      </p>
      <p>
        Import <code>{{ NPM_PACKAGE_NAME }}/style.css</code> once in app entry or Nuxt config. Use
        subpath imports (<code>/candle</code>, <code>/studies</code>, …) to keep chunks small.
      </p>
      <p>
        This app depends on <code>{{ NPM_PACKAGE_NAME }}</code> from
        <strong>GitHub Packages</strong> (<code>^2.0.0</code>). CI and local installs need registry
        auth for the <code>@narduk-enterprises</code> scope (see root <code>.npmrc</code>).
      </p>
    </div>
    <UButton class="mt-8" to="/docs/installation" color="primary" variant="soft"
      >Installation guide</UButton
    >
  </UContainer>
</template>
