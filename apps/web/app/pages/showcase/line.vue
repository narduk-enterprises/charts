<script setup lang="ts">
import { NardukLineChart } from '@narduk-enterprises/narduk-charts'
import {
  demoBenchmarkSeries,
  demoSessionLabels,
} from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Line & area showcase — Narduk Charts'
const pageDescription =
  'Multi-series lines with dual Y axes, zoom, area fill, annotations, and reference lines for benchmark vs portfolio views.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('line'))

const labels = demoSessionLabels(48)
const series = ref(demoBenchmarkSeries(labels))
const dual = ref(true)
const zoomable = ref(true)
const showArea = ref(false)

const annotations = ref([
  { type: 'vline' as const, xIndex: 24, label: 'Mid-session', dashed: true },
])

const yBands = ref([
  { y0: 98, y1: 102, opacity: 0.15, label: 'Neutral band', yAxis: 'primary' as const },
])

const referenceLines = ref([
  { value: 100, label: 'Par', yAxis: 'primary' as const },
])

const code = computed(
  () => `<NardukLineChart
  :series="series"
  :labels="labels"
  :height="320"
  :dual-y-axis="${dual.value}"
  :zoomable="${zoomable.value}"
  :show-area="${showArea.value}"
  :annotations="annotations"
  :y-bands="yBands"
  :reference-lines="referenceLines"
/>`,
)
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Line & area', to: '/showcase/line' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Line &amp; area
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Category-indexed performance lines with optional secondary axis for comparing portfolio vs benchmark, session annotations, and Y bands.
    </p>

    <div class="mt-6 flex flex-wrap items-center gap-4">
      <UCheckbox v-model="dual" label="Dual Y axis" />
      <UCheckbox v-model="zoomable" label="Zoom" />
      <UCheckbox v-model="showArea" label="Area fill" />
    </div>

    <LiveDemoPane class="mt-6" title="Benchmark vs sleeve" description="Primary axis: benchmark. Secondary: portfolio sleeve.">
      <NardukLineChart
        chart-title="Intraday relative performance"
        chart-description="Synthetic session for UI evaluation."
        class="w-full min-w-0"
        :series="series"
        :labels="labels"
        :height="340"
        :dark="chartDark"
        :dual-y-axis="dual"
        :zoomable="zoomable"
        :zoom-auto-y="true"
        :show-area="showArea"
        :annotations="annotations"
        :y-bands="yBands"
        :reference-lines="referenceLines"
      />
    </LiveDemoPane>

    <div class="mt-10 grid gap-8 lg:grid-cols-2">
      <div>
        <h2 class="text-lg font-semibold text-highlighted">When to use</h2>
        <p class="mt-2 text-sm text-muted">
          Equity curves, factor exposures, rate levels, or any ordered category where multiple magnitudes need different scales.
        </p>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-highlighted">Interactions</h2>
        <p class="mt-2 text-sm text-muted">
          Zoom emits fractional indices; pair with candle charts via <code class="text-primary">v-model:x-window</code> and time/index mappers.
        </p>
      </div>
    </div>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-line" />
    </div>
    <div class="mt-6 flex flex-wrap gap-2">
      <UButton to="/docs/api/narduk-line-chart" color="primary" variant="soft">API reference</UButton>
      <UButton to="/showcase/capabilities/interactions" color="neutral" variant="outline">Interactions</UButton>
    </div>
  </UContainer>
</template>
