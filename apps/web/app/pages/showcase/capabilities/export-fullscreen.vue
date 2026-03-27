<script setup lang="ts">
import {
  NardukLineChart,
  useChartFullscreen,
  exportChartPng,
  getChartSvgElement,
} from '@narduk-enterprises/narduk-charts'
import nardukChartsCss from '@narduk-enterprises/narduk-charts/style.css?raw'
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
const chartExportRoot = ref<HTMLElement | null>(null)
const fullscreenHint = ref('')
const exportBusy = ref(false)
const exportError = ref('')

const labels = demoSessionLabels(28)
const series = demoBenchmarkSeries(labels)

async function onToggleFullscreen() {
  fullscreenHint.value = ''
  const wasFs = isFullscreen.value
  await toggle()
  await nextTick()
  const fsActive =
    import.meta.client && typeof document !== 'undefined' ? Boolean(document.fullscreenElement) : false
  if (import.meta.client && !wasFs && !fsActive) {
    fullscreenHint.value =
      'Fullscreen was blocked (common inside embedded previews). Open this page in a top-level browser tab and try again.'
  }
}

async function onExportPng() {
  exportError.value = ''
  const root = chartExportRoot.value
  if (!root) return
  exportBusy.value = true
  try {
    const svg = getChartSvgElement(root)
    if (!svg) {
      exportError.value = 'Chart SVG not found.'
      return
    }
    await exportChartPng(svg, {
      scale: 2,
      embeddedCss: nardukChartsCss,
      filename: 'narduk-showcase-export.png',
    })
  } catch (e) {
    exportError.value = e instanceof Error ? e.message : 'Export failed.'
  } finally {
    exportBusy.value = false
  }
}

const code = `import { useChartFullscreen, exportChartPng, getChartSvgElement } from '@narduk-enterprises/narduk-charts'
import nardukChartsCss from '@narduk-enterprises/narduk-charts/style.css?raw'

const { targetRef, toggle } = useChartFullscreen()

async function savePng() {
  const svg = getChartSvgElement(chartPanel.value)
  if (!svg) return
  await exportChartPng(svg, { scale: 2, embeddedCss: nardukChartsCss })
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
      <UButton color="primary" variant="soft" @click="onToggleFullscreen">
        {{ isFullscreen ? 'Exit fullscreen' : 'Fullscreen chart' }}
      </UButton>
      <UButton
        color="neutral"
        variant="outline"
        :loading="exportBusy"
        @click="onExportPng"
      >
        Download PNG (2×)
      </UButton>
    </div>
    <p v-if="fullscreenHint" class="mt-3 max-w-2xl text-sm text-muted">
      {{ fullscreenHint }}
    </p>
    <p v-if="exportError" class="mt-2 max-w-2xl text-sm font-medium text-highlighted">
      {{ exportError }}
    </p>

    <div
      ref="targetRef"
      class="mt-6 min-h-[320px] rounded-xl border border-default/60 bg-default/30 p-3"
    >
      <LiveDemoPane
        title="Desk tile"
        description="Fullscreen expands this bordered panel. PNG export rasterizes the SVG below with chart CSS inlined."
      >
        <div ref="chartExportRoot">
          <NardukLineChart
            chart-title="PnL attribution"
            class="w-full min-w-0"
            :series="series"
            :labels="labels"
            :height="280"
            :dark="chartDark"
          />
        </div>
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
