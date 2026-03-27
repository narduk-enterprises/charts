<script setup lang="ts">
import { NardukLineChart, useChartFullscreen } from '@narduk-enterprises/narduk-charts'
import { demoBenchmarkSeries, demoSessionLabels } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Export & fullscreen — Narduk Charts'
const pageDescription =
  'useChartFullscreen targets a container; exportChartPng serializes SVG with optional inlined CSS for audit artifacts.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('capabilities/export-fullscreen'))

const { targetRef, isFullscreen, toggle } = useChartFullscreen()

const labels = demoSessionLabels(28)
const series = demoBenchmarkSeries(labels)

const code = `import { useChartFullscreen, exportChartPng, getChartSvgElement } from '@narduk-enterprises/narduk-charts'

const { targetRef, toggle } = useChartFullscreen()

async function savePng() {
  const svg = getChartSvgElement(targetRef.value)
  if (!svg) return
  await exportChartPng(svg, { scale: 2, embeddedCss: cssFromNardukCharts })
}`
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Export & fullscreen', to: '/showcase/capabilities/export-fullscreen' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Fullscreen &amp; raster export
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Wrap desks with <code class="text-primary">useChartFullscreen</code> for operator workflows.
      For compliance PDFs, call <code class="text-primary">exportChartPng</code> with
      <code class="text-primary">embeddedCss</code> set to the contents of
      <code class="text-primary">@narduk-enterprises/narduk-charts/style.css</code> so themed
      strokes survive rasterization.
    </p>

    <div class="mt-6 flex flex-wrap gap-2">
      <UButton color="primary" variant="soft" @click="toggle">
        {{ isFullscreen ? 'Exit fullscreen' : 'Fullscreen chart' }}
      </UButton>
    </div>

    <div ref="targetRef" class="mt-6 rounded-xl border border-default/60 bg-default/30 p-3">
      <LiveDemoPane
        title="Desk tile"
        description="Toggle fullscreen on the surrounding panel (library helper)."
      >
        <NardukLineChart
          chart-title="PnL attribution"
          class="w-full min-w-0"
          :series="series"
          :labels="labels"
          :height="280"
          :dark="chartDark"
        />
      </LiveDemoPane>
    </div>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-export" />
    </div>
    <UButton class="mt-6" to="/docs/api/utilities-export" color="primary" variant="soft"
      >Export API</UButton
    >
  </UContainer>
</template>
