<script setup lang="ts">
const breadcrumbs = [
  { label: 'Use cases', to: '/use-cases' },
  { label: 'Terminals & research', to: '/use-cases/terminals' },
]

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Terminals & research — Narduk Charts'
const pageDescription =
  'Multi-pane research and desk layouts with Vue-coordinated state, synchronized panes, and chart components that fit a terminal shell.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-layout-dashboard' },
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
          Terminals need coordination, not isolated canvases
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          Research and execution terminals combine time-series, indicator lanes, tables, and text
          surfaces. Charts should participate in the same layout and state graph rather than acting
          like a foreign widget dropped onto the page.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Why Vue-native matters</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Because the charts are components, you can synchronize domains, symbol context, and
            selection state with the same stores and orchestration you already use for the rest of
            the terminal.
          </p>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Operational quality</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            SVG-based rendering keeps export and accessibility workflows legible, while the chart
            APIs expose the control points you need for desk-grade interactions.
          </p>
        </UCard>
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton
          to="/showcase/chart-stack"
          color="primary"
          @click="captureNav('/showcase/chart-stack')"
        >
          Chart stack
        </UButton>
        <UButton
          to="/showcase/capabilities/synchronized"
          color="neutral"
          variant="outline"
          @click="captureNav('/showcase/capabilities/synchronized')"
        >
          Synchronized panes
        </UButton>
        <UButton
          to="/docs/trading-ui"
          color="neutral"
          variant="ghost"
          @click="captureNav('/docs/trading-ui')"
        >
          Trading UI notes
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
