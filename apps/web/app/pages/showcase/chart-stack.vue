<script setup lang="ts">
import { NardukCandleChart, NardukChartStack } from '@narduk-enterprises/narduk-charts'
import type { CandleTimeDomain } from '@narduk-enterprises/narduk-charts'
import { demoCandles } from '~/lib/demo/candles'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Chart stack layout — Narduk Charts'
const pageDescription =
  'NardukChartStack forwards v-model:domain so multiple candle panes share the exact visible time window.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('chart-stack'))

const bars = ref(demoCandles(180, { fixedAnchor: Date.UTC(2026, 1, 10, 9, 30, 0) }))
const domain = ref<CandleTimeDomain | null>(null)

const endScript = '<' + '/script>'
const code = [
  '<script setup lang="ts">',
  "import { NardukChartStack, NardukCandleChart } from '@narduk-enterprises/narduk-charts'",
  "import type { CandleTimeDomain } from '@narduk-enterprises/narduk-charts'",
  '',
  'const domain = ref<CandleTimeDomain | null>(null)',
  endScript,
  '',
  '<template>',
  '  <NardukChartStack v-model:domain="domain">',
  '    <div class="flex flex-col gap-3">',
  '      <NardukCandleChart v-model:domain="domain" :bars="primary" />',
  '      <NardukCandleChart v-model:domain="domain" :bars="secondary" />',
  '    </div>',
  '  </NardukChartStack>',
  '<' + '/template>',
].join('\n')
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Chart stack', to: '/showcase/chart-stack' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Chart stack</h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Use <code class="text-primary">NardukChartStack</code> to hoist a single
      <code class="text-primary">v-model:domain</code> across vertically stacked panes. Pair the
      bottom pane with <code class="text-primary">NardukLineChart</code> via fractional
      <code class="text-primary">x-window</code> mapping when showing studies.
    </p>

    <LiveDemoPane
      class="mt-6"
      title="Linked candles"
      description="Zoom either chart: both stay aligned on the same millisecond window."
    >
      <NardukChartStack v-model:domain="domain">
        <div class="flex flex-col gap-4">
          <NardukCandleChart
            chart-title="Primary — ES"
            class="w-full min-w-0"
            :bars="bars"
            :height="280"
            :dark="chartDark"
            v-model:domain="domain"
            :zoomable="true"
            :show-crosshair="true"
          />
          <NardukCandleChart
            chart-title="Correlated — NQ"
            class="w-full min-w-0"
            :bars="bars"
            :height="240"
            :dark="chartDark"
            v-model:domain="domain"
            :zoomable="true"
            candle-style="hollow"
          />
        </div>
      </NardukChartStack>
    </LiveDemoPane>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-stack" />
    </div>
    <div class="mt-6 flex flex-wrap gap-2">
      <UButton to="/docs/api/narduk-chart-stack" color="primary" variant="soft"
        >API reference</UButton
      >
      <UButton to="/showcase/capabilities/synchronized" color="neutral" variant="outline"
        >RSI + candle sync</UButton
      >
    </div>
  </UContainer>
</template>
