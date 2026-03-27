/** Hand-curated API reference aligned with `@narduk-enterprises/narduk-charts` `src/index.ts` exports. */

export type ApiPropRow = { name: string; type: string; default?: string; description: string }
export type ApiEventRow = { name: string; payload: string; description: string }
export type ApiModelRow = { name: string; type: string; description: string }

export type ApiDocPage = {
  title: string
  summary: string
  importExamples: string[]
  props?: ApiPropRow[]
  events?: ApiEventRow[]
  models?: ApiModelRow[]
  slots?: { name: string; description: string }[]
  notes?: string[]
  example: string
  relatedRoutes: { label: string; to: string }[]
}

export const apiDocPages: Record<string, ApiDocPage> = {
  'narduk-candle-chart': {
    title: 'NardukCandleChart',
    summary:
      'OHLCV time-series chart with optional volume pane, brush navigator, crosshair, zoom/pan, and serializable drawing tools.',
    importExamples: [
      "import { NardukCandleChart } from '@narduk-enterprises/narduk-charts'",
      "import '@narduk-enterprises/narduk-charts/style.css'",
    ],
    props: [
      {
        name: 'bars',
        type: 'CandleBar[]',
        description: 'Sorted ascending by open time `t` (Unix ms).',
      },
      {
        name: 'zoomable',
        type: 'boolean',
        default: 'false',
        description: 'Drag zoom, Ctrl/Cmd+wheel, Shift+drag pan, dbl-click reset.',
      },
      {
        name: 'domain',
        type: 'CandleTimeDomain | null',
        description: 'Controlled viewport; use with v-model:domain to sync charts.',
      },
      {
        name: 'showVolume',
        type: 'boolean',
        default: 'false',
        description: 'Renders volume histogram under price pane.',
      },
      {
        name: 'showBrush',
        type: 'boolean',
        default: 'false',
        description: 'Time navigator under the plot.',
      },
      {
        name: 'showCrosshair',
        type: 'boolean',
        default: 'true',
        description: 'Pointer crosshair with magnetic X to bar center.',
      },
      {
        name: 'candleStyle',
        type: "'candle' | 'hollow' | 'bar'",
        default: "'candle'",
        description: 'Bodies, hollow candles, or OHLC ticks.',
      },
      {
        name: 'priceDisplayMode',
        type: "'absolute' | 'percent' | 'indexed'",
        default: "'absolute'",
        description: 'Rebase visible closes for comparison views.',
      },
      {
        name: 'yScale',
        type: "'linear' | 'log' | 'symlog'",
        default: "'linear'",
        description: 'Price scale mapping.',
      },
      {
        name: 'maxDrawBars',
        type: 'number',
        default: '512',
        description: 'Cap aggregated buckets in the visible window.',
      },
      {
        name: 'drawings',
        type: 'CandleDrawing[]',
        default: '[]',
        description: 'Persisted overlays in raw price/time space.',
      },
      {
        name: 'drawingTool',
        type: 'CandleDrawingTool | null',
        default: 'null',
        description: 'When set, drag creates drawings instead of zoom box.',
      },
      {
        name: 'theme',
        type: 'ChartTheme',
        description: 'Built-in theme tokens (high-contrast, print, colorblind-safe).',
      },
      {
        name: 'dark',
        type: 'boolean',
        description: 'Force dark palette; otherwise follows container.',
      },
    ],
    events: [
      {
        name: 'update:domain',
        payload: 'CandleTimeDomain',
        description: 'Emitted when the visible time window changes.',
      },
      {
        name: 'zoom',
        payload: 'CandleZoomRange',
        description: 'Fractional indices + time window after zoom operations.',
      },
      {
        name: 'barClick',
        payload: 'CandleClickPayload',
        description: 'Keyboard/pointer selection of a bar.',
      },
      {
        name: 'update:drawings',
        payload: 'CandleDrawing[]',
        description: 'Emitted when drawings are edited in tool mode.',
      },
    ],
    models: [
      {
        name: 'domain',
        type: 'CandleTimeDomain | null',
        description: 'v-model for synchronized time windows across panes.',
      },
    ],
    notes: [
      'Expose `CandlePlotMetrics` via component ref for custom SVG overlays aligned to price/time space.',
      'Pair with `NardukLineChart` `v-model:x-window` mapped through `candleIndexAtTime` / `candleTimeAtIndex` for indicator rows.',
    ],
    example: `<script setup lang="ts">
import { NardukCandleChart } from '@narduk-enterprises/narduk-charts'
import type { CandleBar } from '@narduk-enterprises/narduk-charts'

const bars = ref<CandleBar[]>([])
</script>

<template>
  <NardukCandleChart
    :bars="bars"
    :height="360"
    zoomable
    show-volume
    show-brush
    show-crosshair
  />
</template>`,
    relatedRoutes: [
      { label: 'Candle showcase', to: '/showcase/candle' },
      { label: 'Synchronized panes', to: '/showcase/capabilities/synchronized' },
      { label: 'Trading UI notes', to: '/docs/trading-ui' },
    ],
  },
  'narduk-line-chart': {
    title: 'NardukLineChart',
    summary:
      'Multi-series line chart with optional area fill, dual Y axes, category zoom, annotations, and legend toggles.',
    importExamples: ["import { NardukLineChart } from '@narduk-enterprises/narduk-charts'"],
    props: [
      {
        name: 'series',
        type: 'ChartSeries[]',
        description: 'Per-series numeric arrays aligned to `labels`.',
      },
      { name: 'labels', type: 'string[]', description: 'Category axis labels.' },
      {
        name: 'dualYAxis',
        type: 'boolean',
        default: 'false',
        description: "Right axis when series use `yAxis: 'secondary'`.",
      },
      {
        name: 'zoomable',
        type: 'boolean',
        default: 'false',
        description: 'Drag zoom, wheel, shift-pan, dbl-click reset.',
      },
      {
        name: 'zoomAutoY',
        type: 'boolean',
        default: 'true',
        description: 'Rescale Y to visible X window when zooming.',
      },
      {
        name: 'showArea',
        type: 'boolean',
        default: 'false',
        description: 'Fill to baseline under lines.',
      },
      {
        name: 'annotations',
        type: 'ChartLineAnnotation[]',
        description: 'vlines, labeled points, and text labels.',
      },
      { name: 'yBands', type: 'ChartYBand[]', description: 'Horizontal bands behind series.' },
      {
        name: 'referenceLines',
        type: 'ChartReferenceLine[]',
        description: 'Horizontal guides with optional labels.',
      },
      {
        name: 'maxRenderPoints',
        type: 'number',
        description: 'Category decimation cap for large static datasets.',
      },
      {
        name: 'yScale',
        type: 'ChartYScaleMode',
        default: "'linear'",
        description: 'Primary axis scale.',
      },
      {
        name: 'yScaleSecondary',
        type: 'ChartYScaleMode',
        default: "'linear'",
        description: 'Secondary axis when dualYAxis.',
      },
    ],
    events: [
      {
        name: 'pointClick',
        payload: 'LinePointClickPayload',
        description: 'Click on a category column.',
      },
      { name: 'zoom', payload: 'LineZoomRange', description: 'Fractional category index window.' },
    ],
    models: [
      {
        name: 'xWindow',
        type: '{ start: number; end: number } | undefined',
        description: 'Optional v-model for synced X with candle indices.',
      },
    ],
    slots: [
      { name: 'tooltip', description: 'Replace floating tooltip body.' },
      { name: 'legend-item', description: 'Custom legend row rendering.' },
      { name: 'empty', description: 'Placeholder when no plottable data.' },
    ],
    example: `<NardukLineChart
  :series="series"
  :labels="labels"
  :height="320"
  dual-y-axis
  zoomable
/>`,
    relatedRoutes: [
      { label: 'Line showcase', to: '/showcase/line' },
      { label: 'Interactions', to: '/showcase/capabilities/interactions' },
    ],
  },
  'narduk-bar-chart': {
    title: 'NardukBarChart',
    summary:
      'Grouped or stacked vertical bars with percent stacking, reference lines, bands, and vline annotations.',
    importExamples: ["import { NardukBarChart } from '@narduk-enterprises/narduk-charts'"],
    props: [
      { name: 'series', type: 'ChartSeries[]', description: 'Aligned to `labels`.' },
      { name: 'labels', type: 'string[]', description: 'Category labels.' },
      {
        name: 'stacked',
        type: 'boolean',
        default: 'false',
        description: 'Stack series per category.',
      },
      {
        name: 'stackedPercent',
        type: 'boolean',
        default: 'false',
        description: 'Normalize stacks to 100%.',
      },
      { name: 'barRadius', type: 'number', default: '4', description: 'Corner radius for bars.' },
      {
        name: 'yScale',
        type: 'ChartYScaleMode',
        default: "'linear'",
        description: 'Y mapping for counts/values.',
      },
      { name: 'referenceLines', type: 'ChartReferenceLine[]', description: 'Horizontal guides.' },
      { name: 'yBands', type: 'ChartYBand[]', description: 'Background bands.' },
      {
        name: 'annotations',
        type: 'ChartLineAnnotation[]',
        description: '`vline` entries align to category centers.',
      },
    ],
    events: [
      {
        name: 'barClick',
        payload: 'BarClickPayload',
        description: 'Pointer/keyboard activation of a bar segment.',
      },
    ],
    slots: [
      { name: 'tooltip', description: 'Custom tooltip.' },
      { name: 'legend-item', description: 'Custom legend rows.' },
      { name: 'empty', description: 'Empty state.' },
    ],
    example: `<NardukBarChart
  :series="series"
  :labels="labels"
  stacked
  :height="300"
/>`,
    relatedRoutes: [{ label: 'Bar showcase', to: '/showcase/bar' }],
  },
  'narduk-pie-chart': {
    title: 'NardukPieChart',
    summary: 'Part-to-whole chart with optional donut mode, slice legend, and tooltips.',
    importExamples: ["import { NardukPieChart } from '@narduk-enterprises/narduk-charts'"],
    props: [
      { name: 'data', type: 'PieDataItem[]', description: 'Label + value pairs.' },
      { name: 'donut', type: 'boolean', default: 'false', description: 'Cut center hole.' },
      {
        name: 'innerRadius',
        type: 'number',
        default: '0.6',
        description: 'Donut hole size as fraction of radius.',
      },
      { name: 'showLabels', type: 'boolean', default: 'true', description: 'Slice value labels.' },
    ],
    events: [
      { name: 'sliceClick', payload: 'PieSliceClickPayload', description: 'Click a slice.' },
    ],
    slots: [
      { name: 'tooltip', description: 'Custom tooltip.' },
      { name: 'legend-item', description: 'Custom legend rows.' },
      { name: 'empty', description: 'Empty state.' },
    ],
    example: `<NardukPieChart :data="sectors" donut :height="280" />`,
    relatedRoutes: [{ label: 'Pie showcase', to: '/showcase/pie' }],
  },
  'narduk-scatter-chart': {
    title: 'NardukScatterChart',
    summary:
      'Numeric scatter plot with linear scales, multi-series coloring, and point hit targets.',
    importExamples: ["import { NardukScatterChart } from '@narduk-enterprises/narduk-charts'"],
    props: [
      {
        name: 'series',
        type: 'ScatterSeries[]',
        description: 'Named clouds of `{ x, y, label? }` points.',
      },
      {
        name: 'pointRadius',
        type: 'number',
        default: '4',
        description: 'Hit target and glyph radius.',
      },
    ],
    events: [
      {
        name: 'pointClick',
        payload: '{ seriesName; pointIndex; x; y }',
        description: 'Activating a rendered point.',
      },
    ],
    example: `<NardukScatterChart :series="riskSeries" :height="300" />`,
    relatedRoutes: [{ label: 'Scatter showcase', to: '/showcase/scatter' }],
  },
  'narduk-histogram-chart': {
    title: 'NardukHistogramChart',
    summary: 'Distribution view from raw samples or explicit bin definitions.',
    importExamples: ["import { NardukHistogramChart } from '@narduk-enterprises/narduk-charts'"],
    props: [
      { name: 'values', type: 'number[]', description: 'Raw samples when `bins` is not provided.' },
      { name: 'binCount', type: 'number', default: '8', description: 'Automatic binning count.' },
      {
        name: 'bins',
        type: 'HistogramBin[]',
        description: 'Optional explicit `[start,end,count]` buckets.',
      },
      { name: 'barColor', type: 'string', description: 'Override fill for bars.' },
    ],
    example: `<NardukHistogramChart :values="dailyReturns" :bin-count="14" :height="280" />`,
    relatedRoutes: [{ label: 'Histogram showcase', to: '/showcase/histogram' }],
  },
  'narduk-chart-stack': {
    title: 'NardukChartStack',
    summary:
      'Thin layout wrapper that forwards `v-model:domain` to slot props so stacked candle/line panes share one time window.',
    importExamples: ["import { NardukChartStack } from '@narduk-enterprises/narduk-charts'"],
    models: [
      {
        name: 'domain',
        type: 'CandleTimeDomain | null',
        description: 'Shared candle time window for children.',
      },
    ],
    notes: [
      'Does not render charts itself: place `NardukCandleChart` / `NardukLineChart` rows inside the default slot.',
    ],
    example: `const domain = ref<CandleTimeDomain | null>(null)

<NardukChartStack v-model:domain="domain">
  <div class="flex flex-col gap-3">
    <NardukCandleChart v-model:domain="domain" :bars="bars" />
  </div>
</NardukChartStack>`,
    relatedRoutes: [
      { label: 'Chart stack showcase', to: '/showcase/chart-stack' },
      { label: 'Synchronized panes', to: '/showcase/capabilities/synchronized' },
    ],
  },
  'composables-streaming': {
    title: 'Streaming composables',
    summary:
      '`useStreamingSeries` and `useCandleStream` cap update rates and maintain rolling buffers for live dashboards.',
    importExamples: [
      "import { useStreamingSeries, useCandleStream } from '@narduk-enterprises/narduk-charts'",
    ],
    notes: [
      '`useStreamingSeries` — rolling `number[]` with optional `maxUpdatesPerSecond`.',
      '`useCandleStream` — rolling `CandleBar[]`; replaces the last bar when `t` matches (forming bucket).',
    ],
    example: `const { bars, pushBar, updateLast } = useCandleStream(512, initialBars, {
  maxUpdatesPerSecond: 20,
})`,
    relatedRoutes: [
      { label: 'Realtime capability', to: '/showcase/capabilities/realtime' },
      { label: 'Realtime docs', to: '/docs/realtime' },
    ],
  },
  'composables-fullscreen': {
    title: 'useChartFullscreen',
    summary: 'Fullscreen helper targeting a chart container element ref.',
    importExamples: ["import { useChartFullscreen } from '@narduk-enterprises/narduk-charts'"],
    example: `const { targetRef, isFullscreen, toggle } = useChartFullscreen()
</script>
<template>
  <div ref="targetRef">
    <NardukLineChart ... />
  </div>
</template>`,
    relatedRoutes: [
      { label: 'Export & fullscreen', to: '/showcase/capabilities/export-fullscreen' },
    ],
  },
  'utilities-export': {
    title: 'Export helpers',
    summary: 'Serialize SVG or rasterize to PNG for reports and compliance snapshots.',
    importExamples: [
      "import { exportChartPng, exportChartSvg, serializeChartSvg, getChartSvgElement } from '@narduk-enterprises/narduk-charts'",
    ],
    notes: [
      'Pass `embeddedCss` with the contents of `@narduk-enterprises/narduk-charts/style.css` when rasterizing so themed strokes match the screen.',
    ],
    example: `await exportChartPng(svgEl, { scale: 2, embeddedCss: cssText })`,
    relatedRoutes: [{ label: 'Export showcase', to: '/showcase/capabilities/export-fullscreen' }],
  },
  'utilities-math': {
    title: 'Math & candle utilities',
    summary:
      'Pure functions for decimation, histogram bins, candle aggregation, and time/index mapping.',
    importExamples: [
      "import {\n  decimateCategoryData,\n  computeHistogramBins,\n  aggregateCandles,\n  aggregateCandlesToResolution,\n  candleTimeAtIndex,\n  candleIndexAtTime,\n} from '@narduk-enterprises/narduk-charts'",
    ],
    notes: [
      '`aggregateCandlesToResolution` pairs with `CANDLE_RESOLUTION_MS` for timeframe buttons.',
      '`largestTriangleThreeBuckets` assists aggressive line decimation for static archives.',
    ],
    example: `const coarser = aggregateCandlesToResolution(bars, 5 * 60_000)`,
    relatedRoutes: [
      { label: 'Studies', to: '/showcase/capabilities/studies' },
      { label: 'Performance docs', to: '/docs/performance' },
    ],
  },
  studies: {
    title: 'Studies (indicators)',
    summary:
      'Pure TypeScript helpers (`sma`, `ema`, `vwap`, `bollinger`, `rsi`, `macd`) shipped from `@narduk-enterprises/narduk-charts/studies` for overlaying on line or candle data.',
    importExamples: ["import { rsi, macd, ema } from '@narduk-enterprises/narduk-charts/studies'"],
    example: `const rsi14 = rsi(closes, 14)`,
    relatedRoutes: [
      { label: 'Studies showcase', to: '/showcase/capabilities/studies' },
      { label: 'Data shapes', to: '/docs/data' },
    ],
  },
  'performance-budget': {
    title: 'Render budget helpers',
    summary:
      '`recommendMaxDrawBars` and `suggestCandleRenderStrategy` translate plot width + dataset size into safe draw caps.',
    importExamples: [
      "import { recommendMaxDrawBars, suggestCandleRenderStrategy } from '@narduk-enterprises/narduk-charts'",
    ],
    example: `const maxDraw = recommendMaxDrawBars({ plotWidthPx: chartWidth })`,
    relatedRoutes: [{ label: 'Performance (product)', to: '/product/performance' }],
  },
}

export const apiDocIndex = [
  { slug: 'narduk-candle-chart', label: 'NardukCandleChart', group: 'Components' },
  { slug: 'narduk-line-chart', label: 'NardukLineChart', group: 'Components' },
  { slug: 'narduk-bar-chart', label: 'NardukBarChart', group: 'Components' },
  { slug: 'narduk-pie-chart', label: 'NardukPieChart', group: 'Components' },
  { slug: 'narduk-scatter-chart', label: 'NardukScatterChart', group: 'Components' },
  { slug: 'narduk-histogram-chart', label: 'NardukHistogramChart', group: 'Components' },
  { slug: 'narduk-chart-stack', label: 'NardukChartStack', group: 'Components' },
  {
    slug: 'composables-streaming',
    label: 'useStreamingSeries / useCandleStream',
    group: 'Composables',
  },
  { slug: 'composables-fullscreen', label: 'useChartFullscreen', group: 'Composables' },
  { slug: 'utilities-export', label: 'Export helpers', group: 'Utilities' },
  { slug: 'utilities-math', label: 'Math & candles', group: 'Utilities' },
  { slug: 'studies', label: 'Studies', group: 'Utilities' },
  { slug: 'performance-budget', label: 'Render budget', group: 'Utilities' },
] as const
