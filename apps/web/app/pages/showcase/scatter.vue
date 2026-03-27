<script setup lang="ts">
import { NardukScatterChart } from '@narduk-enterprises/narduk-charts'
import { demoRiskScatter } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Scatter chart showcase — Narduk Charts'
const pageDescription = 'Risk/return or factor scatter plots with multi-series coloring.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('scatter'))

const series = ref(demoRiskScatter())

const code = `<NardukScatterChart
  :series="riskSeries"
  :height="320"
/>`
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Scatter', to: '/showcase/scatter' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Scatter
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Numeric X/Y plotting for volatility vs return, beta buckets, or liquidity scores. Points emit click payloads for drill-down routing.
    </p>

    <LiveDemoPane class="mt-6" title="Risk sleeves" description="Illustrative vol (x) vs drawdown depth (y) in basis points.">
      <NardukScatterChart
        chart-title="Sleeve risk map"
        class="w-full min-w-0"
        :series="series"
        :height="340"
        :dark="chartDark"
        :point-radius="5"
      />
    </LiveDemoPane>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-scatter" />
    </div>
    <UButton class="mt-6" to="/docs/api/narduk-scatter-chart" color="primary" variant="soft">API reference</UButton>
  </UContainer>
</template>
