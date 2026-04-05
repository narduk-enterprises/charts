<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'About — Narduk Charts'
const pageDescription =
  'Why Narduk Charts exists and how the public site and source repository intentionally divide responsibilities.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-info' },
})

useWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  type: 'AboutPage',
})
useSiteBreadcrumbs([{ label: 'About', to: '/about' }])

const { captureNav } = useSiteAnalytics()
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl space-y-10">
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle" class="w-fit rounded-full">About</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Product story
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          Narduk Charts exists because trading and market software deserves charting that fits
          engineering reality: Vue-native components, explicit TypeScript contracts, and theming
          that respects the host product instead of fighting it.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Where the code lives</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            <code class="rounded bg-muted px-1 py-0.5 text-xs text-primary">narduk-charts</code>
            is the library source of truth: public exports, tests, release history, and
            source-adjacent documentation.
          </p>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">What this site owns</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            This repo owns product positioning, showcase flows, docs curation, enterprise evaluation
            guidance, and the public conversion surface around the library.
          </p>
        </UCard>
      </div>

      <div class="space-y-4 text-muted">
        <h2 class="text-lg font-semibold text-highlighted">Why the split stays intentional</h2>
        <p>
          The split keeps the public surface honest. Marketing does not fork the API, and the source
          repository does not need to carry the full enterprise narrative, pricing posture, or
          support pages for the public site.
        </p>
        <p>
          Buyers can evaluate the product through the routes on this site. Engineers can verify the
          implementation through the docs, showcase pages, and the library repository itself.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton to="/docs" color="primary" @click="captureNav('/docs')">Open docs</UButton>
        <UButton to="/showcase" color="neutral" variant="outline" @click="captureNav('/showcase')">
          Browse showcase
        </UButton>
        <UButton to="/changelog" color="neutral" variant="ghost" @click="captureNav('/changelog')">
          Release history
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
