<script setup lang="ts">
import { capabilityNav } from '~/data/site'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Capability showcases — Narduk Charts'
const pageDescription =
  'Cross-cutting interaction, realtime, studies, theming, and export surfaces that ship in the public API.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Capabilities', to: '/showcase/capabilities' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Capabilities
    </h1>
    <p class="mt-3 max-w-2xl text-base text-muted">
      These tours focus on behaviors that span multiple chart families — the same APIs you wire in production terminals.
    </p>

    <div class="mt-8 grid gap-3 sm:grid-cols-2">
      <NuxtLink
        v-for="p in capabilityNav"
        :key="p.to"
        :to="p.to"
        class="flex items-center justify-between rounded-xl border border-default/70 bg-muted/15 px-4 py-4 text-sm font-medium text-highlighted transition-colors hover:border-primary/40 hover:bg-primary/5"
      >
        {{ p.label }}
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4 text-muted" />
      </NuxtLink>
    </div>
  </UContainer>
</template>
