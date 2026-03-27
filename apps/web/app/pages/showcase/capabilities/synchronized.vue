<script setup lang="ts">
import {
  NardukCandleChart,
  NardukChartStack,
  NardukLineChart,
  candleIndexAtTime,
  candleTimeAtIndex,
} from '@narduk-enterprises/narduk-charts'
import { rsi } from '@narduk-enterprises/narduk-charts/studies'
import type { CandleTimeDomain, ChartSeries } from '@narduk-enterprises/narduk-charts'
import { demoCandles } from '~/lib/demo/candles'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Synchronized panes — Narduk Charts'
const pageDescription =
  'Share a candle time domain across stacked charts and map the same window onto an RSI line via fractional indices.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('capabilities/synchronized'))

const bars = ref(demoCandles(200, { fixedAnchor: Date.UTC(2026, 1, 8, 15, 0, 0) }))
const sharedDomain = ref<CandleTimeDomain | null>(null)

const rsiLabels = computed(() => bars.value.map(b => new Date(b.t).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })))

const rsiSeries = computed<ChartSeries[]>(() => [
  {
    name: 'RSI(14)',
    data: rsi(
      bars.value.map(b => b.c),
      14,
    ),
  },
])

const lineXWindow = computed({
  get() {
    if (!sharedDomain.value || bars.value.length < 2) return
    return {
      start: candleIndexAtTime(bars.value, sharedDomain.value.start),
      end: candleIndexAtTime(bars.value, sharedDomain.value.end),
    }
  },
  set(w: { start: number; end: number } | undefined) {
    if (!w || bars.value.length < 2) return
    sharedDomain.value = {
      start: candleTimeAtIndex(bars.value, w.start),
      end: candleTimeAtIndex(bars.value, w.end),
    }
  },
})
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Synchronized panes', to: '/showcase/capabilities/synchronized' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Synchronized candle + study row
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      <code class="text-primary">NardukChartStack</code> holds one
      <code class="text-primary">v-model:domain</code>. The candle chart drives time in milliseconds; the RSI row binds
      <code class="text-primary">v-model:x-window</code> through <code class="text-primary">candleIndexAtTime</code> /
      <code class="text-primary">candleTimeAtIndex</code> so both panes stay aligned.
    </p>

    <LiveDemoPane
      class="mt-8"
      title="Linked ES + RSI(14)"
      description="Zoom or brush the top chart — the study row tracks the same window."
    >
      <NardukChartStack v-model:domain="sharedDomain">
        <div class="flex flex-col gap-4">
          <NardukCandleChart
            chart-title="ES — synchronized demo"
            class="w-full min-w-0"
            :bars="bars"
            :height="320"
            :dark="chartDark"
            v-model:domain="sharedDomain"
            :zoomable="true"
            :show-brush="true"
            :show-volume="true"
          />
          <NardukLineChart
            chart-title="RSI(14)"
            class="w-full min-w-0"
            :series="rsiSeries"
            :labels="rsiLabels"
            :height="160"
            :dark="chartDark"
            :zoomable="false"
            v-model:x-window="lineXWindow"
          />
        </div>
      </NardukChartStack>
    </LiveDemoPane>

    <div class="mt-10 flex flex-wrap gap-2">
      <UButton to="/docs/realtime" color="neutral" variant="outline">Realtime patterns</UButton>
      <UButton to="/docs/api/narduk-chart-stack" color="primary" variant="soft">Chart stack API</UButton>
    </div>
  </UContainer>
</template>
