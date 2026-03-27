<script setup lang="ts">
import { NardukCandleChart, NardukLineChart } from '@narduk-enterprises/narduk-charts'
import { demoCandles } from '~/lib/demo/candles'
import { demoBenchmarkSeries, demoSessionLabels } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Zoom, crosshair & tooltips — Narduk Charts'
const pageDescription =
  'Library-supported pointer interactions: line zoom vs candle zoom, crosshair modes, and tooltip slots.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('capabilities/interactions'))

const bars = ref(demoCandles(120, { fixedAnchor: Date.UTC(2026, 1, 5, 10, 0, 0) }))
const labels = demoSessionLabels(36)
const series = ref(demoBenchmarkSeries(labels))
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Interactions', to: '/showcase/capabilities/interactions' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Interactions &amp; zoom models
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      <strong>Line charts</strong> zoom on category indices (fractional windows) and can
      auto-rescale Y to the visible slice. <strong>Candle charts</strong> zoom in bar index + time
      space, emit <code class="text-primary">v-model:domain</code>, and support brush + volume
      panes.
    </p>

    <div class="mt-10 space-y-8">
      <LiveDemoPane
        title="Candle zoom + crosshair"
        description="Ctrl/Cmd+wheel, shift-pan, drag zoom box."
      >
        <NardukCandleChart
          class="w-full min-w-0"
          :bars="bars"
          :height="320"
          :dark="chartDark"
          :zoomable="true"
          :show-crosshair="true"
          :show-ohlc-hud="true"
        />
      </LiveDemoPane>

      <LiveDemoPane
        title="Line zoom + dual tooltip"
        description="Drag zoom on the category axis; legend toggles series."
      >
        <NardukLineChart
          class="w-full min-w-0"
          :series="series"
          :labels="labels"
          :height="300"
          :dark="chartDark"
          :dual-y-axis="true"
          :zoomable="true"
          :show-points="true"
        />
      </LiveDemoPane>
    </div>

    <div class="mt-10 flex flex-wrap gap-2">
      <UButton to="/docs/events" color="primary" variant="soft">Events docs</UButton>
      <UButton to="/docs/api/narduk-line-chart" color="neutral" variant="outline">Line API</UButton>
      <UButton to="/docs/api/narduk-candle-chart" color="neutral" variant="outline"
        >Candle API</UButton
      >
    </div>
  </UContainer>
</template>
