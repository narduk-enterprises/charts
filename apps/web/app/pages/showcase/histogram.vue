<script setup lang="ts">
import { NardukHistogramChart } from '@narduk-enterprises/narduk-charts'
import { demoReturnSample } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Histogram showcase — Narduk Charts'
const pageDescription = 'Return or PnL distributions with automatic binning for risk reporting.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('histogram'))

const values = ref(demoReturnSample(55, 600))

const code = `<NardukHistogramChart
  :values="dailyLogReturns"
  :bin-count="16"
  :height="300"
/>`
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Histogram', to: '/showcase/histogram' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Histogram</h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Feed raw samples or explicit bins for desk-level risk visualization (daily returns, slippage,
      latency).
    </p>

    <LiveDemoPane
      class="mt-6"
      title="Synthetic daily returns"
      description="Deterministic fixture for repeatable screenshots."
    >
      <NardukHistogramChart
        chart-title="Return distribution"
        class="w-full min-w-0"
        :values="values"
        :bin-count="14"
        :height="300"
        :dark="chartDark"
      />
    </LiveDemoPane>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-histogram" />
    </div>
    <UButton class="mt-6" to="/docs/api/narduk-histogram-chart" color="primary" variant="soft"
      >API reference</UButton
    >
  </UContainer>
</template>
