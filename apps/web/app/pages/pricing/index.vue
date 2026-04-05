<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Pricing — Narduk Charts'
const pageDescription =
  'MIT licensing for the charting library, with enterprise implementation support available through direct contact.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-badge-dollar-sign' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription })
useSiteBreadcrumbs([{ label: 'Pricing', to: '/pricing' }])

const { captureCta, captureNav } = useSiteAnalytics()
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl space-y-8">
      <div class="space-y-4 text-center">
        <UBadge color="neutral" variant="subtle" class="rounded-full">Pricing</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Straightforward licensing
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          The library is released under the MIT License. Use it in commercial products without a SKU
          maze. When you want help integrating it into institutional-grade workflows, talk to us
          directly.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Open-source license</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Build commercial products with the library under MIT. Review the license in the source
            repository when you package or mirror the code internally.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <UButton
              to="/docs/installation"
              color="neutral"
              variant="outline"
              @click="captureNav('/docs/installation')"
            >
              Installation
            </UButton>
            <UButton
              to="/changelog"
              color="neutral"
              variant="ghost"
              @click="captureNav('/changelog')"
            >
              Release history
            </UButton>
          </div>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Enterprise support</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Reach out when the decision includes implementation review, rollout planning, custom
            behavior design, or security and procurement questionnaires.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <UButton to="/contact" color="primary" @click="captureCta('pricing_contact')">
              Start a conversation
            </UButton>
            <UButton
              to="/product/enterprise"
              color="neutral"
              variant="outline"
              @click="captureNav('/product/enterprise')"
            >
              Enterprise fit
            </UButton>
            <UButton
              to="/security"
              color="neutral"
              variant="ghost"
              @click="captureNav('/security')"
            >
              Security posture
            </UButton>
          </div>
        </UCard>
      </div>

      <UCard class="border-default/80 bg-default/40">
        <h2 class="text-lg font-semibold text-highlighted">What happens next</h2>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          Share your stack, chart surfaces, and rollout constraints. We respond with a concrete
          integration outline rather than a generic plan-of-record slide.
        </p>
      </UCard>
    </div>
  </UContainer>
</template>
