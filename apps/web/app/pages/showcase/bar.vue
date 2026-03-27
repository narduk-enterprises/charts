<script setup lang="ts">
import { NardukBarChart } from '@narduk-enterprises/narduk-charts'
import { demoMonthlyBar } from '~/lib/demo/series'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Bar chart showcase — Narduk Charts'
const pageDescription =
  'Grouped and stacked bars with percent mode, reference lines, and bands for desk reporting.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { chartDark } = useChartAppearance()
const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('bar'))

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const series = ref(demoMonthlyBar(labels))
const stacked = ref(false)
const stackedPercent = ref(false)

watch(stackedPercent, (on) => {
  if (on) stacked.value = true
})
watch(stacked, (on) => {
  if (!on) stackedPercent.value = false
})

const code = computed(
  () => `<NardukBarChart
  :series="series"
  :labels="labels"
  :stacked="${stacked.value}"
  :stacked-percent="${stackedPercent.value}"
/>`,
)
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Showcase', to: '/showcase' },
        { label: 'Bar', to: '/showcase/bar' },
      ]"
    />
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Bar charts</h1>
    <p class="mt-3 max-w-3xl text-base text-muted">
      Vertical bars for desk P&amp;L components, fee breakdowns, or basket weights. Toggle stacked
      and 100% mode to emphasize composition vs absolute contribution.
    </p>

    <div class="mt-6 flex flex-wrap gap-4">
      <UCheckbox v-model="stacked" label="Stacked" />
      <UCheckbox v-model="stackedPercent" label="100% stack" />
    </div>
    <p class="mt-2 max-w-2xl text-xs text-muted">
      Turning on 100% stack enables stacked layout automatically (and the bar component treats
      percent mode as stacked). Unchecking Stacked clears percent mode.
    </p>

    <LiveDemoPane
      class="mt-6"
      title="Revenue vs hedge drag"
      description="Two series per month; enable stack modes to compare mix."
    >
      <NardukBarChart
        chart-title="Monthly desk economics"
        class="w-full min-w-0"
        :series="series"
        :labels="labels"
        :height="320"
        :dark="chartDark"
        :stacked="stacked"
        :stacked-percent="stackedPercent"
        :reference-lines="[{ value: 50, label: 'Run-rate', dashed: true }]"
      />
    </LiveDemoPane>

    <div class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="code" context="showcase-bar" />
    </div>
    <UButton class="mt-6" to="/docs/api/narduk-bar-chart" color="primary" variant="soft"
      >API reference</UButton
    >
  </UContainer>
</template>
