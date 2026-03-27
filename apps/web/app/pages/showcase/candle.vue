<script setup lang="ts">
import { NardukCandleChart } from '@narduk-enterprises/narduk-charts'
import type { CandleBarStyle, CandlePriceDisplayMode } from '@narduk-enterprises/narduk-charts'
import { demoCandles } from '~/lib/demo/candles'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Candlestick & OHLC showcase — Narduk Charts'
const pageDescription =
  'OHLCV chart with volume, brush, zoom, crosshair, candle/hollow/bar styles, and indexed price modes for trading UIs.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('candle'))

const bars = ref(demoCandles(220, { fixedAnchor: Date.UTC(2026, 1, 3, 14, 30, 0) }))
const candleStyle = ref<CandleBarStyle>('candle')
const priceMode = ref<CandlePriceDisplayMode>('absolute')
const showVolume = ref(true)
const showBrush = ref(true)
const zoomable = ref(true)

const code = computed(
  () => `<NardukCandleChart
  :bars="bars"
  :height="380"
  :dark="isDark"
  :candle-style="'${candleStyle.value}'"
  :price-display-mode="'${priceMode.value}'"
  :show-volume="${showVolume.value}"
  :show-brush="${showBrush.value}"
  :zoomable="${zoomable.value}"
/>`,
)
</script>

<template>
  <div>
    <UContainer class="py-10 sm:py-12">
      <UBreadcrumb
        class="mb-6"
        :items="[
          { label: 'Showcase', to: '/showcase' },
          { label: 'Candlestick & OHLC', to: '/showcase/candle' },
        ]"
      />
      <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
        Candlestick &amp; OHLC
      </h1>
      <p class="mt-3 max-w-3xl text-base leading-relaxed text-muted">
        Time-indexed OHLCV with draggable zoom, optional volume and brush navigator, magnetic
        crosshair, and TradingView-style hollow candles or classic OHLC ticks. Controlled
        <code class="text-primary">v-model:domain</code> enables multi-pane sync.
      </p>

      <div class="mt-8 flex flex-col gap-4">
        <div class="flex flex-wrap gap-2">
          <span
            class="w-full text-xs font-semibold uppercase tracking-wide text-muted sm:w-auto sm:py-2"
            >Bar style</span
          >
          <UButton
            v-for="opt in [
              { id: 'candle' as const, label: 'Candle' },
              { id: 'hollow' as const, label: 'Hollow' },
              { id: 'bar' as const, label: 'OHLC ticks' },
            ]"
            :key="opt.id"
            size="sm"
            :color="candleStyle === opt.id ? 'primary' : 'neutral'"
            :variant="candleStyle === opt.id ? 'solid' : 'outline'"
            @click="candleStyle = opt.id"
          >
            {{ opt.label }}
          </UButton>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            class="w-full text-xs font-semibold uppercase tracking-wide text-muted sm:w-auto sm:py-2"
            >Price scale</span
          >
          <UButton
            v-for="opt in [
              { id: 'absolute' as const, label: 'Absolute' },
              { id: 'percent' as const, label: 'Percent' },
              { id: 'indexed' as const, label: 'Indexed' },
            ]"
            :key="opt.id"
            size="sm"
            :color="priceMode === opt.id ? 'primary' : 'neutral'"
            :variant="priceMode === opt.id ? 'solid' : 'outline'"
            @click="priceMode = opt.id"
          >
            {{ opt.label }}
          </UButton>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <UCheckbox v-model="showVolume" label="Volume" />
          <UCheckbox v-model="showBrush" label="Brush" />
          <UCheckbox v-model="zoomable" label="Zoom" />
        </div>
      </div>

      <LiveDemoPane
        class="mt-6"
        title="Live demo"
        description="Ctrl/Cmd + wheel zoom, Shift + drag pan, drag to box zoom, double-click reset."
      >
        <NardukCandleChart
          chart-title="ES futures — demo session"
          chart-description="Synthetic OHLCV for UI evaluation."
          class="w-full min-w-0"
          :bars="bars"
          :height="400"
          :dark="chartDark"
          :candle-style="candleStyle"
          :price-display-mode="priceMode"
          :show-volume="showVolume"
          :show-brush="showBrush"
          :zoomable="zoomable"
          :show-session-grid="true"
          :max-draw-bars="512"
        />
      </LiveDemoPane>

      <div class="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 class="text-lg font-semibold text-highlighted">When to use</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Execution and research terminals that need precise time alignment.</li>
            <li>Surfaces that combine price, volume, and derived studies in linked rows.</li>
            <li>Workflows that require exportable overlays and serialized drawings.</li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-highlighted">Key interactions</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Zoom + pan with keyboard hints surfaced to screen readers.</li>
            <li>Optional drawing tools (trend, horizontal, Fib, range) with v-model arrays.</li>
            <li>Expose plot metrics for custom SVG overlays (VWAP bands, session boxes).</li>
          </ul>
        </div>
      </div>

      <div class="mt-10">
        <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
        <CodeBlock :code="code" context="showcase-candle" />
      </div>

      <div class="mt-8 flex flex-wrap gap-2">
        <UButton to="/docs/api/narduk-candle-chart" color="primary" variant="soft">
          API reference
        </UButton>
        <UButton to="/showcase/capabilities/synchronized" color="neutral" variant="outline">
          Synchronized panes
        </UButton>
        <UButton to="/docs/trading-ui" color="neutral" variant="outline">
          Trading UI notes
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
