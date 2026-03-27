<script setup lang="ts">
import { NardukPieChart } from '@narduk-enterprises/narduk-charts'
import { demoSectorPie } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Pie & donut showcase — Narduk Charts'
const pageDescription = 'Sector sleeves and wallet allocation with donut mode and slice tooltips.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('pie'))

const data = ref(demoSectorPie())
const donut = ref(true)

const code = computed(
  () => `<NardukPieChart
  :data="sectors"
  :donut="${donut.value}"
  :height="300"
/>`,
)
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Pie & donut', to: '/showcase/pie' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Pie &amp; donut
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Allocation views with crisp SVG arcs, keyboard-accessible legend toggles, and optional donut framing for dashboard tiles.
    </p>

    <div class="mt-6">
      <UCheckbox v-model="donut" label="Donut mode" />
    </div>

    <LiveDemoPane class="mt-6" title="Model portfolio sleeve" description="Synthetic sector weights for demonstration.">
      <NardukPieChart
        chart-title="Sector allocation"
        class="w-full min-w-0"
        :data="data"
        :height="320"
        :dark="chartDark"
        :donut="donut"
      />
    </LiveDemoPane>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-pie" />
    </div>
    <UButton class="mt-6" to="/docs/api/narduk-pie-chart" color="primary" variant="soft">API reference</UButton>
  </UContainer>
</template>
