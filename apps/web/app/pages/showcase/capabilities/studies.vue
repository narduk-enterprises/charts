<script setup lang="ts">
import { NardukLineChart } from '@narduk-enterprises/narduk-charts'
import { ema, macd } from '@narduk-enterprises/narduk-charts/studies'
import { demoCandles } from '~/lib/demo/candles'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Studies & indicators — Narduk Charts'
const pageDescription =
  'Pure functions in @narduk-enterprises/narduk-charts/studies compose with line or candle data for enterprise-grade indicator rows.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('capabilities/studies'))

const bars = demoCandles(90, { fixedAnchor: Date.UTC(2026, 1, 1, 14, 0, 0) })
const closes = bars.map((b) => b.c)
const labels = bars.map((b) =>
  new Date(b.t).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
)

const ema20 = ema(closes, 20)
const { line: macdLine, signal: macdSignal } = macd(closes, 12, 26, 9)

const series = ref([
  { name: 'Close', data: closes.map((c) => Number(c.toFixed(2))) },
  {
    name: 'EMA 20',
    data: ema20.map((v: number | null) => (v === null ? null : Number(v.toFixed(2)))),
  },
])

const macdSeries = ref([
  {
    name: 'MACD line',
    data: macdLine.map((v: number | null) => (v === null ? null : Number(v.toFixed(3)))),
  },
  {
    name: 'Signal',
    data: macdSignal.map((v: number | null) => (v === null ? null : Number(v.toFixed(3)))),
  },
])

const code = `import { ema, rsi, macd, vwap } from '@narduk-enterprises/narduk-charts/studies'

const ema20 = ema(closes, 20)
const macdRows = macd(closes, 12, 26, 9)`
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Studies', to: '/showcase/capabilities/studies' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Studies pipeline
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Indicators ship as deterministic TypeScript — no hidden WebWorker or canvas layer. Compute on
      the server or client, then bind the arrays into
      <code class="text-primary">NardukLineChart</code> or custom overlays. Subpath import keeps
      bundles lean:
      <code class="text-primary"
        >import { rsi } from '@narduk-enterprises/narduk-charts/studies'</code
      >.
    </p>

    <div class="mt-8 space-y-8">
      <LiveDemoPane
        title="Price + EMA(20)"
        description="Close series with a nullable-aware EMA overlay."
      >
        <NardukLineChart
          chart-title="EMA overlay"
          class="w-full min-w-0"
          :series="series"
          :labels="labels"
          :height="300"
          :dark="chartDark"
          :show-points="false"
        />
      </LiveDemoPane>

      <LiveDemoPane
        title="MACD(12,26,9)"
        description="Line chart renders MACD + signal columns from the same study output."
      >
        <NardukLineChart
          chart-title="MACD"
          class="w-full min-w-0"
          :series="macdSeries"
          :labels="labels"
          :height="220"
          :dark="chartDark"
          :show-points="false"
        />
      </LiveDemoPane>
    </div>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-studies" />
    </div>
    <UButton class="mt-6" to="/docs/api/studies" color="primary" variant="soft"
      >Studies API</UButton
    >
  </UContainer>
</template>
