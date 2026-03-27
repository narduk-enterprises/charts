<script setup lang="ts">
import { NardukLineChart } from '@narduk-enterprises/narduk-charts'
import { demoBenchmarkSeries, demoSessionLabels } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Theming — Narduk Charts'
const pageDescription =
  'Built-in ChartTheme tokens plus dark/light switching for trading terminals and print-safe exports.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('capabilities/theming'))

const labels = demoSessionLabels(32)
const series = demoBenchmarkSeries(labels)

const code = `<NardukLineChart
  theme="high-contrast"
  :dark="true"
  ...
/>`
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Theming', to: '/showcase/capabilities/theming' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      Themes &amp; contrast modes
    </h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Pass <code class="text-primary">theme</code> for <code class="text-primary">default | high-contrast | print | colorblind-safe</code> and combine with the site color mode or an explicit
      <code class="text-primary">dark</code> boolean for embedded widgets.
    </p>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">
      <LiveDemoPane title="Default" description="Baseline palette tuned for dense dashboards.">
        <NardukLineChart
          class="w-full min-w-0"
          :series="series"
          :labels="labels"
          :height="260"
          theme="default"
          :dark="false"
        />
      </LiveDemoPane>
      <LiveDemoPane title="High contrast" description="Stronger strokes for compliance desks and war rooms.">
        <NardukLineChart
          class="w-full min-w-0"
          :series="series"
          :labels="labels"
          :height="260"
          theme="high-contrast"
          :dark="true"
        />
      </LiveDemoPane>
    </div>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-theming" />
    </div>
    <UButton class="mt-6" to="/docs/theming" color="primary" variant="soft">Theming docs</UButton>
  </UContainer>
</template>
