<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const config = useRuntimeConfig()
const appName = config.public.appName || 'Narduk Charts'
const pageTitle = `AAPL flagship demo — ${appName}`
const pageDescription =
  'Live-style AAPL candles with Stonx stream, linked RSI pane, drawing tools, and NardukChartStack domain sync.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('docs/examples/aapl'))
</script>

<template>
  <div>
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Docs', to: '/docs' },
        { label: 'Examples', to: '/docs/examples' },
        { label: 'AAPL demo', to: '/docs/examples/aapl' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      AAPL — Apple Inc.
    </h1>
    <p class="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
      Flagship demo · Real-time
    </p>
    <div class="prose prose-sm mt-4 max-w-3xl text-muted dark:prose-invert">
      <p>
        Live candles for <strong>AAPL</strong> (<strong>Apple Inc.</strong>) powered by
        <ULink
          to="https://stonx.app"
          target="_blank"
          class="font-medium text-primary"
          >Stonx</ULink
        >
        market-data stream at
        <code class="rounded-md bg-muted px-1.5 py-0.5 text-xs text-highlighted"
          >wss://stonx.app/ws/stream</code
        >. Demonstrates <strong>linked panes</strong>, volume, brush navigation,
        <strong>RSI(14)</strong> study row, drawing tools, and crosshair — all inside
        <code class="rounded-md bg-muted px-1.5 py-0.5 text-xs text-highlighted"
          >NardukChartStack</code
        >.
      </p>
    </div>

    <ClientOnly>
      <ExamplesAaplDemo class="mt-8" />
      <template #fallback>
        <div
          class="mt-8 flex min-h-[420px] items-center justify-center rounded-xl border border-dashed border-default/60 text-sm text-muted"
        >
          Loading chart demo…
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
