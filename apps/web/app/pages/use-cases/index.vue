<script setup lang="ts">
import { useCaseNav } from '~/data/site'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Use cases — Narduk Charts'
const pageDescription =
  'Where Narduk Charts fits best: brokerage platforms, market terminals, research tools, and embedded fintech surfaces.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-briefcase' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription, type: 'CollectionPage' })
useSiteBreadcrumbs([{ label: 'Use cases', to: '/use-cases' }])

const { captureNav } = useSiteAnalytics()

const adjacentCards = [
  {
    label: 'Portfolio & risk dashboards',
    body: 'Line, bar, histogram, and scatter surfaces with explicit scales for operational finance workflows.',
    to: '/product/features',
  },
  {
    label: 'Embedded fintech widgets',
    body: 'Vue-native embeds that keep your bundle policy, routing model, and accessibility posture intact.',
    to: '/product/integration',
  },
] as const
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="space-y-10">
      <div class="max-w-3xl space-y-4">
        <UBadge color="neutral" variant="subtle" class="w-fit rounded-full">Use cases</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Use cases anchored to how markets ship software
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          The public routes below are not personas for their own sake. They map the library's real
          capabilities to the buyer contexts that tend to care about charting depth, theming, and
          operational clarity.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard v-for="p in useCaseNav.slice(1)" :key="p.to" class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">{{ p.label }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ p.description }}</p>
          <UButton class="mt-4" :to="p.to" color="primary" variant="soft" @click="captureNav(p.to)">
            Details
          </UButton>
        </UCard>
        <UCard v-for="card in adjacentCards" :key="card.to" class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">{{ card.label }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ card.body }}</p>
          <UButton
            class="mt-4"
            :to="card.to"
            color="neutral"
            variant="outline"
            @click="captureNav(card.to)"
          >
            Related route
          </UButton>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
