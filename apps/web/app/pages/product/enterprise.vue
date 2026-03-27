<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Enterprise & evaluation — Narduk Charts'
const pageDescription =
  'How trading and fintech teams evaluate narduk-charts: scope, extensibility, auditability, and integration posture.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Enterprise</h1>
    <div class="mt-8 max-w-3xl space-y-4 text-muted">
      <p>
        <strong class="text-highlighted">Scope clarity.</strong> Core charts exclude broker-specific execution widgets so compliance teams can review a bounded surface.
      </p>
      <p>
        <strong class="text-highlighted">Extensibility.</strong> Overlay slot + exposed metrics + serializable drawings let you add proprietary analytics without forking renders.
      </p>
      <p>
        <strong class="text-highlighted">Evidence.</strong> PNG export with inlined CSS supports audit artifacts; deterministic studies simplify golden tests.
      </p>
      <p>
        <strong class="text-highlighted">Support path.</strong> Source is on GitHub; pin versions in lockfiles and track releases for breaking changes.
      </p>
    </div>
    <div class="mt-10 flex flex-wrap gap-2">
      <UButton to="/docs/trading-ui" color="primary" variant="soft">Trading UI notes</UButton>
      <UButton to="/product/performance" color="neutral" variant="outline">Performance posture</UButton>
    </div>
  </UContainer>
</template>
