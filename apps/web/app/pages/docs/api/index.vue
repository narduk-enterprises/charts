<script setup lang="ts">
import { apiDocIndex } from '~/data/api-docs'

definePageMeta({ layout: 'docs' })

const pageTitle = 'API reference — Narduk Charts'
const pageDescription =
  'Public exports from @narduk-enterprises/narduk-charts: Vue components, streaming composables, export helpers, studies, and performance utilities.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { captureApiView } = useSiteAnalytics()
onMounted(() => captureApiView('index'))

const groups = computed(() => {
  const g = new Map<string, (typeof apiDocIndex)[number][]>()
  for (const row of apiDocIndex) {
    const list = g.get(row.group) ?? []
    list.push(row)
    g.set(row.group, list)
  }
  return [...g.entries()]
})
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">
      API reference
    </h1>
    <p class="lead text-muted">
      Generated from the locked public surface of
      <ULink
        to="https://github.com/narduk-enterprises/narduk-charts"
        target="_blank"
        class="text-primary"
      >@narduk-enterprises/narduk-charts</ULink>
      (<code>src/index.ts</code>). Each entry includes props, events, models, and a copy-ready example.
    </p>

    <div v-for="[name, rows] in groups" :key="name" class="not-prose mb-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">
        {{ name }}
      </h2>
      <ul class="grid gap-2 sm:grid-cols-2">
        <li v-for="row in rows" :key="row.slug">
          <NuxtLink
            class="flex rounded-lg border border-default/70 bg-muted/20 px-3 py-2 text-sm font-medium text-highlighted transition-colors hover:border-primary/40 hover:bg-primary/5"
            :to="`/docs/api/${row.slug}`"
          >
            {{ row.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </article>
</template>
