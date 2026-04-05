<script setup lang="ts">
const breadcrumbs = [
  { label: 'Use cases', to: '/use-cases' },
  { label: 'Brokerage platforms', to: '/use-cases/brokerage' },
]

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Brokerage platforms — Narduk Charts'
const pageDescription =
  'Charting for retail and professional brokerage products: brand fit, OHLC interactions, and dependable chart behavior under product constraints.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-landmark' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription })
useSiteBreadcrumbs([...breadcrumbs])

const { captureNav } = useSiteAnalytics()
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-4xl space-y-8">
      <UBreadcrumb class="mb-2" :items="breadcrumbs" />
      <div class="space-y-4">
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Brokerage-grade charting without widget debt
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          Brokerage teams ship under heavy brand, compliance, and responsiveness constraints. Charts
          need to inherit the platform's design system and interaction model without becoming an
          opaque embed that breaks the rest of the product.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">What the library brings</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Direct Vue components mounted inside routed views or shell-managed panels.</li>
            <li>OHLC interactions, zoom models, and export surfaces for trader-facing flows.</li>
            <li>Theming hooks that let chart chrome follow partner or house brand tokens.</li>
          </ul>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">What stays with your platform</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Market-data transport, entitlement logic, and audit requirements.</li>
            <li>Order-entry and broker-specific workflows outside the charting surface.</li>
            <li>Authentication, tenancy, and deployment boundaries.</li>
          </ul>
        </UCard>
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton to="/showcase/candle" color="primary" @click="captureNav('/showcase/candle')">
          Candle showcase
        </UButton>
        <UButton
          to="/product/theming"
          color="neutral"
          variant="outline"
          @click="captureNav('/product/theming')"
        >
          Theming
        </UButton>
        <UButton
          to="/product/enterprise"
          color="neutral"
          variant="ghost"
          @click="captureNav('/product/enterprise')"
        >
          Enterprise fit
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
