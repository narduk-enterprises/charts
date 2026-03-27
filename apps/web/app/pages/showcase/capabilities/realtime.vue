<script setup lang="ts">
import { NardukCandleChart, NardukLineChart, useCandleStream, useStreamingSeries } from '@narduk-enterprises/narduk-charts'
import { demoCandles } from '~/lib/demo/candles'
import { demoSessionLabels } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Realtime buffers — Narduk Charts'
const pageDescription =
  'useStreamingSeries and useCandleStream maintain rolling windows with optional update throttling for live desks.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('capabilities/realtime'))

const initial = demoCandles(80, { fixedAnchor: Date.UTC(2026, 1, 12, 16, 0, 0) })
const { bars, pushBar } = useCandleStream(160, initial, { maxUpdatesPerSecond: 8 })

const { values, push } = useStreamingSeries(48, Array.from({ length: 48 }, (_, i) => 100 + Math.sin(i / 4) * 3), {
  maxUpdatesPerSecond: 12,
})

const lineLabels = computed(() => demoSessionLabels(values.value.length))
const lineSeries = computed(() => [{ name: 'Live mid', data: values.value.map(v => Number(v.toFixed(2))) }])

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    const last = bars.value.at(-1)
    if (!last) return
    const drift = (Math.random() - 0.45) * 6
    const c = Math.max(0.01, last.c + drift)
    const t = last.t + 60_000
    pushBar({
      t,
      o: last.c,
      h: Math.max(last.c, c) + Math.random() * 4,
      l: Math.min(last.c, c) - Math.random() * 4,
      c,
      v: Math.round(2000 + Math.random() * 6000),
    })
    push(c + Math.sin(t / 1e6) * 2)
  }, 1400)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Realtime buffers', to: '/showcase/capabilities/realtime' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Rolling buffers
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      <code class="text-primary">useCandleStream</code> replaces the forming bucket when <code class="text-primary">t</code> matches;
      <code class="text-primary">useStreamingSeries</code> drops oldest samples as new values arrive. Both respect optional
      <code class="text-primary">maxUpdatesPerSecond</code> guards for websocket-heavy desks.
    </p>

    <div class="mt-8 space-y-8">
      <LiveDemoPane title="Streaming candles" description="Synthetic 1m append timer for this demo.">
        <NardukCandleChart
          class="w-full min-w-0"
          :bars="bars"
          :height="300"
          :dark="chartDark"
          :zoomable="true"
          :show-last-price="true"
        />
      </LiveDemoPane>

      <LiveDemoPane title="Streaming line" description="Pushes tweak the trailing window of the mid-price strip.">
        <NardukLineChart
          class="w-full min-w-0"
          :series="lineSeries"
          :labels="lineLabels"
          :height="260"
          :dark="chartDark"
          :smooth="true"
        />
      </LiveDemoPane>
    </div>

    <div class="mt-10 flex flex-wrap gap-2">
      <UButton to="/docs/realtime" color="primary" variant="soft">Realtime docs</UButton>
      <UButton to="/docs/api/composables-streaming" color="neutral" variant="outline">Composable API</UButton>
    </div>
  </UContainer>
</template>
